import * as React from "react";
import { DiamondMark } from "./DiamondMark";
import { SISTER_SITES, type DeskSlug } from "./SisterSites";

/**
 * Canonical footer per mockups/chassis.html.
 * Three zones:
 *   .rr-sisters   — 23-desk switcher strip with current/live/soon states
 *   .rr-cols      — 4-col grid (Motto · Readers · Registries · Method & Legal)
 *   .rr-foot-meta — small mark + tagline + version/legal micro-links
 */
export function ChassisFooter({
  currentDeskSlug,
}: {
  currentDeskSlug: DeskSlug | null;
}) {
  return (
    <footer>
      {/* Sister sites strip */}
      <div className="rr-sisters">
        <div className="head">SISTER SITES · 23 DESKS OF STANDING INTELLIGENCE</div>
        <div className="strip">
          {SISTER_SITES.map((s) => {
            const classes = [
              s.slug === currentDeskSlug ? "current" : "",
              !s.live ? "soon" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <a
                key={s.slug}
                href={s.live ? s.href : undefined}
                className={classes}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Four-column grid */}
      <div className="rr-cols">
        <div className="col about">
          <p className="motto">
            Standing intelligence on <em>who pays whom</em> in American healthcare.
          </p>
          <p>
            A reference console, not a newsfeed, for the lobbyist, the physician,
            the lawmaker, and the voter asking the same question from four angles.
          </p>
        </div>

        <div className="col">
          <h4>FOR READERS</h4>
          <ul>
            <li><a href="https://rojasreport.com/readers/lobbyist/">The Lobbyist</a></li>
            <li><a href="https://rojasreport.com/readers/physician/">The Physician</a></li>
            <li><a href="https://rojasreport.com/readers/lawmaker/">The Lawmaker</a></li>
            <li><a href="https://rojasreport.com/readers/voter/">The Voter</a></li>
            <li><a href="https://rojasreport.com/use-cases/">Use cases →</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>REGISTRIES</h4>
          <ul>
            <li><a href="https://waysandmeans.rojasreport.com">Ways &amp; Means</a></li>
            <li><a href="https://poh.rojasreport.com">POH · Physician-Owned Hospitals</a></li>
            <li><a href="https://academic.rojasreport.com">Academic · AMCs</a></li>
            <li><a href="https://fah.rojasreport.com">FAH / AHA / HAC</a></li>
            <li><a href="https://con-laws.rojasreport.com">CON Laws</a></li>
            <li><a href="https://rojasreport.com/desks/">All 23 desks →</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>METHOD &amp; LEGAL</h4>
          <ul>
            <li><a href="https://rojasreport.com/method/">Methodology</a></li>
            <li><a href="https://rojasreport.com/corrections/">Corrections</a></li>
            <li><a href="https://rojasreport.com/attribution/">Attribution</a></li>
            <li><a href="https://rojasreport.com/privacy/">Privacy</a></li>
            <li><a href="https://rojasreport.com/terms/">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* Foot meta */}
      <div className="rr-foot-meta">
        <div className="left">
          <DiamondMark size={16} borderWidth={1} fontSize={7} />
          <span>ROJASREPORT // STANDING INTELLIGENCE · © 2026</span>
        </div>
        <div className="right">
          <a href="https://rojasreport.com/about/">VERSION 2026.Q2</a>
          <a href="https://rojasreport.com/press/">PRESS</a>
          <a href="mailto:intel@rojasreport.com">CONTACT</a>
          <a href="https://github.com/HollandHouseHellevoet" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>
      </div>
    </footer>
  );
}
