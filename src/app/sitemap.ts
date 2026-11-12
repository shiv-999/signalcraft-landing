import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://shiv-999.github.io/signalcraft-landing/", changeFrequency: "monthly", priority: 1 }];
}
