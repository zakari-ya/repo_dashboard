import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: ReactNode;
  description?: string;
};

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="min-h-[132px] rounded-lg border border-border bg-surface p-4 sm:p-5">
      <p className="text-sm font-medium text-text-muted">{title}</p>
      <p className="mt-2 text-2xl font-semibold tracking-normal text-foreground tabular-nums">
        {value}
      </p>
      {description ? (
        <p className="mt-2 text-sm leading-5 text-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
