import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--jet-black)' }}>
      <div className="container-shell text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'white' }}>
          Ready to get started?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--grey-timber)' }}>
          Start analyzing your operational data with explainable AI insights today.
        </p>
        <Link
          href="/query"
          className="inline-block px-8 py-4 rounded font-semibold text-lg transition-all"
          style={{ backgroundColor: 'white', color: 'var(--jet-black)' }}
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}
