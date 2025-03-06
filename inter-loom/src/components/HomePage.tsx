import HeroSection from "./HeroSection";
import PromoSection from "./PromoSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
    <HeroSection />
    <PromoSection />
    <FeaturesSection />
    <FAQSection />
  </div>
  );
}
