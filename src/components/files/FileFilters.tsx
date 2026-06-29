import type { CriticalityLevel } from "@/types/repository";

type FileFiltersProps = {
  search: string;
  language: string;
  criticality: "" | CriticalityLevel;
  languages: string[];
  onSearchChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onCriticalityChange: (value: "" | CriticalityLevel) => void;
  onReset: () => void;
};

const criticalityOptions: CriticalityLevel[] = [
  "faible",
  "moyenne",
  "élevée",
  "critique",
];

export function FileFilters({
  search,
  language,
  criticality,
  languages,
  onSearchChange,
  onLanguageChange,
  onCriticalityChange,
  onReset,
}: FileFiltersProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 sm:p-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px_220px_auto] lg:items-end">
        <label className="block">
          <span className="text-sm font-medium text-foreground">
            Rechercher un fichier
          </span>
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Nom, Langage ou Criticité"
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-white px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-accent focus:ring-2 focus:ring-accent-soft"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">
            Filtrer par langage
          </span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-white px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-accent focus:ring-2 focus:ring-accent-soft"
          >
            <option value="">Tous les langages</option>
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">
            Filtrer par criticité
          </span>
          <select
            value={criticality}
            onChange={(event) =>
              onCriticalityChange(event.target.value as "" | CriticalityLevel)
            }
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-white px-3 text-sm text-foreground outline-none transition-colors hover:border-border-strong focus:border-accent focus:ring-2 focus:ring-accent-soft"
          >
            <option value="">Toutes les criticités</option>
            {criticalityOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={onReset}
          className="min-h-11 rounded-md border border-border bg-surface-muted px-4 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:bg-accent-soft active:bg-accent-soft"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}
