import { jsonld } from "@rojasreport/seo";
import { desk } from "../desk.config";

/**
 * Hub landing — placeholder.
 * Replace this file's body with the pasted hub design when ready.
 * The chassis (header, context rail, footer) is wired in layout.tsx.
 */
export default function HomePage() {
  const orgLd = jsonld.organization({
    name: "The Rojas Report",
    url: desk.domain,
    sameAs: [
      "https://x.com/dutchrojas",
      "https://youtube.com/@DutchRojas",
      "https://dutchrojas.substack.com",
      "https://linkedin.com/in/dutchrojas",
    ],
  });

  const siteLd = jsonld.website({
    name: "Rojas Report",
    url: desk.domain,
    searchUrl: `${desk.domain}/search/?q={search_term_string}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
      />

      <main className="doc">
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: "56px 0 16px",
            lineHeight: 1.02,
          }}
        >
          Standing intelligence on{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            who pays whom
          </em>{" "}
          in American healthcare.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--dim)",
            maxWidth: 720,
            lineHeight: 1.55,
            margin: "0 0 48px",
          }}
        >
          A reference console, not a newsfeed, for the lobbyist, the physician,
          the lawmaker, and the voter asking the same question from four angles.
        </p>
        <p className="mono" style={{ marginTop: 48 }}>
          PLACEHOLDER · paste hub design here
        </p>
      </main>
    </>
  );
}
