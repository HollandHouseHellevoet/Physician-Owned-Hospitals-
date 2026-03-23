import type { Metadata } from "next";
import { getStateData, ALL_STATE_CODES, TIER_1_STATES } from "@/lib/data";
import { generatePageMetadata, organizationJsonLd, datasetJsonLd } from "@/lib/seo";
import { PaywallOverlay } from "@/components/PaywallOverlay";

export function generateStaticParams() {
  return ALL_STATE_CODES.map((state) => ({ state }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string };
}): Metadata {
  const data = getStateData(params.state);
  return generatePageMetadata({
    title: `${data.name} Physician-Owned Hospitals | POH Intelligence | The Rojas Report`,
    description: `Intelligence on ${data.summary.totalListed} physician-owned hospitals in ${data.name}. ${data.summary.currentlyOperating} operating, ${data.summary.closedAcquired + data.summary.soldAcquired} lost since Section 6001.`,
    path: `/states/${data.code}/`,
  });
}

export default function StatePage({ params }: { params: { state: string } }) {
  const data = getStateData(params.state);
  const lost = data.summary.closedAcquired + data.summary.soldAcquired;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetJsonLd(data.name)),
        }}
      />

      <div className="bg-bg-deep">
        {/* Header */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl font-headline font-bold text-accent">
                {data.code}
              </span>
              <div>
                <h1 className="font-headline text-3xl sm:text-4xl font-bold text-text-primary">
                  {data.name}
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <span
                    className={`text-[10px] font-body font-semibold tracking-widest uppercase px-2 py-0.5 ${
                      data.conLaw
                        ? "bg-red-900/30 text-red-400 border border-red-900/50"
                        : "bg-emerald-900/30 text-emerald-400 border border-emerald-900/50"
                    }`}
                  >
                    {data.conLaw ? "CON LAW" : "NO CON LAW"}
                  </span>
                  <span className="text-text-muted text-xs font-body">
                    Tier {data.tier} &middot; ${data.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 MARKET OVERVIEW — FREE */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-badge mb-6">01 Market Overview</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="card p-6 text-center">
                <p className="text-3xl font-headline font-bold text-accent">
                  {data.summary.totalListed}
                </p>
                <p className="text-text-muted text-xs font-body mt-1">Total Built</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl font-headline font-bold text-accent">
                  {data.summary.currentlyOperating}
                </p>
                <p className="text-text-muted text-xs font-body mt-1">Operating</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl font-headline font-bold text-text-sub">
                  {data.summary.closedAcquired}
                </p>
                <p className="text-text-muted text-xs font-body mt-1">Closed/Acquired</p>
              </div>
              <div className="card p-6 text-center">
                <p className="text-3xl font-headline font-bold text-text-sub">
                  {data.summary.soldAcquired}
                </p>
                <p className="text-text-muted text-xs font-body mt-1">Sold/Acquired</p>
              </div>
            </div>

            {/* Attrition bar */}
            {data.summary.totalListed > 0 && (
              <div className="mb-10">
                <div className="flex justify-between text-xs font-body text-text-muted mb-1">
                  <span>Attrition Rate</span>
                  <span>{data.attritionRate}%</span>
                </div>
                <div className="h-2 bg-bg-card w-full">
                  <div
                    className="h-2 bg-accent"
                    style={{ width: `${data.attritionRate}%` }}
                  />
                </div>
              </div>
            )}

            {/* Brief narrative */}
            {data.brief ? (
              <div className="prose prose-invert max-w-3xl">
                {data.brief.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-sub text-base font-body leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl">
                <p className="text-text-sub text-base font-body leading-relaxed mb-4">
                  {data.name} has {data.summary.totalListed} physician-owned hospital{data.summary.totalListed !== 1 ? "s" : ""} tracked
                  in this database. Of those, {data.summary.currentlyOperating} {data.summary.currentlyOperating === 1 ? "remains" : "remain"} operational today.
                </p>
                {lost > 0 && (
                  <p className="text-text-sub text-base font-body leading-relaxed mb-4">
                    Since Section 6001 of the Affordable Care Act took effect in 2010,
                    {" "}{data.name} has lost {lost} physician-owned {lost === 1 ? "hospital" : "hospitals"},
                    representing a {data.attritionRate}% attrition rate.
                    {data.conLaw
                      ? ` The state's Certificate of Need law creates additional barriers to physician ownership.`
                      : ""}
                  </p>
                )}
                {data.summary.underDevelopment > 0 && (
                  <p className="text-text-sub text-base font-body leading-relaxed">
                    {data.summary.underDevelopment} {data.summary.underDevelopment === 1 ? "facility is" : "facilities are"} currently
                    under development in the state.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* PAYWALLED SECTIONS 02-05 */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* 02 Hospital Registry */}
              <div className="relative">
                <p className="section-badge mb-4">02 Hospital Registry</p>
                <div className="paywall-blur h-48 bg-bg-card p-6">
                  <div className="space-y-3 opacity-30">
                    <div className="h-4 bg-border w-3/4" />
                    <div className="h-4 bg-border w-1/2" />
                    <div className="h-4 bg-border w-2/3" />
                    <div className="h-4 bg-border w-3/5" />
                    <div className="h-4 bg-border w-1/2" />
                  </div>
                </div>
              </div>

              {/* 03 Section 6001 Impact */}
              <div className="relative">
                <p className="section-badge mb-4">03 Section 6001 Impact</p>
                <div className="paywall-blur h-48 bg-bg-card p-6">
                  <div className="space-y-3 opacity-30">
                    <div className="h-4 bg-border w-2/3" />
                    <div className="h-4 bg-border w-3/4" />
                    <div className="h-4 bg-border w-1/2" />
                  </div>
                </div>
              </div>

              {/* 04 Political Context */}
              <div className="relative">
                <p className="section-badge mb-4">04 Political Context</p>
                <div className="paywall-blur h-48 bg-bg-card p-6">
                  <div className="space-y-3 opacity-30">
                    <div className="h-4 bg-border w-3/5" />
                    <div className="h-4 bg-border w-2/3" />
                    <div className="h-4 bg-border w-1/2" />
                  </div>
                </div>
              </div>

              {/* 05 Investment Landscape */}
              <div className="relative">
                <p className="section-badge mb-4">05 Investment Landscape</p>
                <div className="paywall-blur h-48 bg-bg-card p-6">
                  <div className="space-y-3 opacity-30">
                    <div className="h-4 bg-border w-1/2" />
                    <div className="h-4 bg-border w-3/4" />
                    <div className="h-4 bg-border w-2/3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Paywall CTA */}
            <PaywallOverlay
              stateCode={data.code}
              stateName={data.name}
              hospitalCount={data.summary.totalListed}
              price={data.price}
              tier={data.tier}
            />
          </div>
        </section>
      </div>
    </>
  );
}
