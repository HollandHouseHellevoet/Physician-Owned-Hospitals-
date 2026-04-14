"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const links = [
    { href: "/states/", label: "States" },
    { href: "/investigation/", label: "Investigation" },
    { href: "/evidence/", label: "Evidence" },
    { href: "/about/", label: "About" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(10,10,11,.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          color: "#F5F5F4",
        }}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Left: mark + wordmark + separator + POH badge */}
          <div className="flex items-center gap-3">
            <a
              href="https://rojasreport.com"
              className="flex items-center gap-3"
              style={{ color: "#F5F5F4" }}
            >
              {/* Amber diamond mark */}
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center"
                style={{
                  width: "22px",
                  height: "22px",
                  transform: "rotate(45deg)",
                  backgroundColor: "#FF6A1F",
                }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{
                    transform: "rotate(-45deg)",
                    color: "#0A0A0B",
                    lineHeight: 1,
                  }}
                >
                  R
                </span>
              </span>
              <span
                className="font-body font-semibold tracking-[0.18em] text-[13px] uppercase"
                style={{ color: "#F5F5F4" }}
              >
                Rojas Report
              </span>
            </a>
            <span
              className="font-mono text-sm"
              style={{ color: "#8A8A88" }}
              aria-hidden="true"
            >
              /
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase px-2 py-1"
              style={{
                color: "#FF6A1F",
                border: "1px solid rgba(255,106,31,0.4)",
              }}
            >
              POH
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-body text-sm transition-colors"
                  style={{
                    color: active ? "#F5F5F4" : "#8A8A88",
                    paddingBottom: "3px",
                    borderBottom: active
                      ? "2px solid #FF6A1F"
                      : "2px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/data-explorer/"
              className="font-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2 transition-colors"
              style={{
                color: "#FF6A1F",
                border: "1px solid #FF6A1F",
              }}
            >
              Access Intelligence
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "#F5F5F4" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="square"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Context rail */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8"
          style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          <div
            className="font-mono text-[11px] tracking-[0.08em] uppercase"
            style={{ color: "#8A8A88" }}
          >
            <span style={{ color: "#F5F5F4" }}>Console</span>
            <span className="mx-2" style={{ color: "#8A8A88" }}>
              ›
            </span>
            <span style={{ color: "#8A8A88" }}>
              Physician-Owned Hospitals
            </span>
          </div>
          <div
            className="font-mono text-[11px] tracking-[0.12em] uppercase"
            style={{ color: "#8A8A88" }}
          >
            <span>DESK</span>
            <span className="mx-1.5">·</span>
            <span style={{ color: "#FF6A1F" }}>POH</span>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: "#0A0A0B",
              borderTop: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 font-body text-sm"
                onClick={() => setOpen(false)}
                style={{
                  color: isActive(link.href) ? "#F5F5F4" : "#8A8A88",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/data-explorer/"
              className="block px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase font-semibold"
              onClick={() => setOpen(false)}
              style={{ color: "#FF6A1F" }}
            >
              Access Intelligence
            </Link>
          </div>
        )}
      </header>

      {/* Mobile bottom nav */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{
          backgroundColor: "#0A0A0B",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Link
          href="/"
          className="flex-1 py-3 text-center text-xs"
          style={{ color: "#8A8A88" }}
        >
          <svg
            className="w-5 h-5 mx-auto mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M9 20V14h6v6m-9 1h12a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-6-6a1 1 0 00-1.414 0l-6 6A1 1 0 003 9.414V19a2 2 0 002 2z"
            />
          </svg>
          Map
        </Link>
        <Link
          href="/states/"
          className="flex-1 py-3 text-center text-xs"
          style={{ color: "#8A8A88" }}
        >
          <svg
            className="w-5 h-5 mx-auto mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          States
        </Link>
        <Link
          href="/investigation/"
          className="flex-1 py-3 text-center text-xs"
          style={{ color: "#8A8A88" }}
        >
          <svg
            className="w-5 h-5 mx-auto mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Investigation
        </Link>
        <Link
          href="/data-explorer/"
          className="flex-1 py-3 text-center text-xs font-semibold"
          style={{ color: "#FF6A1F" }}
        >
          <svg
            className="w-5 h-5 mx-auto mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Access
        </Link>
      </div>
    </>
  );
}
