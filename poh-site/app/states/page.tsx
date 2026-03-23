import type { Metadata } from "next";
import { StateCard } from "@/components/StateCard";
import { getAllStatesData } from "@/lib/data";
import { generatePageMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "All 32 States | Physician-Owned Hospital Intelligence | The Rojas Report",
  description:
    "Physician-owned hospital intelligence across 32 states. Browse every state dossier with operating counts, attrition rates, and Section 6001 impact data.",
  path: "/states/",
});

export default function StatesIndexPage() {
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
            <p className="section-badge mb-4">State Intelligence</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              32 states. Every physician-owned hospital tracked.
            </h1>
            <p className="text-text-sub text-lg font-body">
              Select a state to view its full dossier, including hospital counts,
              attrition rates, and Section 6001 impact analysis.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {states
                .sort((a, b) => b.summary.totalListed - a.summary.totalListed)
                .map((state) => (
                  <StateCard key={state.code} state={state} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
