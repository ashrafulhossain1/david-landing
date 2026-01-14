import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Flame, TrendingUp } from "lucide-react";
import filterImage from "@/assets/images/home/filter.svg";
import { FaGreaterThan } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  { id: "all", label: "All" },
  { id: "fashion", label: "Fashion" },
  { id: "food", label: "Food & Drinks" },
  { id: "tech", label: "Tech" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "beauty", label: "Beauty" },
  { id: "fitness", label: "Fitness" },
  { id: "entertainment", label: "Entertainment" },
  { id: "gaming", label: "Gaming" },
  { id: "travel", label: "Travel" },
  { id: "sports", label: "Sports" },
  { id: "finance", label: "Finance" },
  { id: "education", label: "Education" },
  { id: "health", label: "Health" },
  { id: "music", label: "Music" },
  { id: "art", label: "Art" },
];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleCategories = isExpanded ? categories : categories.slice(0, 6);

  return (
    <div className="w-full  mt-2 md:mt-[29px] p-4">
      {/* FILTER CARD */}
      <div className="rounded-3xl md:rounded-[30px]  p-4 md:p-0 space-y-4 mx-3 md:mx-0">
        {/* TOP ROW – BADGES */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 ">
          <Badge
            className="
              flex items-center gap-1.5 md:gap-2
              bg-primary text-white
              px-2.5 py-1.5
              md:px-3 md:py-2
               lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold cursor-pointer
            "
          >
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            High Confidence
          </Badge>

          <Badge
            variant="outline"
            className="
              flex items-center gap-1.5 md:gap-2
              border-slate-700 text-slate-300
              px-2.5 py-1.5
              md:px-4 md:py-2
              lg:px-5 lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold cursor-pointer
            "
          >
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            Fresh
          </Badge>

          <Badge
            variant="outline"
            className="
              flex items-center gap-1.5 md:gap-2
              border-slate-700 text-slate-300
              px-2.5 py-1.5
              md:px-4 md:py-2
              lg:px-5 lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold cursor-pointer 
            "
          >
            <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 cursor-pointer" />
            Top Boosted
          </Badge>
        </div>

        {/* BOTTOM ROW – CATEGORY FILTER */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: { type: "spring", bounce: 0.1, duration: 0.8 }
                  }}
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                            text-sm md:text-base lg:text-lg
                            px-3 md:px-4 py-1 rounded-full
                            transition-colors duration-200 cursor-pointer
          ${isActive
                      ? "bg-[#55A1F229] text-white border border-primary hover:bg-[#55A1F244]"
                      : "bg-[#080e14] text-white border border-gray-700 hover:bg-[#0a111c]"
                    }
        `}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </AnimatePresence>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="
                            text-sm md:text-base lg:text-lg
                            w-8 h-8 rounded-full border border-gray-700
                            flex items-center justify-center
                            text-white bg-[#080e14] hover:bg-[#0a111c]
                            transition-all duration-300 cursor-pointer
             "
          >
            <FaGreaterThan
              className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""
                }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
