const PlanComparisonSection = () => {
  return (
    <section className="py-24 px-6"> {/* Increased padding for top and bottom */}
      <div className="hidden md:block max-w-7xl mx-auto">
        {/* Heading on top left */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Plan Comparison</h2>

        {/* Wrapper div with spacing around the "table" */}
        <div className="bg-neutral-50 border border-white rounded-2xl p-6 space-y-4">
          {/* Header Row */}
          <div className="grid grid-cols-9 gap-4 text-gray-900 font-semibold text-xs leading-[16px] px-3 py-3 rounded-lg bg-gray-100">
            <div>Plan</div>
            <div>Monthly Price</div>
            <div>Users Included</div>
            <div>AI Interview Analysis (per month)</div>
            <div>Add User (per month)</div>
            <div>Add user + Integration</div>
            <div>Change Plan Anytime</div>
            <div>Annual Price (3 Months Free)</div>
            <div>Best For</div>
          </div>

          {/* Data Rows */}
          {[
            {
              plan: "Starter",
              monthly: "$14.9",
              users: "1",
              analysis: "Up to 10",
              addUser: "$5/Mo",
              integration: "$10/Mo (just for integrations)",
              changePlan: "✓",
              annual: "$149",
              bestFor: "Solo Recruiters, early stage startups",
            },
            {
              plan: "Growth",
              monthly: "$49.9",
              users: "5",
              analysis: "Up to 50",
              addUser: "$8/Mo",
              integration: "$8/Mo (just for integrations)",
              changePlan: "✓",
              annual: "$499",
              bestFor: "Startup teams, Boutique Services",
            },
            {
              plan: "Scale",
              monthly: "$119.9",
              users: "5",
              analysis: "Up to 500",
              addUser: "$5/Mo",
              integration: "$5/Mo (just for integrations)",
              changePlan: "✓",
              annual: "$1199",
              bestFor: "High volume Staffing agencies, large teams",
            },
            {
              plan: "Enterprise",
              monthly: "Custom",
              users: "Custom",
              analysis: "Custom usage caps",
              addUser: "Custom",
              integration: "Custom",
              changePlan: "Custom",
              annual: "Custom",
              bestFor: "Enterprise Customer Dedicated corp",
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-9 gap-4 text-gray-700 text-xs leading-[16px] px-3 py-3 rounded-lg bg-gray-50 transition"
            >
              <div>{row.plan}</div>
              <div>{row.monthly}</div>
              <div>{row.users}</div>
              <div>{row.analysis}</div>
              <div>{row.addUser}</div>
              <div>{row.integration}</div>
              <div>{row.changePlan}</div>
              <div>{row.annual}</div>
              <div>{row.bestFor}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanComparisonSection;
