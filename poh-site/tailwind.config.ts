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
        "bg-deep": "#070b11",
        "bg-body": "#0f1a24",
        "bg-card": "#141b24",
        "bg-card-hover": "#1a2330",
        "text-primary": "#f8f5ef",
        "text-sub": "#b8b4ae",
        "text-muted": "#6b7280",
        accent: "#EB6E2C",
        "accent-dim": "#c45a20",
        border: "#1e2d3d",
        "border-bright": "#2a3d52",
      },
      fontFamily: {
        headline: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
