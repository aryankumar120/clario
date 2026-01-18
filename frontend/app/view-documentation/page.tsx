export default function ViewDocumentationPage() {
  const dos = [
    "Capture signals from APIs, files, and event streams",
    "Let agents cross-verify evidence before surfacing insights",
    "Link every recommendation to its supporting data",
    "Set guardrails for actions (rate limits, approvals)",
  ];

  const donts = [
    "Skip verification on critical events",
    "Depend on a single data source for conclusions",
    "Ship actions without human-visible traceability",
    "Expose credentials or PII in prompts or outputs",
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 border-b" style={{ borderColor: 'var(--shy-blunt)' }}>
        <div className="container-shell grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-tight" style={{ color: 'var(--smoked-pearl)' }}>
              Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--reversed-grey)' }}>
              How the Clario pipeline works
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--smoked-pearl)' }}>
              Clario ingests raw operational signals, routes them through a specialized multi-agent system, and returns
              explainable insights with linked evidence. Every step keeps provenance intact so you can audit decisions
              and safely automate responses.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl p-8 shadow-sm" style={{ backgroundColor: 'var(--bright-grey)' }}>
            <h2 className="text-2xl font-semibold" style={{ color: 'var(--reversed-grey)' }}>
              Pipeline at a glance
            </h2>
            <ol className="space-y-3 text-base" style={{ color: 'var(--smoked-pearl)' }}>
              <li><span className="font-semibold" style={{ color: 'var(--jet-black)' }}>1.</span> Ingest structured and unstructured sources (APIs, CSVs, event buses)</li>
              <li><span className="font-semibold" style={{ color: 'var(--jet-black)' }}>2.</span> Normalize and enrich entities for consistent correlation</li>
              <li><span className="font-semibold" style={{ color: 'var(--jet-black)' }}>3.</span> Reasoning agents validate findings with cross-checks</li>
              <li><span className="font-semibold" style={{ color: 'var(--jet-black)' }}>4.</span> Evidence-backed insights are published with citations</li>
              <li><span className="font-semibold" style={{ color: 'var(--jet-black)' }}>5.</span> Recommended actions are prioritized by impact and risk</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl p-8 h-full" style={{ backgroundColor: 'var(--bright-grey)' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--reversed-grey)' }}>
              Do
            </h3>
            <ul className="space-y-3 text-base" style={{ color: 'var(--smoked-pearl)' }}>
              {dos.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-semibold" style={{ color: 'var(--jet-black)' }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-8 h-full" style={{ backgroundColor: 'var(--bright-grey)' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--reversed-grey)' }}>
              Don't
            </h3>
            <ul className="space-y-3 text-base" style={{ color: 'var(--smoked-pearl)' }}>
              {donts.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-semibold" style={{ color: 'var(--jet-black)' }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
