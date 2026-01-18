export type Insight = {
  insight_id: string;
  summary: string;
  reasoning: string[];
  evidence: string[];
  risks: string[];
  recommended_actions: string[];
  confidence: number;
  timestamp: string;
};

export type InsightResponse = {
  insight: Insight;
  trace: {
    intent: string;
    retrieval_notes: string[];
    signal_findings: string[];
    reasoning_steps: string[];
    risks: string[];
    validation: string[];
  };
};

export type InsightQuery = {
  question: string;
  signals: Array<{ name: string; current: number; previous?: number; trend?: number; unit?: string }>;
  top_k?: number;
};
