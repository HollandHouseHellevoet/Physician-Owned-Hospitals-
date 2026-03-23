"use client";

export function PaywallOverlay({
  stateCode,
  stateName,
  hospitalCount,
  price,
  tier,
}: {
  stateCode: string;
  stateName: string;
  hospitalCount: number;
  price: number;
  tier: 1 | 2;
}) {
  const handleCheckout = (priceType: "state" | "allAccess") => {
    // Placeholder: Stripe checkout will be configured with live keys
    const message =
      priceType === "state"
        ? `Stripe checkout for ${stateName} dossier ($${price}) will be configured with live Stripe keys.`
        : "Stripe checkout for All-Access ($6,000/year) will be configured with live Stripe keys.";
    alert(message);
  };

  return (
    <div className="mt-12 card p-8 border border-accent/30 text-center">
      <p className="text-text-primary text-lg font-body font-semibold mb-2">
        {hospitalCount} hospital records. Full state brief.
      </p>
      <p className="text-text-muted text-sm font-body mb-6">
        Unlock the complete {stateName} dossier with hospital-level data,
        Section 6001 impact analysis, political context, and investment landscape.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => handleCheckout("state")} className="btn-primary">
          {stateName} Dossier &mdash; ${price}
        </button>
        <button onClick={() => handleCheckout("allAccess")} className="btn-outline">
          All-Access &mdash; $6,000/year
        </button>
      </div>
      <p className="mt-4">
        <a
          href="mailto:intel@rojasreport.com"
          className="text-text-muted text-xs font-body hover:text-accent transition-colors"
        >
          Enterprise access &rarr; intel@rojasreport.com
        </a>
      </p>
    </div>
  );
}
