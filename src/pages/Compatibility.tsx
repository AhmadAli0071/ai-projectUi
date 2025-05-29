import React from "react";
import Header from "@/components/Header";
import CompatibleHero from "@/components/CompatibleHero";
import Footer from "@/components/Footer";
import InDepthAnalysis from "@/components/IndepthAnalysis";



const GenuineHirePage = () => {
  return (
    <div className="text-gray-800 font-sans">
      <Header />
      <CompatibleHero />
      <InDepthAnalysis/>
      <Footer />
    </div>
  );
};

export default GenuineHirePage;