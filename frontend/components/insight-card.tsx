import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { RiskPill } from "./risk-pill";
import type { Insight } from "@/types/insight";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="glow-card p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{new Date(insight.timestamp).toLocaleString()}</p>
        <span className="badge bg-emerald-50 text-emerald-700">Confidence {Math.round(insight.confidence * 100)}%</span>
      </div>
      <h3 className="text-lg font-semibold text-primary">{insight.summary}</h3>
      <p className="text-sm text-slate-600">{insight.reasoning[0]}</p>
      {insight.evidence?.length ? (
        <p className="text-xs text-slate-500">
          Evidence: {insight.evidence[0]}
          {insight.evidence.length > 1 ? ` (+${insight.evidence.length - 1} more)` : ""}
        </p>
      ) : null}
      <div className="flex items-center gap-2 flex-wrap">
        {insight.risks.slice(0, 2).map((risk) => (
          <RiskPill key={risk} label={risk} />
        ))}
      </div>
      <Link
        href={`/insights/${insight.insight_id}`}
        className="flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
      >
        View details <ChevronRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
