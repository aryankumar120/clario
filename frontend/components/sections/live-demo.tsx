"use client";

import { useState } from "react";
import { QueryPanel } from "../query-panel";
import { InsightCard } from "../insight-card";
import type { Insight } from "@/types/insight";

export function LiveDemo() {
  const [result, setResult] = useState<Insight | null>(null);

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">See It In Action</p>
          <h2 className="text-4xl font-bold text-white">Try Clario Now</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Ask a question about your operational data and get an instant, explainable insight.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in hover-lift">
          <QueryPanel onResult={setResult} />
          {result && (
            <div className="mt-6">
              <InsightCard insight={result} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
