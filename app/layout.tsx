import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraar Brasil",
  description: "Aluguel de máquinas pesadas para terraplanagem em Jundiaí-SP.",
  icons: {
    icon: "https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.82787-19/561175354_17872139979440356_8157841243592877380_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gEjpSGKTQSHSTsL11zxWcOdXR2a7SP0qjHP-oN4WhccbLMmdl6UdkWlYi0SDnxiIuwrnbUTkepBvHeu8v-A2Yt7&_nc_ohc=CHmoXZKy8CkQ7kNvwFUJMvg&_nc_gid=yUywZmOhPOPpy4ou785bzw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfwyPsX_Bhcmnxn5wabyY6Bp5KVSqQcR4TOls_0hAQV7hw&oe=69C327BF&_nc_sid=22de04",
    shortcut:
      "https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.82787-19/561175354_17872139979440356_8157841243592877380_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gEjpSGKTQSHSTsL11zxWcOdXR2a7SP0qjHP-oN4WhccbLMmdl6UdkWlYi0SDnxiIuwrnbUTkepBvHeu8v-A2Yt7&_nc_ohc=CHmoXZKy8CkQ7kNvwFUJMvg&_nc_gid=yUywZmOhPOPpy4ou785bzw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfwyPsX_Bhcmnxn5wabyY6Bp5KVSqQcR4TOls_0hAQV7hw&oe=69C327BF&_nc_sid=22de04",
  },
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
