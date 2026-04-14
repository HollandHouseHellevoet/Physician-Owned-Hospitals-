# @rojasreport/hub

The hub Desk: **rojasreport.com**.

Renders the canonical chassis with the CONSOLE subdomain badge and the
hub-mode `QUESTIONS WE ANSWER` ticker. No sister-site is highlighted in
the footer strip.

## Develop

```bash
pnpm install   # from repo root
pnpm dev:hub
```

Runs at http://localhost:3000.

## Build

```bash
pnpm build:hub
```

Produces `apps/hub/out/` (static export).

## Customize

- `desk.config.ts` — subdomain badge, nav, context-rail mode, sister-site
  highlight (`null` for hub).
- `app/page.tsx` — landing content; replace placeholder body with the
  pasted hub design.
- `app/sitemap.ts` — list of routes for `/sitemap.xml`.
- `public/llms.txt` — LLM context file at `/llms.txt`.

The chassis (header, context rail, footer) is rendered automatically by
`<ConsoleShell desk={desk}>` in `app/layout.tsx`. Do not duplicate it
inside pages.
