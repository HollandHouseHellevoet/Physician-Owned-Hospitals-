import type { Metadata } from "next";

export interface DeskSeoDefaults {
  /** "POH · Rojas Report", "Ways & Means · Rojas Report", etc. */
  siteName: string;
  /** Absolute origin, e.g. "https://poh.rojasreport.com" */
  origin: string;
  /** Default page title template: "%s | POH · Rojas Report" */
  titleTemplate?: string;
  /** Fallback description for pages that don't declare one */
  defaultDescription: string;
  /** Canonical Twitter handle */
  twitterHandle?: string;
  /** Default OG image path (absolute or relative to origin) */
  defaultOgImage?: string;
}

export interface PageSeoInput {
  /** Title segment — fills the %s in the template */
  title: string;
  /** Page description */
  description?: string;
  /** Path (pathname, e.g. "/states/tx/") — canonical URL built from origin + path */
  path: string;
  /** Optional OG image override */
  ogImage?: string;
  /** Mark page noindex (e.g. unpublished drafts) */
  noindex?: boolean;
  /** Open Graph type — defaults to 'website' */
  ogType?: "website" | "article";
}

/**
 * Build a Next.js Metadata object from Desk defaults + per-page overrides.
 * Every page gets canonical, OG, Twitter card wired consistently.
 */
export function buildMetadata(
  defaults: DeskSeoDefaults,
  page: PageSeoInput
): Metadata {
  const canonical = new URL(page.path, defaults.origin).toString();
  const fullTitle = defaults.titleTemplate
    ? defaults.titleTemplate.replace("%s", page.title)
    : `${page.title} | ${defaults.siteName}`;
  const description = page.description ?? defaults.defaultDescription;
  const image = page.ogImage ?? defaults.defaultOgImage;
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : new URL(image, defaults.origin).toString()
    : undefined;

  return {
    metadataBase: new URL(defaults.origin),
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: page.ogType ?? "website",
      siteName: defaults.siteName,
      title: fullTitle,
      description,
      url: canonical,
      images: absoluteImage ? [{ url: absoluteImage }] : undefined,
    },
    twitter: {
      card: absoluteImage ? "summary_large_image" : "summary",
      site: defaults.twitterHandle,
      creator: defaults.twitterHandle,
      title: fullTitle,
      description,
      images: absoluteImage ? [absoluteImage] : undefined,
    },
    robots: page.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
