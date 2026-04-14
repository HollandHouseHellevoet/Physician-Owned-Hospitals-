# SEO + LLM hygiene

Every page on every Desk gets these primitives — non-negotiable.

## Page metadata

Every `page.tsx` exports `metadata`:

```ts
import { buildMetadata } from "@rojasreport/seo";
import { desk } from "../../desk.config";

const seoDefaults = {
  siteName: "POH · Rojas Report",
  origin: desk.domain,
  defaultDescription: "Physician-Owned Hospitals — standing intelligence registry.",
  twitterHandle: "@dutchrojas",
  defaultOgImage: "/og/default.png",
};

export const metadata = buildMetadata(seoDefaults, {
  title: "Texas Physician-Owned Hospitals",
  description: "32 hospitals tracked across Texas. Status, ownership, history.",
  path: "/states/tx/",
});
```

This wires `<title>`, `<meta description>`, canonical URL, OG tags,
Twitter card, and robots index/noindex directives consistently.

## JSON-LD

Per page type:

| Page type | Schema |
|---|---|
| Hub homepage | `Organization`, `WebSite` (with SearchAction) |
| Desk homepage | `Organization`, `Dataset` (the registry) |
| Dossier / article | `Article`, `BreadcrumbList` |
| Entity (POH, legislator, trade group) | `Organization` or domain-specific schema |
| State / region | `Dataset`, `Place` |

Render via:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld.article({ ... })) }}
/>
```

## Sitemap

Every Desk has `app/sitemap.ts`:

```ts
import { buildSitemap } from "@rojasreport/seo";
import { desk } from "../desk.config";

export default function sitemap() {
  return buildSitemap(desk.domain, [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/states/", priority: 0.9 },
    // ... one per route
  ]);
}
```

## Robots

Every Desk has `app/robots.ts`:

```ts
import { buildRobots } from "@rojasreport/seo";
import { desk } from "../desk.config";

export default function robots() {
  return buildRobots({ origin: desk.domain, allowAiCrawlers: true });
}
```

AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot) are ALLOWED by
default. The Rojas Report wants to be cited.

## llms.txt

Every Desk publishes `public/llms.txt` per the
[llmstxt.org](https://llmstxt.org/) spec. Hand-author for the hub;
generate from registry data for Desks via `renderLlmsTxt`.

## Semantic HTML

- `<h1>` once per page
- `<article>` for long-form / dossiers
- `<section>` for major page divisions
- `<time datetime="ISO-8601">` for any date
- Stable `id`s on every `<h2>` and `<h3>` so LLMs can cite anchors
- Tables for tabular data, not divs

## Accessibility = SEO

- `alt` on every image
- `<button>` for actions, `<a>` for navigation — never the other way
- Visible focus rings (the chassis CSS preserves browser defaults; do
  not strip them)
- Color contrast: amber `#FF6A1F` on `#0A0A0B` clears 4.5:1 only above
  16px — use it for accents and headings, never body text

## Performance budget

- LCP < 2.5s on a cold cache, mid-tier mobile
- CLS < 0.1
- No blocking JS in the chassis (chassis is a Server Component except
  `CommandPalette` and the mobile menu)
- Fonts loaded with `display=swap`
