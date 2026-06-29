export function formatFileSize(sizeKb: number): string {
  if (sizeKb < 1024) {
    return `${Math.round(sizeKb)} Ko`;
  }

  const sizeMb = sizeKb / 1024;

  return `${sizeMb.toLocaleString("fr-FR", {
    maximumFractionDigits: 1,
  })} Mo`;
}
