import type { Metadata } from "next";

const SITE_URL = "https://poh.rojasreport.com";
const SITE_NAME = "The Rojas Report";

interface SEOInput {
  title: string;
  description: string;
  path: string;
}

export function generatePageMetadata({ title, description, path }: SEOInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Rojas Report",
    url: SITE_URL,
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States.",
    founder: {
      "@type": "Person",
      name: "Dutch Rojas",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "intel@rojasreport.com",
    },
  };
}

export function datasetJsonLd(stateName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${stateName} Physician-Owned Hospital Data`,
    description: `Intelligence on physician-owned hospitals in ${stateName}, including operating status, closures, and market analysis.`,
    spatialCoverage: stateName,
    temporalCoverage: "2010/..",
    publisher: {
      "@type": "Organization",
      name: "The Rojas Report",
      url: SITE_URL,
    },
  };
}
