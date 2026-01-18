"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "What data does Clario need to work?",
    a: "Clario works with operational metrics (sales, support, product), internal documents (SOPs, incident reports), and contextual notes. You control what you ingest.",
  },
  {
    q: "How fast are insights generated?",
    a: "Most insights are generated in 30 seconds to 2 minutes depending on complexity. Real-time analysis is available for high-priority queries.",
  },
  {
    q: "How do I know if the insight is correct?",
    a: "Every insight includes a confidence score, supporting evidence, and reasoning steps. You can validate and provide feedback to improve future analysis.",
  },
  {
    q: "Can I integrate Clario with my existing tools?",
    a: "Yes. We support REST APIs, webhooks, and direct data ingestion. Integrations with popular ops tools are coming soon.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. All data is encrypted, compliant with security standards, and never shared. You can also self-host Clario.",
  },
  {
    q: "Do I need data science expertise to use Clario?",
    a: "No. Clario's AI handles all the complexity. You just ask questions in plain English and get actionable insights.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container-shell max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-accent/50 text-accent">
            Questions?
          </Badge>
          <h2 className="text-4xl font-bold text-primary">
            Frequently Asked
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-slate-200 bg-white rounded-lg px-6 hover:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="text-primary hover:text-accent py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
