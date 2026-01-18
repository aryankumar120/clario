import { UserGroupIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

const companies = ["TechCorp", "DataViz Co", "OpsDash Inc", "InsightAI", "CloudOps"];
const features = [
  { icon: SparklesIcon, title: "Signal Analysis", desc: "Detect anomalies and trends in real time." },
  { icon: CheckCircleIcon, title: "Explainable Insights", desc: "Every output includes reasoning and evidence." },
  { icon: UserGroupIcon, title: "Team Alignment", desc: "Clear, actionable recommendations for all." },
];

export function SocialProof() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-12 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Trusted by leading teams</p>
          <h2 className="text-4xl font-bold text-white">350+ operations teams rely on Clario</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {companies.map((company, i) => (
            <div
              key={company}
              className="glow-card p-6 flex items-center justify-center text-secondary font-semibold animate-fade-in hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glow-card p-8 space-y-3 animate-slide-in-left hover-lift"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <f.icon className="h-10 w-10 text-accent" />
              <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
              <p className="text-secondary text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
