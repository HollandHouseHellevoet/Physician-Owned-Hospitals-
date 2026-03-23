"use client";

import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/states/TX/", label: "States" },
    { href: "/investigation/", label: "Investigation" },
    { href: "/evidence/", label: "Evidence" },
    { href: "/about/", label: "About" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-text-primary">
            <span className="font-headline text-lg font-semibold">The Rojas Report</span>
            <span className="text-text-muted text-sm font-body hidden sm:inline">/</span>
            <span className="text-text-muted text-sm font-body hidden sm:inline">POH Intelligence</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-sub text-sm font-body hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/data-explorer/"
              className="btn-primary text-xs"
            >
              Access Intelligence
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-bg-deep border-t border-border">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-text-sub text-sm hover:text-text-primary border-b border-border"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/data-explorer/"
              className="block px-6 py-3 text-accent text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Access Intelligence
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-deep border-t border-border flex">
        <Link href="/" className="flex-1 py-3 text-center text-text-sub text-xs">
          <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth={1.5} d="M9 20V14h6v6m-9 1h12a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-6-6a1 1 0 00-1.414 0l-6 6A1 1 0 003 9.414V19a2 2 0 002 2z" />
          </svg>
          Map
        </Link>
        <Link href="/states/TX/" className="flex-1 py-3 text-center text-text-sub text-xs">
          <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          States
        </Link>
        <Link href="/investigation/" className="flex-1 py-3 text-center text-text-sub text-xs">
          <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Investigation
        </Link>
        <Link href="/data-explorer/" className="flex-1 py-3 text-center text-accent text-xs font-semibold">
          <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Access
        </Link>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
