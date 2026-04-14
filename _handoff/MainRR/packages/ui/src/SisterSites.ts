/**
 * The 23-desk registry.
 * Rendered as the mono pill strip at the top of every footer.
 * Mirrors mockups/chassis.html and docs/design-brief.md.
 * `live: false` marks roadmap Desks (rendered with `· SOON` + opacity .4).
 */

export type DeskSlug =
  | "waysandmeans"
  | "poh"
  | "academic"
  | "fah"
  | "aha"
  | "hac"
  | "con-laws"
  | "ahip"
  | "pharma"
  | "cms"
  | "fda"
  | "physicians"
  | "lobbyists"
  | "donors"
  | "states"
  | "courts"
  | "devices"
  | "digital"
  | "rural"
  | "mental"
  | "maternal"
  | "seniors"
  | "briefs";

export interface SisterSite {
  slug: DeskSlug;
  /** Mono-uppercase label rendered in the strip */
  label: string;
  /** Absolute URL for subdomain */
  href: string;
  /** Whether the Desk is published; false = dimmed `· SOON` roadmap pill */
  live: boolean;
  /** Desk number per design brief (01..23) */
  number: string;
}

export const SISTER_SITES: SisterSite[] = [
  { number: "01", slug: "waysandmeans", label: "WAYSANDMEANS", href: "https://waysandmeans.rojasreport.com", live: true },
  { number: "02", slug: "poh", label: "POH", href: "https://poh.rojasreport.com", live: true },
  { number: "03", slug: "ahip", label: "AHIP", href: "https://ahip.rojasreport.com", live: false },
  { number: "04", slug: "pharma", label: "PHARMA", href: "https://pharma.rojasreport.com", live: false },
  { number: "05", slug: "aha", label: "AHA", href: "https://aha.rojasreport.com", live: true },
  { number: "06", slug: "cms", label: "CMS", href: "https://cms.rojasreport.com", live: false },
  { number: "07", slug: "fda", label: "FDA", href: "https://fda.rojasreport.com", live: false },
  { number: "08", slug: "physicians", label: "PHYSICIANS", href: "https://physicians.rojasreport.com", live: false },
  { number: "09", slug: "lobbyists", label: "LOBBYISTS", href: "https://lobbyists.rojasreport.com", live: false },
  { number: "10", slug: "donors", label: "DONORS", href: "https://donors.rojasreport.com", live: false },
  { number: "11", slug: "states", label: "STATES", href: "https://states.rojasreport.com", live: false },
  { number: "12", slug: "courts", label: "COURTS", href: "https://courts.rojasreport.com", live: false },
  { number: "13", slug: "devices", label: "DEVICES", href: "https://devices.rojasreport.com", live: false },
  { number: "14", slug: "digital", label: "DIGITAL", href: "https://digital.rojasreport.com", live: false },
  { number: "15", slug: "rural", label: "RURAL", href: "https://rural.rojasreport.com", live: false },
  { number: "16", slug: "mental", label: "MENTAL", href: "https://mental.rojasreport.com", live: false },
  { number: "17", slug: "maternal", label: "MATERNAL", href: "https://maternal.rojasreport.com", live: false },
  { number: "18", slug: "seniors", label: "SENIORS", href: "https://seniors.rojasreport.com", live: false },
  { number: "19", slug: "academic", label: "ACADEMIC", href: "https://academic.rojasreport.com", live: true },
  { number: "20", slug: "fah", label: "FAH", href: "https://fah.rojasreport.com", live: true },
  { number: "21", slug: "hac", label: "HAC", href: "https://hac.rojasreport.com", live: true },
  { number: "22", slug: "con-laws", label: "CON-LAWS", href: "https://con-laws.rojasreport.com", live: true },
  { number: "23", slug: "briefs", label: "BRIEFS", href: "https://briefs.rojasreport.com", live: false },
];

export const DEFAULT_QUESTIONS = [
  { persona: "LOBBYIST" as const, question: "Who does AHIP pay — and who pays AHIP?" },
  { persona: "PHYSICIAN" as const, question: "Can I build a micro-hospital next to this POH?" },
  { persona: "LAWMAKER" as const, question: "Who could be an ally on 340B reform?" },
  { persona: "VOTER" as const, question: "What is Abbott Labs spending in my district?" },
];
