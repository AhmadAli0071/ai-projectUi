import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isTabletDrawerOpen, setTabletDrawerOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 relative z-50">
      <div className="max-w-7xl mx-auto w-full">

        {/* === Mobile Layout === */}
        <div className="flex items-center justify-between md:hidden w-full">
          {/* Left: Logo */}
          <img src="/Vector.png" alt="Logo" className="h-6" />

          {/* Right: Drawer Menu */}
          <Menu className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => setMobileDrawerOpen(true)} />
        </div>

        {/* === Tablet Layout Only === */}
        <div className="hidden md:flex lg:hidden items-center justify-between relative w-full">
          {/* Left: Menu (opens LEFT drawer) */}
          <Menu className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => setTabletDrawerOpen(true)} />

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/Vector.png" alt="Logo" className="h-6" />
          </div>

          {/* Right: Sign Up */}
          <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-4 py-2 text-sm rounded-md">
            Sign Up
          </Button>
        </div>

        {/* === Desktop Layout === */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Vector.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Center: Nav Links */}
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
           
            <Link to="/pricing2" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link to="/compatibility" className="text-gray-600 hover:text-gray-900">Compatibility</Link>
                <Link to="/NotFound" className="text-gray-600 hover:text-gray-900">Product</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          
            <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
          </nav>

          {/* Right:& CTA */}
          <div className="flex items-center space-x-4">
            
            <Button className="bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-6 py-2 rounded-md">
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>

      {/* === Mobile Drawer (Right Side) === */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMobileDrawerOpen(false)}>
          <div
            className="absolute top-0 right-0 w-72 h-full bg-white p-6 shadow-lg flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
              <X className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => setMobileDrawerOpen(false)} />
            </div>

            <nav className="flex flex-col space-y-4">
              <Link to="/">Home</Link>
              
              <Link to="/pricing2">PV2</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/compatibility">Compatibility</Link>
              <a href="#">Login</a>
            </nav>

            <Button className="w-full mt-4 bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-4 py-2 rounded-md">
              Sign Up Now
            </Button>
          </div>
        </div>
      )}

      {/* === Tablet Drawer (Left Side) === */}
      {isTabletDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setTabletDrawerOpen(false)}>
          <div
            className="absolute top-0 left-0 w-72 h-full bg-white p-6 shadow-lg flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
              <X className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => setTabletDrawerOpen(false)} />
            </div>

            

            <nav className="flex flex-col space-y-4">
              <Link to="/">Home</Link>
              <Link to="/pricing2">PV2</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/compatibility">Compatibility</Link>
              <a href="#">Login</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
