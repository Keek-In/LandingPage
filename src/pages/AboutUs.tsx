import { BreadcrumbWithCustomSeparator } from "../components/shared/Breadcrumb"; // Adjust according to your actual file structure

const AboutUs = () => {
  // Define breadcrumb links
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About Us",
      to: "/about-us",
      active: true,
    },
  ];

  return (
    <>
      {/* Main section with breadcrumb and hero content */}
      <div className="w-screen h-[612px] bg-[#0E131F] px-6 md:px-20">
        <BreadcrumbWithCustomSeparator links={links} />
        <p className="text-white text-center font-semibold text-[54px] leading-[63px] mt-[160px]">
          Transform Your Marketing Strategy <br />
          with Keek&apos;s Expertise
        </p>
        <p className="text-[#90A3BF] text-center font-normal text-[18px] leading-[27px] mt-[32px]">
          Bridging Brands and Influencers for Greater Success
        </p>
        <p className="text-[#90A3BF] text-center font-normal text-[18px] leading-[27px] mt-[6px]">
          Create, Collab, & Earn <span className="text-white">KEEK</span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-[24px] mt-[32px]">
          <button className="flex items-center justify-center gap-[10px] w-[187px] h-[52px] px-[24px] py-[13px] bg-[#1A71F6] rounded-[30px]">
            <span className="text-white">Get a Free Demo</span>
          </button>
          <button className="flex items-center justify-center gap-[10px] w-[141px] h-[52px] px-[24px] py-[13px] bg-[#1A202C] rounded-[30px]">
            <span className="text-white">Contact us</span>
          </button>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full h-[738px] px-[116px] py-[100px]">
        <p className="text-[#040815] font-semibold text-[36px] leading-[44px] tracking-[-0.72px]">
          Mission
        </p>
        <p className="text-[#596780] font-normal text-[21px] leading-[34px] mt-[30px]">
          At Keek, we are dedicated to revolutionizing the way brands and
          creators connect through the power of influencer marketing. Our
          innovative platform serves as a dynamic bridge, fostering meaningful
          collaborations that drive impactful results. Founded on the belief
          that authentic partnerships can elevate brand narratives, Keek
          empowers businesses to harness the creativity and reach of influencers
          across diverse industries. We understand that in today’s digital
          landscape, the right collaboration can amplify brand messages, engage
          audiences, and ultimately lead to greater success.
        </p>
        <p className="text-[#040815] font-semibold text-[36px] leading-[44px] tracking-[-0.72px] mt-[50px]">
          Vision
        </p>
        <p className="text-[#596780] font-normal text-[21px] leading-[34px] mt-[30px]">
          At Keek, we dream to empower creators of various sizes (Nano, Micro,
          Mid-tier, Macro, and Mega) by providing them with the right platform
          that is designed to provide genuine collaborations, enrich their
          passion, cultivate creator-necessary tools and insights to harness the
          full potential of influencer partnerships. This forward-thinking
          approach not only enhances brand visibility but also fosters genuine
          connections between influencers and their followers, ultimately
          driving engagement and growth in a competitive market.
        </p>
      </div>

      {/* Our Locations Section */}
      <div className="w-full h-[1088px] bg-[#0E131F] py-[120px] px-[330px]">
        {/* Our Locations Text */}
        <p className="text-white text-center font-bold text-[40px] leading-[60px] tracking-[-1.2px]">
          Our Locations
        </p>

        {/* Container with layout */}
        <div className="w-[780px] h-[691px] flex flex-col items-center gap-[40px] mt-[64px] mx-auto relative">
          {/* Image at top edge */}
          <img
            src="/src/assets/About.png"
            alt="About"
            className="w-full object-cover rounded-[24.9px]"
          />

          {/* SVG Line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="770"
            height="2"
            viewBox="0 0 1200 2"
            fill="none"
            className="mt-[24px]"
          >
            <path d="M0 1H1200" stroke="#CEBEFE" />
          </svg>

          {/* Location Text 1 */}
          <p className="text-[#428BC1] font-semibold text-[20px] font-['Plus Jakarta Sans'] mt-[24px] self-start">
            Gurugram, Haryana
          </p>

          {/* Location Text 2 */}
          <p className="text-[#FFF] font-normal text-[20px] font-['Plus Jakarta Sans'] mt-[24px] self-start">
            Etihad Airways Centre, AI Rahah,
            <br /> AI, Muneera Abu Dhabi, UAE
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
