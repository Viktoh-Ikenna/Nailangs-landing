import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/download", 0.9],
    ["/about", 0.7],
    ["/keyboard-cover", 0.6],
    ["/contact", 0.5],
    ["/privacy-policy", 0.3],
  ];
  return pages.map(([path, priority]) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
