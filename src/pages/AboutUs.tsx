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
    <div className="w-[1440px] h-[512px] bg-[#0E131F] px-6 md:px-20">
      {/* Breadcrumb component */}
      <BreadcrumbWithCustomSeparator links={links} />
      <p className="text-white text-center font-semibold text-[54px] leading-[63px] mt-[60px]">
        Transform Your Marketing Strategy <br/>with Keek&apos;s Expertise
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
          <span className="text-white">Get a Free Demo</span> {/* Change the text to your button label */}
        </button>
        <button className="flex items-center justify-center gap-[10px] w-[141px] h-[52px] px-[24px] py-[13px] bg-[#1A202C] rounded-[30px]">
          <span className="text-white">Contact us</span> {/* Change the text to your button label */}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
