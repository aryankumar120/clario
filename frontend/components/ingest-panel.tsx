"use client";

import { useState } from "react";
import { ingestDocument } from "@/lib/api";

export function IngestPanel() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError(null);
    setStatus(null);
    try {
      const res = await ingestDocument({ title, content });
      setStatus(res.message);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      setError("Failed to ingest document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glow-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">Ingest document</h3>
        <span className="badge bg-slate-100 text-slate-600">RAG</span>
      </div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        rows={4}
        placeholder="Paste operational notes, incidents, SOPs..."
      />
      <button
        onClick={submit}
        disabled={loading || !title || !content}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-slate-900 transition disabled:opacity-50"
      >
        {loading ? "Ingesting..." : "Ingest"}
      </button>
      {status && <p className="text-sm text-emerald-700">{status}</p>}
      {error && <p className="text-sm text-rose-600">{error}</p>}
    </div>
  );
}
