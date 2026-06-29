import Link from "next/link";
import {
  getCriticalFilesCount,
  getGlobalRisk,
  getRepositoryLanguages,
  type GlobalRiskLevel,
} from "@/lib/risk";
import type { Repository } from "@/types/repository";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

type RepositoryCardProps = {
  repository: Repository;
};

const riskBadgeVariants: Record<GlobalRiskLevel, BadgeVariant> = {
  faible: "faible",
  moyen: "moyenne",
  élevé: "élevée",
  critique: "critique",
};

const riskLabels: Record<GlobalRiskLevel, string> = {
  faible: "Risque faible",
  moyen: "Risque moyen",
  élevé: "Risque élevé",
  critique: "Risque critique",
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const languages = getRepositoryLanguages(repository.files);
  const criticalFilesCount = getCriticalFilesCount(repository.files);
  const globalRisk = getGlobalRisk(repository.files);

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-[border-color,background-color,box-shadow] hover:border-border-strong hover:bg-surface-elevated hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="min-w-0 break-words text-lg font-semibold text-foreground">
            {repository.name}
          </h3>
          <div className="shrink-0">
            <Badge variant={riskBadgeVariants[globalRisk]}>
              {riskLabels[globalRisk]}
            </Badge>
          </div>
        </div>
        <p className="text-sm leading-6 text-text-muted">
          {repository.description}
        </p>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-5 border-y border-border py-4 text-sm">
        <div>
          <dt className="text-text-muted">Fichiers</dt>
          <dd className="mt-1 font-semibold tabular-nums text-foreground">
            {repository.files.length}
          </dd>
        </div>
        <div>
          <dt className="text-text-muted">Critiques</dt>
          <dd className="mt-1 font-semibold tabular-nums text-foreground">
            {criticalFilesCount}
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="text-sm font-medium text-foreground">
          Langages détectés
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {languages.map((language) => (
            <Badge key={language}>{language}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={`/repositories/${repository.slug}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-accent bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover active:bg-accent-hover"
        >
          Consulter le détail
        </Link>
      </div>
    </article>
  );
}
