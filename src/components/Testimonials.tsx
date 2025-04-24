import testimonialImage1 from "../assets/testimonial1.png"; // Import the image at the top
import testimonialImage2 from "../assets/testimonial2.png"; // Import the image at the top
import testimonialImage3 from "../assets/testimonial3.png"; // Import the image at the top

const Testimonials = () => {
  return (
    <div className="w-full h-[967px] bg-[#FFFFFF] p-[120px]">
      <p className="testimonials-heading">WHAT THEY SAY</p>
      <p className="keekster-heading">Hear from our Keeksters!</p>
      <p className="testimonials-subtext">
        We love and value our vibrant community who've experienced the power of
        Keek firsthand.
      </p>

      <div className="flex justify-center items-center gap-[24px] mt-[64px]">
        <div className="testimonial-card">
          <p className="testimonial-title">No doubt, Spend.In is the best!</p>
          <p className="testimonial-desc">
            “The best”! That’s what I want to say to this platform, didn’t know
            that there’s a platform to help you manage your business expenses
            like this! Very recommended to you who have a big business!
          </p>
          <div className="testimonial-divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="2"
              viewBox="0 0 320 2"
              fill="none"
            >
              <path opacity="0.2" d="M0 1H320" stroke="#040815" />
            </svg>
          </div>
          <div className="flex items-center mt-[30px]">
            <img src={testimonialImage1} alt="Testimonial1" />
            <p className="text-right ml-[20px] mt-[0px] text-[#040815] text-[18px] font-[700] leading-[27px] tracking-[-0.54px]">
              Maybelline
            </p>
            <p className="text-right ml-[-90px] mt-[35px] text-[#596780] text-[14px] font-[400] leading-[21px] tracking-[-0.28px]">
              Beauty & Skincare
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-title">Satisfied User Here!</p>
          <p className="testimonial-desc">
            Never thought that with Spend.In managing my business expenses is so
            easy! Been using this platform for 3 months and still counting!
          </p>
          <div className="testimonial-divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="2"
              viewBox="0 0 320 2"
              fill="none"
            >
              <path opacity="0.2" d="M0 1H320" stroke="#040815" />
            </svg>
          </div>
          <div className="flex items-center mt-[30px]">
            <img src={testimonialImage2} alt="Testimonial2" />
            <p className="text-right ml-[20px] mt-[0px] text-[#040815] text-[18px] font-[700] leading-[27px] tracking-[-0.54px]">
              Maybelline
            </p>
            <p className="text-right ml-[-90px] mt-[35px] text-[#596780] text-[14px] font-[400] leading-[21px] tracking-[-0.28px]">
              Beauty & Skincare
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-title">Satisfied User Here!</p>
          <p className="testimonial-desc">
            Never thought that with Spend.In managing my business expenses is so
            easy! Been using this platform for 3 months and still counting!
          </p>
          <div className="testimonial-divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="2"
              viewBox="0 0 320 2"
              fill="none"
            >
              <path opacity="0.2" d="M0 1H320" stroke="#040815" />
            </svg>
          </div>
          <div className="flex items-center mt-[30px]">
            <img src={testimonialImage3} alt="Testimonial3" />
            <p className="text-right ml-[20px] mt-[0px] text-[#040815] text-[18px] font-[700] leading-[27px] tracking-[-0.54px]">
              Maybelline
            </p>
            <p className="text-right ml-[-90px] mt-[35px] text-[#596780] text-[14px] font-[400] leading-[21px] tracking-[-0.28px]">
              Beauty & Skincare
            </p>
          </div>
        </div>
      </div>

      {/* Buttons section below testimonial containers */}
      <div className="flex justify-center gap-[24px] mt-[64px]">
        <button className="flex items-center justify-center w-[48px] h-[50px] bg-[#F3F5F7] rounded-full p-[16px] gap-[8px] hover:bg-[#1A71F6] transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M7.1775 4.44727L2.625 8.99977L7.1775 13.5523"
              stroke="#C3D4E9"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3749 9H2.75244"
              stroke="#C3D4E9"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center w-[48px] h-[50px] bg-[#F3F5F7] rounded-full p-[16px] gap-[8px] hover:bg-[#1A71F6] transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523"
              stroke="#C3D4E9"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3749 9H2.75244"
              stroke="#C3D4E9"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
