import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraar Brasil",
  description: "Aluguel de máquinas pesadas para terraplanagem em Jundiaí-SP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
