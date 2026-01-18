"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("query") || "";
  
  const [kpis, setKpis] = useState<Array<{ label: string; value: string; delta: string }>>([]);
  const [activities, setActivities] = useState<Array<{ title: string; desc: string; time: string }>>([]);
  const [analytics, setAnalytics] = useState<Array<{ label: string; value: number }>>([]);
  const [confidence, setConfidence] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const loadMetrics = async (retryAttempt = 0) => {
    if (retryAttempt === 0) {
      setLoading(true);
      setError(null);
      setRetryCount(0);
    }

    try {
      // Get query from URL param or localStorage
      let queryToUse = urlQuery;
      if (!queryToUse && typeof window !== "undefined") {
        queryToUse = localStorage.getItem("lastQuery") || "";
      }
      
      const url = new URL("/api/dashboard/metrics", window.location.origin);
      if (queryToUse) {
        url.searchParams.set("query", queryToUse);
      }
      
      const resp = await fetch(url.toString());
      if (!resp.ok) throw new Error(`Failed: ${resp.status}`);
      const data = await resp.json();
      setKpis(data.kpis || []);
      setActivities(data.activities || []);
      setAnalytics(data.analytics || []);
      setConfidence(typeof data.confidence === "number" ? data.confidence : 0);
      setError(null);
    } catch (e: any) {
      const errorMsg = e?.message || "Unable to load metrics";
      
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
          loadMetrics(retryAttempt + 1);
        }, delayMs);
      } else {
        // Non-retryable error or max retries reached
        setError(errorMsg);
      }
    } finally {
      if (retryAttempt === 0) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadMetrics();
  }, [urlQuery]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "white" }}>
      <section className="py-10">
        <div className="container-shell space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--reversed-grey)" }}>
              Your Dashboard
            </h1>
          </div>

          {error && (
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
                    <h3 className="font-semibold mb-1" style={{ color: "#dc2626" }}>Dashboard Failed to Load</h3>
                    <p className="text-sm" style={{ color: "#b91c1c" }}>{error}</p>
                  </div>
                </div>
                <button
                  onClick={() => loadMetrics()}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity disabled:opacity-50 "
                  style={{ backgroundColor: "#dc2626", color: "white" }}
                >
                  {loading ? "Retrying..." : "Retry"}
                </button>
              </div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            {(loading ? Array.from({ length: 3 }).map((_, idx) => ({ label: "", value: "", delta: "" })) : kpis).map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 shadow-sm"
                style={{
                  backgroundColor: loading ? "var(--bright-grey)" : idx === 0 ? "var(--jet-black)" : "var(--bright-grey)",
                  color: loading ? "var(--smoked-pearl)" : idx === 0 ? "white" : "var(--reversed-grey)",
                  border: loading ? "1px solid var(--shy-blunt)" : idx === 0 ? "none" : "1px solid var(--shy-blunt)",
                  animation: loading ? "none" : "fade-in 0.5s ease-out",
                  animationDelay: loading ? "0s" : `${idx * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                {loading ? (
                  <div className="animate-pulse space-y-3">
                    <div className="h-3 w-24 rounded" style={{ backgroundColor: "#e6eaef" }} />
                    <div className="h-6 w-32 rounded" style={{ backgroundColor: "#e6eaef" }} />
                  </div>
                ) : (
                  <>
                    <p className="text-sm" style={{ color: idx === 0 ? "white" : "var(--smoked-pearl)" }}>
                      {item.label}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-2xl font-bold">{item.value}</span>
                      <span className="text-sm font-semibold" style={{ color: idx === 0 ? "white" : "var(--jet-black)" }}>
                        {item.delta}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl p-4 shadow-sm" style={{ backgroundColor: "var(--bright-grey)", border: "1px solid var(--shy-blunt)", animation: "fade-in 0.6s ease-out 0.3s backwards" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--reversed-grey)" }}>
                Recent Activity
              </h3>
              <div className="space-y-3">
                {(loading ? Array.from({ length: 4 }).map((_, i) => ({ i })) : activities).map((act: any, i: number) => (
                  <div key={i} className="flex justify-between rounded-xl p-3" style={{ backgroundColor: "white", border: "1px solid var(--shy-blunt)", animation: loading ? "none" : "fade-in 0.4s ease-out", animationDelay: loading ? "0s" : `${0.4 + i * 0.1}s`, animationFillMode: "backwards" }}>
                    {loading ? (
                      <div className="w-full flex items-center justify-between">
                        <div className="space-y-2 w-3/4">
                          <div className="h-3 w-40 rounded animate-pulse" style={{ backgroundColor: "#e6eaef" }} />
                          <div className="h-3 w-64 rounded animate-pulse" style={{ backgroundColor: "#e6eaef" }} />
                        </div>
                        <div className="h-3 w-10 rounded animate-pulse" style={{ backgroundColor: "#e6eaef" }} />
                      </div>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--reversed-grey)" }}>{act.title}</p>
                          <p className="text-xs" style={{ color: "var(--smoked-pearl)" }}>{act.desc}</p>
                        </div>
                        <span className="text-xs" style={{ color: "var(--smoked-pearl)" }}>{act.time}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-4 shadow-sm" style={{ backgroundColor: "var(--bright-grey)", border: "1px solid var(--shy-blunt)", animation: "fade-in 0.6s ease-out 0.5s backwards" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--reversed-grey)" }}>
                Confidence Score
              </h3>
              <div className="flex items-center justify-center py-6">
                <div
                  className="w-36 h-36 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(var(--jet-black) 0deg ${(Math.max(0, Math.min(100, confidence)) / 100) * 360}deg, var(--grey-timber) ${(Math.max(0, Math.min(100, confidence)) / 100) * 360}deg 360deg)`,
                  }}
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: "white" }}>
                    <span className="text-2xl font-bold" style={{ color: "var(--reversed-grey)" }}>{(confidence / 10).toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="text-xs" style={{ color: "var(--smoked-pearl)" }}>
                  Analysis reliability score based on data verification and cross-source validation
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl p-4 shadow-sm" style={{ backgroundColor: "white", border: "1px solid var(--shy-blunt)", animation: "fade-in 0.6s ease-out 0.6s backwards" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--reversed-grey)" }}>
                Analytics
              </h3>
              <div className="flex items-end gap-3" style={{ height: "180px" }}>
                {(loading ? Array.from({ length: 6 }).map((_, i) => ({ label: String(i + 1), value: 0 })) : analytics).map((bar, i) => (
                  <div key={i} className="flex flex-col items-center justify-end gap-2 flex-1">
                    <div
                      style={{
                        height: `${loading ? 20 + i * 10 : bar.value}px`,
                        backgroundColor: loading ? "#e6eaef" : i % 2 === 0 ? "var(--jet-black)" : "var(--grey-timber)",
                        width: "100%",
                        borderRadius: "12px 12px 6px 6px",
                        minWidth: "14px",
                        animation: loading ? "none" : "bar-grow 0.6s ease-out",
                        animationDelay: loading ? "0s" : `${0.7 + i * 0.05}s`,
                        animationFillMode: "backwards",
                        transformOrigin: "bottom",
                      }}
                    />
                    <span className="text-xs" style={{ color: "var(--smoked-pearl)" }}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-4 shadow-sm" style={{ backgroundColor: "var(--bright-grey)", border: "1px solid var(--shy-blunt)", animation: "fade-in 0.6s ease-out 0.8s backwards" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--reversed-grey)" }}>
                Quick Stats
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--smoked-pearl)" }}>
                <li>• MTTR: 42m</li>
                <li>• SLA Met: 99.1%</li>
                <li>• Incidents: 7 open</li>
                <li>• Coverage: 18 services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
