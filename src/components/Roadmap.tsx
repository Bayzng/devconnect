import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import RevealAnimation from "./ui/RevealAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Check, Clock, BarChart4, BuildingIcon, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Roadmap = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const milestones = [
    {
      year: "2025 Q4",
      title: "DevConnect Hub",
      description:
        "Initial launch with core bootcamp sessions and foundational tech workshops.",
      icon: <Rocket className="w-4 h-4 md:w-6 md:h-6" />,
      status: "completed",
    },
    {
      year: "2025 Q1",
      title: "Expanded Ecosystem",
      description:
        "An expanded ecosystem with new workshops and richer learning experiences.",
      icon: <Check className="w-4 h-4 md:w-6 md:h-6" />,
      status: "completed",
    },
    {
      year: "2025 Q2",
      title: "Tech Event",
      description:
        "A gathering of developers, innovators, and tech enthusiasts shaping the future of software, Web3, and AI.",
      icon: <BarChart4 className="w-4 h-4 md:w-6 md:h-6" />,
      status: "current",
    },
    {
      year: "2026 Q3",
      title: "Custom Agent Builder",
      description:
        "Low-code tool for creating specialized agents for unique workflows.",
      icon: <Clock className="w-4 h-4 md:w-6 md:h-6" />,
      status: "upcoming",
    },
    {
      year: "2026 Q4",
      title: "Enterprise Suite",
      description:
        "Advanced security, compliance, and management features for large organizations.",
      icon: <BuildingIcon className="w-4 h-4 md:w-6 md:h-6" />,
      status: "upcoming",
    },
  ];

  const renderMilestoneCard = (milestone, index) => (
    <Card
      key={index}
      className={`w-full transition-all duration-300 hover:shadow-lg group overflow-hidden text-sm md:text-base
        ${
          milestone.status === "completed"
            ? "border-green-500/20 dark:border-green-500/30"
            : milestone.status === "current"
            ? "border-yellow-500/30 dark:border-yellow-500/40 shadow-md"
            : "border-gray-200 dark:border-gray-700"
        }`}
    >
      <CardContent className="p-4 sm:p-5 md:p-8">
        <div className="flex flex-col space-y-3 md:space-y-4">
          {/* Status badge and icon */}
          <div className="flex justify-between items-center">
            <div
              className={`rounded-full px-2 py-0.5 text-[10px] sm:text-xs md:text-sm font-medium
              ${
                milestone.status === "completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                  : milestone.status === "current"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 animate-pulse"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {milestone.status.charAt(0).toUpperCase() +
                milestone.status.slice(1)}
            </div>
            <div
              className={`p-1.5 md:p-2.5 rounded-full ${
                milestone.status === "completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                  : milestone.status === "current"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {milestone.icon}
            </div>
          </div>

          {/* Title and year */}
          <div>
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {milestone.title}
            </h3>
            <span className="inline-block text-xs sm:text-sm md:text-base font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-2 py-[1px] rounded">
              {milestone.year}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed md:leading-relaxed">
            {milestone.description}
          </p>

          {/* Progress indicator */}
          {milestone.status === "current" && (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 md:h-1.5 mt-2 md:mt-3">
              <div
                className="bg-yellow-500 dark:bg-yellow-400 h-1 md:h-1.5 rounded-full animate-pulse"
                style={{ width: "50%" }}
              ></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="roadmap"
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/60 to-transparent dark:via-gray-900/20"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-10 lg:px-24 xl:px-32 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <RevealAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 md:mb-5 text-gray-900 dark:text-white">
              Our{" "}
              <span className="text-brand-600 dark:text-brand-400">
                Roadmap
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <p className="max-w-xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              The journey ahead for Dev Connect and how we're building the
              future of technology together.
            </p>
          </RevealAnimation>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-brand-200 via-brand-400 to-gray-200 dark:from-brand-700 dark:via-brand-500 dark:to-gray-700 rounded-full"></div>

          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <RevealAnimation
                key={index}
                delay={0.12 * index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative mb-8 md:mb-16 flex items-start ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center z-10">
                    <div
                      className={`w-3.5 md:w-5 h-3.5 md:h-5 rounded-full ${
                        milestone.status === "completed"
                          ? "bg-brand-500 dark:bg-brand-400"
                          : milestone.status === "current"
                          ? "bg-yellow-500 dark:bg-yellow-400 animate-pulse"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-6 md:pr-12 text-right" : "pl-6 md:pl-12 text-left"
                    }`}
                  >
                    {renderMilestoneCard(milestone, index)}
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden">
          <Tabs defaultValue="current" className="w-full text-sm">
            <TabsList className="w-full mb-4 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-lg">
              <TabsTrigger value="completed" className="flex-1">
                Completed
              </TabsTrigger>
              <TabsTrigger value="current" className="flex-1">
                Current
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex-1">
                Upcoming
              </TabsTrigger>
            </TabsList>

            {["completed", "current", "upcoming"].map((status) => (
              <TabsContent key={status} value={status} className="space-y-3">
                {milestones
                  .filter((m) => m.status === status)
                  .map((m, i) => (
                    <RevealAnimation key={i} delay={0.08 * i}>
                      {renderMilestoneCard(m, i)}
                    </RevealAnimation>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
