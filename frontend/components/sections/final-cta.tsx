import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function FinalCTA() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-shell">
        <div className="glow-card p-12 md:p-16 text-center space-y-6 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Ready to get operational intelligence?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join operations teams that are making better, faster decisions with Clario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/query"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal-500 text-white px-8 py-4 font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
              <span>Start Free</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="http://localhost:8000/api/docs"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-primary px-8 py-4 font-semibold hover:bg-white/5 transition-all"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
