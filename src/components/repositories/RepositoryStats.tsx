import {
  getCriticalFilesCount,
  getGlobalRisk,
  getRepositoryLanguages,
  type GlobalRiskLevel,
} from "@/lib/risk";
import type { Repository } from "@/types/repository";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";

type RepositoryStatsProps =
  | {
      repositories: Repository[];
      repository?: never;
    }
  | {
      repository: Repository;
      repositories?: never;
    };

const riskBadgeVariants: Record<GlobalRiskLevel, BadgeVariant> = {
  faible: "faible",
  moyen: "moyenne",
  élevé: "élevée",
  critique: "critique",
};

const riskLabels: Record<GlobalRiskLevel, string> = {
  faible: "Faible",
  moyen: "Moyen",
  élevé: "Élevé",
  critique: "Critique",
};

function RepositoryDetailStats({ repository }: { repository: Repository }) {
  const languages = getRepositoryLanguages(repository.files);
  const criticalFilesCount = getCriticalFilesCount(repository.files);
  const globalRisk = getGlobalRisk(repository.files);

  return (
    <section
      aria-label="Résumé du repository"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <StatCard
        title="Fichiers"
        value={repository.files.length}
        description="Fichiers associés"
      />
      <StatCard
        title="Langages détectés"
        value={languages.length}
        description={languages.join(", ")}
      />
      <StatCard
        title="Fichiers critiques"
        value={criticalFilesCount}
        description="Criticité maximale"
      />
      <StatCard
        title="Niveau de risque"
        value={
          <Badge variant={riskBadgeVariants[globalRisk]}>
            {riskLabels[globalRisk]}
          </Badge>
        }
        description="Calculé depuis les fichiers"
      />
    </section>
  );
}

function RepositoryListStats({ repositories }: { repositories: Repository[] }) {
  const filesCount = repositories.reduce(
    (total, repository) => total + repository.files.length,
    0,
  );
  const criticalFilesCount = repositories.reduce(
    (total, repository) => total + getCriticalFilesCount(repository.files),
    0,
  );
  const languagesCount = new Set(
    repositories.flatMap((repository) =>
      getRepositoryLanguages(repository.files),
    ),
  ).size;

  return (
    <section
      aria-label="Résumé des repositories"
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      <StatCard
        title="Repositories"
        value={repositories.length}
        description="Dépôts simulés disponibles"
      />
      <StatCard
        title="Fichiers"
        value={filesCount}
        description="Fichiers analysés localement"
      />
      <StatCard
        title="Fichiers critiques"
        value={criticalFilesCount}
        description={`${languagesCount} langages détectés`}
      />
    </section>
  );
}

export function RepositoryStats(props: RepositoryStatsProps) {
  if (props.repository) {
    return <RepositoryDetailStats repository={props.repository} />;
  }

  return <RepositoryListStats repositories={props.repositories} />;
}
