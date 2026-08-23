import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.terraarbrasil.com.br/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
