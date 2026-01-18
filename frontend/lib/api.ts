import type { Insight, InsightResponse, InsightQuery } from "@/types/insight";

type IngestPayload = { title: string; content: string };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000/api";

async function request<T>(path: string, options: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }
  return res.json();
}

export async function runInsightQuery(payload: InsightQuery): Promise<InsightResponse> {
  return request<InsightResponse>("/insights/query", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function listMockInsights(): Promise<Insight[]> {
  return [
    {
      insight_id: "demo-1",
      summary: "Sales dip driven by slower onboarding",
      reasoning: ["Support backlog increased 15%", "Onboarding NPS dropped"],
      evidence: ["Support tickets", "Onboarding survey"],
      risks: ["Churn escalation", "Reputation risk"],
      recommended_actions: ["Add triage", "Revise onboarding"],
      confidence: 0.76,
      timestamp: new Date().toISOString(),
    },
    {
      insight_id: "demo-2",
      summary: "Latency spike tied to regional rollout",
      reasoning: ["New region added without cache warmup"],
      evidence: ["APM traces", "Deploy log"],
      risks: ["User drop-offs"],
      recommended_actions: ["Enable cache", "Throttle non-critical jobs"],
      confidence: 0.64,
      timestamp: new Date().toISOString(),
    },
  ];
}

export async function ingestDocument(payload: IngestPayload): Promise<{ stored: boolean; chunks: number; message: string }> {
  return request("/ingest", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
