# Architecture decisions

Append-only log of significant architecture decisions (lightweight ADRs).

## 0001 · Monorepo over multi-repo (2026-04)

**Decision:** All Desks live under one repo (`MainRR`) in `apps/<slug>/`,
sharing `packages/ui`, `packages/config`, and `packages/seo`.

**Why:** Twenty-three Desks need one chassis. Multi-repo means publishing
`@rojasreport/ui` to npm and bumping versions across 23 repos for every
chassis tweak. Monorepo means one PR updates everything.

**Trade-off:** Slower CI, riskier "blast radius" on chassis changes.
Mitigated by per-Desk Netlify deploys (independent), preview deploys per PR.

## 0002 · pnpm workspaces, no Turborepo (yet) (2026-04)

**Decision:** pnpm workspaces alone, no Turborepo.

**Why:** Two apps initially. `pnpm --filter` is enough. Add Turborepo
when Desk count > 5 and CI times start hurting.

## 0003 · Static export (output: "export") per Desk (2026-04)

**Decision:** Every Desk is statically exported (`output: "export"`) and
served as plain HTML. No SSR, no edge functions in the default scaffold.

**Why:** Crawlability, cost, simplicity. Civic OS embeds and the command
palette can be client-side islands without forcing the whole site to SSR.

**Reconsider when:** A Desk needs per-request logic (paywall enforcement,
authenticated views).

## 0004 · Next.js 14 + Tailwind 3 (2026-04)

**Decision:** Stay on Next 14 / Tailwind 3 for the initial scaffold.

**Why:** Brief recommends Next 15 + Tailwind 4 + shadcn but the existing
POH site is Next 14 / Tailwind 3. Matching the existing site reduces
migration friction and lets the framework prove itself before tackling
a Next 15 upgrade.

**Reconsider when:** Either the chassis hits a Next 14 limitation, or
shadcn primitives become required for an editorial component.

## 0005 · 23-desk registry as code, not config (2026-04)

**Decision:** `SISTER_SITES` is a typed TS const in
`packages/ui/src/SisterSites.ts`. Live/soon state is a boolean flag.

**Why:** Type-safe, no runtime config to fetch, every footer everywhere
updates with a single PR.

## 0006 · `<ConsoleShell>` is the only chrome (2026-04)

**Decision:** Pages MUST NOT render their own header or footer. The
chassis is `<ConsoleShell>`, period.

**Why:** Twenty-three sites, one chassis. Local headers fragment the
brand and break the shared mental model.

## 0007 · AI crawlers allowed by default (2026-04)

**Decision:** `buildRobots()` allows GPTBot, ClaudeBot, PerplexityBot,
CCBot by default.

**Why:** The Rojas Report is positioning as a citation source. Being
indexed by AI is a feature, not a leak.

## 0008 · MDX/Sanity decision deferred (2026-04)

**Decision:** Defer publishing layer (MDX-in-repo vs Sanity vs Contentlayer)
until first dossier is written.

**Why:** Premature. Pick the tool that matches who's actually writing
once that's known.
