import { RepositoryCard } from "@/components/repositories/RepositoryCard";
import type { Repository } from "@/types/repository";

type RepositoryGridProps = {
  repositories: Repository[];
};

export function RepositoryGrid({ repositories }: RepositoryGridProps) {
  return (
    <section aria-labelledby="repository-list-title" className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2
            id="repository-list-title"
            className="text-xl font-semibold text-foreground"
          >
            Liste des repositories
          </h2>
          <p className="mt-1 text-sm leading-6 text-text-muted">
            Chaque carte résume les fichiers, les langages et le niveau de
            risque global.
          </p>
        </div>
        <p className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text-muted">
          {repositories.length} repositories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </section>
  );
}
