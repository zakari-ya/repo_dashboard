import type { ReactNode } from "react";

export type BadgeVariant =
  | "faible"
  | "moyenne"
  | "élevée"
  | "critique"
  | "neutre";

type BadgeProps = {
  variant?: BadgeVariant;
  children?: ReactNode;
};

const badgeStyles: Record<BadgeVariant, string> = {
  faible: "border-success-border bg-success-soft text-emerald-900",
  moyenne: "border-warning-border bg-warning-soft text-amber-950",
  élevée: "border-orange-300 bg-orange-50 text-orange-950",
  critique: "border-danger-border bg-danger-soft text-danger",
  neutre: "border-border bg-surface-muted text-foreground",
};

export function Badge({ variant = "neutre", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none ${badgeStyles[variant]}`}
    >
      {children ?? variant}
    </span>
  );
}
