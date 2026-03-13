import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhatsAppAPISection from "@/components/home/WhatsAppAPISection";
import TrustedBySection from "@/components/home/TrustedBySection";
import UseCasesSection from "@/components/home/UseCasesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhatsAppAPISection />
      <TrustedBySection />
      <UseCasesSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
