
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroPricing from "@/components/HeroPricing";
import PricingSection from "@/components/PricingSection";
import DemoSection from "@/components/DemoSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingTable from "@/components/PricingTable";
import DemoSectionV2 from "@/components/DemoSessionV2";


import Footer from "@/components/Footer";
import { TrustedBy } from "@/components/TrustedBy";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroPricing />
      <PricingSection />
      <PricingTable/>
      <DemoSectionV2 />
      <ReviewsSection />
      <TrustedBy/>
      <Footer />
    </div>
  );
};

export default Pricing;
