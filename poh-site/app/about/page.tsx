import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Dutch Rojas | The Rojas Report",
  description:
    "Dutch Rojas: twenty years in healthcare markets. Founder of MedMerge, Managing Partner of PhyCap Fund, Board Member of Physician Led Healthcare for America.",
  path: "/about/",
});

export default function AboutPage() {
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
            <p className="section-badge mb-4">About</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Dutch Rojas
            </h1>
            <p className="text-text-sub text-lg font-body leading-relaxed">
              Twenty years in healthcare markets. The credentials are real.
              The agenda is transparent.
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">01 The Analyst</p>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                Dutch Rojas has spent two decades at the intersection of healthcare, capital
                markets, and physician entrepreneurship. His work centers on one thesis:
                physician ownership produces better hospitals, and the policies that restrict
                it are the product of incumbent lobbying, not patient protection.
              </p>
              <p>
                This site, The Rojas Report POH Intelligence, is the most comprehensive
                public record of physician-owned hospitals in the United States. It tracks
                every facility built before and after the Section 6001 ban, documents what
                was lost, and provides state-level intelligence for physicians, lawmakers,
                investors, and policy analysts.
              </p>
              <p>
                The data speaks. The record is public. The analysis is available to anyone
                willing to read it.
              </p>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">02 Roles</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-8">
                <h3 className="font-headline text-xl font-bold text-accent mb-2">MedMerge</h3>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-3">
                  Founder
                </p>
                <p className="text-text-sub text-sm font-body leading-relaxed">
                  Physician transaction advisory. Helping physicians navigate acquisitions,
                  divestitures, and partnership structures in an increasingly consolidated
                  healthcare market.
                </p>
                <a
                  href="https://medmerge.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-body mt-4 inline-block hover:underline"
                >
                  medmerge.co &rarr;
                </a>
              </div>
              <div className="card p-8">
                <h3 className="font-headline text-xl font-bold text-accent mb-2">PhyCap Fund</h3>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-3">
                  Managing Partner
                </p>
                <p className="text-text-sub text-sm font-body leading-relaxed">
                  A physician-aligned investment vehicle. Capital deployed in partnership with
                  physicians, not against them. Focused on healthcare facilities, services, and
                  physician-led ventures.
                </p>
                <a
                  href="https://phycapfund.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-body mt-4 inline-block hover:underline"
                >
                  phycapfund.com &rarr;
                </a>
              </div>
              <div className="card p-8">
                <h3 className="font-headline text-xl font-bold text-accent mb-2">PHA</h3>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-3">
                  Board Member
                </p>
                <p className="text-text-sub text-sm font-body leading-relaxed">
                  Physician Led Healthcare for America. The national organization advocating
                  for the repeal of Section 6001 and the restoration of physician hospital ownership
                  rights.
                </p>
                <a
                  href="https://physiciansled.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-body mt-4 inline-block hover:underline"
                >
                  physiciansled.com &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Thesis */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">03 The Thesis</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              Physician ownership works. The ban does not.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                The data is not ambiguous. Physician-owned hospitals charge less. They achieve
                higher patient satisfaction. They deliver comparable or better clinical outcomes.
                The argument for banning them was always about protecting incumbent market share,
                not about protecting patients.
              </p>
              <p>
                Section 6001 was written by competitors. It was sold as reform. It was consolidation
                policy dressed in patient safety language. Sixteen years later, the evidence against
                the ban has only grown stronger.
              </p>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">04 Connect</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "X", href: "https://x.com/dutchrojas" },
                { label: "YouTube", href: "https://youtube.com/@DutchRojas" },
                { label: "Substack", href: "https://dutchrojas.substack.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/dutchrojas" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 text-center hover:border-accent transition-colors"
                >
                  <p className="text-text-primary text-sm font-body font-semibold">
                    {link.label}
                  </p>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-text-muted text-sm font-body mb-2">Intelligence inquiries</p>
              <a
                href="mailto:intel@rojasreport.com"
                className="text-accent text-lg font-body hover:underline"
              >
                intel@rojasreport.com
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
              Read the investigation.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investigation/" className="btn-primary">
                Section 6001 Investigation
              </Link>
              <Link href="/data-explorer/" className="btn-outline">
                Data Explorer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
