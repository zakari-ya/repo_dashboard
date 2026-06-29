import { formatFileSize } from "@/lib/format";
import type { RepositoryFile } from "@/types/repository";
import { Badge } from "@/components/ui/Badge";

type CriticalFileCardProps = {
  file: RepositoryFile;
};

export function CriticalFileCard({ file }: CriticalFileCardProps) {
  return (
    <article className="rounded-lg border border-danger-border bg-danger-soft p-4 shadow-[var(--shadow-card)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h4 className="break-words text-base font-semibold text-foreground">
            {file.name}
          </h4>
          <p className="mt-1 break-words font-mono text-xs leading-5 text-text-muted">
            {file.path}
          </p>
        </div>
        <div className="shrink-0">
          <Badge variant="critique">Critique</Badge>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-danger-border pt-4 text-sm">
        <div>
          <dt className="text-text-muted">Langage</dt>
          <dd className="mt-1 font-medium text-foreground">{file.language}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Type</dt>
          <dd className="mt-1 font-medium text-foreground">{file.type}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Taille</dt>
          <dd className="mt-1 font-medium tabular-nums text-foreground">
            {formatFileSize(file.size)}
          </dd>
        </div>
        <div>
          <dt className="text-text-muted">Criticité</dt>
          <dd className="mt-1 font-medium text-foreground">
            {file.criticality}
          </dd>
        </div>
      </dl>
    </article>
  );
}
