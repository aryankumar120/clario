"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QueryPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"analyze" | "summarize" | "visualize">("analyze");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [evidence, setEvidence] = useState<string[] | null>(null);
  const [actions, setActions] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const runQuery = async (retryAttempt = 0) => {
    if (!query.trim()) return;
    
    if (retryAttempt === 0) {
      setLoading(true);
      setResult(null);
      setEvidence(null);
      setActions(null);
      setError(null);
      setRetryCount(0);
    }

    try {
      const resp = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, mode }),
      });
      
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `Request failed: ${resp.status}`);
      }
      
      const data: { result: string; evidence: string[]; actions: string[] } = await resp.json();
      setResult(data.result || "");
      setEvidence(Array.isArray(data.evidence) ? data.evidence : []);
      setActions(Array.isArray(data.actions) ? data.actions : []);
      setError(null);
      
      // Store query in localStorage for dashboard to pick up
      localStorage.setItem("lastQuery", query);
    } catch (e: any) {
      const errorMsg = e?.message || "Something went wrong";
      
      // Determine if error is retryable
      const isNetworkError = !navigator.onLine || errorMsg.includes("fetch") || errorMsg.includes("network");
      const isTimeout = errorMsg.includes("timeout") || errorMsg.includes("aborted");
      const isServerError = errorMsg.includes("500") || errorMsg.includes("503");
      const isRetryable = isNetworkError || isTimeout || isServerError;
      
      if (isRetryable && retryAttempt < 2) {
        setError(`Connection issue. Retrying... (Attempt ${retryAttempt + 2}/3)`);
        setRetryCount(retryAttempt + 1);
        
        // Exponential backoff: 1s, then 2s
        const delayMs = Math.pow(2, retryAttempt) * 1000;
        setTimeout(() => {
          runQuery(retryAttempt + 1);
        }, delayMs);
      } else {
        // Non-retryable error or max retries reached
        setResult(null);
        setEvidence(null);
        setActions(null);
        setError(errorMsg);
      }
    } finally {
      if (retryAttempt === 0) {
        setLoading(true);
      }
    }
  };

  const cards = [
    { title: "Contribute ideas", desc: "Offer feedback, and manage tasks — all in sync.", icon: "📦" },
    { title: "Stay connected", desc: "Share ideas, align goals, and boost productivity.", icon: "🧩" },
    { title: "Organize your time", desc: "Set priorities and stay focused with clear planning.", icon: "📅" },
  ];

  return (
    <main className="min-h-screen relative flex flex-col" style={{ backgroundColor: "white" }}>

      <section className="pt-6 pb-4">
        <div className="container-shell">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--reversed-grey)" }}>
              Ask Clario Anything
            </h1>
            <Link href="/" className="text-sm" style={{ color: "var(--smoked-pearl)" }}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--shy-blunt)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                animation: "fade-in 0.4s ease-out",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--bright-grey)", color: "var(--jet-black)" }}
                >
                  <span className="text-xl">{c.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--reversed-grey)" }}>{c.title}</h3>
                  <p className="text-sm" style={{ color: "var(--smoked-pearl)" }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {result && (
        <section className="py-4">
          <div className="container-shell">
            <div
              className="rounded-3xl p-6"
              style={{ backgroundColor: "white", border: "1px solid var(--shy-blunt)" }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--reversed-grey)" }}>
                Result
              </h3>
              <pre className="text-sm mb-4" style={{ color: "var(--smoked-pearl)" }}>{result}</pre>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4" style={{ backgroundColor: "var(--bright-grey)" }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--jet-black)" }}>Evidence</p>
                  <ul className="text-sm" style={{ color: "var(--smoked-pearl)" }}>
                    {(evidence && evidence.length > 0 ? evidence : [
                      "Tickets spike detected (sample)",
                      "Release pushed (sample)",
                      "Error rate high in auth-service (sample)",
                    ]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: "var(--bright-grey)" }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--jet-black)" }}>Recommended actions</p>
                  <ul className="text-sm" style={{ color: "var(--smoked-pearl)" }}>
                    {(actions && actions.length > 0 ? actions : [
                      "Rollback recent changes (sample)",
                      "Notify incident channel (sample)",
                      "Add canary checks (sample)",
                    ]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {error && (
        <section className="py-4">
          <div className="container-shell">
            <div
              className="rounded-3xl p-6 border-l-4"
              style={{ backgroundColor: "#fff5f5", borderColor: "#dc2626", border: "1px solid #fecaca", borderLeftWidth: "4px" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#dc2626" }}>Request Failed</h3>
                    <p className="text-sm" style={{ color: "#b91c1c" }}>{error}</p>
                  </div>
                </div>
                <button
                  onClick={() => runQuery()}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: "#dc2626", color: "white" }}
                >
                  {loading ? "Retrying..." : "Retry"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-4 mt-auto pb-12">
        <div className="container-shell">
          <div
            className="rounded-3xl p-4 md:p-6"
            style={{ backgroundColor: "white", border: "none" }}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative w-full">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      runQuery();
                    }
                  }}
                  placeholder="Example: 'Explain anomaly in support tickets last week'"
                  className="w-full rounded-xl px-4 py-3 pr-14 outline-none"
                  style={{
                    backgroundColor: "var(--bright-grey)",
                    color: "var(--jet-black)",
                    border: "1px solid var(--shy-blunt)",
                  }}
                />
                <button
                  onClick={runQuery}
                  aria-label="Run query"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: "var(--jet-black)", color: "white" }}
                >
                  {loading ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                      <circle cx="12" cy="12" r="10" opacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                  ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
