"use client"

import Link from "next/link";

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-shell">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--reversed-grey)' }}>
              How It Works
            </h2>
            <p className="text-lg" style={{ color: 'var(--smoked-pearl)' }}>
              Clario transforms raw operational data into clear, actionable intelligence through a sophisticated multi-agent system.
            </p>
            <ul className="space-y-4">
              {[
                "Ingest data from any source",
                "AI agents analyze and verify",
                "Get insights with evidence",
                "Take recommended actions",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span 
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium flex-shrink-0" 
                    style={{ backgroundColor: 'var(--jet-black)', color: 'white' }}
                  >
                    {idx + 1}
                  </span>
                  <span className="pt-1" style={{ color: 'var(--smoked-pearl)' }}>{step}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/view-documentation"
              className="inline-block px-6 py-3 rounded font-medium transition-all"
              style={{ border: '1px solid var(--shy-blunt)', color: 'var(--jet-black)' }}
            >
              View Documentation
            </Link>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/data-visualization.png"
              alt="Dashboard mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
