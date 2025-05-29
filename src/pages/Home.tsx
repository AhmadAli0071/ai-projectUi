import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import { TrustedBy } from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Main Page Component
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ContentSection />
      <TrustedBy />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
