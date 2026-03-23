import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-headline text-xl font-semibold text-text-primary">
              The Rojas Report
            </p>
            <p className="text-text-muted text-sm mt-1 font-body">
              POH Intelligence
            </p>
            <p className="text-text-sub text-sm mt-4 font-body leading-relaxed">
              Built for physicians, lawmakers, and every American who pays the bill.
            </p>
          </div>

          {/* Network */}
          <div>
            <h4 className="text-text-muted text-xs font-body font-semibold tracking-widest uppercase mb-4">
              Network
            </h4>
            <ul className="space-y-2">
              {[
                { label: "The Rojas Report", href: "https://rojasreport.com" },
                { label: "MedMerge", href: "https://medmerge.co" },
                { label: "PhyCap Fund", href: "https://phycapfund.com" },
                { label: "Physicians Led", href: "https://physiciansled.com" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-sub text-sm hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h4 className="text-text-muted text-xs font-body font-semibold tracking-widest uppercase mb-4">
              Intelligence
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Investigation", href: "/investigation/" },
                { label: "State Dossiers", href: "/states/TX/" },
                { label: "Data Explorer", href: "/data-explorer/" },
                { label: "Evidence", href: "/evidence/" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-sub text-sm hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Access / Social */}
          <div>
            <h4 className="text-text-muted text-xs font-body font-semibold tracking-widest uppercase mb-4">
              Access
            </h4>
            <ul className="space-y-2">
              {[
                { label: "X", href: "https://x.com/dutchrojas" },
                { label: "YouTube", href: "https://youtube.com/@DutchRojas" },
                { label: "Substack", href: "https://dutchrojas.substack.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/dutchrojas" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-sub text-sm hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-text-muted text-xs font-body">
            &copy; 2026 The Rojas Report. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
