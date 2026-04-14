import * as React from "react";
import type { Crumb } from "./Desk";

/**
 * Desk/entity context-rail mode: breadcrumb trail.
 * Example: CONSOLE / WAYS & MEANS / HR 4183
 */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="rr-context">
      <span className="leader">LOCATION /</span>
      <div className="crumb">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          const cls = c.accent ? "accent" : "";
          const content = c.href && !isLast ? (
            <a href={c.href} className={cls}>{c.label}</a>
          ) : (
            <span className={cls} style={{ color: c.accent ? undefined : "#F5F5F4" }}>{c.label}</span>
          );
          return (
            <React.Fragment key={i}>
              {content}
              {!isLast && <span>/</span>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
