import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 lg:px-20 bg-[#0D121F] shadow-custom">
      {/* Logo */}
      <div className="text-[20px] font-bold text-white">KEEK</div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-10 text-[15px] text-white font-medium">
        <li className="hover:text-gray-300 cursor-pointer font-bold">Brands</li>
        <li className="hover:text-gray-300 cursor-pointer">Creators</li>
        <li className="hover:text-gray-300 cursor-pointer">About Us</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
      </ul>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-sm text-white hover:text-gray-300 font-medium">
          Login
        </button>
        <button className="bg-[#1A71F6] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Get Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
