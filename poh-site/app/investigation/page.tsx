import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo";
import { STATS } from "@/lib/data";

export const metadata: Metadata = generatePageMetadata({
  title: "Section 6001: The Ban on Physician-Owned Hospitals | The Rojas Report",
  description:
    "A complete investigation into Section 6001 of the ACA, the ban on physician-owned hospitals, who wrote it, why, and what it destroyed.",
  path: "/investigation/",
});

export default function InvestigationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />

      <div className="bg-bg-deep">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">Investigation</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Section 6001: The Ban on{" "}
              <span className="text-accent">Physician-Owned Hospitals</span>
            </h1>
            <p className="text-text-sub text-lg font-body leading-relaxed">
              On March 23, 2010, one provision buried in the Affordable Care Act
              permanently banned new physician-owned hospitals from participating in
              Medicare and Medicaid. This is the record of who wrote it, why, and what
              it destroyed.
            </p>
          </div>
        </section>

        {/* The Ban */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">01 The Ban</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              One sentence. No sunset. No review.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                Section 6001 of the Patient Protection and Affordable Care Act did something
                unprecedented: it banned an entire category of hospital ownership from federal
                healthcare programs. Not temporarily. Not conditionally. Permanently.
              </p>
              <p>
                New physician-owned hospitals were barred from billing Medicare or Medicaid.
                Existing physician-owned hospitals were frozen. They could not expand. They could
                not add beds. They could not build new operating rooms. The competitive threat they
                represented to large hospital systems was neutralized in a single legislative act.
              </p>
              <p>
                The provision included no sunset clause. No mechanism for periodic review. No
                pathway for exception. In the 16 years since, no new physician-owned hospital has
                been able to fully participate in Medicare, until ReCenter Hospital in Baton Rouge
                found a narrow path in 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Who Wrote It */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">02 Who Wrote It</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              The Federation of American Hospitals
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                The FAH represents the interests of investor-owned and for-profit hospital systems.
                These are the entities that competed directly with physician-owned hospitals. They
                are the entities that stood to gain the most from eliminating that competition.
              </p>
              <p>
                The FAH lobbied aggressively for the physician-ownership ban. They argued that
                physician-owned hospitals cherry-picked profitable patients, leaving complex and
                costly cases to community hospitals. The data did not support this claim, but the
                lobbying succeeded.
              </p>
              <p>
                The hospitals that competed with physician-owned facilities wrote the language
                that banned them. It was sold as patient protection. It was market protection.
              </p>
            </div>
          </div>
        </section>

        {/* Stated Justification vs Data */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">03 Stated Justification vs. Data</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              The evidence contradicts the rationale.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                Proponents of Section 6001 claimed physician-owned hospitals increased costs,
                cherry-picked patients, and created conflicts of interest. Peer-reviewed research
                published in BMJ and JAMA Network Open tells a different story.
              </p>
              <p>
                Physician-owned hospitals charge 17-34% less for commercial procedures. They score
                3.9 in patient experience versus 3.2 for system hospitals. They could save Medicare
                $1.1 billion annually. Even Blue Cross Blue Shield Association, in a 2025 letter to
                the DOJ, stated that Congress should consider exceptions to these restrictions.
              </p>
              <p>
                The stated justification was patient safety. The actual effect was the elimination
                of the most cost-effective, highest-rated competitors in American healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* The Attrition */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">04 The Attrition</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              {STATS.totalBuilt} to {STATS.currentlyOperating}. In 16 years.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                Before Section 6001, {STATS.totalBuilt} physician-owned hospitals operated across
                the United States. Today, {STATS.currentlyOperating} remain. {STATS.lostSinceSection6001}{" "}
                have been eliminated.
              </p>
              <p>
                The ban did not freeze competition. It created conditions for a slow-motion extinction.
                Unable to expand, unable to modernize, unable to add capacity, physician-owned hospitals
                were forced into a position where the only options were survive in place or sell.
              </p>
              <p>
                Of the 161 that did not survive, 65% closed entirely. 35% were acquired, often by the
                very hospital systems that lobbied for the ban. The policy did not merely restrict growth.
                It engineered consolidation.
              </p>
            </div>
          </div>
        </section>

        {/* The Survivors */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">05 The Survivors</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              {STATS.currentlyOperating} remain. Frozen, but operating.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                The {STATS.currentlyOperating} physician-owned hospitals that continue to operate
                do so under extraordinary constraints. They cannot add a single bed. They cannot
                build a new operating room. They compete against systems with billions in capital
                and no such restrictions.
              </p>
              <p>
                Despite this, they consistently outperform on quality, patient satisfaction, and
                cost metrics. The survivors are proof that physician ownership works. The ban is
                proof that it was never about quality.
              </p>
            </div>
          </div>
        </section>

        {/* Path to Repeal */}
        <section className="py-16 bg-bg-body">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">06 Path to Repeal</p>
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-6">
              The RURAL Act and what comes next.
            </h2>
            <div className="space-y-4 text-text-sub text-base font-body leading-relaxed">
              <p>
                The RURAL Act, reintroduced in March 2026, would create exceptions to Section 6001
                for rural and underserved communities. The House Energy and Commerce Health
                Subcommittee is actively considering the legislation.
              </p>
              <p>
                The bipartisan support is growing. The data is on the side of repeal. The Blue Cross
                Blue Shield Association DOJ letter was a turning point, the single most powerful
                third-party endorsement for reconsidering the ban.
              </p>
              <p>
                Full repeal remains the goal. Partial exceptions are a start. Every hospital that
                opens under a new framework is evidence that Section 6001 was never about protecting
                patients. It was about protecting market share.
              </p>
            </div>
          </div>
        </section>

        {/* ReCenter Hospital */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">07 The Breakthrough</p>
            <div className="card p-8 border-l-4 border-l-accent">
              <h2 className="font-headline text-3xl font-bold text-accent mb-2">
                ReCenter Hospital
              </h2>
              <p className="text-text-muted text-sm font-body mb-6">
                Baton Rouge, Louisiana &middot; Opened May 1, 2025
              </p>
              <p className="text-text-sub text-base font-body leading-relaxed mb-4">
                The first new physician-owned hospital in 15 years. Founded by Dr. Luke Cusimano III
                and Dr. Taylor Theunissen, with Dr. Everett Bonner as CMO. Specializing in breast
                oncology and advanced reconstruction.
              </p>
              <p className="text-text-sub text-base font-body leading-relaxed mb-4">
                43,000 square feet. 10 inpatient rooms. 4 operating rooms. CIHQ accredited.
              </p>
              <p className="text-text-sub text-base font-body leading-relaxed">
                Louisiana has no Certificate of Need law. ReCenter navigated Section 6001 by initially
                operating outside Medicare. A narrow path, but proof that physician entrepreneurship
                cannot be entirely legislated away.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-bg-body text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
              Explore the data yourself.
            </h2>
            <p className="text-text-sub text-base font-body mb-8">
              {STATS.trackedInDatabase} hospitals. {STATS.statesTracked} states. Every record tracked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/data-explorer/" className="btn-primary">
                Data Explorer
              </Link>
              <Link href="/evidence/" className="btn-outline">
                View the Evidence
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
