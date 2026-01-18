import { ArrowTrendingUpIcon, ShieldCheckIcon, SparklesIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const features = [
  {
    icon: ArrowTrendingUpIcon,
    title: "Signal Analysis",
    desc: "Detect anomalies, trend shifts, and changes across operational metrics in real time.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk Evaluation",
    desc: "Quantify uncertainty, flag missing data, and outline risk scenarios upfront.",
  },
  {
    icon: SparklesIcon,
    title: "Explainable Insights",
    desc: "Every insight includes reasoning steps, supporting evidence, and confidence scores.",
  },
  {
    icon: ChevronRightIcon,
    title: "Instant Recommendations",
    desc: "Get prioritized next actions ranked by impact and urgency.",
  },
];

export function FeaturesShowcase() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Core Capabilities</p>
          <h2 className="text-4xl font-bold text-white">What Clario Does</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glow-card p-8 space-y-4 hover:shadow-xl hover:shadow-accent/20 transition-all animate-bounce-in hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <f.icon className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
