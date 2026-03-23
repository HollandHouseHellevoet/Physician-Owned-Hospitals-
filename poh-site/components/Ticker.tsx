export function Ticker() {
  const text =
    "Section 6001 \u2014 Physician-Owned Hospital Ban \u2014 ACA 2010 \u00a0\u00a0\u00a0 265 Built Before the Ban \u00b7 104 Survive \u00b7 85 Eliminated \u00a0\u00a0\u00a0 RURAL Act Reintroduced March 2026 \u00a0\u00a0\u00a0 Texas: 55 Total \u00b7 24 Operating \u00b7 30 Lost \u00a0\u00a0\u00a0 House Energy & Commerce Health Subcommittee, Active \u00a0\u00a0\u00a0 ReCenter Hospital: First New POH in 15 Years, Baton Rouge, LA";

  return (
    <div className="bg-bg-deep border-b border-border overflow-hidden">
      <div className="animate-ticker whitespace-nowrap py-2 text-text-muted text-xs font-body tracking-wider">
        <span className="inline-block">{text}</span>
        <span className="inline-block ml-24">{text}</span>
      </div>
    </div>
  );
}
