import { PageShell } from "@/components/layout/PageShell";
import { RepositoryGrid } from "@/components/repositories/RepositoryGrid";
import { RepositoryStats } from "@/components/repositories/RepositoryStats";
import { repositories } from "@/data/repositories";

export default function Home() {
  return (
    <PageShell>
      <div className="space-y-9">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold text-accent">
            Vue d’ensemble
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.5rem] sm:leading-tight">
            Repositories analysés localement
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
            Cette page présente les repositories simulés, les langages détectés
            et les fichiers sensibles à surveiller en priorité.
          </p>
        </section>

        <RepositoryStats repositories={repositories} />
        <RepositoryGrid repositories={repositories} />
      </div>
    </PageShell>
  );
}
