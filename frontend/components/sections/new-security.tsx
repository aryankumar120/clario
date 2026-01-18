import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const securityFeatures = [
  {
    title: "Fully Licensed & Compliant",
    desc: "Clario operates under strict operational compliance standards, ensuring your insights are always backed by secure practices.",
  },
  {
    title: "Explainable AI",
    desc: "Built as a transparent AI platform—see all reasoning, evidence, and confidence scores. No black boxes.",
  },
  {
    title: "Independent & Reliable",
    desc: "Clario owns its core infrastructure, giving you direct access to operational intelligence without relying on third-party providers.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container-shell">
        {/* Header with CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <Badge variant="outline" className="border-accent/50 text-accent mb-4">
              🔐 Security
            </Badge>
            <h2 className="text-4xl font-bold text-primary">
              Security & Compliance
            </h2>
          </div>
          <Button asChild className="bg-accent hover:bg-accent-2 text-white font-semibold">
            <Link href="/query">Get Started for Free →</Link>
          </Button>
        </div>

        {/* Security cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((item, i) => (
            <Card
              key={i}
              className="border-slate-200 hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mint banner CTA */}
        <div className="bg-cyan/10 border border-cyan/30 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <p className="text-primary font-semibold">
              ✨ Clario powers explainable operational intelligence, making sense of your data with transparency and confidence.
            </p>
            <p className="text-secondary text-sm">Get started in minutes. No credit card required.</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary-2 text-white font-semibold flex-shrink-0">
            <Link href="/query">Get Started for Free →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
