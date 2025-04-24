import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetDemo from "../pages/GetDemo"; // Import the GetDemo form component

const Navbar: React.FC = () => {
  // State to control the popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-6 px-6 lg:px-20 bg-[#0D121F] shadow-custom navbar-border z-1000">
      {/* Logo */}
      <div className="text-[20px] font-bold text-white">KEEK</div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-10 text-[15px] text-white font-medium">
        <li className="hover:text-gray-300 cursor-pointer font-bold">
          <Link to="/brands">Brands</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/creators">Creators</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/get-demo">Contact Us</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-sm text-white hover:text-gray-300 font-medium">
          Login
        </button>
        <button
          className="bg-[#1A71F6] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          onClick={togglePopup}
        >
          Get Demo
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-popup-btn" onClick={togglePopup}>
              &times; {/* Close icon */}
            </button>
            {/* GetDemo form component */}
            <GetDemo />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
