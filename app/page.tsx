import { HeroSection } from "@/components/hero/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SalonTourSection } from "@/components/sections/SalonTourSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustIndicatorsSection } from "@/components/sections/TrustIndicatorsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { StickyConversionCTA } from "@/components/global/StickyConversionCTA";
import { ValuesMicroMoment, salonValues } from "@/components/sections/ValuesMicroMoment";
import { ClientPersonas } from "@/components/booking/ClientPersonas";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueSection />
      <ValuesMicroMoment value={salonValues[0]} index={0} />
      <ServicesSection />
      <ValuesMicroMoment value={salonValues[1]} index={1} />
      <ClientPersonas />
      <TeamSection />
      <ValuesMicroMoment value={salonValues[2]} index={2} />
      <BeforeAfterSection />
      <ValuesMicroMoment value={salonValues[3]} index={3} />
      <TestimonialsSection />
      <SalonTourSection />
      <PricingSection />
      <TrustIndicatorsSection />
      <ValuesMicroMoment value={salonValues[4]} index={4} />
      <FinalCTASection />
      <StickyConversionCTA />
    </div>
  );
}
