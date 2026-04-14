import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Physician-Owned Hospital Intelligence | The Rojas Report",
  description:
    "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
  twitter: {
    card: "summary_large_image",
    site: "@dutchrojas",
    title: "Physician-Owned Hospital Intelligence | The Rojas Report",
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-body text-text-primary font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
