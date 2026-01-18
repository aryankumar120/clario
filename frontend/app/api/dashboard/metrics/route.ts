import { NextRequest, NextResponse } from "next/server";

// Scenario datasets for different query contexts
const scenarios = {
  latency: {
    kpis: [
      { label: "P95 Latency", value: "342ms", delta: "+45%" },
      { label: "Error Rate", value: "2.3%", delta: "↑ 1.8%" },
      { label: "Availability", value: "99.2%", delta: "-0.8%" },
    ],
    activities: [
      { title: "P95 Spike Detected", desc: "Latency exceeded SLA threshold at 14:23 UTC", time: "14:23" },
      { title: "Database Slow Query", desc: "Query time increased from 45ms to 120ms", time: "14:15" },
      { title: "Traffic Surge", desc: "Request rate +35% higher than baseline", time: "14:05" },
      { title: "Cache Invalidation", desc: "Full cache rebuild triggered at 14:00 UTC", time: "14:00" },
    ],
    analytics: [
      { label: "14:00", value: 120 },
      { label: "14:05", value: 145 },
      { label: "14:10", value: 165 },
      { label: "14:15", value: 185 },
      { label: "14:20", value: 200 },
      { label: "14:25", value: 180 },
    ],
    confidence: 92,
  },
  cpu: {
    kpis: [
      { label: "CPU Usage", value: "87%", delta: "+22%" },
      { label: "Memory", value: "76%", delta: "↑ 18%" },
      { label: "Tasks Queued", value: "2,340", delta: "+850" },
    ],
    activities: [
      { title: "CPU Alert", desc: "Threshold exceeded at services: api-prod, worker-1, worker-2", time: "15:45" },
      { title: "Scaling Event", desc: "Auto-scaled from 5 to 12 instances", time: "15:40" },
      { title: "Queue Backlog", desc: "Background job queue building up", time: "15:30" },
      { title: "Resource Monitor", desc: "Heavy workload detected from batch job", time: "15:20" },
    ],
    analytics: [
      { label: "15:00", value: 45 },
      { label: "15:10", value: 58 },
      { label: "15:20", value: 72 },
      { label: "15:30", value: 81 },
      { label: "15:40", value: 85 },
      { label: "15:50", value: 88 },
    ],
    confidence: 88,
  },
  error: {
    kpis: [
      { label: "Error Rate", value: "5.2%", delta: "+3.1%" },
      { label: "Failed Requests", value: "12,450", delta: "↑ 4,200" },
      { label: "MTTR", value: "18m", delta: "-2m" },
    ],
    activities: [
      { title: "500 Errors", desc: "auth-service returning 500 errors (v1.2.1)", time: "16:12" },
      { title: "Rollback Initiated", desc: "Rolling back auth-service to v1.2.0", time: "16:10" },
      { title: "Error Spike", desc: "Error rate jumped from 1.2% to 5.2% in 2 minutes", time: "16:08" },
      { title: "Deployment", desc: "auth-service v1.2.1 deployed to prod", time: "16:05" },
    ],
    analytics: [
      { label: "16:00", value: 35 },
      { label: "16:02", value: 42 },
      { label: "16:04", value: 68 },
      { label: "16:06", value: 95 },
      { label: "16:08", value: 110 },
      { label: "16:10", value: 75 },
    ],
    confidence: 95,
  },
  default: {
    kpis: [
      { label: "Revenue", value: "$1.2M", delta: "+12%" },
      { label: "Users", value: "1.2M", delta: "↑ 16%" },
      { label: "Tasks", value: "Done", delta: "98%" },
    ],
    activities: [
      { title: "Recent Activity", desc: "Teams reviewed clusters in Taremion", time: "12:01" },
      { title: "Teams Ops", desc: "Triage completed", time: "08:24" },
      { title: "Recent Cohort", desc: "Ops shift near trend clusters", time: "08:10" },
      { title: "Goal Reset", desc: "Playbook re-run for incidents", time: "07:45" },
    ],
    analytics: [
      { label: "23", value: 40 },
      { label: "45", value: 60 },
      { label: "69", value: 90 },
      { label: "85", value: 70 },
      { label: "98", value: 100 },
      { label: "150", value: 140 },
    ],
    confidence: 78,
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = (searchParams.get("query") || "").toLowerCase();

  // Match query to scenario
  let scenarioKey = "default";
  if (query.includes("latency") || query.includes("response time") || query.includes("slow")) {
    scenarioKey = "latency";
  } else if (query.includes("cpu") || query.includes("resource") || query.includes("memory")) {
    scenarioKey = "cpu";
  } else if (query.includes("error") || query.includes("failed") || query.includes("500")) {
    scenarioKey = "error";
  }

  const data = scenarios[scenarioKey as keyof typeof scenarios];
  return NextResponse.json(data);
}
