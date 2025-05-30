"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";

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
        {/* Heading */}
        <h2 className="hidden md:block text-4xl font-bold text-gray-900 mb-10">
          Plan Comparison
        </h2>

        {/* Large Screen Table */}
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

              {/* Plan Columns */}
              {plans.map((plan, idx) => (
                <div key={idx} className="bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded-2xl p-4 text-sm font-medium text-gray-700 flex flex-col justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 py-3 border-b border-gray-200">{plan.name}</div>
                    {plan.values.map((value, index) => (
                      <div key={index} className="py-3 border-b border-gray-200">{value}</div>
                    ))}
                  </div>
                  {/* Desktop Button */}
                  <div className="pt-4">
                    <Button
                      className="w-full
                        bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)]
                        text-white
                        py-2
                        text-sm
                        font-semibold
                        rounded-xl
                        transition-all duration-300
                        hover:scale-105
                        border-none"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Slider */}
        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="py-4"
          >
            {plans.map((plan, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl p-6 shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</div>
                    {features.map((feature, i) => (
                      <div key={i} className="flex justify-between py-2 border-b text-sm text-gray-700">
                        <span className="font-medium">{feature}</span>
                        <span>{plan.values[i]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tablet Button */}
                  <Button
                    className="w-full
                      bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)]
                      text-white
                      py-2 sm:py-3 md:py-4
                      text-sm sm:text-base md:text-lg
                      font-semibold
                      rounded-xl
                      transition-all duration-300
                      hover:scale-105
                      border-none
                      mt-6"
                  >
                    Get Started
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View (Empty for now) */}
        <div className="block md:hidden">
          {/* Nothing shown on mobile as per design */}
        </div>
      </div>

      {/* Swiper Navigation Arrows Styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #0cc1c7;
          background-color: rgba(10, 30, 50, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          box-shadow: 0 4px 10px rgb(12 193 199 / 0.4);
          transition: background-color 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #0cc1c7;
          color: white;
          box-shadow: 0 6px 15px rgb(12 193 199 / 0.7);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default PricingTableV2;
