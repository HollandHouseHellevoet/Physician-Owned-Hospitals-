import type { MetadataRoute } from "next";
import { buildRobots } from "@rojasreport/seo";
import { desk } from "../desk.config";

export default function robots(): MetadataRoute.Robots {
  return buildRobots({ origin: desk.domain, allowAiCrawlers: true });
}
