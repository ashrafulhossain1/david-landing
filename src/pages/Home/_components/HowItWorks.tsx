import { Sparkles, AlertCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Discover emerging trends",
      description:
        "Discover emerging trends",
    },
    {
      number: "2",
      title: "See what’s gaining momentum",
      description:
        "Check community confidence and boost activity.     ",
    },
    {
      number: "3",
      title: "Spot something early? Add it",
      description:
        "Submit trends in seconds and unlock more insights.",
    },
  ];

  return (
    <div className="w-full  my-12 sm:my-16 md:my-20 lg:my-26 px-4">
      <div className="bg-[#131621]  rounded-3xl py-10 md:py-14 px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-2">
            <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-white">
            How It Works?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative  ">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Circle with Number */}
              <div className="relative mb-6 md:mb-8">
                <div
                  className="
                    w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40
                    rounded-full
                    border-2 border-dashed border-primary
                    bg-slate-900/50
                    flex items-center justify-center
                    relative
                  "
                >
                  <span className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Arrow - Only show between steps, not after last one */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-26 lg:-right-36 transform -translate-y-1/2">
                    <svg
                      width="60"
                      height="40"
                      viewBox="0 0 60 40"
                      fill="none"
                      className="text-primary"
                    >
                      <path
                        d="M2 20 Q 30 5, 58 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M52 16 L58 20 L52 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Step Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#9D9DB5] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand-Free Zone Section */}
      <div className="flex flex-col bg-[#18141D]  rounded-3xl py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-10 mt-10 ">
        <div className="flex items-center gap-5 mb-4 lg:mb-6">
          <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-red-500" />

          <h3 className="text-xl md:text-2xl font-bold text-white">
            No sponsors. No brands. Just real trends from real people.
          </h3>
        </div>
      </div>
    </div>
  );
}
