import type { CriticalityLevel, RepositoryFile } from "@/types/repository";

export type FileFilters = {
  search?: string;
  language?: string;
  criticality?: CriticalityLevel;
};

function normalizeSearchValue(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function removeLeadingDots(value: string): string {
  return value.replace(/^\.+/, "");
}

export function filterFiles(
  files: RepositoryFile[],
  filters: FileFilters,
): RepositoryFile[] {
  const search = normalizeSearchValue(filters.search ?? "");

  return files.filter((file) => {
    const searchableValues = [
      file.name,
      removeLeadingDots(file.name),
      file.language,
      file.criticality,
    ];
    const matchesSearch =
      !search ||
      searchableValues.some((value) =>
        normalizeSearchValue(value).startsWith(search),
      );
    const matchesLanguage =
      !filters.language || file.language === filters.language;
    const matchesCriticality =
      !filters.criticality || file.criticality === filters.criticality;

    return matchesSearch && matchesLanguage && matchesCriticality;
  });
}
