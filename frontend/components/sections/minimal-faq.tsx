import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      q: "How does Clario work?",
      a: "Clario uses a 7-agent AI pipeline to analyze your operational data, providing explainable insights with evidence and recommended actions.",
    },
    {
      q: "What kind of data can I analyze?",
      a: "Any operational data including logs, metrics, documents, and signals from your systems and applications.",
    },
    {
      q: "Is my data secure?",
      a: "Yes. We use enterprise-grade encryption and your data stays within your infrastructure. Full audit trails are maintained.",
    },
    {
      q: "How quickly can I get insights?",
      a: "Clario processes queries in real-time with sub-second response times for most operations.",
    },
    {
      q: "Do I need to train the AI?",
      a: "No. Clario works out of the box with your existing data. The more you use it, the better it understands your context.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-shell max-w-3xl">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--reversed-grey)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border rounded px-6"
              style={{ borderColor: "var(--shy-blunt)" }}
            >
              <AccordionTrigger
                className="text-left font-semibold hover:no-underline"
                style={{ color: "var(--reversed-grey)" }}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent style={{ color: "var(--smoked-pearl)" }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
