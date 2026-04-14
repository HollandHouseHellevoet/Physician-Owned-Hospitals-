import type { MetadataRoute } from "next";
import { buildSitemap } from "@rojasreport/seo";
import { desk } from "../desk.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(desk.domain, [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/desks/", priority: 0.9 },
    { path: "/dossiers/", priority: 0.9 },
    { path: "/method/", priority: 0.6 },
    { path: "/about/", priority: 0.5 },
  ]);
}
