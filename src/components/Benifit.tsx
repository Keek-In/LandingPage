import Bimg1 from "../assets/image 52.png";
import tick from "../assets/tick-circle.svg";
import Bimg2 from "../assets/image 54.png";
import Bimg3 from "../assets/image 7.png";
function Benifit() {
  return (
    <div className="w-full h-[1043px] p-[120px] bg-white flex flex-col gap-16">
      <div className="w-full h-[162px] flex flex-col gap-3">
        <div className="benifit-title-top">
          Why Choose Keek for Influencer Marketing?
        </div>
        <div className="benifit-title-bottom">
          Simple, Innovative, Steadfast
        </div>
      </div>
      <div className="w-full flex gap-6 justify-center">
        <div className="benifit-group flex flex-col gap-6">
          <div className="w-full h-[384px] Imgtop-benifit relative">
            <div className="absolute top-[54px] right-[16px] w-[123px] h-12 rounded-full bg-white z-100 flex justify-center items-center gap-2 shadow-md">
              <div className="h-8 w-8">
                <div className="h-full w-full flex justify-center items-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="16" fill="#A1D0FF" />
                  </svg>
                  <div className="verified-batch-innercircle">
                    <img src={tick} alt="" />
                  </div>
                </div>
              </div>
              <div className="Bv1verified-batch">Verified</div>
            </div>
            <div className="absolute left-0 bottom-0">
              <img src={Bimg1} alt="Benifit image 1" />
            </div>
          </div>
          <div className="w-full h-[180px] flex flex-col gap-3 ">
            <div className="benifit-text-bottom-top">
              Verified Creators for Every Collaboration Type
            </div>
            <div className="benifit-text-bottom-bottom">
              Keek hosts a network of verified creators ready to collaborate
              across all engagement models—whether it's barter deals,
              User-Generated Content (UGC), or paid partnerships.
            </div>
          </div>
        </div>
        <div className="benifit-group flex flex-col gap-6">
          <div className="w-full h-[384px] Imgtop-benifit relative">
            <div className="absolute left-0 bottom-0 rounded-tr-[18px] overflow-hidden">
              <img src={Bimg2} alt="Benifit image 2" />
            </div>
          </div>
          <div className="w-full h-[180px] flex flex-col gap-3 ">
            <div className="benifit-text-bottom-top">
              Simple Streamlined Campaign Process
            </div>
            <div className="benifit-text-bottom-bottom">
              Keek provides a user-friendly interface to create a detailed
              campaign briefs to faciliate seamless communication with creators
              within the platform.
            </div>
          </div>
        </div>
        <div className="benifit-group flex flex-col gap-6">
          <div className="w-full h-[384px] Imgtop-benifit">
            <div className="w-full h-[384px] Imgtop-benifit ">
              <div className="overflow-hidden">
                <img src={Bimg3} alt="Benifit image 3" />
              </div>
            </div>
          </div>
          <div className="w-full h-[180px] flex flex-col gap-3 ">
            <div className="benifit-text-bottom-top">
              Secure Payment Processing via Razorpay Integration:
            </div>
            <div className="benifit-text-bottom-bottom">
              Keek integrates with Razorpay to provide robust security features,
              multiple payment method support, and detailed transaction record
              between brands and creators.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifit;
