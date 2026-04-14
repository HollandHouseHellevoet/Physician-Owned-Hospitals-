import "./globals.css";
import type { Metadata } from "next";
import { ConsoleShell } from "@rojasreport/ui";
import { GOOGLE_FONTS_HREF } from "@rojasreport/config";
import { desk } from "../desk.config";

export const metadata: Metadata = {
  metadataBase: new URL(desk.domain),
  title: {
    default: "Rojas Report — Standing intelligence on who pays whom in American healthcare",
    template: "%s · Rojas Report",
  },
  description:
    "A reference console, not a newsfeed, for the lobbyist, the physician, the lawmaker, and the voter asking the same question from four angles.",
  twitter: {
    card: "summary_large_image",
    site: "@dutchrojas",
    creator: "@dutchrojas",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        <ConsoleShell desk={desk}>{children}</ConsoleShell>
      </body>
    </html>
  );
}
