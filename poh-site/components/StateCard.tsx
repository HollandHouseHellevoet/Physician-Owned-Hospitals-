import Link from "next/link";
import type { StateData } from "@/lib/data";

export function StateCard({ state }: { state: StateData }) {
  const lost = state.summary.closedAcquired + state.summary.soldAcquired;
  const allLost = state.summary.currentlyOperating === 0 && state.summary.totalListed > 0;

  return (
    <div className={`card group ${allLost ? "border-red-900/50" : ""}`}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl font-headline font-bold text-text-primary">
          {state.code}
        </span>
        <span
          className={`text-[10px] font-body font-semibold tracking-widest uppercase px-2 py-0.5 ${
            state.conLaw
              ? "bg-red-900/30 text-red-400 border border-red-900/50"
              : "bg-emerald-900/30 text-emerald-400 border border-emerald-900/50"
          }`}
        >
          {state.conLaw ? "CON LAW" : "NO CON LAW"}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm font-body">
          <span className="text-text-muted">Operating</span>
          <span className={allLost ? "text-red-400" : "text-accent font-semibold"}>
            {allLost ? "All Lost" : state.summary.currentlyOperating}
          </span>
        </div>
        <div className="flex justify-between text-sm font-body">
          <span className="text-text-muted">Total Built</span>
          <span className="text-text-sub">{state.summary.totalListed}</span>
        </div>
        <div className="flex justify-between text-sm font-body">
          <span className="text-text-muted">Lost</span>
          <span className="text-text-sub">{lost}</span>
        </div>
        <div className="flex justify-between text-sm font-body">
          <span className="text-text-muted">Attrition</span>
          <span className="text-text-sub">{state.attritionRate}%</span>
        </div>
      </div>

      <Link
        href={`/states/${state.code}/`}
        className="text-accent text-sm font-body font-semibold hover:text-accent-dim transition-colors group-hover:underline"
      >
        View Dossier &rarr;
      </Link>
    </div>
  );
}
