import React, { useState } from "react";
import form1 from "../assets/form1.svg"; // adjust if needed
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Don't forget to import the styles!

const GetDemo: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [brandChecked, setBrandChecked] = useState(false);
  const [influencerChecked, setInfluencerChecked] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., form validation, API call)
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full  bg-white p-[41.81px] rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="growth-text">Let’s growth together with</span>
              <img src={form1} alt="form1" className="h-[30px]" />
              <span className="growth-text">KEEK</span>
            </div>
            <span className="contact-text">
              You can reach us anytime via xyz@keek.in
            </span>
          </div>

          {/* Name field */}
          <div className="flex flex-col" style={{ gap: "5.02px" }}>
            <label className="label-text">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
          </div>

          {/* Email field */}
          <div
            className="flex flex-col"
            style={{ gap: "5.02px", marginTop: "20.7px" }}
          >
            <label className="label-text">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="input-field"
            />
          </div>

          {/* Phone Number field */}
          <div
            className="flex flex-col"
            style={{ gap: "5.02px", marginTop: "20.7px" }}
          >
            <label className="label-text">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="input-field"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Who you are? */}
          <div className="flex flex-col" style={{ marginTop: "20.7px" }}>
            <span className="question-text">Who you are?</span>

            {/* Checkboxes */}
            <div className="flex gap-9.12px mt-8.36px">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={brandChecked}
                  onChange={() => {
                    setBrandChecked(true);
                    setInfluencerChecked(false);
                  }}
                  className="form-checkbox"
                />
                <label className="checkbox-label">Brand</label>
              </div>
              <div className="flex items-center gap-2 ml-[24.33px]">
                <input
                  type="checkbox"
                  checked={influencerChecked}
                  onChange={() => {
                    setInfluencerChecked(true);
                    setBrandChecked(false);
                  }}
                  className="form-checkbox"
                />
                <label className="checkbox-label">Influencer</label>
              </div>
            </div>
          </div>

          {/* How can we help? */}
          <div className="flex flex-col" style={{ marginTop: "20.7px" }}>
            <span className="question-text">How can we help?</span>

            {/* Form field for message */}
            <div
              className="flex flex-col"
              style={{ gap: "5.02px", marginTop: "5.02px" }}
            >
              <textarea
                placeholder="Tell us a little about the project..."
                className="w-[575.37px] h-[58.266px] p-4 border rounded-lg border-gray-300"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex flex-col mt-[26.76px]">
            <button
              onClick={handleSubmit}
              className="w-[575.37px] h-[41.07px] rounded-[6.69px] border-[0.836px] border-[#1D4ED8] bg-[#1D4ED8] text-white shadow-[0px_0.836px_1.673px_0px_rgba(16,24,40,0.05)] hover:bg-[#2563eb] transition-all"
            >
              <span className="text-[14px] font-medium font-[Plus Jakarta Sans] leading-[20.071px]">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDemo;
