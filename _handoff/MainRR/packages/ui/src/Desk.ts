/**
 * Desk manifest — every app declares one.
 * Drives the ConsoleShell chassis per-site.
 * Mirrors the contract described in mockups/chassis.html:
 *   <ConsoleShell subdomain crumbs subnav currentDeskSlug />
 */

import type { DeskSlug } from "./SisterSites";

export type { DeskSlug };

export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
}

export interface Crumb {
  label: string;
  href?: string;
  accent?: boolean;
}

export interface SubNavItem {
  href: string;
  label: string;
  active?: boolean;
}

export interface PersonaQuestion {
  persona: "LOBBYIST" | "PHYSICIAN" | "LAWMAKER" | "VOTER";
  question: string;
}

export interface DeskConfig {
  /** Slug matching an entry in SISTER_SITES. `null` for hub (rojasreport.com). */
  currentDeskSlug: DeskSlug | null;

  /** The uppercase mono badge after the ROJASREPORT // separator. */
  subdomain: string;

  /** Desk number label appended to subdomain badge, e.g. "DESK 02". Omit for hub. */
  deskNumber?: string;

  /** Canonical origin, e.g. "https://poh.rojasreport.com" */
  domain: string;

  /** Primary nav links (top bar). */
  nav: NavLink[];

  /** Context-rail mode: 'questions' = hub ticker, 'breadcrumb' = desk/entity pages */
  contextMode: "questions" | "breadcrumb";

  /** Used when contextMode = 'breadcrumb'. */
  crumbs?: Crumb[];

  /** Used when contextMode = 'questions'. Defaults to canonical four-persona set. */
  questions?: PersonaQuestion[];

  /** Optional third rail — only rendered on desk homepages. */
  subnav?: SubNavItem[];
}
