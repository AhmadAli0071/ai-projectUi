// Trusted By Section
export const TrustedBy = () => {
  const companies = [
    { name: "Kaptivate", logo: "/TrustedBy/kapti.png" },
    { name: "Emgage", logo: "/TrustedBy/emga.png" },
    { name: "Abracadata", logo: "/TrustedBy/abraca.png" },
    { name: "SVSU", logo: "/TrustedBy/Svsu.png" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading centered inside container */}
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Trusted by
        </h2>
      </div>

      {/* Grey box full width */}
      <div className="bg-gray-100 w-full">
        {/* Inner content max width and horizontal padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
