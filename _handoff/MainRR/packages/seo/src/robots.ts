import type { MetadataRoute } from "next";

export interface RobotsOptions {
  origin: string;
  /** Paths to disallow (default: none) */
  disallow?: string[];
  /** Allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot, etc.). Default: true. */
  allowAiCrawlers?: boolean;
}

/**
 * Build Next.js robots.txt. Use inside `app/robots.ts`:
 *
 *   export default function robots(): MetadataRoute.Robots {
 *     return buildRobots({ origin: "https://poh.rojasreport.com" });
 *   }
 */
export function buildRobots(opts: RobotsOptions): MetadataRoute.Robots {
  const allowAi = opts.allowAiCrawlers ?? true;
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: opts.disallow ?? [],
    },
  ];

  if (!allowAi) {
    rules.push(
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" }
    );
  }

  return {
    rules,
    sitemap: `${opts.origin.replace(/\/$/, "")}/sitemap.xml`,
  };
}
