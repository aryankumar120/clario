import { ArrowRightIcon } from "@heroicons/react/24/outline";

const steps = [
  { num: "1", title: "Ingest Signals & Documents", desc: "Feed operational metrics, logs, and knowledge into Clario." },
  { num: "2", title: "Continuous Analysis", desc: "AI agents detect patterns, anomalies, and risk factors." },
  { num: "3", title: "Structured Reasoning", desc: "Multi-agent pipeline generates explainable hypotheses." },
  { num: "4", title: "Actionable Insights", desc: "Get clear recommendations with confidence scores." },
];

export function HowItWorks() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">The Flow</p>
          <h2 className="text-4xl font-bold text-white">How Clario Works</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            From raw operational data to clear, explainable intelligence in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="glow-card p-6 space-y-3 h-full hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRightIcon className="absolute -right-7 top-8 h-5 w-5 text-accent hidden md:block" />
                  )}
                </div>
                <h3 className="font-semibold text-primary">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
