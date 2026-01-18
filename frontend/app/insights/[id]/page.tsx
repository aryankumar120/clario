import { listMockInsights } from "@/lib/api";
import { RiskPill } from "@/components/risk-pill";

export default async function InsightDetail({ params }: { params: { id: string } }) {
  const insights = await listMockInsights();
  const insight = insights.find((i) => i.insight_id === params.id) || insights[0];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Insight trace</p>
          <h1 className="text-3xl font-bold text-primary">{insight.summary}</h1>
        </div>
        <span className="badge bg-emerald-50 text-emerald-700">
          Confidence {Math.round(insight.confidence * 100)}%
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glow-card p-5 lg:col-span-2 space-y-3">
          <h3 className="font-semibold text-primary">Reasoning</h3>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            {insight.reasoning.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-primary pt-2">Evidence</h3>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            {insight.evidence.map((ev) => (
              <li key={ev}>{ev}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div className="glow-card p-4 space-y-2">
            <h4 className="font-semibold text-primary">Risks</h4>
            <div className="flex flex-wrap gap-2">
              {insight.risks.map((risk) => (
                <RiskPill key={risk} label={risk} />
              ))}
            </div>
          </div>
          <div className="glow-card p-4 space-y-2">
            <h4 className="font-semibold text-primary">Recommended actions</h4>
            <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
              {insight.recommended_actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
