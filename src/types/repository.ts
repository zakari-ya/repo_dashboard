export type CriticalityLevel = "faible" | "moyenne" | "élevée" | "critique";

export type FileType =
  | "code"
  | "configuration"
  | "documentation"
  | "test"
  | "secret";

export type RiskLevel = "faible" | "modéré" | "élevé" | "critique";

export type RepositoryFile = {
  id: string;
  name: string;
  path: string;
  language: string;
  type: FileType;
  size: number;
  criticality: CriticalityLevel;
};

export type Repository = {
  id: string;
  slug: string;
  name: string;
  description: string;
  files: RepositoryFile[];
};
