export function SocialProofSection() {
  const companies = [
    "TechCorp", "DataFlow", "CloudOps", 
    "SecureNet", "FastAPI Inc", "DevTools"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bright-grey)' }}>
      <div className="container-shell text-center">
        <p className="text-sm font-medium mb-8" style={{ color: 'var(--smoked-pearl)' }}>
          Trusted by leading teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="minimal-card p-4 rounded flex items-center justify-center"
            >
              <span className="font-semibold" style={{ color: 'var(--grey-timber)' }}>
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
