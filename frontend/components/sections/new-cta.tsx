import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary-2 to-primary border-t border-slate-700">
      <div className="container-shell">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Ready to simplify operations with Clario?
          </h2>
          <p className="text-lg text-slate-300">
            Get structured, explainable insights. Make faster, smarter decisions.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-2 text-white font-semibold">
            <Link href="/query" className="flex items-center gap-2">
              <span>Get Started for Free</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
