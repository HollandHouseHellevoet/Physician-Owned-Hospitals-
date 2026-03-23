import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "The Evidence Against the Ban | POH Research | The Rojas Report",
  description:
    "Peer-reviewed research on physician-owned hospitals: BMJ, JAMA Network Open, Mercatus, AEI, and the BCBSA DOJ letter.",
  path: "/evidence/",
});

const studies = [
  {
    stat: "17-34%",
    title: "Lower Commercial Prices",
    source: "BMJ, JAMA Network Open",
    description:
      "Multiple peer-reviewed studies demonstrate that physician-owned hospitals charge significantly less than system-owned facilities for comparable procedures. The price differential ranges from 17% to 34% depending on procedure type and market.",
  },
  {
    stat: "3.9",
    title: "Patient Experience Rating",
    source: "CMS HCAHPS Data",
    description:
      "Physician-owned hospitals consistently achieve patient experience scores of 3.9 out of 5, compared to the 3.2 average for system-owned hospitals. This gap persists across geographic regions and specialty types.",
  },
  {
    stat: "$1.1B",
    title: "Potential Annual Medicare Savings",
    source: "Policy Analysis",
    description:
      "Expanding physician-owned hospital participation in Medicare could generate $1.1 billion in annual savings through competitive pricing pressure and more efficient care delivery models.",
  },
  {
    stat: "Lower",
    title: "Complication Rates",
    source: "Mercatus Center, George Mason University",
    description:
      "Research from the Mercatus Center finds that physician-owned hospitals demonstrate lower complication rates and shorter length-of-stay metrics compared to non-physician-owned peers performing the same procedures.",
  },
  {
    stat: "Higher",
    title: "Quality Scores Across Metrics",
    source: "American Enterprise Institute",
    description:
      "AEI analysis of CMS quality data shows physician-owned hospitals outperform on readmission rates, hospital-acquired infection rates, and overall quality composite scores. The ownership model itself appears to drive quality improvement.",
  },
];

export default function EvidencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />

      <div className="bg-bg-deep min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">Evidence</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              The Evidence Against the Ban
            </h1>
            <p className="text-text-sub text-lg font-body leading-relaxed">
              Peer-reviewed research, CMS data, and independent policy analysis all point
              in the same direction: physician-owned hospitals deliver better care at lower cost.
              The ban was never supported by evidence.
            </p>
          </div>
        </section>

        {/* BCBSA DOJ Letter - Featured */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">01 The Most Powerful Endorsement</p>
            <div className="card p-8 border-l-4 border-l-accent">
              <blockquote className="font-headline text-2xl sm:text-3xl font-bold text-text-primary mb-6 leading-snug">
                &ldquo;Congress should consider exceptions to restrictions on
                physician-owned hospitals&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <p className="text-accent text-sm font-body font-semibold">
                  Blue Cross Blue Shield Association
                </p>
                <p className="text-text-muted text-sm font-body">
                  Letter to the Department of Justice
                </p>
                <p className="text-text-muted text-sm font-body">May 27, 2025</p>
              </div>
              <p className="text-text-sub text-base font-body leading-relaxed mt-6">
                When the largest health insurance association in the United States tells the
                Department of Justice that the ban on physician-owned hospitals needs exceptions,
                the policy argument is settled. BCBSA represents 35 Blue Cross and Blue Shield
                companies covering more than 115 million Americans. Their endorsement of
                reconsidering Section 6001 is the single most powerful third-party validation
                that the ban harms, rather than protects, the healthcare market.
              </p>
            </div>
          </div>
        </section>

        {/* Studies */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">02 The Research</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-8">
              What the data actually shows.
            </h2>
            <div className="space-y-6">
              {studies.map((study, i) => (
                <div key={i} className="card p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="sm:w-32 flex-shrink-0">
                      <p className="text-3xl font-headline font-bold text-accent">
                        {study.stat}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text-primary text-lg font-body font-semibold mb-1">
                        {study.title}
                      </h3>
                      <p className="text-text-muted text-xs font-body mb-3">
                        {study.source}
                      </p>
                      <p className="text-text-sub text-sm font-body leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-bg-body text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
              The evidence is clear. The ban is not.
            </h2>
            <p className="text-text-sub text-base font-body mb-8">
              Read the full investigation into who wrote Section 6001 and why.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investigation/" className="btn-primary">
                Read the Investigation
              </Link>
              <Link href="/data-explorer/" className="btn-outline">
                Explore the Data
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
