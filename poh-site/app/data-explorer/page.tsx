import type { Metadata } from "next";
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo";
import { getAllStatesData, STATS } from "@/lib/data";
import { DataExplorerClient } from "@/components/DataExplorerClient";

export const metadata: Metadata = generatePageMetadata({
  title: "POH Data Explorer | Physician-Owned Hospital Database | The Rojas Report",
  description:
    "Explore the physician-owned hospital database. Filter by state, specialty, and status. Aggregate data on 189 hospitals across 32 states.",
  path: "/data-explorer/",
});

export default function DataExplorerPage() {
  const states = getAllStatesData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />

      <div className="bg-bg-deep min-h-screen">
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-4">Data Explorer</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Physician-Owned Hospital Database
            </h1>
            <p className="text-text-sub text-lg font-body">
              {STATS.trackedInDatabase} hospitals tracked across {STATS.statesTracked} states.
              Aggregate counts shown below. Hospital-level records require paid access.
            </p>
          </div>
        </section>

        {/* Aggregate stats */}
        <section className="py-10 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="card p-4 text-center">
                <p className="text-2xl font-headline font-bold text-accent">{STATS.totalBuilt}</p>
                <p className="text-text-muted text-xs font-body">Total Built</p>
              </div>
              <div className="card p-4 text-center">
                <p className="text-2xl font-headline font-bold text-accent">{STATS.currentlyOperating}</p>
                <p className="text-text-muted text-xs font-body">Operating</p>
              </div>
              <div className="card p-4 text-center">
                <p className="text-2xl font-headline font-bold text-text-sub">{STATS.lostSinceSection6001}</p>
                <p className="text-text-muted text-xs font-body">Eliminated</p>
              </div>
              <div className="card p-4 text-center">
                <p className="text-2xl font-headline font-bold text-text-sub">{STATS.statesWithActivePOHs}</p>
                <p className="text-text-muted text-xs font-body">States Active</p>
              </div>
              <div className="card p-4 text-center">
                <p className="text-2xl font-headline font-bold text-text-sub">{STATS.statesTracked}</p>
                <p className="text-text-muted text-xs font-body">States Tracked</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive filter client component */}
        <DataExplorerClient
          states={states.map((s) => ({
            code: s.code,
            name: s.name,
            totalListed: s.summary.totalListed,
            currentlyOperating: s.summary.currentlyOperating,
            closed: s.summary.closedAcquired,
            sold: s.summary.soldAcquired,
            underDevelopment: s.summary.underDevelopment,
            conLaw: s.conLaw,
            attritionRate: s.attritionRate,
            tier: s.tier,
            price: s.price,
          }))}
        />
      </div>
    </>
  );
}
