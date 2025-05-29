import { Button } from "@/components/ui/button";

const CompatibleHero = () => {
  return (
    <section
      className="relative bg-gray-900 py-20 px-6 text-white"
      style={{
        backgroundImage: "url('/Hero/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Compatible with every client
        </h1>
        <p className="text-lg w-full md:w-3/4 mx-auto mb-8">
          Whether you use Zoom, Google Meet, or a different client, Genuine Hire supports it all.
        </p>
      </div>
    </section>
  );
};

export default CompatibleHero;
