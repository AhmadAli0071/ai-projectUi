
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">GenuineHire</span>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 p-2 border border-gray-300 rounded-l-md"
                />
                <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] transition-all duration-300 hover:scale-105 border-none text-white px-4 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

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

          {/* Resources & Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li><a href="#" className="hover:text-gray-900">About us</a></li>
              <li><Link to="/careers" className="hover:text-gray-900">Careers</Link></li>
              <li><a href="#" className="hover:text-gray-900">Partners</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
            
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
    </footer>
  );
};

export default Footer;
