import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gray-900 py-20 px-4 text-white"
      style={{
        backgroundImage: "url('/Hero/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Keep Interviews Human. Keep Hiring Fair.
        </h1>

        <div className="flex items-center justify-center mb-5">
          <img
            src="/Hero/VectorHero.png"
            alt="GenuineHire Logo"
            className="h-20 w-auto"
          />
        </div>

        <p className="text-2xl mb-8 font-medium">
          Level The Interview Playing Field
        </p>

        <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] transition-all duration-300 hover:scale-105 border-none text-white px-10 py-6 rounded-2xl text-xl font-semibold">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
