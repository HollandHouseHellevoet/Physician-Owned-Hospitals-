import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#0A0A0B",
        "bg-body": "#0A0A0B",
        "bg-card": "#111112",
        "bg-card-hover": "#18181a",
        "text-primary": "#F5F5F4",
        "text-sub": "#b8b4ae",
        "text-muted": "#8A8A88",
        accent: "#FF6A1F",
        "accent-dim": "#d45518",
        border: "rgba(255,255,255,0.08)",
        "border-bright": "rgba(255,255,255,0.14)",
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

export default config;
