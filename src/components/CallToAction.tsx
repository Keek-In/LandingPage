import React, { useState } from "react";
import calltoactionSvg from "../assets/calltoaction.svg";
import callimg2Svg from "../assets/callimg-2.svg";
import GetDemo from "../pages/GetDemo"; // Import the GetDemo form component

const CallToAction: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="call-to-action-container flex justify-between items-center relative">
      <div className="text-container">
        <p className="download-now-text">DOWNLOAD NOW!</p>
        <p className="journey-text">
          Start Your Social earning <br />Journey with the knowns.
        </p>
        <p className="brand-text">
          Are you ready to grow your brand & identity?<br /> Get KEEK.in now!
        </p>
        <button className="demo-button" onClick={togglePopup}>
          Get a Free Demo
        </button>
      </div>

      {/* First SVG */}
      <img
        src={calltoactionSvg}
        alt="Call to Action"
        className="call-to-action-icon"
      />

      {/* Second SVG */}
      <img
        src={callimg2Svg}
        alt="Call Image 2"
        className="callimg-2"
      />

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-popup-btn" onClick={togglePopup}>
              &times;
            </button>
            <GetDemo />
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
