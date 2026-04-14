# MainRR scaffold handoff

This directory is a temporary handoff of the **MainRR monorepo
scaffold** built in this Claude Code session. It does not belong in
this repo long-term.

## What's here

- `MainRR-scaffold.tar.gz` — gzipped tarball (23 KB), 52 files
- `MainRR/` — same files, expanded for browsing in the GitHub UI

## What it contains

Initial scaffold for the `HollandHouseHellevoet/MainRR` monorepo:

- pnpm workspaces (Next.js 14, React 18, TypeScript 5, Tailwind 3)
- `packages/config` — brand tokens, Google Fonts URL, Tailwind preset
- `packages/ui` — `<ConsoleShell>` chassis matching `mockups/chassis.html`
  (rr-top, rr-context, rr-sisters, rr-cols, rr-foot-meta), 23-desk
  registry, outlined RR diamond mark, ⌘K stub, QUESTIONS ticker,
  Breadcrumb
- `packages/seo` — buildMetadata, JSON-LD builders, sitemap, robots,
  llms.txt helper
- `apps/hub` — rojasreport.com Desk in CONSOLE mode (placeholder
  landing, sitemap, robots, llms.txt, netlify.toml)
- `docs/{add-a-desk,seo-llm,decisions}.md`
- Root `README.md` and `CLAUDE.md`

## How to ship it to MainRR

From your local machine:

```bash
# 1. Pull this branch
git fetch origin claude/mainrr-handoff
git checkout claude/mainrr-handoff

# 2. Clone the empty MainRR repo somewhere
git clone https://github.com/HollandHouseHellevoet/MainRR.git ~/MainRR
cd ~/MainRR

# 3. Drop the scaffold in
tar -xzf /path/to/Physician-Owned-Hospitals-/_handoff/MainRR-scaffold.tar.gz \
    --strip-components=1

# 4. Verify
pnpm install
pnpm dev:hub          # localhost:3000 should render the chassis

# 5. Commit + push
git add -A
git commit -m "Initial scaffold: chassis, packages, hub Desk, framework docs"
git push -u origin main
```

Once that's pushed, this `_handoff/` directory should be deleted from
`Physician-Owned-Hospitals-` (it has no business living here).

```bash
cd /path/to/Physician-Owned-Hospitals-
git checkout main
git branch -D claude/mainrr-handoff   # local
git push origin --delete claude/mainrr-handoff   # remote
```
