import BetaSection from "@/components/beta-section";
import CTASection from "@/components/cta-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)] w-full overflow-x-hidden">
      <div className="relative w-full">
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <BetaSection />
        <ProcessSection />
        <CTASection />
      </div>
    </div>
  );
}
