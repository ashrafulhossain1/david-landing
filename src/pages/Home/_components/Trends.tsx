import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


import starImage from "@/assets/images/home/3star.svg";
import hosting from "@/assets/images/home/hosting.svg";
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
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 md:mt-10 lg:mt-16  gap-y-8 px-4">
        <div>
          <p className="flex gap-2 items-center">
            <img src={hosting} alt="" className="w-8"/>
            <span className="uppercase text-[#9d9db5]">Live Feed</span>
          </p>
          <h3 className="text-secondary-foreground text-xl md:text-2xl lg:text-[32px] font-bold">
            Trending Now{" "}
          </h3>
          <p className="flex flex-col sm:flex-row gap-2 text-accent-foreground">
            <span>8 trends</span>{" "}
            <span>• Updated in real-time by the community</span>
          </p>
        </div>
      </div>


      <CategoryFilter></CategoryFilter>

     
      <TrendCards />
    </div>
  );
}
