import { BreadcrumbWithCustomSeparator } from "../components/shared/Breadcrumb"; // Adjust according to your actual file structure
import Form1Svg from "../assets/form1.svg"; // Adjust according to your actual file structure

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
    <div className="px-6 md:px-20">
      {/* Breadcrumb component */}
      <BreadcrumbWithCustomSeparator links={links} />

      {/* Text container with fixed dimensions */}
      <div className="w-[1440px] h-[360.71px] mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="about-title">
          We’re empowering with the <br />technology to collaborate!
        </h1>
        <p className="about-subtitle">
          Your one-stop empower platform.
        </p>
      </div>

      {/* New row with text, SVG, and KEEK */}
      <div className="mt-6 flex items-center justify-center">
        <p className="about-manage-text">
          Manage all your brands & influencers with
        </p>
        <img src={Form1Svg} alt="Form1" className="mx-4" /> {/* Form1 SVG */}
        <p className="about-keek-text">KEEK</p>
      </div>
    </div>
  );
};

export default AboutUs;
