"use client";

import { useState } from "react";
import Link from "next/link";

interface StateRow {
  code: string;
  name: string;
  totalListed: number;
  currentlyOperating: number;
  closed: number;
  sold: number;
  underDevelopment: number;
  conLaw: boolean;
  attritionRate: number;
  tier: 1 | 2;
  price: number;
}

export function DataExplorerClient({ states }: { states: StateRow[] }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");

  const filtered = states
    .filter((s) => {
      if (stateFilter !== "all" && s.code !== stateFilter) return false;
      if (statusFilter === "operating" && s.currentlyOperating === 0) return false;
      if (statusFilter === "closed" && s.closed === 0 && s.sold === 0) return false;
      if (statusFilter === "development" && s.underDevelopment === 0) return false;
      return true;
    })
    .sort((a, b) => b.totalListed - a.totalListed);

  const totalShown = filtered.reduce((acc, s) => acc + s.totalListed, 0);
  const operatingShown = filtered.reduce((acc, s) => acc + s.currentlyOperating, 0);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div>
            <label className="text-text-muted text-xs font-body block mb-1">State</label>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="bg-bg-card border border-border text-text-primary text-sm font-body px-3 py-2 w-full sm:w-48"
            >
              <option value="all">All States ({states.length})</option>
              {states
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="text-text-muted text-xs font-body block mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-bg-card border border-border text-text-primary text-sm font-body px-3 py-2 w-full sm:w-48"
            >
              <option value="all">All Statuses</option>
              <option value="operating">Has Operating</option>
              <option value="closed">Has Closed/Acquired</option>
              <option value="development">Under Development</option>
            </select>
          </div>
          <div className="sm:ml-auto self-end">
            <p className="text-text-muted text-xs font-body">
              Showing {filtered.length} states &middot; {totalShown} hospitals &middot; {operatingShown} operating
            </p>
          </div>
        </div>

        {/* Table - desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-text-muted text-xs uppercase tracking-wider">
                <th className="text-left py-3 px-4">State</th>
                <th className="text-right py-3 px-4">Total</th>
                <th className="text-right py-3 px-4">Operating</th>
                <th className="text-right py-3 px-4">Closed</th>
                <th className="text-right py-3 px-4">Sold</th>
                <th className="text-right py-3 px-4">Dev</th>
                <th className="text-right py-3 px-4">Attrition</th>
                <th className="text-center py-3 px-4">CON</th>
                <th className="text-right py-3 px-4">Access</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.code} className="border-b border-border/50 hover:bg-bg-card-hover transition-colors">
                  <td className="py-3 px-4">
                    <Link href={`/states/${s.code}/`} className="text-text-primary hover:text-accent">
                      <span className="text-accent font-semibold mr-2">{s.code}</span>
                      {s.name}
                    </Link>
                  </td>
                  <td className="text-right py-3 px-4 text-text-sub">{s.totalListed}</td>
                  <td className="text-right py-3 px-4">
                    <span className={s.currentlyOperating > 0 ? "text-accent font-semibold" : "text-text-muted"}>
                      {s.currentlyOperating}
                    </span>
                  </td>
                  <td className="text-right py-3 px-4 text-text-sub">{s.closed}</td>
                  <td className="text-right py-3 px-4 text-text-sub">{s.sold}</td>
                  <td className="text-right py-3 px-4 text-text-sub">{s.underDevelopment}</td>
                  <td className="text-right py-3 px-4 text-text-sub">{s.attritionRate}%</td>
                  <td className="text-center py-3 px-4">
                    <span className={`text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 ${
                      s.conLaw
                        ? "bg-red-900/30 text-red-400 border border-red-900/50"
                        : "bg-emerald-900/30 text-emerald-400 border border-emerald-900/50"
                    }`}>
                      {s.conLaw ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="text-right py-3 px-4">
                    <Link href={`/states/${s.code}/`} className="text-accent text-xs hover:underline">
                      ${s.price}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - mobile */}
        <div className="md:hidden space-y-4">
          {filtered.map((s) => (
            <Link key={s.code} href={`/states/${s.code}/`} className="card block">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-accent text-xl font-headline font-bold mr-2">{s.code}</span>
                  <span className="text-text-primary text-sm font-body">{s.name}</span>
                </div>
                <span className={`text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 ${
                  s.conLaw
                    ? "bg-red-900/30 text-red-400 border border-red-900/50"
                    : "bg-emerald-900/30 text-emerald-400 border border-emerald-900/50"
                }`}>
                  {s.conLaw ? "CON" : "NO CON"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-accent font-semibold text-lg">{s.currentlyOperating}</p>
                  <p className="text-text-muted text-[10px]">Operating</p>
                </div>
                <div>
                  <p className="text-text-sub text-lg">{s.totalListed}</p>
                  <p className="text-text-muted text-[10px]">Total</p>
                </div>
                <div>
                  <p className="text-text-sub text-lg">{s.attritionRate}%</p>
                  <p className="text-text-muted text-[10px]">Attrition</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Paywall notice */}
        <div className="mt-12 card p-8 text-center border border-accent/30">
          <p className="text-text-primary text-lg font-body font-semibold mb-2">
            Hospital-level records are not shown.
          </p>
          <p className="text-text-muted text-sm font-body mb-6">
            Individual hospital names, locations, specialties, and status details
            require a paid state dossier or all-access subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/states/" className="btn-primary">
              Browse All States
            </Link>
            <a href="https://buy.stripe.com/eVq7sL0GMf5o4lU5BBdjO02" className="btn-outline">
              All-Access &mdash; $3,500/year
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
