import benefits1 from '../assets/benefits1.png';
import benefits2 from '../assets/benefits2.png';
import benefits3 from '../assets/benefits3.png';

const Benefits = () => {
  return (
    <div className="w-[1440px] h-[1043px] p-[120px]">
      <p className="text-[#1A71F6] font-semibold text-[20px] leading-[30px] tracking-[-0.4px]">
        Why Choose Keek for Influencer Marketing?
      </p>
      <p className="text-[#040815] font-bold text-[40px] leading-[60px] tracking-[-1.2px] mt-[12px]">
        Simple, Innovative, Steadfast
      </p>

      <div className="flex gap-[24px] mt-[64px]">
        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex flex-col items-center">
          <div className="w-full h-full flex items-center justify-center">
            <img src={benefits1} alt="Benefits 1" className="max-w-full max-h-full object-contain rounded-[12px]" />
          </div>
          <p className="text-[#040815] font-semibold text-[24px] leading-[36px] tracking-[-0.72px] mt-[24px] text-left">
            Verified Creators for Every Collaboration Type
          </p>
          <p className="text-[#596780] font-normal text-[16px] leading-[24px] tracking-[-0.32px] mt-[12px] text-left">
            Keek hosts a network of verified creators ready to collaborate across all engagement models—whether it's barter deals, User-Generated Content (UGC), or paid partnerships.
          </p>
        </div>

        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex flex-col items-center">
          <div className="w-full h-full flex items-center justify-center">
            <img src={benefits2} alt="Benefits 2" className="max-w-full max-h-full object-contain rounded-[12px]" />
          </div>
          <p className="text-[#040815] font-semibold text-[24px] leading-[36px] tracking-[-0.72px] mt-[24px] text-left">
          Simple Streamlined Campaign Process
          </p>
          <p className="text-[#596780] font-normal text-[16px] leading-[24px] tracking-[-0.32px] mt-[12px] text-left">
          Keek provides a user-friendly interface to create a detailed campaign briefs to faciliate seamless communication with creators within the platform.          
          </p>
        </div>

        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex flex-col items-center">
          <div className="w-full h-full flex items-center justify-center">
            <img src={benefits3} alt="Benefits 3" className="max-w-full max-h-full object-contain rounded-[12px]" />
          </div>
          <p className="text-[#040815] font-semibold text-[24px] leading-[36px] tracking-[-0.72px] mt-[24px] text-left">
          Secure Payment Processing via Razorpay Integration:         
          </p>
          <p className="text-[#596780] font-normal text-[16px] leading-[24px] tracking-[-0.32px] mt-[12px] text-left">
          Keek integrates with Razorpay to provide robust security features, multiple payment method support, and detailed transaction record between brands and creators.          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
