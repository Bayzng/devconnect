
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { HeartHandshake, Settings2, TimerIcon, Users, WatchIcon } from "lucide-react";

const Statistics = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const stats = [
    { label: "Active Users", value: "5K+", icon: Users },
    { label: "Tasks Automated", value: "10K+", icon: Settings2 },
    { label: "Onboarding To Web3 ", value: "10K", icon: TimerIcon },
    { label: "Client Satisfaction", value: "99.8%", icon : HeartHandshake },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/50 to-transparent dark:from-transparent dark:via-brand-950/10 dark:to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute -left-64 top-1/3 w-96 h-96 rounded-full bg-brand-200/20 dark:bg-brand-400/10 blur-3xl"></div>
      <div className="absolute -right-64 bottom-1/3 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-400/10 blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Our Impact in{" "}
              <span className="text-main-primary ">
                Numbers
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              See the real-world impact of DevConnect on businesses around the
              globe
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <RevealAnimation key={index} delay={0.1 * index} className="h-full">
              <div className="p-[1px] rounded-xl bg-ai">
                <div
                  className={`
                  rounded-xl p-8 h-full flex flex-col items-center justify-center transition-all duration-500
                  ${
                    theme === "light"
                      ? "bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-gray-200/50"
                      : "bg-gray-900/90 hover:bg-gray-800/80 shadow-xl shadow-black/5 hover:shadow-black/10 border border-gray-700/30"
                  }
                `}
                >
                  <div className="scale-125 mb-4">
                    {typeof stat.icon === "string"
                      ? stat.icon
                      : React.createElement(stat.icon)}
                  </div>
                  <div className="text-4xl font-display text-main-primary  font-bold mb-2 bg-gradient-to-br from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mask-text dark:text-gray-300 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50">
              <span className="mr-2">🚀</span>
              <span>Growing every day with new users and integrations</span>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Statistics;
