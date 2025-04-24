const Pricing = () => {
  return (
    <div className="w-full h-[1000px] bg-[#0D121F] pt-[26px] px-[111px] pb-[123px]">
      <p className="text-[#1A71F6] font-semibold text-[18px] leading-[28px] font-['Inter'] mt-[126px]">
        Pricing & Plan for{" "}
        <span className="italic font-bold text-[#1A71F6]">Brands</span>
      </p>
      <p className="text-white font-bold text-[60px] leading-[66px] tracking-[-2px] font-['Inter'] mt-[28.76px]">
        Choose a plan that suits
        <br /> for your business
      </p>

      {/* Pricing cards container */}
      <div className="flex justify-center gap-[24px] mt-[40px]">
        {/* First Container */}
        <div className="w-[390px] h-[497px] bg-[#1A202C] rounded-[8px] px-[35px]">
          <p className="text-[#1A71F6] text-center font-semibold text-[18px] leading-[28px] font-['Inter'] mt-[28px]">
            Free
          </p>
          <p className="text-white text-center font-bold text-[48px] leading-[60px] tracking-[-2px] font-['Inter'] mt-[20px]">
            ₹0
          </p>
          <p className="text-[#F3F5F7] text-center font-normal text-[16px] leading-[26px] font-['Inter'] mt-[3px]">
            Per month, billed annually
          </p>
          <button className="flex items-center justify-center gap-[10px] w-[320px] h-[60px] px-[24px] py-[16px] flex-col rounded-[8px] border border-[#FFF] bg-[#FFF] mt-[30px] text-[#191E2A] font-semibold text-[18px] leading-[28px] font-['Inter'] transition-all duration-300 ease-in-out hover:bg-[#1A71F6] hover:text-[#FFF]">
            <span>Subscribe</span>
          </button>
          <div className="flex items-center justify-left gap-[10px] mt-[28.86px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Complete Documentation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Working Materials in Figma
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              100GB Cloud Storage
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Email Automation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Premium Support
            </span>
          </div>
        </div>

        {/* Second Container */}
        <div className="w-[390px] h-[497px] bg-[#1A202C] rounded-[8px] px-[35px]">
          <p className="text-[#1A71F6] text-center font-semibold text-[18px] leading-[28px] font-['Inter'] mt-[28px]">
            Pro
          </p>
          <p className="text-white text-center font-bold text-[48px] leading-[60px] tracking-[-2px] font-['Inter'] mt-[20px]">
            ₹49
          </p>
          <p className="text-[#F3F5F7] text-center font-normal text-[16px] leading-[26px] font-['Inter'] mt-[3px]">
            Per month, billed annually
          </p>
          <button className="flex items-center justify-center gap-[10px] w-[320px] h-[60px] px-[24px] py-[16px] flex-col rounded-[8px] border border-[#FFF] bg-[#FFF] mt-[30px] text-[#191E2A] font-semibold text-[18px] leading-[28px] font-['Inter'] transition-all duration-300 ease-in-out hover:bg-[#1A71F6] hover:text-[#FFF]">
            <span>Subscribe</span>
          </button>
          <div className="flex items-center justify-left gap-[10px] mt-[28.86px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Complete Documentation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Working Materials in Figma
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              100GB Cloud Storage
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Email Automation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Premium Support
            </span>
          </div>
        </div>

        {/* Third Container */}
        <div className="w-[390px] h-[497px] bg-[#1A202C] rounded-[8px] px-[35px]">
          <p className="text-[#1A71F6] text-center font-semibold text-[18px] leading-[28px] font-['Inter'] mt-[28px]">
            Exclusive
          </p>
          <p className="text-white text-center font-bold text-[48px] leading-[60px] tracking-[-2px] font-['Inter'] mt-[20px]">
            ₹99
          </p>
          <p className="text-[#F3F5F7] text-center font-normal text-[16px] leading-[26px] font-['Inter'] mt-[3px]">
            Per month, billed annually
          </p>
          <button className="flex items-center justify-center gap-[10px] w-[320px] h-[60px] px-[24px] py-[16px] flex-col rounded-[8px] border border-[#FFF] bg-[#FFF] mt-[30px] text-[#191E2A] font-semibold text-[18px] leading-[28px] font-['Inter'] transition-all duration-300 ease-in-out hover:bg-[#1A71F6] hover:text-[#FFF]">
            <span>Subscribe</span>
          </button>
          <div className="flex items-center justify-left gap-[10px] mt-[28.86px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Complete Documentation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              Working Materials in Figma
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#1A71F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-[16px] font-['Inter'] ml-[9px]">
              100GB Cloud Storage
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Email Automation
            </span>
          </div>
          <div className="flex items-center justify-left gap-[10px] mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.1665 11.446L7.49984 14.7794L15.8332 6.44604"
                stroke="#B2B2B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B2B2B2] text-[16px] font-['Inter'] ml-[9px]">
              Premium Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
