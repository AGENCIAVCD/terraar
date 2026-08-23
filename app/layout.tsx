import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const headlineFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terraarbrasil.com.br"),
  title: {
    default: "Terraar Brasil | Plataformas elevatórias e máquinas pesadas",
    template: "%s | Terraar Brasil",
  },
  description:
    "Locação de plataformas elevatórias e máquinas pesadas para obras, indústria e manutenção em Jundiaí e região.",
  keywords: [
    "locação de plataformas elevatórias",
    "aluguel de máquinas pesadas",
    "plataforma elevatória Jundiaí",
    "terraplenagem Jundiaí",
    "máquinas para obras",
    "Terraar Brasil",
  ],
  authors: [{ name: "Terraar Brasil" }],
  creator: "Terraar Brasil",
  publisher: "Terraar Brasil",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Terraar Brasil",
    title: "Terraar Brasil | Plataformas elevatórias e máquinas pesadas",
    description:
      "Locação de plataformas elevatórias e máquinas pesadas para obras, indústria e manutenção em Jundiaí e região.",
    images: [
      {
        url: "/images/boom-lift-hero.png",
        width: 1600,
        height: 900,
        alt: "Plataforma elevatória Terraar Brasil em operação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraar Brasil | Plataformas elevatórias e máquinas pesadas",
    description:
      "Locação de plataformas elevatórias e máquinas pesadas para obras, indústria e manutenção em Jundiaí e região.",
    images: ["/images/boom-lift-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.terraarbrasil.com.br/#organization",
  name: "Terraar Brasil",
  url: "https://www.terraarbrasil.com.br/",
  logo: "https://www.terraarbrasil.com.br/images/terraar-logo.png",
  image: "https://www.terraarbrasil.com.br/images/boom-lift-hero.png",
  description:
    "Locação de plataformas elevatórias e máquinas pesadas para obras, indústria e manutenção em Jundiaí e região.",
  telephone: "+55 11 91364-1056",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Jundiaí e região, São Paulo, Brasil",
  },
  sameAs: ["https://www.instagram.com/terraar.brasil/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 11 91364-1056",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["pt-BR"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Equipamentos Terraar Brasil",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Locação de plataformas elevatórias",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Locação de máquinas pesadas para obras e terraplenagem",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${headlineFont.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
