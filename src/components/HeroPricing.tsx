import { Button } from "@/components/ui/button";

const HeroPricing = () => {
  return (
    <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Hire with confidence
          </h1>
          <p className="text-2xl text-gray-500 max-w-2xl mx-auto mb-8">
            Ready to see how your hiring team can spot AI-enhanced candidates — instantly? <span className="text-black font-bold">Sign Up Now</span>
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 border-none">
              Get Started
            </Button>
            <Button variant="outline" className=" text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 border-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>
  );
};

export default HeroPricing;