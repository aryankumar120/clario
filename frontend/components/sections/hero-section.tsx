import Link from "next/link";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-6 w-96 h-96 bg-accent-2/18 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.8s" }}></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(126,245,125,0.18) 0, transparent 30%), radial-gradient(circle at 80% 10%, rgba(78,225,255,0.14) 0, transparent 32%), radial-gradient(circle at 50% 80%, rgba(126,245,125,0.12) 0, transparent 35%)" }}></div>
      </div>

      <div className="container-shell relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <SparklesIcon className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Real-time operational intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_8px_30px_rgba(126,245,125,0.25)]">
            Clario explains what is happening now, why, risks, and next actions.
          </h1>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            No dashboards. No guesswork. Clario ingests your signals, documents, and history, then returns structured, explainable insights your teams can act on immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/query"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-primary px-8 py-4 font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all hover-lift"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all hover-lift"
            >
              View Insights
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {["Explainability first", "Evidence-backed", "Risk-aware"].map((item) => (
              <div key={item} className="glow-card p-4 space-y-2 animate-bounce-in hover-lift" style={{ animationDelay: `${Math.random() * 0.3}s` }}>
                <p className="font-semibold text-primary text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
