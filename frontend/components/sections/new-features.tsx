import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChevronRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: ArrowTrendingUpIcon,
    title: "Signal Analysis",
    desc: "Detect anomalies, trend shifts, and operational changes in real-time.",
    color: "text-pink-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk Evaluation",
    desc: "Quantify uncertainty and flag potential risk scenarios proactively.",
    color: "text-purple-500",
  },
  {
    icon: SparklesIcon,
    title: "Explainable Insights",
    desc: "Every conclusion includes reasoning, evidence, and confidence scores.",
    color: "text-cyan-500",
  },
  {
    icon: ChevronRightIcon,
    title: "Recommended Actions",
    desc: "Get prioritized next steps ranked by impact and urgency.",
    color: "text-indigo-500",
  },
  {
    icon: DocumentDuplicateIcon,
    title: "Evidence-Backed",
    desc: "All insights backed by source documents and operational data.",
    color: "text-emerald-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-shell">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">Core Features</p>
          <h2 className="text-4xl font-bold text-primary">
            Fast, secure, and flexible
          </h2>
          <p className="text-secondary">
            Clario combines AI reasoning with operational context to deliver insights you can trust.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardHeader className="pb-3">
                <feature.icon className={`h-8 w-8 ${feature.color} mb-2`} />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-secondary text-sm">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
