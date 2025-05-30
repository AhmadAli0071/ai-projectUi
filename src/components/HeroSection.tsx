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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Keep Interviews Human. Keep Hiring Fair.
        </h1>

        {/* Logo */}
        <div className="flex items-center justify-center mb-5">
          <img
            src="/Hero/VectorHero.png"
            alt="GenuineHire Logo"
            className="h-14 w-auto sm:h-16 md:h-20"
          />
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-medium">
          Level The Interview Playing Field
        </p>

        {/* CTA Button */}
        <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] transition-all duration-300 hover:scale-105 border-none text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-semibold">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
