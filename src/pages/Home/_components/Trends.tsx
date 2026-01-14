import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


import starImage from "@/assets/images/home/3star.svg";
import TrendCards from "./TrendCards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import CategoryFilter from "./CategoryFilter";
import CustomBadge from "@/components/Shared/CustomBadge";

export default function Trends() {
  return (
    <div>
      {/* Search bar */}
      <div className="px-4 w-full md:max-w-2xl md:mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-16">
        <div className="relative ">
          <BackgroundGradient>
            <Search className="absolute left-4   top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <Input
              type="text"
              placeholder="Search Trends..."
              className="w-full border-primary !bg-[#080e14]  text-white placeholder:text-secondary-foreground pl-12 pr-4 py-6
             rounded-full focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />
          </BackgroundGradient>

        </div>
      </div>
     
      {/* Trends Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 md:mt-10 lg:mt-16  gap-y-8">
        <div>
          <h3 className="text-primary text-xl md:text-2xl lg:text-[32px] font-bold">
            Live Trends{" "}
          </h3>
          <p className="flex flex-col sm:flex-row gap-2 text-accent-foreground">
            <span>8 trends</span>{" "}
            <span>• Updated in real-time by the community</span>
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <CustomBadge>
            <img src={starImage} alt="Filter Icon" className="w-6 h-6" />
            <span>5 unlocks availble</span>
          </CustomBadge>
        </div>
      </div>

       {/* filter category */}
      <CategoryFilter></CategoryFilter>

      {/* trends cards  */}
      <TrendCards />
    </div>
  );
}
