import { CheckCircleIcon } from "@heroicons/react/24/solid";

const trusts = [
  { title: "SOC 2 Compliant", desc: "Enterprise-grade security and privacy." },
  { title: "Data Encryption", desc: "End-to-end encryption at rest and in transit." },
  { title: "GDPR Ready", desc: "Full compliance with global data regulations." },
];

export function SecurityTrust() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Security & Trust</p>
          <h2 className="text-4xl font-bold text-white">Your Data, Protected</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trusts.map((t, i) => (
            <div
              key={t.title}
              className="glow-card p-8 space-y-3 border-l-4 border-accent animate-slide-in-left hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-accent" />
                <h3 className="font-semibold text-primary">{t.title}</h3>
              </div>
              <p className="text-secondary text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
