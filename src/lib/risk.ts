import type { RepositoryFile } from "@/types/repository";

export type GlobalRiskLevel = "faible" | "moyen" | "élevé" | "critique";

export function getRepositoryLanguages(files: RepositoryFile[]): string[] {
  return Array.from(new Set(files.map((file) => file.language))).sort((a, b) =>
    a.localeCompare(b, "fr"),
  );
}

export function getCriticalFiles(files: RepositoryFile[]): RepositoryFile[] {
  return files.filter((file) => file.criticality === "critique");
}

export function getCriticalFilesCount(files: RepositoryFile[]): number {
  return getCriticalFiles(files).length;
}

export function getGlobalRisk(files: RepositoryFile[]): GlobalRiskLevel {
  const criticalCount = files.filter(
    (file) => file.criticality === "critique",
  ).length;
  const highCount = files.filter((file) => file.criticality === "élevée").length;
  const mediumCount = files.filter(
    (file) => file.criticality === "moyenne",
  ).length;

  if (criticalCount >= 2) {
    return "critique";
  }

  if (criticalCount === 1 || highCount >= 2) {
    return "élevé";
  }

  if (mediumCount >= 1 || highCount >= 1) {
    return "moyen";
  }

  return "faible";
}
