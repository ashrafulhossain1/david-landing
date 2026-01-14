import SectionWrapper from "@/components/Shared/SectionWrapper";
import CustomBadge from "@/components/Shared/CustomBadge";


export default function Hero() {
  return (
    <SectionWrapper>
      <div className="relative  flex items-center justify-center p-4 xl:w-312 mb-[90px] ">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 animate-gridMove"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgb(71, 85, 105) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(71, 85, 105) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
            opacity: 0.2,

            WebkitMaskImage: `
      linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%),
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%),
      linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)
    `,
            WebkitMaskComposite: "destination-in",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",

            maskImage: `
      linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%),
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%),
      linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)
    `,
            maskComposite: "intersect",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        ></div>

        {/* Radial gradient overlay for fade effect */}
        {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950"></div> */}

        <div className="w-full max-w-184.5 mx-auto relative z-10 mt-10 md:mt-20 lg:mt-24">
          <div className="text-center ">
            {/* Top badge */}
            <div className="flex justify-center mb-4 md:mb-5 lg:mb-7">
         
                <CustomBadge>User-Powered • Non-Profit • 100% Free</CustomBadge>
           
            </div>

            {/* Main heading */}
            <div className="mb-2 md:mb-3 lg:mb-5">
              <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-extrabold text-secondary mb-2">
                Catch the Wave
              </h1>
              <h2 className="text-5xl md:text-[50px] lg:text-[64px] font-bold text-primary">
                Before it Crashes
              </h2>
            </div>

            {/* Subtitle */}
            <p className=" text-lg md:text-xl max-w-2xl mx-auto text-secondary-foreground mb-3 md:mb-4  lg:mb-6">
              Real trends spotted by real people. No sponsors. No BS. Just pure,
              organic trend intelligence from creators like you.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-wrap gap-6 justify-center text-secondary-foreground text-sm md:text-base lg:text-lg">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#55A1F2] rounded-full"></div>
                <span>No email required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#55A1F2] rounded-full"></div>
                <span>No brand spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#55A1F2] rounded-full"></div>
                <span>Community verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
