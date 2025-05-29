"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PricingTableV2 = () => {
  const features = [
    "Monthly Price",
    "Seats Included",
    "AI Interview Analyses (per month)",
    "Add Seat (No Interviews)",
    "Add seat + Interview",
    "Overage (Per Interview)",
    "Annual Price (2 Months Free)",
    "Best For",
  ];

  const plans = [
    {
      name: "Starter",
      values: ["$14.9", "1", "Up to 30", "$4/Mo", "$7.5/Mo (Incl 30 Interviews)", "$1", "$149", "Solo recruiters, early startups"],
    },
    {
      name: "Growth",
      values: ["$49.9", "3", "Up to 150", "$5/Mo", "$9/Mo (Incl 50 Interviews)", "$0.8", "$499", "Startup teams, boutique agencies"],
    },
    {
      name: "Scale",
      values: ["$119.9", "5", "Up to 500", "$6/Mo", "$10/Mo (Incl 100 Interviews)", "$0.5", "$1,199", "High-volume hiring, lean teams"],
    },
    {
      name: "Enterprise",
      values: ["Custom", "Custom", "Custom usage caps", "Custom", "Custom", "Custom", "Custom", "Enterprise Compliance - focused orgs"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Plan Comparison</h2>

        {/* 💻 Large Screen: Full Table */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="grid grid-cols-5 gap-4">
              {/* Feature List */}
              <div className="bg-blue-50 rounded-2xl p-4 text-sm font-medium text-gray-700">
                <div className="font-semibold text-gray-900 py-3 border-b border-blue-200">Plan</div>
                {features.map((feature, index) => (
                  <div key={index} className="py-3 border-b border-blue-200 last:border-none">{feature}</div>
                ))}
              </div>

              {/* Plans */}
              {plans.map((plan, idx) => (
                <div key={idx} className="bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded-2xl p-4 text-sm font-medium text-gray-700">
                  <div className="font-semibold text-gray-900 py-3 border-b border-gray-200">{plan.name}</div>
                  {plan.values.map((value, index) => (
                    <div key={index} className="py-3 border-b border-gray-200 last:border-none">{value}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🧾 Tablet Only: Slider with 2 Cards */}
        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
          >
            {plans.map((plan, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl p-6 shadow h-full">
                  <div className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</div>
                  {features.map((feature, i) => (
                    <div key={i} className="flex justify-between py-2 border-b text-sm text-gray-700">
                      <span className="font-medium">{feature}</span>
                      <span>{plan.values[i]}</span>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 📱 Mobile: Completely Hidden */}
        <div className="block md:hidden">
          {/* Nothing to show here */}
        </div>
      </div>
    </section>
  );
};

export default PricingTableV2;
