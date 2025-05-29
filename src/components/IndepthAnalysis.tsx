import React from "react";

const InDepthAnalysis = () => {
  return (
    <section className="w-full px-8 max-w-7xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">In-depth Analysis</h2>

      {/* Full-width paragraph */}
      <p className="text-gray-700 mb-12 leading-relaxed max-w-full">
        The Future of Authentic Candidate Assessment: In today's competitive job market,
        distinguishing between genuine candidates and AI-generated responses has become crucial.
        <span className="font-semibold text-gray-700"> GenuineHire</span> offers a sophisticated,
        12-dimensional analysis system that goes beyond traditional screening methods to help
        recruiters make informed decisions about candidate authenticity. Our platform doesn't just
        tell you if a candidate is qualified – it shows you exactly why. With detailed breakdowns
        of each analysis component.
      </p>

      {/* Flex container for image and bullet points */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
        {/* Image on the left */}
        <div className="flex justify-center md:justify-start md:w-1/2 mb-8 md:mb-0">
          <img
            src="/path-to-your-image.png"
            alt="Analysis Visual"
            className="w-full max-w-[320px] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Bullet points on the right */}
        <ul className="text-gray-700 text-base space-y-6 list-disc list-inside md:w-1/2">
          <li>Identify potential AI-generated responses through our comprehensive similarity analysis</li>
          <li>Detect natural communication patterns and authentic human expression</li>
          <li>Analyze the presence and distribution of technical terminology in responses</li>
          <li>Assess response patterns through our advanced detection system</li>
          <li>Make informed decisions based on comprehensive data about candidate responses</li>
        </ul>
      </div>

      {/* Final paragraph */}
      <p className="mt-12 text-gray-700 leading-relaxed max-w-full">
        Transform your hiring process with <span className="font-semibold text-gray-700">GenuineHire</span> —
        where we provide powerful tools to help recruiters assess candidate authenticity. Our platform
        offers clear insights and recommendations about potential AI usage in the application process,
        empowering you to make better-informed decisions about your candidates.
      </p>
    </section>
  );
};

export default InDepthAnalysis;
