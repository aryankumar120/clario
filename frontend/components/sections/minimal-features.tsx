export function FeaturesSection() {
  const features = [
    {
      title: "Intelligent Analysis",
      description: "7-agent pipeline processes your data with specialized AI for complete operational insights.",
    },
    {
      title: "Evidence-Based",
      description: "Every insight includes source citations and reasoning chains for full transparency.",
    },
    {
      title: "Actionable Recommendations",
      description: "Get specific, prioritized actions to address issues and improve operations.",
    },
    {
      title: "Real-Time Processing",
      description: "Ingest and analyze operational data instantly with sub-second response times.",
    },
    {
      title: "Automated Verification",
      description: "Built-in validation ensures accuracy and flags inconsistencies automatically.",
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our flexible API infrastructure.",
    },
  ];

  return (
    <section id="features" className="py-24" style={{ backgroundColor: 'var(--bright-grey)' }}>
      <div className="container-shell">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--reversed-grey)' }}>
            Core Features
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--smoked-pearl)' }}>
            Everything you need for operational intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 rounded-3xl flex flex-col justify-center transition-transform duration-200 hover:scale-105 min-h-[180px]"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--reversed-grey)' }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--smoked-pearl)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
