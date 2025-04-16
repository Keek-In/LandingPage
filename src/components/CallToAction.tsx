import React from "react";
import calltoactionSvg from "../assets/calltoaction.svg"; // Import as image
import callimg2Svg from "../assets/callimg-2.svg"; // Import the second SVG

const CallToAction: React.FC = () => {
  return (
    <div className="call-to-action-container flex justify-between items-center relative">
      <div className="text-container">
        <p className="download-now-text">DOWNLOAD NOW!</p>
        <p className="journey-text">Start Your Social earning <br />Journey with the knowns.</p>
        <p className="brand-text">Are you ready to grow  your brand & identity?<br /> Get KEEK.in now!</p>
        <button className="demo-button">Get a Free Demo</button>
      </div>

      {/* First SVG (call to action icon) */}
      <img
        src={calltoactionSvg}
        alt="Call to Action"
        className="call-to-action-icon"
      />

      {/* Second SVG (callimg-2) */}
      <img
        src={callimg2Svg}
        alt="Call Image 2"
        className="callimg-2"
      />
    </div>
  );
};

export default CallToAction;
