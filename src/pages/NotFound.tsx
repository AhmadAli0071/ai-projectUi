import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* 404 Section */}
      <section className="bg-white flex-grow py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* Responsive Gradient 404 text */}
            <h1
              className="text-[96px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-bold leading-none mb-8 text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #2a7eb1, #0cc1c7)" }}
            >
              404
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto mb-8">
              The page you are looking for doesn't exist or has been moved. Please go back to the homepage.
            </p>

            <Link to="/">
              <Button
                className="text-white px-6 py-3 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base"
                style={{ backgroundImage: "linear-gradient(to right, #2a7eb1, #0cc1c7)" }}
              >
                Go Back Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
