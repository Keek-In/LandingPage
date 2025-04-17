import React from "react";
import ContentImage from "../assets/Content.png"; // adjust path if needed

const HowItWorks: React.FC = () => {
  return (
    <div className="w-[1440px] h-[888px] bg-[#0D121F] p-[130px]">
      <div className="flex h-full">
        <img
          src={ContentImage}
          alt="Content Illustration"
          className="h-full object-contain"
        />
        <div className="ml-[102px] flex flex-col">
          <span className="how-it-works-title">HOW IT WORKS</span>
          <span className="join-keek-title mt-[32px]">Join Keek with simple steps!</span>
          <span className="ready-to-launch mt-[24px]">
            Ready to Launch Influencer Campaigns in India? Here's<br /> your Quick guide to Keek Onboarding and become<br /> part of the fun:
          </span>

          {/* New Container with border-radius and padding */}
          <div className="w-[491px] h-[372px] bg-[#1A202C] mt-[32px] rounded-[12px] p-[30px_32px] relative">
            {/* Vertical dashed line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="162"
              viewBox="0 0 2 162"
              fill="none"
              className="absolute left-[55px] bottom-[45px]"
            >
              <path d="M1 0L1 162" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            {/* SVG and Text for "Sign Up as a Brand" */}
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#1A71F6"/>
            <text x="24" y="28" text-anchor="middle" fill="white" font-size="20" font-family="Plus Jakarta Sans" font-weight="600">1</text>
            </svg>

              <span className="sign-up-text" style={{ marginLeft: "16px", color: "#FFFFFF", fontSize: "20px", fontWeight: "500" }}>
                Sign Up as a Brand
              </span>
            </div>

            {/* SVG and Text for "Create your first Campaign" */}
            <div className="flex items-center mt-[40px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#1A71F6"/>
            <text x="24" y="28" text-anchor="middle" fill="white" font-size="20" font-family="Plus Jakarta Sans" font-weight="600">2</text>
            </svg>

              <span className="sign-up-text" style={{ marginLeft: "16px", color: "#FFFFFF", fontSize: "20px", fontWeight: "500" }}>
                Create your first Campaign
              </span>
            </div>

            {/* SVG and Text for "Find your creators" */}
            <div className="flex items-center mt-[40px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="white"/>
            <text x="24" y="28" text-anchor="middle" fill="#000" font-size="20" font-family="Plus Jakarta Sans" font-weight="600">3</text>
            </svg>

              <span className="find-creators-text" style={{ marginLeft: "16px", color: "#FFFFFF", fontSize: "20px", fontWeight: "500" }}>
                Find your creators
              </span>
            </div>

            {/* SVG and Text for "Seal the deal" */}
            <div className="flex items-center mt-[40px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="white"/>
            <text x="24" y="28" text-anchor="middle" fill="#000" font-size="20" font-family="Plus Jakarta Sans" font-weight="600">4</text>
            </svg>

              <span className="seal-the-deal-text" style={{ marginLeft: "16px", color: "#FFFFFF", fontSize: "20px", fontWeight: "500" }}>
                Seal the deal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
