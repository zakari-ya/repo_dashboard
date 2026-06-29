import Link from "next/link";
import { CriticalFileCard } from "@/components/files/CriticalFileCard";
import { FileList } from "@/components/files/FileList";
import { PageShell } from "@/components/layout/PageShell";
import { RepositoryStats } from "@/components/repositories/RepositoryStats";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { repositories } from "@/data/repositories";
import {
  getCriticalFiles,
  getGlobalRisk,
  type GlobalRiskLevel,
} from "@/lib/risk";

type RepositoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

export function generateStaticParams() {
  return repositories.map((repository) => ({
    slug: repository.slug,
  }));
}

export default async function RepositoryPage({ params }: RepositoryPageProps) {
  const { slug } = await params;
  const repository = repositories.find((item) => item.slug === slug);

  if (!repository) {
    return (
      <PageShell>
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex min-h-11 w-fit items-center rounded-md border border-border bg-surface px-3 text-sm font-semibold text-accent shadow-[var(--shadow-card)] transition-colors hover:border-border-strong hover:bg-surface-elevated hover:text-accent-hover"
          >
            Retour à l’accueil
          </Link>
          <section className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold text-foreground">
              Repository introuvable
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              Aucun repository simulé ne correspond à cette adresse.
            </p>
          </section>
        </div>
      </PageShell>
    );
  }

  const criticalFiles = getCriticalFiles(repository.files);
  const globalRisk = getGlobalRisk(repository.files);

  return (
    <PageShell>
      <div className="space-y-9">
        <Link
          href="/"
          className="inline-flex min-h-11 w-fit items-center rounded-md border border-border bg-surface px-3 text-sm font-semibold text-accent shadow-[var(--shadow-card)] transition-colors hover:border-border-strong hover:bg-surface-elevated hover:text-accent-hover"
        >
          Retour à l’accueil
        </Link>

        <section className="rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)] sm:p-6 lg:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-accent">
                Détail du repository
              </p>
              <h2 className="mt-3 break-words text-3xl font-semibold tracking-normal text-foreground sm:text-[2.5rem] sm:leading-tight">
                {repository.name}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
                {repository.description}
              </p>
            </div>
            <div className="shrink-0">
              <Badge variant={riskBadgeVariants[globalRisk]}>
                {riskLabels[globalRisk]}
              </Badge>
            </div>
          </div>
        </section>

        <RepositoryStats repository={repository} />

        <FileList files={repository.files} />

        <section className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Fichiers critiques
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-text-muted">
              Fichiers qui demandent une attention prioritaire dans ce
              repository simulé.
            </p>
          </div>

          {criticalFiles.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {criticalFiles.map((file) => (
                <CriticalFileCard key={file.id} file={file} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Aucun fichier critique"
              message="Aucun fichier critique n’est détecté dans ce repository simulé."
            />
          )}
        </section>
      </div>
    </PageShell>
  );
}
