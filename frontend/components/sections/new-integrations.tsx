import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircleIcon,
  CogIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/solid";

const integrations = [
  {
    icon: CogIcon,
    name: "Operational Metrics",
    desc: "Connect your metrics platforms (Datadog, New Relic, Grafana) to stream live signals.",
  },
  {
    icon: CloudArrowUpIcon,
    name: "Data Ingestion",
    desc: "Upload documents, logs, and historical context. Clario builds knowledge from your data.",
  },
  {
    icon: CheckCircleIcon,
    name: "REST API",
    desc: "Query Clario programmatically. Integrate insights into your existing workflows and tools.",
  },
];

export function IntegrationsSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <Badge variant="outline" className="border-accent/50 text-accent">
            Flexible Integration
          </Badge>
          <h2 className="text-4xl font-bold text-white">
            Connect Your Operational Stack
          </h2>
          <p className="text-secondary">
            Clario integrates with your existing tools and data sources seamlessly.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <Card
              key={item.name}
              className="glow-card border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-800/30 hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <item.icon className="h-10 w-10 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-secondary text-sm">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
