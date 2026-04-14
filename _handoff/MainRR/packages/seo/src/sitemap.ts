import type { MetadataRoute } from "next";

export interface SitemapEntry {
  path: string;
  lastModified?: string | Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Build a Next.js sitemap from a list of paths + an origin.
 * Use inside `app/sitemap.ts`:
 *
 *   export default function sitemap(): MetadataRoute.Sitemap {
 *     return buildSitemap("https://poh.rojasreport.com", [
 *       { path: "/" },
 *       { path: "/states/" },
 *     ]);
 *   }
 */
export function buildSitemap(
  origin: string,
  entries: SitemapEntry[]
): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: new URL(entry.path, origin).toString(),
    lastModified: entry.lastModified ?? new Date(),
    changeFrequency: entry.changeFrequency ?? "weekly",
    priority: entry.priority ?? 0.7,
  }));
}
