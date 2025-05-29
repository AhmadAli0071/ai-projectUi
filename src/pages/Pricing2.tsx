import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrustedBy } from "@/components/TrustedBy";
import ReviewSection from "@/components/ReviewsSection";
import DemoSection from "@/components/DemoSection";
import PricingTableV2 from "@/components/PricingTableV2";
import PricingSection from "@/components/PricingSection";
import HeroPricing from "@/components/HeroPricing";

function Pricing2() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroPricing />
      <PricingSection />
      <PricingTableV2 />
      <DemoSection />
      <ReviewSection />
      <TrustedBy />
      <Footer />
    </div>
  );
}

export default Pricing2;
