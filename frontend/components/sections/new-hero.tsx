import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      <div className="animated-gradient-bg" />
      <div className="container-shell max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight" style={{ color: 'var(--reversed-grey)' }}>
            Explainable.<br />Actionable.<br />Real.
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--smoked-pearl)' }}>
            Get structured, explainable insights with evidence, reasoning, and recommended actions from your operational data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/query"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-medium transition-all"
              style={{ backgroundColor: 'var(--jet-black)', color: 'white' }}
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="px-6 py-3 rounded font-medium transition-all"
              style={{ border: '1px solid var(--shy-blunt)', color: 'var(--jet-black)' }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
