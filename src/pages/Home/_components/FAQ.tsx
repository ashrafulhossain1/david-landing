import CustomBadge from "@/components/Shared/CustomBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, Rocket, Lock, HelpCircle, Users } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      id: "item-1",
      icon: InfoIcon,
      question: "What is Capitalizenow?",
      answer:
        "CapitalizeNow is a community-driven platform where real people spot and verify emerging trends before they go mainstream. No brands, no sponsors, no BS—just genuine trend intelligence from creators like you.",
    },
    {
      id: "item-2",
      icon: Rocket,
      question: "How does the boost system work?",
      answer:
        "When you see a trend you've also noticed, you can boost it by adding your own proof links. Each boost increases the trend's confidence score. The more people verify a trend, the more credible it becomes. Plus, every boost you give on someone else's trend earns you an unlock credit!",
    },
    {
      id: "item-3",
      icon: Lock,
      question: "Why are some trends censored/locked?",
      answer:
        "Locked trends are exclusive insights available only to active contributors. To unlock them, you need unlock credits—which you earn by boosting other people's trends. This system rewards community participation and ensures quality contributions.",
    },
    {
      id: "item-4",
      icon: HelpCircle,
      question: "Will this always free?",
      answer:
        "Absolutely! CapitalizeNow is 100% free and always will be. We're a non-profit, community-run platform with no plans for monetization, subscriptions, or premium tiers. Our mission is to democratize trend spotting for everyone.",
    },
    {
      id: "item-5",
      icon: Users,
      question: "Who can use capitalizenow?",
      answer:
        "Anyone! Whether you're a content creator, marketer, entrepreneur, or just someone who loves spotting what's next, you're welcome here. All you need is a username and password—no email required. If you can spot trends and contribute proof, you're in.",
    },
  ];

  return (
    <div className="my-24 lg:my-28 px-4 md:px-0">
      <div className="">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <CustomBadge className="font-normal">
              Everything You Need to Know
            </CustomBadge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-accent-foreground text-sm md:text-[20px]">
            Got questions? We've got answers. Learn how to maximize
            CapitalizeNow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => {
            const IconComponent = faq.icon;
            return (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-[#2B2B2F] bg-[#55A1F20F] rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5 md:py-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-left text-base md:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm md:text-base pl-14 md:pl-16 pr-4 pb-5 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Still Have Questions Section */}
        <div className="mt-10 md:mt-12 lg:mt-16  p-6 md:p-8 text-center border border-accent-foreground rounded-[24px]">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-8">
            This is a community-driven platform. Join the conversation and help
            shape the future of trend spotting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Badge
              variant="outline"
              className="border-slate-700 text-white px-4 py-2 text-xs md:text-sm rounded-full"
            >
              Community-Powered
            </Badge>
            <Badge
              variant="outline"
              className="border-slate-700 text-white px-4 py-2 text-xs md:text-sm rounded-full"
            >
              100% Free
            </Badge>
            <Badge
              variant="outline"
              className="border-slate-700 text-white px-4 py-2 text-xs md:text-sm rounded-full"
            >
              Non-Profit Forever
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
