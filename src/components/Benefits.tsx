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
        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex items-center justify-center">
          <img src={benefits1} alt="Benefits 1" className="max-w-full max-h-full object-contain rounded-[12px]" />
        </div>
        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex items-center justify-center">
          <img src={benefits2} alt="Benefits 2" className="max-w-full max-h-full object-contain rounded-[12px]" />
        </div>
        <div className="w-[384px] h-[384px] flex-shrink-0 rounded-[12px] bg-[#F3F5F7] flex items-center justify-center">
          <img src={benefits3} alt="Benefits 3" className="max-w-full max-h-full object-contain rounded-[12px]" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
