# Adding a new Desk

A Desk is a Next.js app under `apps/<slug>/` that consumes the shared
chassis and ships to its own subdomain. Adding one is a config drop.

## Step-by-step

### 1. Promote the slug

In `packages/ui/src/SisterSites.ts`, find the entry for the Desk.
If it isn't there, add one. Set `live: true`.

```ts
{ number: "02", slug: "poh", label: "POH", href: "https://poh.rojasreport.com", live: true },
```

### 2. Copy the hub app as a starting point

```bash
cp -r apps/hub apps/<slug>
cd apps/<slug>
```

Rename the package in `apps/<slug>/package.json`:

```json
{ "name": "@rojasreport/<slug>", ... }
```

### 3. Edit `desk.config.ts`

```ts
import type { DeskConfig } from "@rojasreport/ui";

export const desk: DeskConfig = {
  currentDeskSlug: "poh",
  subdomain: "POH",
  deskNumber: "DESK 02",
  domain: "https://poh.rojasreport.com",
  contextMode: "breadcrumb",
  crumbs: [
    { label: "CONSOLE", href: "https://rojasreport.com" },
    { label: "POH", accent: true },
  ],
  nav: [
    { href: "/states/", label: "States", active: true },
    { href: "/investigation/", label: "Investigation" },
    { href: "/evidence/", label: "Evidence" },
    { href: "/about/", label: "About" },
  ],
  subnav: [
    { href: "/", label: "Overview", active: true },
    { href: "/states/", label: "States" },
    { href: "/data-explorer/", label: "Entities" },
    { href: "/evidence/", label: "Dossiers" },
    { href: "/method/", label: "Method" },
  ],
};
```

### 4. Update `netlify.toml`

Adjust the `--filter` arg and any redirects:

```toml
[build]
  base    = "apps/poh"
  command = "cd ../.. && pnpm install --frozen-lockfile=false && pnpm --filter @rojasreport/poh build"
  publish = "out"
```

### 5. Update `app/sitemap.ts`

List your routes.

### 6. Update `public/llms.txt`

Hand-author or generate via `renderLlmsTxt`.

### 7. Provision Netlify

- Add new site → import `MainRR` repo
- Base directory: `apps/<slug>`
- Production branch: `main`
- Env vars per Desk (Stripe, etc.)

### 8. Provision DNS

Point `<slug>.rojasreport.com` at the new Netlify site.

### 9. Verify

```bash
pnpm --filter @rojasreport/<slug> build
open apps/<slug>/out/index.html
```

You should see the canonical chassis with your subdomain badge,
breadcrumb context rail, and your slug highlighted in the footer
sister strip.

## What you do NOT touch

- The chassis HTML/CSS — it's in `packages/ui` for a reason.
- The 23-desk registry — only flip `live` flags.
- Brand tokens — they live in `packages/config/src/tokens.ts`.
- Fonts — loaded from `@rojasreport/config/fonts`.

If you need the chassis to do something it doesn't, propose a change
to `packages/ui` — don't fork it inside an app.
