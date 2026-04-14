# MainRR

The Rojas Report monorepo. One canonical chassis. Twenty-three Desks.

## What lives here

```
apps/
  hub/              rojasreport.com — the standing intelligence console
                    (more Desks dropped in here over time)
packages/
  config/           Brand tokens, Tailwind preset, Google Fonts URL
  ui/               <ConsoleShell> chassis + chassis.css + 23-desk registry
  seo/              metadata, JSON-LD, llms.txt, sitemap, robots helpers
```

## Get going

```bash
nvm use                # Node 20
corepack enable        # pnpm 9.x via packageManager
pnpm install
pnpm dev:hub           # localhost:3000
```

## Stack

- Next.js 14 (App Router, static export per Desk)
- React 18, TypeScript 5
- Tailwind CSS 3 with shared preset (`@rojasreport/config/tailwind-preset`)
- pnpm workspaces
- Netlify per Desk (each app has its own `netlify.toml`)

## The framework, in one paragraph

Every Desk is a Next.js app under `apps/`. Each app declares a
`desk.config.ts` that conforms to `DeskConfig` from `@rojasreport/ui`.
The root layout wraps the app in `<ConsoleShell desk={desk}>`, which
renders the canonical header (brand bar, context rail, optional sub-nav)
and the canonical footer (23-desk sister strip, four-column grid,
foot meta). Add a Desk by copying `apps/hub/`, editing `desk.config.ts`,
and pointing a Netlify site at `apps/<slug>/`.

## Add a new Desk

1. Promote the slug in `packages/ui/src/SisterSites.ts` (`live: true`).
2. Copy `apps/hub` to `apps/<slug>` and rename the `package.json` name.
3. Edit `apps/<slug>/desk.config.ts`:
   - `currentDeskSlug` → the slug from the registry
   - `subdomain` → uppercase mono badge (e.g. `"POH"`)
   - `deskNumber` → e.g. `"DESK 02"`
   - `domain` → `"https://<slug>.rojasreport.com"`
   - `contextMode` → `"breadcrumb"` for Desks; `"questions"` only on hub
   - `crumbs` → e.g. `[{ label: "CONSOLE", href: "https://rojasreport.com" }, { label: "POH", accent: true }]`
4. Update `apps/<slug>/netlify.toml` and `apps/<slug>/app/sitemap.ts`.
5. Connect the GitHub repo to a new Netlify site:
   - Base directory: `apps/<slug>`
   - Build: `cd ../.. && pnpm install --frozen-lockfile=false && pnpm --filter @rojasreport/<slug> build`
   - Publish: `out`
6. Point DNS for `<slug>.rojasreport.com` at the new Netlify site.

## Design source of truth

The chassis HTML and CSS in `packages/ui/src/chassis.css` mirrors
[`mockups/chassis.html`](https://github.com/HollandHouseHellevoet/rapssongs)
on the design-brief branch. Token definitions live in
`packages/config/src/tokens.ts`. Editorial voice and 23-desk taxonomy
live in `docs/design-brief.md` (cross-repo).

Locked decisions:

- Tokens: `--bg #0A0A0B · --fg #F5F5F4 · --dim #8A8A88 · --line rgba(255,255,255,.08) · --accent #FF6A1F`
- Type: Fraunces serif (italic = amber emphasis), Geist sans, Geist Mono (HUD/labels)
- No green. No navy+gold. No Capitol stock photos. No carousels.
- Personas: lobbyist · physician · lawmaker · voter
- Desks are the brand unit, not reporters

## SEO + LLM defaults every Desk gets

- `app/sitemap.ts` via `@rojasreport/seo/buildSitemap`
- `app/robots.ts` via `@rojasreport/seo/buildRobots` (AI crawlers allowed)
- `public/llms.txt` (hand-authored or generated via `renderLlmsTxt`)
- `buildMetadata` helper for canonical, OG, Twitter on every page
- JSON-LD builders for `Organization`, `WebSite`, `Article`,
  `BreadcrumbList`, `Dataset`

See `docs/seo-llm.md` and `docs/add-a-desk.md` for the long form.
