"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "What data does Clario need?",
    a: "Clario works with operational metrics (sales, support, product), internal documents (SOPs, incident reports), and contextual notes. You control what you ingest.",
  },
  {
    q: "How fast are insights generated?",
    a: "Most insights are generated in 30 seconds to 2 minutes depending on complexity. Real-time analysis is available for high-priority queries.",
  },
  {
    q: "Can I integrate with my existing tools?",
    a: "Yes. We support REST APIs, webhooks, and direct data ingestion. Integrations with popular ops tools are coming soon.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. All data is encrypted, SOC 2 compliant, and never shared. You can also self-host Clario.",
  },
  {
    q: "What if the insight is wrong?",
    a: "Clario includes a confidence score and evidence for each insight. You can validate and provide feedback to improve future analysis.",
  },
  {
    q: "Do I need data science expertise?",
    a: "No. Clario's AI handles all the complexity. You just ask questions in plain English.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Questions?</p>
          <h2 className="text-4xl font-bold text-white">Frequently Asked</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="glow-card p-6 animate-fade-in hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between hover:text-accent transition"
              >
                <h3 className="text-lg font-semibold text-primary text-left">{faq.q}</h3>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="text-secondary mt-4 pt-4 border-t border-white/10">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
