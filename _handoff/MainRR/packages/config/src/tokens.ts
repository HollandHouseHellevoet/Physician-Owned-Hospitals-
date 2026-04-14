/**
 * RojasReport chassis design tokens.
 * Single source of truth for colors, spacing, and brand primitives
 * consumed by the Tailwind preset and shared components.
 */

export const tokens = {
  colors: {
    // Surfaces
    bgDeep: "#0A0A0B",
    bgBody: "#0A0A0B",
    bgCard: "#111112",
    bgCardHover: "#18181a",

    // Text
    textPrimary: "#F5F5F4",
    textSub: "#b8b4ae",
    textMuted: "#8A8A88",

    // Brand accent (the canonical amber)
    accent: "#FF6A1F",
    accentDim: "#d45518",

    // Borders (translucent white over black)
    border: "rgba(255,255,255,0.08)",
    borderBright: "rgba(255,255,255,0.14)",
  },
  fonts: {
    headline: ['"Fraunces"', "Georgia", "serif"].join(", "),
    body: ['"Geist"', "system-ui", "sans-serif"].join(", "),
    mono: ['"Geist Mono"', "ui-monospace", "monospace"].join(", "),
  },
  radius: "0px",
} as const;

export type Tokens = typeof tokens;
