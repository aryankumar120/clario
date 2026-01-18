"use client";

import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { runInsightQuery } from "@/lib/api";
import type { Insight } from "@/types/insight";

export function QueryPanel({ onResult }: { onResult: (insight: Insight) => void }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await runInsightQuery({ question, signals: [] });
      onResult(res.insight);
    } catch (err) {
      setError("Failed to fetch insight");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glow-card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <SparklesIcon className="h-5 w-5 text-amber" />
        <h3 className="text-lg font-semibold text-primary">Ask Clario</h3>
      </div>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        rows={3}
        placeholder="Ask about operational changes, risks, or anomalies"
      />
      <button
        onClick={submit}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-slate-900 transition disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Generate Insight"}
      </button>
      {error && <p className="text-sm text-rose-600">{error}</p>}
    </div>
  );
}
