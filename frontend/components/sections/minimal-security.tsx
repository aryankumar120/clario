export function SecuritySection() {
  const security = [
    { title: "Enterprise Security", desc: "Bank-level encryption and compliance standards" },
    { title: "Data Privacy", desc: "Your data stays in your infrastructure" },
    { title: "Audit Trails", desc: "Complete logging and monitoring capabilities" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-shell">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--reversed-grey)' }}>
            Security & Compliance
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--smoked-pearl)' }}>
            Enterprise-grade security built in
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {security.map((item, idx) => (
            <div key={idx} className="minimal-card p-6 rounded">
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--reversed-grey)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--smoked-pearl)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-8 rounded" style={{ backgroundColor: 'var(--bright-grey)' }}>
          <p className="text-lg font-semibold mb-4" style={{ color: 'var(--reversed-grey)' }}>
            Ready to secure your operational intelligence?
          </p>
          <a
            href="/query"
            className="inline-block px-6 py-3 rounded font-medium"
            style={{ backgroundColor: 'var(--jet-black)', color: 'white' }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
