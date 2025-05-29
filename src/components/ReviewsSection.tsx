
const ReviewsSection = () => {
  return (
   <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Reviews</h2>

          <div className="mb-8">
            <p className="text-2xl text-gray-400 mb-6">
              "This is exactly the kind of tool I didn't know I needed until I saw it."
            </p>

            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Matthieu de Groot</p>
                <p className="text-gray-600">Founder - Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ReviewsSection;
