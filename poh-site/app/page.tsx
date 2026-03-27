import type { Metadata } from "next";
import Link from "next/link";
import { Ticker } from "@/components/Ticker";
import { StateCard } from "@/components/StateCard";
import { getAllStatesData, STATS } from "@/lib/data";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://poh.rojasreport.com/",
  },
  openGraph: {
    title: "Physician-Owned Hospital Intelligence | The Rojas Report",
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
    url: "https://poh.rojasreport.com/",
    type: "website",
    images: ["/images/hero-hospital.png"],
  },
};

export default function HomePage() {
  const states = getAllStatesData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />

      {/* Ticker */}
      <Ticker />

      {/* Hero */}
      <section
        className="min-h-[90vh] flex items-center justify-center relative"
        style={{
          backgroundImage: "url(/images/hero-hospital.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(26,42,58,0.6)" }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-text-primary">The Slow Death of </span>
            <br />
            <span className="text-accent">Physician-Owned Hospitals</span>
          </h1>
          <p className="mt-8 text-text-sub text-lg sm:text-xl font-body leading-relaxed max-w-2xl mx-auto">
            In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals.
            This is the complete record of what was built, what was lost, and what remains.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investigation/" className="btn-primary">
              Read the Investigation
            </Link>
            <Link href="/data-explorer/" className="btn-outline">
              Explore the Data
            </Link>
          </div>
        </div>
      </section>

      {/* 01 THE NUMBERS */}
      <section className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">01 The Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: STATS.totalBuilt, label: "Physician-Owned Hospitals Before the Ban" },
              { value: STATS.currentlyOperating, label: "Currently Operating" },
              { value: STATS.lostSinceSection6001, label: "Eliminated Since Section 6001" },
              { value: STATS.yearsOfBan, label: "Years of the Ban" },
            ].map((stat) => (
              <div key={stat.label} className="card text-center p-8">
                <p className="text-4xl sm:text-5xl font-headline font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-3 text-text-sub text-sm font-body leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 THE ATTRITION */}
      <section className="py-20 bg-bg-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">02 The Attrition</p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            265 before. 104 today.
          </h2>

          {/* Bar visualization */}
          <div className="mb-8 space-y-3">
            <div>
              <p className="text-text-muted text-xs font-body mb-1">2010: Before the Ban</p>
              <div className="h-10 bg-accent w-full flex items-center px-4">
                <span className="text-bg-deep text-sm font-body font-semibold">265</span>
              </div>
            </div>
            <div>
              <p className="text-text-muted text-xs font-body mb-1">2026: Today</p>
              <div
                className="h-10 bg-accent flex items-center px-4"
                style={{ width: `${(104 / 265) * 100}%` }}
              >
                <span className="text-bg-deep text-sm font-body font-semibold">104</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-text-sub text-base font-body leading-relaxed mb-4">
              The ban did not freeze competition. It created conditions for a slow-motion extinction.
            </p>
            <p className="text-text-sub text-base font-body leading-relaxed">
              Of the 161 that did not survive, 65% closed. 35% were acquired by the very systems that
              lobbied for the ban.
            </p>
          </div>
        </div>
      </section>

      {/* 03 THE THESIS */}
      <section className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">03 The Thesis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8">
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                The Ban
              </h3>
              <p className="text-text-sub text-sm font-body leading-relaxed">
                Section 6001, March 23, 2010. One sentence. No sunset. No review mechanism.
                New physician-owned hospitals were permanently barred from Medicare and Medicaid.
                Existing ones were frozen, unable to add a single bed or operating room.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                The Authors
              </h3>
              <p className="text-text-sub text-sm font-body leading-relaxed">
                The Federation of American Hospitals lobbied for it. Hospitals that competed with
                physician-owned facilities wrote the language. It was sold as patient protection.
                It was market protection.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                The Result
              </h3>
              <p className="text-text-sub text-sm font-body leading-relaxed">
                55% of physician-owned hospitals gone. Survivors cannot add a single bed or
                operating room. The ban did not protect patients. It protected incumbents from
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 THE BREAKTHROUGH */}
      <section className="py-20 bg-bg-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">04 The Breakthrough</p>
          <div className="card p-8 border-l-4 border-l-accent">
            <h3 className="font-headline text-3xl font-bold text-accent mb-2">
              ReCenter Hospital
            </h3>
            <p className="text-text-muted text-sm font-body mb-6">
              Baton Rouge, Louisiana &middot; Opened May 1, 2025
            </p>
            <p className="text-text-sub text-base font-body leading-relaxed mb-4">
              The first new physician-owned hospital in 15 years.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-1">
                  Founders
                </p>
                <p className="text-text-sub text-sm font-body">
                  Dr. Luke Cusimano III, Dr. Taylor Theunissen
                </p>
              </div>
              <div>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-1">
                  CMO
                </p>
                <p className="text-text-sub text-sm font-body">Dr. Everett Bonner</p>
              </div>
              <div>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-1">
                  Specialty
                </p>
                <p className="text-text-sub text-sm font-body">
                  Breast oncology and advanced reconstruction
                </p>
              </div>
              <div>
                <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-1">
                  Facility
                </p>
                <p className="text-text-sub text-sm font-body">
                  43,000 sq ft &middot; 10 inpatient rooms &middot; 4 operating rooms &middot; CIHQ accredited
                </p>
              </div>
            </div>
            <p className="text-text-sub text-sm font-body leading-relaxed">
              Louisiana has no CON law. ReCenter navigated Section 6001 by initially operating
              outside Medicare. A narrow path. But physician entrepreneurship cannot be entirely
              legislated away.
            </p>
          </div>
        </div>
      </section>

      {/* 05 THE EVIDENCE */}
      <section className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">05 The Evidence</p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            The data does not support the ban.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8">
              <p className="text-3xl font-headline font-bold text-accent mb-2">17-34%</p>
              <p className="text-text-primary text-sm font-body font-semibold mb-2">
                Lower Commercial Prices
              </p>
              <p className="text-text-muted text-xs font-body">BMJ, JAMA Network Open</p>
            </div>
            <div className="card p-8">
              <p className="text-3xl font-headline font-bold text-accent mb-2">3.9</p>
              <p className="text-text-primary text-sm font-body font-semibold mb-2">
                Patient Experience Rating vs 3.2 System Average
              </p>
              <p className="text-text-muted text-xs font-body">CMS data</p>
            </div>
            <div className="card p-8">
              <p className="text-3xl font-headline font-bold text-accent mb-2">$1.1B</p>
              <p className="text-text-primary text-sm font-body font-semibold mb-2">
                Potential Annual Medicare Savings
              </p>
              <p className="text-text-muted text-xs font-body">Policy analysis</p>
            </div>
            <div className="card p-8 border-l-4 border-l-accent">
              <p className="text-text-sub text-sm font-body leading-relaxed italic mb-4">
                &ldquo;Congress should consider exceptions to restrictions on physician-owned hospitals&rdquo;
              </p>
              <p className="text-text-muted text-xs font-body">
                Blue Cross Blue Shield Association, DOJ Letter, May 27, 2025
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/evidence/" className="btn-outline">
              View All Evidence &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 06 50-STATE INTELLIGENCE */}
      <section className="py-20 bg-bg-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">06 50-State Intelligence</p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            32 states. Every physician-owned hospital tracked.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {states
              .sort((a, b) => b.summary.totalListed - a.summary.totalListed)
              .map((state) => (
                <StateCard key={state.code} state={state} />
              ))}
          </div>
        </div>
      </section>

      {/* 07 THE ANALYST */}
      <section className="py-20 bg-bg-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-badge mb-4">07 The Analyst</p>
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Dutch Rojas
            </h2>
            <p className="text-text-sub text-base font-body leading-relaxed mb-4">
              Twenty years in healthcare markets. Founder of MedMerge, the physician transaction
              advisory. Managing Partner of PhyCap Fund, a physician-aligned investment vehicle.
              Board Member, Physician Led Healthcare for America.
            </p>
            <p className="text-text-sub text-base font-body leading-relaxed mb-6">
              The credentials are real. The agenda is transparent.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
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
                  className="btn-outline text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-text-muted text-xs font-body uppercase tracking-wider mb-3">
                Ecosystem
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "MedMerge", href: "https://medmerge.co" },
                  { label: "PhyCap Fund", href: "https://phycapfund.com" },
                  { label: "Physicians Led", href: "https://physiciansled.com" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-sub text-sm font-body hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
