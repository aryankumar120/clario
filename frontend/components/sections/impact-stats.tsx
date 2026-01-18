"use client";

import { useState, useEffect } from "react";

const stats = [
  { label: "Faster Insights", value: 2.5, unit: "x" },
  { label: "Risk Detection", value: 85, unit: "%" },
  { label: "Time to Action", value: 5, unit: "min" },
  { label: "Teams Relying", value: 350, unit: "+" },
];

export function ImpactStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const targets = [2.5, 85, 5, 350];
    const durations = [2000, 2200, 2100, 2300];

    const intervals = targets.map((target, i) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= target) current = target;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, durations[i] / steps);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Quantified Impact</p>
          <h2 className="text-4xl font-bold text-white">Why Teams Choose Clario</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glow-card p-8 text-center space-y-3 hover:shadow-lg transition-all animate-bounce-in hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-5xl font-bold text-accent">
                {counts[i]?.toFixed(i === 0 ? 1 : 0) || "0"}
                {stat.unit}
              </div>
              <p className="text-secondary font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
