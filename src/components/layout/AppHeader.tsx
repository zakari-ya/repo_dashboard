export function AppHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent">
              Exercice Next.js front-end uniquement
            </p>
            <h1 className="max-w-3xl text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
              Tableau de bord des repositories
            </h1>
          </div>
          <div className="inline-flex w-fit items-center rounded-full border border-border bg-surface-muted px-3 py-1.5 text-sm font-medium text-foreground">
            Données locales
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
          Analyse locale de repositories simulés, de leurs fichiers et de leur
          niveau de criticité.
        </p>
      </div>
    </header>
  );
}
