"use client";

import { useMemo, useState } from "react";
import { FileFilters } from "@/components/files/FileFilters";
import { FileTable } from "@/components/files/FileTable";
import { EmptyState } from "@/components/ui/EmptyState";
import { filterFiles } from "@/lib/filters";
import { getRepositoryLanguages } from "@/lib/risk";
import type { CriticalityLevel, RepositoryFile } from "@/types/repository";

type FileListProps = {
  files: RepositoryFile[];
};

export function FileList({ files }: FileListProps) {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [criticality, setCriticality] = useState<"" | CriticalityLevel>("");

  const languages = useMemo(() => getRepositoryLanguages(files), [files]);
  const filteredFiles = useMemo(
    () =>
      filterFiles(files, {
        search,
        language,
        criticality: criticality || undefined,
      }),
    [files, search, language, criticality],
  );

  function resetFilters() {
    setSearch("");
    setLanguage("");
    setCriticality("");
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Tous les fichiers
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-text-muted">
            Recherchez par nom, langage ou criticité, puis affinez avec les
            filtres dédiés.
          </p>
        </div>
        <p className="w-fit rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text-muted shadow-[var(--shadow-card)]">
          {filteredFiles.length} fichier{filteredFiles.length > 1 ? "s" : ""}{" "}
          affiché{filteredFiles.length > 1 ? "s" : ""}
        </p>
      </div>

      <FileFilters
        search={search}
        language={language}
        criticality={criticality}
        languages={languages}
        onSearchChange={setSearch}
        onLanguageChange={setLanguage}
        onCriticalityChange={setCriticality}
        onReset={resetFilters}
      />

      {filteredFiles.length > 0 ? (
        <FileTable files={filteredFiles} />
      ) : (
        <EmptyState
          title="Aucun fichier trouvé"
          message="Aucun fichier ne correspond à la recherche ou aux filtres sélectionnés."
        />
      )}
    </section>
  );
}
