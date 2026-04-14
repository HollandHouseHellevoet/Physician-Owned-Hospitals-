# CLAUDE.md — MainRR

Rules and conventions for any Claude (or human) working in this monorepo.

## What this repo is

The Rojas Report monorepo. One canonical chassis (`<ConsoleShell>`),
twenty-three Desks (subdomains), one shared design system. Adding a
new Desk is a config drop, not a redesign.

## Locked decisions — do not re-litigate

- **Positioning:** standing intelligence on who pays whom in American
  healthcare. NOT a news feed. NOT a blog.
- **Tokens:** `--bg #0A0A0B · --fg #F5F5F4 · --dim #8A8A88 · --line rgba(255,255,255,.08) · --accent #FF6A1F`
- **Type:** Fraunces serif (italic = amber emphasis), Geist sans, Geist Mono
- **No green. No navy+gold. No Capitol stock photos. No carousels.**
- **Personas:** lobbyist / physician / lawmaker / voter
- **Lane:** signal console chassis + editorial interiors
- **Desks are the brand unit, not reporters**

## Architecture

```
apps/<slug>/                    one Next.js app per Desk
  desk.config.ts                DeskConfig manifest
  app/layout.tsx                wraps children in <ConsoleShell>
  app/page.tsx                  desk landing
  app/sitemap.ts                buildSitemap()
  app/robots.ts                 buildRobots()
  public/llms.txt               LLM context
  netlify.toml                  per-desk deploy config
packages/
  config/                       tokens, fonts URL, Tailwind preset
  ui/                           ConsoleShell + chassis.css + 23-desk registry
  seo/                          metadata, JSON-LD, sitemap, robots, llms helpers
```

## How chassis is rendered

Every app's `app/layout.tsx` does this and only this:

```tsx
import { ConsoleShell } from "@rojasreport/ui";
import { desk } from "../desk.config";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        <ConsoleShell desk={desk}>{children}</ConsoleShell>
      </body>
    </html>
  );
}
```

Pages MUST NOT render their own header or footer. The chassis is the
only chrome.

## Tech stack (for now)

- Next.js 14 (App Router) with `output: "export"` per Desk
- React 18, TypeScript 5
- Tailwind CSS 3 with shared preset
- pnpm 9 workspaces
- Netlify for hosting

When the design brief eventually moves to Next 15 + Tailwind 4 +
shadcn, migrate one Desk first as the reference, then port the rest.

## Adding a Desk

See `README.md` → "Add a new Desk".

## Promoting a Desk from `· SOON` to live

Edit `packages/ui/src/SisterSites.ts`, flip `live: false` → `live: true`.
Every footer everywhere updates next deploy.

## Editorial / content rules

- Never use "provider" — use physician or doctor
- Never use "should"
- No em dashes, use commas
- No surgical or stock Capitol imagery
- Prosecutorial register where appropriate; every number indicts something

## SEO + LLM hygiene (required on every page)

- `metadata` export with `title`, `description`, canonical (via
  `buildMetadata` from `@rojasreport/seo`)
- JSON-LD where applicable (`Organization`, `Article`, `BreadcrumbList`,
  `Dataset` for registries)
- `<h1>` once per page; semantic `<section>`/`<article>`
- Stable anchor ids on all `<h2>` / `<h3>`
- AI crawlers ALLOWED (this is a citation-positive publication)

## Don't

- Don't add a Nav or Footer inside an app — use `<ConsoleShell>`
- Don't define brand colors locally — read from `@rojasreport/config`
- Don't hand-roll metadata — call `buildMetadata`
- Don't add carousels, em dashes, or stock photos
- Don't introduce a third runtime (no separate Vite app, no Astro)

## Verification gates

Before a Desk ships:

```bash
pnpm --filter @rojasreport/<slug> build
ls apps/<slug>/out/                              # static export present
grep "<title>" apps/<slug>/out/index.html        # page-specific title
cat apps/<slug>/out/sitemap.xml                  # routes present
cat apps/<slug>/out/llms.txt                     # llms.txt deployed
```
