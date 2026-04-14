import Link from "next/link";

export function Footer() {
  const sisters = [
    { label: "Console", href: "https://rojasreport.com", amber: false },
    { label: "Ways & Means", href: "https://rojasreport.com", amber: false },
    { label: "POH", href: "https://poh.rojasreport.com", amber: true },
    { label: "Academic", href: "https://rojasreport.com", amber: false },
    { label: "FAH", href: "https://fah.rojasreport.com", amber: false },
    { label: "AHA", href: "https://rojasreport.com", amber: false },
    { label: "HAC", href: "https://rojasreport.com", amber: false },
    { label: "340B", href: "https://rojasreport.com", amber: false },
  ];

  const intelligence = [
    { label: "Investigation", href: "/investigation/" },
    { label: "State Dossiers", href: "/states/" },
    { label: "Data Explorer", href: "/data-explorer/" },
    { label: "Evidence", href: "/evidence/" },
  ];

  const network = [
    { label: "The Rojas Report", href: "https://rojasreport.com" },
    { label: "FAH Report", href: "https://fah.rojasreport.com" },
    { label: "MedMerge", href: "https://medmerge.co" },
    { label: "PhyCap Fund", href: "https://phycapfund.com" },
    { label: "Physicians Led", href: "https://physiciansled.com" },
  ];

  const follow = [
    { label: "X", href: "https://x.com/dutchrojas" },
    { label: "YouTube", href: "https://youtube.com/@DutchRojas" },
    { label: "Substack", href: "https://dutchrojas.substack.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dutchrojas" },
  ];

  return (
    <footer
      className="pb-20 md:pb-0"
      style={{
        backgroundColor: "#0A0A0B",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#F5F5F4",
      }}
    >
      {/* Sister-sites strip */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase mr-2"
            style={{ color: "#8A8A88" }}
          >
            Desks
          </span>
          {sisters.map((s) => {
            const isExternal = s.href.startsWith("http");
            const className =
              "font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 transition-colors";
            const style: React.CSSProperties = s.amber
              ? {
                  color: "#FF6A1F",
                  border: "1px solid #FF6A1F",
                  backgroundColor: "rgba(255,106,31,0.08)",
                }
              : {
                  color: "#8A8A88",
                  border: "1px solid rgba(255,255,255,0.14)",
                };
            return isExternal ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                {s.label}
              </a>
            ) : (
              <Link
                key={s.label}
                href={s.href}
                className={className}
                style={style}
              >
                {s.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Four-column grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="font-headline text-2xl font-semibold"
              style={{ color: "#F5F5F4" }}
            >
              Rojas Report
            </p>
            <p
              className="font-mono text-[10px] tracking-[0.18em] uppercase mt-3 inline-block px-2 py-1"
              style={{
                color: "#FF6A1F",
                border: "1px solid rgba(255,106,31,0.4)",
              }}
            >
              POH Desk
            </p>
            <p
              className="font-body text-sm mt-4 leading-relaxed"
              style={{ color: "#8A8A88" }}
            >
              Standing intelligence on physician-owned hospitals in America.
            </p>
          </div>

          {/* Intelligence */}
          <div>
            <h4
              className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#8A8A88" }}
            >
              Intelligence
            </h4>
            <ul className="space-y-2">
              {intelligence.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm transition-colors"
                    style={{ color: "#F5F5F4" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4
              className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#8A8A88" }}
            >
              Network
            </h4>
            <ul className="space-y-2">
              {network.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm transition-colors"
                    style={{ color: "#F5F5F4" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4
              className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#8A8A88" }}
            >
              Follow
            </h4>
            <ul className="space-y-2">
              {follow.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm transition-colors"
                    style={{ color: "#F5F5F4" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom meta bar */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p
          className="font-mono text-[11px] tracking-[0.08em] uppercase"
          style={{ color: "#8A8A88" }}
        >
          © 2026 The Rojas Report
        </p>
        <p
          className="font-mono text-[11px] tracking-[0.08em] uppercase"
          style={{ color: "#8A8A88" }}
        >
          Standing Intelligence · Physician-Owned Hospitals
        </p>
      </div>
    </footer>
  );
}
