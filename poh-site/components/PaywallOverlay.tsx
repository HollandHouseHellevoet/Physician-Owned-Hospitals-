// v2: Direct Stripe payment links — no JS checkout, no alerts, no API keys
const TIER_1_STATES = [
  "TX", "LA", "OK", "KS", "IN", "OH", "SD", "CA", "AZ", "PA", "WI", "NE", "AR", "ID", "CO",
];

const PAYMENT_LINKS = {
  tier1: "https://buy.stripe.com/7sY28r75ag9sf0y3ttdjO00",
  tier2: "https://buy.stripe.com/fZudR93SY5uO8Ca8NNdjO01",
  allAccess: "https://buy.stripe.com/eVq7sL0GMf5o4lU5BBdjO02",
};

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
  const stateLink = tier === 1 ? PAYMENT_LINKS.tier1 : PAYMENT_LINKS.tier2;

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
        <a href={stateLink} className="btn-primary">
          {stateName} Dossier &mdash; ${price}
        </a>
        <a href={PAYMENT_LINKS.allAccess} className="btn-outline">
          All-Access &mdash; $3,500/year
        </a>
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
