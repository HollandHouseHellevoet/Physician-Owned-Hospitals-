import type { Config } from "tailwindcss";
import { tokens } from "./tokens";

/**
 * Shared Tailwind preset.
 * Every app extends this via `presets: [require("@rojasreport/config/tailwind-preset").default]`.
 * Apps still declare their own `content` globs.
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        "bg-deep": tokens.colors.bgDeep,
        "bg-body": tokens.colors.bgBody,
        "bg-card": tokens.colors.bgCard,
        "bg-card-hover": tokens.colors.bgCardHover,
        "text-primary": tokens.colors.textPrimary,
        "text-sub": tokens.colors.textSub,
        "text-muted": tokens.colors.textMuted,
        accent: tokens.colors.accent,
        "accent-dim": tokens.colors.accentDim,
        border: tokens.colors.border,
        "border-bright": tokens.colors.borderBright,
      },
      fontFamily: {
        headline: ['"Fraunces"', "Georgia", "serif"],
        body: ['"Geist"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default preset;
