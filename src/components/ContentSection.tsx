import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InfoCard from "./InfoCard";

const ContentSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-12 md:mb-16">
          <InfoCard
            title="A bad hire is costly"
            description="Especially when candidates use AI to misrepresent themselves. Our platform helps you identify and avoid those risks early."
          />
          <InfoCard
            title="In-depth analysis"
            description="Record interviews directly on our platform and receive a detailed analysis revealing whether AI assistance was used by the candidate."
          />
        </div>

        <div className="text-center">
          <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-lg md:text-xl font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 border-none">
            Sign up to fight AI with AI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
