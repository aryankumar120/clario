import { Card, CardContent } from "@/components/ui/card";

const companies = [
  "TechCorp",
  "DataViz Co",
  "OpsDash Inc",
  "InsightAI",
  "CloudOps",
  "Metrics Pro",
];

export function SocialProofSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container-shell">
        {/* Text */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-primary">
            Trusted by leading operations teams
          </h2>
        </div>

        {/* Company logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((company) => (
            <Card
              key={company}
              className="border-slate-200 flex items-center justify-center h-20 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0 text-center">
                <p className="text-secondary font-semibold text-sm">{company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
