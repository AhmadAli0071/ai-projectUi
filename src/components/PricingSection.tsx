import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Responsive Grid for all 4 Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              title: "Starter",
              description: "For Solo recruiters / Early Startups",
              monthly: "$14.9",
              annual: "$149",
              features: [
                { label: "Users", value: "1" },
                { label: "AI Analysis Screenings", value: "5" },
                { label: "Add user", value: "$5" },
                { label: "Over 5 100 Interviews", value: "$10k" },
                { label: "Change Plan Anytime", value: "✓" },
              ],
            },
            {
              title: "Growth",
              description: "Startup teams / Boutique agencies",
              monthly: "$49.9",
              annual: "$499",
              features: [
                { label: "Users", value: "5" },
                { label: "AI Analysis Screenings", value: "50" },
                { label: "Add user", value: "$8" },
                { label: "Over 5 100 Interviews", value: "$8" },
                { label: "Change Plan Anytime", value: "✓" },
              ],
            },
            {
              title: "Scale",
              description: "High-volume hiring / Lean teams",
              monthly: "$119.9",
              annual: "$1199",
              features: [
                { label: "Users", value: "25" },
                { label: "AI Analysis Screenings", value: "500" },
                { label: "Add user", value: "$5" },
                { label: "Over 5 100 Interviews", value: "$5" },
                { label: "Change Plan Anytime", value: "✓" },
              ],
            },
            {
              title: "Custom",
              description: "Enterprise / Compliance-focused orgs",
              monthly: "____",
              annual: "___",
              features: [
                { label: "Users", value: "∞" },
                { label: "AI Analysis Screenings", value: "∞" },
                { label: "Add user", value: "∞" },
                { label: "Over + 100 Interviews", value: "∞" },
                { label: "Change Plan Anytime", value: "∞" },
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 text-center">
                {plan.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 text-center">{plan.description}</p>
              <div className="flex justify-center space-x-6 sm:space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-[28px] sm:text-[34px] font-extrabold leading-none">{plan.monthly}</div>
                  <div className="text-sm font-normal mt-1">Monthly</div>
                </div>
                <div className="text-[28px] sm:text-[34px] font-semibold leading-none">/</div>
                <div className="text-center">
                  <div className="text-[20px] sm:text-[24px] font-semibold leading-none mt-4">{plan.annual}</div>
                  <div className="text-sm font-normal mt-1">Annual</div>
                </div>
              </div>
              <ul className="space-y-4 sm:space-y-5 mb-8">
                {plan.features.map(({ label, value }, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-black text-white text-xs font-bold">
                      &#10003;
                    </span>
                    <span>{label}</span>
                    <span className="ml-auto font-semibold">{value}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-md sm:rounded-lg transition-all duration-300 hover:scale-105 border-none">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
