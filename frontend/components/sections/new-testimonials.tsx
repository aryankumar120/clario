"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Clario transformed how we understand operational issues. Instead of guessing, we now have explainable insights with actual evidence.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechCorp",
    image: "🧑‍💼",
  },
  {
    quote:
      "The confidence scores and reasoning steps give us trust in the insights. We can actually explain them to stakeholders.",
    author: "Marcus Johnson",
    role: "Head of Support",
    company: "DataViz Co",
    image: "👨‍💻",
  },
  {
    quote:
      "Clario reduced our time to identify root causes by 70%. From hours to minutes with explainable reasoning.",
    author: "Elena Rodriguez",
    role: "Chief Analyst",
    company: "OpsDash Inc",
    image: "👩‍🔬",
  },
  {
    quote:
      "Finally, an AI platform that shows its work. Every insight is traceable back to actual data.",
    author: "James Wilson",
    role: "Engineering Lead",
    company: "CloudOps",
    image: "👨‍🏫",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary-2 to-primary border-t border-slate-300">
      <div className="container-shell">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10">
            💬 Testimonials
          </Badge>
          <h2 className="text-4xl font-bold text-white">
            Designed for teams that value
            <br />
            explainable and actionable insights.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="glow-card-dark hover-lift border-accent/20 bg-gradient-to-br from-primary-2 to-primary"
            >
              <CardContent className="pt-6 space-y-4">
                {/* Quote */}
                <p className="text-white italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-secondary text-xs">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
