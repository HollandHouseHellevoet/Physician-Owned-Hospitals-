import type { MetadataRoute } from "next";
import { ALL_STATE_CODES, TIER_1_STATES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://poh.rojasreport.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/investigation/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/data-explorer/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/evidence/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/states/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const statePages: MetadataRoute.Sitemap = ALL_STATE_CODES.map((code) => ({
    url: `${baseUrl}/states/${code}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: TIER_1_STATES.includes(code) ? 0.9 : 0.7,
  }));

  return [...staticPages, ...statePages];
}
