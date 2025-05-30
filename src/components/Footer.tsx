import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo and Newsletter */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">GenuineHire</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-52 h-10 px-3 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none"
                />
                <Button className="h-10 px-4 bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] transition-all duration-300 hover:scale-105 border-none text-white rounded-b-md sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section: Support, Products, Resources, Community */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="hover:text-gray-900">Help</a></li>
                <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900">Technical Support</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Online Search</a></li>
                <li><a href="#" className="hover:text-gray-900">Customer Service</a></li>
                <li><a href="#" className="hover:text-gray-900">Analytics</a></li>
                <li><a href="#" className="hover:text-gray-900">Legal</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                <li><Link to="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><a href="#" className="hover:text-gray-900">Partners</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Discord Server</a></li>
                <li><a href="#" className="hover:text-gray-900">Reddit</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
