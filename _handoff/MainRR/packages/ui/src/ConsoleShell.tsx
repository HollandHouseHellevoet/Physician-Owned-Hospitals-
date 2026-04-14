import * as React from "react";
import Link from "next/link";
import type { DeskConfig } from "./Desk";
import { DiamondMark } from "./DiamondMark";
import { QuestionsTicker } from "./QuestionsTicker";
import { Breadcrumb } from "./Breadcrumb";
import { CommandPalette } from "./CommandPalette";
import { ChassisFooter } from "./ChassisFooter";
import { DEFAULT_QUESTIONS } from "./SisterSites";

/**
 * ConsoleShell — the canonical chassis.
 * Wraps every page on every Desk (rojasreport.com + 23 subdomains).
 * Parameterized by DeskConfig. See mockups/chassis.html for the spec.
 */
export function ConsoleShell({
  desk,
  children,
}: {
  desk: DeskConfig;
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        {/* rr-top · brand bar */}
        <div className="rr-top">
          <div className="rr-brand">
            <a href="https://rojasreport.com" className="flex items-center gap-3">
              <DiamondMark />
              <span className="wordmark">ROJASREPORT</span>
            </a>
            <span className="sep">//</span>
            <span className="subdomain">
              {desk.subdomain}
              {desk.deskNumber ? ` · ${desk.deskNumber}` : ""}
            </span>
          </div>

          <nav className="rr-nav">
            {desk.nav.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.active ? "active" : ""}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={link.active ? "active" : ""}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <CommandPalette />
        </div>

        {/* rr-context · questions (hub) or breadcrumb (desk) */}
        {desk.contextMode === "questions" ? (
          <QuestionsTicker questions={desk.questions ?? DEFAULT_QUESTIONS} />
        ) : (
          <Breadcrumb crumbs={desk.crumbs ?? []} />
        )}

        {/* Optional third rail · desk-local sub-nav */}
        {desk.subnav && desk.subnav.length > 0 && (
          <div className="rr-subnav">
            <div className="rr-subnav-inner">
              {desk.subnav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.active ? "active" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <ChassisFooter currentDeskSlug={desk.currentDeskSlug} />
    </>
  );
}
