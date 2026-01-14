import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Eye, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import CustomBadge from "@/components/Shared/CustomBadge";
import expand from "@/assets/images/home/expand.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TrendCardData {
  id: number;
  category: string;
  duration: string;
  title: string;
  description: string;
  confidence: number;
  boosts: number;
  boostedBy: string;
  isLocked: boolean;
  insights: string[];
}

const trendCardsData: TrendCardData[] = [
  {
    id: 1,
    category: "Tech",
    duration: "3 - 7 days",
    title: "Retro Flip Phone Revival",
    description:
      "Gen Z is increasingly ditching high-tech smartphones for 'dumb phones' in a massive digital detox flex. Flip phones from the early 2000s are making a comeback as people seek to disconnect from constant notifications and social media pressure. This nostalgic resurgence is driving up prices of vintage Nokias and Motorolas on marketplaces like eBay. It's not just an aesthetic choice; it represents a growing desire for mental well-being and a simpler, less connected lifestyle in an always-online world.",
    confidence: 56,
    boosts: 56,
    boostedBy: "tech_oracle",
    isLocked: false,
    insights: [
      "Nokia 2660 Flip sales up 200%",
      "Searches for 'dumb phone' rose 89%",
      "Gen Z leading the trend",
    ],
  },
  {
    id: 2,
    category: "Food & Drink",
    duration: "3 - 7 days",
    title: "Sleepy Girl Mocktail",
    description:
      "A nighttime viral drink trend combining tart cherry juice, magnesium powder, and sparkling water that is taking social media by storm. Dubbed the 'Sleepy Girl Mocktail', this concoction is praised for its natural sleep-inducing properties. Influencers and health enthusiasts claim it rivals melatonin supplements, promoting deeper REM sleep without the grogginess. As sales of tart cherry juice skyrocket, beverage companies are rushing to bottle this formula for the mass market.",
    confidence: 47,
    boosts: 47,
    boostedBy: "remixfoodie",
    isLocked: false,
    insights: [
      "Viral TikTok recipe with 50M+ views",
      "Magnesium sales spike in pharmacies",
      "Alternative to melatonin supplements",
    ],
  },
  {
    id: 3,
    category: "Fitness",
    duration: "3 - 7 days",
    title: "Cortisol-Conscious Workouts",
    description:
      "Women are shifting away from high-intensity interval training (HIIT) in favor of stress-reducing exercise routines. Walking, pilates, and somatic yoga are being rebundled as 'cortisol-friendly' workouts designed to regulate hormones rather than just burn calories. This shift reflects a broader wellness trend prioritizing nervous system regulation and holistic health over aesthetics and exhaustion. Fitness apps are pivoting to include 'low impacts' filters to cater to this growing demand.",
    confidence: 41,
    boosts: 41,
    boostedBy: "fitness_future",
    isLocked: false,
    insights: [
      "Shift away from high-intensity cardio",
      "Focus on hormonal health balance",
      "Pilates app subscriptions growing",
    ],
  },
  {
    id: 4,
    category: "Tech",
    duration: "3 - 7 days",
    title: "Retro Flip Phone Revival",
    description:
      "Gen Z is increasingly ditching high-tech smartphones for 'dumb phones' in a massive digital detox flex. Flip phones from the early 2000s are making a comeback as people seek to disconnect from constant notifications and social media pressure. This nostalgic resurgence is driving up prices of vintage Nokias and Motorolas on marketplaces like eBay. It's not just an aesthetic choice; it represents a growing desire for mental well-being and a simpler, less connected lifestyle in an always-online world.",
    confidence: 56,
    boosts: 56,
    boostedBy: "y.tech_oracle",
    isLocked: true,
    insights: [],
  },
  {
    id: 5,
    category: "Lifestyle",
    duration: "3 - 7 days",
    title: "Dopamine Decor",
    description:
      "Maximalist, joyful home decor is replacing the 'sad beige' aesthetic that dominated Instagram for years. Only vibrant colors, clashing patterns, and thrifted eclectic pieces are welcome here. 'Dopamine Decor' is all about designing your space to induce happiness and reflect personal quirkiness rather than following a sterile trend. Expect to see mushroom lamps, checkerboard rugs, and gallery walls filled with non-traditional art taking over living spaces everywhere.",
    confidence: 56,
    boosts: 56,
    boostedBy: "y.tech_oracle",
    isLocked: false,
    insights: [
      "Bright, bold colors trending in homes",
      "Rejection of minimalism",
      "DIY decor video engagement up 45%",
    ],
  },
  {
    id: 6,
    category: "Food & Drink",
    duration: "3 - 7 days",
    title: "Butter Boards 2.0",
    description:
      "The viral butter board trend has evolved into whipped feta, cottage cheese, and even frosting boards. The format of spreading soft foods on a board for communal dipping is proving to be a versatile mainstay for hosting. This evolution points to a larger trend of interactive, communal dining experiences that look good on camera. Brands are now marketing specialized boards and spreads explicitly for this purpose.",
    confidence: 41,
    boosts: 41,
    boostedBy: "fitness_future",
    isLocked: false,
    insights: [
      "Evolution of charturie boards",
      "Cottage cheese rebranding as cool",
      "High engagement on IG Reels",
    ],
  },
  {
    id: 7,
    category: "Tech",
    duration: "3 - 7 days",
    title: "Retro Flip Phone Revival",
    description:
      "Gen Z is increasingly ditching high-tech smartphones for 'dumb phones' in a massive digital detox flex. Flip phones from the early 2000s are making a comeback as people seek to disconnect from constant notifications and social media pressure. This nostalgic resurgence is driving up prices of vintage Nokias and Motorolas on marketplaces like eBay. It's not just an aesthetic choice; it represents a growing desire for mental well-being and a simpler, less connected lifestyle in an always-online world.",
    confidence: 56,
    boosts: 56,
    boostedBy: "y.tech_oracle",
    isLocked: true,
    insights: [],
  },
  {
    id: 8,
    category: "Tech",
    duration: "3 - 7 days",
    title: "Retro Flip Phone Revival",
    description:
      "Gen Z is increasingly ditching high-tech smartphones for 'dumb phones' in a massive digital detox flex. Flip phones from the early 2000s are making a comeback as people seek to disconnect from constant notifications and social media pressure. This nostalgic resurgence is driving up prices of vintage Nokias and Motorolas on marketplaces like eBay. It's not just an aesthetic choice; it represents a growing desire for mental well-being and a simpler, less connected lifestyle in an always-online world.",
    confidence: 56,
    boosts: 56,
    boostedBy: "y.tech_oracle",
    isLocked: true,
    insights: [],
  },
];

export default function TrendCards() {
  const [selectedTrend, setSelectedTrend] = useState<TrendCardData | null>(
    null
  );

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTrend(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-14 px-4 sm:px-4">
        {/* FIRST CARD: Spot a Trend - Static - No Layout Animation needed for this one primarily, or separate */}
        <Card
          className="
            relative overflow-hidden rounded-2xl md:rounded-3xl
            border border-accent-foreground bg-[#000000] backdrop-blur-sm
            p-4 md:p-5 lg:p-6
            flex flex-col items-center justify-center
            min-h-[300px] md:min-h-[380px]
            transition-all duration-300 hover:border-primary/50 hover:bg-black/20
            cursor-pointer group
          "
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Spot a Trend?
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-4 max-w-xs">
              What you're seeing before it goes mainstream.
            </p>
          </div>
        </Card>

        {/* REMAINING CARDS: From Array Data */}
        {trendCardsData.map((trend) => (
          <motion.div
            key={trend.id}
            layoutId={`card-${trend.id}`}
            onClick={() => !trend.isLocked && setSelectedTrend(trend)}
            className={`
            relative overflow-hidden rounded-2xl md:rounded-3xl
            border border-accent-foreground bg-[#000000] backdrop-blur-sm
            p-4 md:p-5 lg:p-6
            transition-all duration-300 hover:border-primary
            min-h-75 md:min-h-95 gap-0 justify-between
            flex flex-col
            cursor-pointer
          `}
          >
            {/* Header: Category Badge, Duration, More Options */}
            <div>
              <div className="flex items-center justify-between mb-3 md:mb-5">
                <div className="flex items-center gap-2 px-2 py-1">
                  <CustomBadge className="px-2.5 py-1.5 text-sm ">
                    {trend.category}
                  </CustomBadge>
                  <Badge
                    variant="outline"
                    className="border-secondary-foreground text-accent-foreground  text-sm  px-2 py-1.5"
                  >
                    {trend.duration}
                  </Badge>
                </div>
                <CustomBadge
                  className="py-2 px-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
                // Remove onClick here to allow card click to work naturally 
                >
                  <img src={expand} alt="Filter Icon" className="w-4 h-4" />
                </CustomBadge>
              </div>

              {/* Title */}
              <motion.h3
                layoutId={`title-${trend.id}`}
                className="text-white text-lg md:text-xl  font-semibold mb-2  line-clamp-2"
              >
                {trend.title}
              </motion.h3>

              {/* Description */}
              <p className="text-slate-400 text-sm md:text-base mb-3 md:mb-5 line-clamp-3">
                {trend.description}
              </p>

              {/* Confidence Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-slate-400 text-xs md:text-sm">
                    Confidence
                  </span>
                  <span className="text-primary text-xs md:text-sm font-semibold">
                    {trend.confidence}%
                  </span>
                </div>
                <Progress value={trend.confidence} className="h-2 mb-5" />
              </div>
            </div>

            {/* Footer: Boosts and Boost Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 fill-amber-400" />
                <div className="flex gap-5 items-center">
                  <span className="text-sm md:text-base font-semibold">
                    {trend.boosts} boosts
                  </span>
                  <span className="text-xs text-slate-400">
                    by {trend.boostedBy}
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 md:px-6 py-2 text-sm md:text-base flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Boost
              </Button>
            </div>

            {/* Locked Overlay */}
            {trend.isLocked && (
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm rounded-2xl md:rounded-3xl flex flex-col items-center justify-center z-10 p-4 cursor-default"
                onClick={(e) => e.stopPropagation()} // Prevent opening blocked cards
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/30 mb-4">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h4 className="text-primary text-lg md:text-xl font-semibold mb-2">
                  Contribute To Unlocked
                </h4>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* EXPANDED OVERLAY */}
      <AnimatePresence>
        {selectedTrend && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrend(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedTrend.id}`}
              className="relative w-full max-w-2xl bg-[#000000] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col max-h-[90vh]"
            >
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTrend(null);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 mt-2">
                  <CustomBadge className="px-3 py-1.5 text-sm">
                    {selectedTrend.category}
                  </CustomBadge>
                  <Badge
                    variant="outline"
                    className="border-secondary-foreground text-accent-foreground text-sm px-3 py-1.5"
                  >
                    {selectedTrend.duration}
                  </Badge>
                </div>

                <motion.h2
                  layoutId={`title-${selectedTrend.id}`}
                  className="text-2xl md:text-4xl font-bold text-white mb-6"
                >
                  {selectedTrend.title}
                </motion.h2>

                {/* Content */}
                <div className="space-y-8">
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    {selectedTrend.description}
                  </p>

                  {/* Insights Grid */}
                  {selectedTrend.insights && selectedTrend.insights.length > 0 && (
                    <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                      <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Key Insights
                      </h4>
                      <ul className="space-y-3">
                        {selectedTrend.insights.map((insight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300">
                            <div className="mt-2 w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                            <span className="text-base">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Confidence */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Confidence Score</span>
                      <span className="text-primary font-bold text-lg">{selectedTrend.confidence}%</span>
                    </div>
                    <Progress value={selectedTrend.confidence} className="h-3" />
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-full">
                        <Rocket className="text-amber-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">
                          {selectedTrend.boosts} Boosts
                        </p>
                        <p className="text-sm text-slate-400">
                          Started by <span className="text-primary">{selectedTrend.boostedBy}</span>
                        </p>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/25"
                    >
                      Boost Trend
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
