import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container-shell">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Take full control of your operational intelligence
              </h2>
              <p className="text-secondary text-lg">
                With smarter reasoning and explainable insights.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {[
                "Ingest signals, documents, and operational context",
                "AI agents analyze patterns with transparent reasoning",
                "Generate structured, evidence-backed insights",
                "Get recommended actions prioritized by impact",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-secondary">{item}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent-2 text-white font-semibold">
              <Link href="/query">Get started</Link>
            </Button>
          </div>

          {/* Right: Visual - dark dashboard mockup */}
          <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative text-center space-y-4 px-8">
              {/* Mock dashboard elements */}
              <div className="space-y-3">
                <div className="flex gap-2 justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="text-white text-sm font-mono opacity-70">Operational Intelligence Dashboard</div>
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div>&gt; query: "What caused the spike in support tickets?"</div>
                  <div>&gt; analyzing signals...</div>
                  <div className="text-accent">✓ Insight generated: 85% confidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
