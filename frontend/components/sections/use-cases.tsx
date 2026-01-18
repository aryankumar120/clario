const useCases = [
  {
    title: "Sales Ops Anomaly Detection",
    desc: "Detect sudden drops in deal velocity and win rates. Identify root causes and corrective actions.",
  },
  {
    title: "Support Ticket Surge Analysis",
    desc: "Understand why support volume spiked. Pinpoint product issues or communication gaps.",
  },
  {
    title: "Customer Churn Risk",
    desc: "Correlate churn signals with operational changes. Recommend retention strategies.",
  },
  {
    title: "Onboarding Delays",
    desc: "Analyze bottlenecks in customer onboarding workflows. Get next actions to improve time-to-value.",
  },
  {
    title: "Revenue Leakage",
    desc: "Identify expansion and upsell opportunities. Surface obstacles to growth.",
  },
  {
    title: "Product Launch Impact",
    desc: "Measure operational impact of new features. Understand customer sentiment and adoption.",
  },
];

export function UseCases() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Real-world Scenarios</p>
          <h2 className="text-4xl font-bold text-white">Where Clario Shines</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className="glow-card p-6 space-y-2 hover:shadow-lg hover:border-accent/30 transition-all animate-fade-in hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <h3 className="font-semibold text-primary">{uc.title}</h3>
              <p className="text-secondary text-sm">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
