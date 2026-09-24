import type { MetadataRoute } from "next";
import { site, allRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((r) => ({
    url: `${site.domain}${r.href}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
