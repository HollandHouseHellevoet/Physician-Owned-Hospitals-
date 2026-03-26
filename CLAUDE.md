# CLAUDE.md — POH.RojasReport.com

## Project Overview

**POH.RojasReport.com** is the definitive intelligence site on physician-owned hospitals (POHs) in America. It tracks 189 hospitals across 32 states, documenting what was built before the ACA Section 6001 ban (2010), what was lost, and what remains.

- **URL**: https://poh.rojasreport.com
- **Publisher**: Dutch Rojas — The Rojas Report
- **Version**: 1.0 | March 2026

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Rendering | **Static Site Generation (SSG)** — `output: "export"` |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | Netlify (static export → `out/` directory) |
| Payments | Stripe Checkout (client-side redirect) |
| Data | Excel (.xlsx) + Markdown files parsed at **build time only** |

## Critical Constraint: SSG Only

This site MUST be fully static. Every page is a pre-rendered HTML file. No SPAs. No client-side rendering. Googlebot must read every page with JavaScript completely disabled.

**`next.config.ts` is non-negotiable:**
```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

**Verification gate after any structural change:**
```bash
npm run build
ls out/ | wc -l                          # Must be 37+
ls out/states/                           # Must show 32 directories
grep "<title>" out/states/TX/index.html  # Must contain "Texas"
```

## Directory Structure

```
poh-site/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, nav, footer)
│   ├── page.tsx                   # Homepage (/)
│   ├── investigation/page.tsx     # /investigation/
│   ├── data-explorer/page.tsx     # /data-explorer/
│   ├── evidence/page.tsx          # /evidence/
│   ├── about/page.tsx             # /about/
│   ├── states/[state]/page.tsx    # /states/{CODE}/ (32 pages)
│   └── sitemap.ts                 # Auto-generated sitemap
├── components/                    # Shared UI components
├── lib/
│   ├── data.ts                    # Excel/Markdown parsing (build-time)
│   └── seo.ts                     # SEO metadata helpers
├── data/
│   ├── Physician_Owned_Hospitals_US.xlsx
│   └── briefs/                    # 31 state markdown files
├── public/
│   └── llms.txt                   # LLM context file
├── next.config.mjs
├── tailwind.config.ts
├── netlify.toml
└── .env.local                     # Stripe keys (NEVER commit)
```

## Route Map — 37 Static HTML Files

| Route | Pages |
|-------|-------|
| `/` | 1 (homepage) |
| `/investigation/` | 1 |
| `/data-explorer/` | 1 |
| `/evidence/` | 1 |
| `/about/` | 1 |
| `/states/{CODE}/` | 32 (AL through WY) |

**All 32 states MUST be present.** Florida and New Hampshire must not be missing.

## Data Pipeline

All data is parsed at **build time only** via `lib/data.ts`. Never at runtime.

### Excel Schema (Sheet: "Master List")
Columns: #, Hospital Name, City, State, Category, Specialty Focus, Current Status, Notes

### Status Values
`"Operating"` | `"Closed"` | `"Sold/Acquired"` | `"Closed/Acquired"` | `"Under Development"`

### Aggregate Stats (use exact numbers)
- Total built before ban: **265**
- Currently operating: **104**
- Tracked in database: **189**
- Lost since Section 6001: **85**
- States with active POHs: **22**
- States tracked: **32**
- Years of the ban: **16** (2010–2026)

### Pricing Tiers
- Tier 1 states (TX, LA, OK, KS, IN, OH, SD, CA, AZ, PA, WI, NE, AR, ID, CO): **$300/state**
- Tier 2 states: **$75/state**
- All-Access: **$3,500/year**

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-deep` | `#070b11` | Deepest background |
| `bg-body` | `#0f1a24` | Page body |
| `bg-card` | `#141b24` | Card backgrounds |
| `bg-card-hover` | `#1a2330` | Card hover state |
| `text-primary` | `#f8f5ef` | Primary text (cream) |
| `text-sub` | `#b8b4ae` | Secondary text |
| `text-muted` | `#6b7280` | Muted text |
| `accent` | `#EB6E2C` | **Dutch orange — THE brand color** |
| `accent-dim` | `#c45a20` | Darker accent |
| `border` | `#1e2d3d` | Default borders |
| `border-bright` | `#2a3d52` | Emphasized borders |

### Typography
- **Headlines**: Cormorant Garamond (loaded via HTML `<link>` tags, NOT `next/font`)
- **Body**: DM Sans

### Design Rules
- Zero border radius on ALL elements
- No em dashes — use commas
- No healthcare imagery (no stethoscopes, hospital corridors, scrubs)
- Numbered section badges: 01, 02, 03 on every section
- Selection highlight color: `#EB6E2C`
- Aesthetic: **Bloomberg terminal meets Hermès** — dense, authoritative, dark

## Content Rules

- Never use "provider" — always "physician" or "doctor"
- Never use "should"
- No em dashes — use commas
- No surgical imagery
- Prosecutorial register — every number indicts something
- Audience: all Americans, physicians, lawmakers, policy analysts

## SEO Requirements

Every page MUST have unique: `title`, `meta description`, `og:title`, `og:description`, `og:url`, `canonical`, JSON-LD.

### Title Formats
- Homepage: `"Physician-Owned Hospital Intelligence | The Rojas Report"`
- State: `"[State Name] Physician-Owned Hospitals | POH Intelligence | The Rojas Report"`
- Investigation: `"Section 6001: The Ban on Physician-Owned Hospitals | The Rojas Report"`
- Data Explorer: `"POH Data Explorer | Physician-Owned Hospital Database | The Rojas Report"`
- Evidence: `"The Evidence Against the Ban | POH Research | The Rojas Report"`
- About: `"About Dutch Rojas | The Rojas Report"`

## Paywall Rules

**CRITICAL: No hospital names appear anywhere without authentication.**

- State page Section 01 (Market Overview) is free — aggregate stats and narrative only
- Sections 02–05 are paywalled with fade-to-blur overlay
- Data Explorer shows aggregate counts only — hospital names require payment
- Hospital names must NOT appear in: free content, meta tags, JSON-LD, page source

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (SSG)
npm run build

# Verify build output
ls out/ | wc -l          # Expect 37+
ls out/states/           # Expect 32 directories

# Lint
npm run lint
```

## Environment Variables

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_PRICE_TIER1=price_...        # $500
STRIPE_PRICE_TIER2=price_...        # $75
STRIPE_PRICE_ALLACCESS=price_...    # $6,000/year
```

**Never commit `.env.local`.**

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `out`
- Static export — no server functions needed
- Security headers configured in `netlify.toml`

## Known Bugs to Avoid

1. SPA instead of SSG — verify `output: "export"` and HTML files in `out/`
2. All state pages identical — verify unique title/meta per state
3. Sitemap missing URLs — verify all 37 in sitemap.xml
4. Duplicate canonical tags — one per page only
5. State parse errors — test every state page builds
6. Florida and New Hampshire missing — all 32 states required
7. Wrong state data on pages — all data must be state-specific
8. Hospital names visible without auth — never show names without payment
9. State cards overflow on mobile — test at 375px
10. No scroll reset on navigation
11. Wrong Substack URL — use `dutchrojas.substack.com`
12. Platform badges visible — no "Made with" anything
13. ReCenter Hospital card unstyled — accent orange featured styling required
14. Status filter mislabeled — "All Statuses" not "All States"
15. Missing `llms.txt` — required at `/llms.txt`

## Ecosystem Links

| Property | URL |
|----------|-----|
| The Rojas Report | rojasreport.com |
| FAH Report | fah.rojasreport.com |
| MedMerge | medmerge.co |
| PhyCap Fund | phycapfund.com |
| PHA | physiciansled.com |
| X | x.com/dutchrojas |
| YouTube | youtube.com/@DutchRojas |
| Substack | dutchrojas.substack.com |
| LinkedIn | linkedin.com/in/dutchrojas |
| Contact | intel@rojasreport.com |
