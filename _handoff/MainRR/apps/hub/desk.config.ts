import type { DeskConfig } from "@rojasreport/ui";

/**
 * Hub Desk manifest — rojasreport.com.
 * Renders the CONSOLE chassis with the hub-mode questions ticker.
 * No sister-site highlight (currentDeskSlug = null).
 */
export const desk: DeskConfig = {
  currentDeskSlug: null,
  subdomain: "CONSOLE",
  domain: "https://rojasreport.com",
  contextMode: "questions",
  nav: [
    { href: "/desks/", label: "Desks", active: true },
    { href: "/dossiers/", label: "Dossiers" },
    { href: "/registries/", label: "Registries" },
    { href: "/method/", label: "Method" },
    { href: "/about/", label: "About" },
  ],
  // questions defaults to DEFAULT_QUESTIONS (lobbyist/physician/lawmaker/voter)
};
