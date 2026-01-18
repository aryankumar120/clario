import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    name: "Intent Classifier",
    desc: "Understands what operational question you're asking and prioritizes critical issues.",
  },
  {
    name: "Retrieval Agent",
    desc: "Fetches relevant signals, documents, and historical context from your knowledge base.",
  },
  {
    name: "Signal Analyzer",
    desc: "Processes metrics, detects anomalies, and calculates changes across all signals.",
  },
  {
    name: "Reasoning Engine",
    desc: "Synthesizes signals with context to build causal relationships and insights.",
  },
  {
    name: "Risk Assessor",
    desc: "Identifies potential risks, uncertainties, and impact scenarios for each insight.",
  },
  {
    name: "Insight Synthesizer",
    desc: "Produces final structured insights with evidence, reasoning, risks, and actions.",
  },
];

export function AgentPipelineSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <Badge variant="outline" className="border-accent/50 text-accent">
            AI-Powered Architecture
          </Badge>
          <h2 className="text-4xl font-bold text-white">
            7-Agent Intelligence Pipeline
          </h2>
          <p className="text-secondary">
            Clario's agent pipeline works together to deliver explainable, evidence-backed insights with confidence scores.
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <Card
              key={agent.name}
              className="glow-card border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-800/30 hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-primary">{agent.name}</h3>
                    <p className="text-secondary text-sm">{agent.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
