import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tableau de bord des repositories",
  description: "Analyse locale de repositories simulés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body>{children}</body>
    </html>
  );
}
