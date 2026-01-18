import { HeroSection } from "@/components/sections/new-hero";
import { FeaturesSection } from "@/components/sections/minimal-features";
import { HowItWorksSection } from "@/components/sections/minimal-how-it-works";
import { SecuritySection } from "@/components/sections/minimal-security";
import { TestimonialsSection } from "@/components/sections/minimal-testimonials";
import { FAQSection } from "@/components/sections/minimal-faq";
import { CTASection } from "@/components/sections/minimal-cta";
import { MinimalFooter } from "@/components/sections/minimal-footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <MinimalFooter />
    </main>
  );
}
