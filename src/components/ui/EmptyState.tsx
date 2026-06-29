type EmptyStateProps = {
  title?: string;
  message?: string;
};

export function EmptyState({
  title = "Aucun résultat",
  message = "Aucun élément ne correspond aux critères sélectionnés.",
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-border-strong bg-surface-elevated px-4 py-8 text-center sm:px-6">
      <p className="text-base font-semibold text-foreground">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-muted">
        {message}
      </p>
    </div>
  );
}
