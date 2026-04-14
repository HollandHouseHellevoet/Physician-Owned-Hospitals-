/**
 * JSON-LD builders for structured data.
 * Render via:  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />
 */

export interface OrganizationOptions {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export function organization(opts: OrganizationOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: opts.name,
    url: opts.url,
    logo: opts.logo,
    sameAs: opts.sameAs,
  };
}

export interface WebsiteOptions {
  name: string;
  url: string;
  searchUrl?: string; // e.g. "https://rojasreport.com/search?q={search_term_string}"
}

export function website(opts: WebsiteOptions) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: opts.name,
    url: opts.url,
  };
  if (opts.searchUrl) {
    base.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: opts.searchUrl,
      },
      "query-input": "required name=search_term_string",
    };
  }
  return base;
}

export interface ArticleOptions {
  headline: string;
  description?: string;
  url: string;
  datePublished: string; // ISO 8601
  dateModified?: string;
  author?: { name: string; url?: string };
  image?: string;
  publisher: { name: string; logo?: string };
}

export function article(opts: ArticleOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: opts.author
      ? { "@type": "Person", name: opts.author.name, url: opts.author.url }
      : undefined,
    image: opts.image,
    publisher: {
      "@type": "Organization",
      name: opts.publisher.name,
      logo: opts.publisher.logo
        ? { "@type": "ImageObject", url: opts.publisher.logo }
        : undefined,
    },
  };
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface DatasetOptions {
  name: string;
  description: string;
  url: string;
  creator: { name: string; url: string };
  license?: string;
  keywords?: string[];
  variableMeasured?: string[];
}

export function dataset(opts: DatasetOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    creator: { "@type": "Organization", name: opts.creator.name, url: opts.creator.url },
    license: opts.license,
    keywords: opts.keywords,
    variableMeasured: opts.variableMeasured,
  };
}
