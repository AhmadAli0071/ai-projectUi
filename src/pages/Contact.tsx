import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroPricing from "@/components/HeroPricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import ReviewSection from "@/components/ReviewsSection";
import { TrustedBy } from "@/components/TrustedBy";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroPricing />
        <FAQ />
        <ContactForm />
        <ReviewSection />
        <TrustedBy />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
