import { Badge } from "@/components/ui/Badge";
import { formatFileSize } from "@/lib/format";
import type { RepositoryFile } from "@/types/repository";

type FileTableProps = {
  files: RepositoryFile[];
};

const criticalityLabels: Record<RepositoryFile["criticality"], string> = {
  faible: "Faible",
  moyenne: "Moyenne",
  élevée: "Élevée",
  critique: "Critique",
};

export function FileTable({ files }: FileTableProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {files.map((file) => (
          <article
            key={file.id}
            className={`rounded-lg border p-4 ${
              file.criticality === "critique"
                ? "border-danger-border bg-danger-soft"
                : "border-border bg-surface"
            }`}
          >
            <div className="flex flex-col gap-3">
              <div className="min-w-0">
                <h4 className="break-words text-base font-semibold text-foreground">
                  {file.name}
                </h4>
                <p className="mt-1 break-words font-mono text-xs leading-5 text-text-muted">
                  {file.path}
                </p>
              </div>
              <Badge variant={file.criticality}>
                {criticalityLabels[file.criticality]}
              </Badge>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-text-muted">Langage</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {file.language}
                </dd>
              </div>
              <div>
                <dt className="text-text-muted">Type</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {file.type}
                </dd>
              </div>
              <div>
                <dt className="text-text-muted">Taille</dt>
                <dd className="mt-1 font-medium text-foreground">
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
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-border bg-surface md:block">
        <div className="overflow-x-auto">
          <table className="min-w-[820px] w-full border-collapse text-left text-sm">
            <thead className="border-b border-border bg-surface-muted text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Nom</th>
                <th className="px-4 py-3 font-semibold">Chemin</th>
                <th className="px-4 py-3 font-semibold">Langage</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Taille</th>
                <th className="px-4 py-3 font-semibold">Criticité</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {files.map((file) => (
                <tr
                  key={file.id}
                  className={
                    file.criticality === "critique"
                      ? "bg-danger-soft"
                      : "bg-surface"
                  }
                >
                  <td className="px-4 py-4 align-top font-medium text-foreground">
                    {file.name}
                  </td>
                  <td className="max-w-[320px] px-4 py-4 align-top font-mono text-xs leading-5 text-text-muted">
                    <span className="break-words">{file.path}</span>
                  </td>
                  <td className="px-4 py-4 align-top text-foreground">
                    {file.language}
                  </td>
                  <td className="px-4 py-4 align-top text-foreground">
                    {file.type}
                  </td>
                  <td className="px-4 py-4 align-top text-foreground tabular-nums">
                    {formatFileSize(file.size)}
                  </td>
                  <td className="px-4 py-4 align-top">
                    <Badge variant={file.criticality}>
                      {criticalityLabels[file.criticality]}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
