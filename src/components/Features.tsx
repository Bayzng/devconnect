import React, { useState } from "react";
import { Link } from "react-router-dom";
import RevealAnimation from "./ui/RevealAnimation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import devImg from "/connetdiscuss.png";
import { features } from "@/data/featuresData";

const Features = () => {
  const { theme } = useTheme();

  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div
        className={cn(
          "container flex flex-col justify-center items-center px-4",
          // mobile-specific fix (add more horizontal room)
          "sm:px-4 px-2"
        )}
      >
        <div className="text-center flex flex-col justify-center items-center mb-16 sm:mb-20">
          <RevealAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold w-fit block tracking-wide uppercase mb-3 text-main-primary">
              Our Services
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Build On Web2 & Web3
            </h3>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
              Streamline your growth with DevConnect
            </p>
          </RevealAnimation>
        </div>

        {/* grid adjusts spacing only on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full sm:w-auto">
          {features.map((feature, index) => (
            <RevealAnimation
              key={feature.id}
              delay={0.1 * index}
              className="h-full"
            >
              <FeatureCard {...feature} index={index} />
            </RevealAnimation>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 relative w-full">
          <RevealAnimation>
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 px-3 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Seamless workflow integration
              </h3>
              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
                See how DevConnect integrates with your existing tools to create
                a unified workspace.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="relative mx-auto overflow-hidden rounded-2xl backdrop-blur-md p-3 sm:p-4 md:p-3 border border-slate/20 mask-video-b max-w-6xl">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-gray-950 dark:to-gray-950 opacity-60 z-10 pointer-events-none"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-brand-500/5 aspect-[14/7]">
                <img
                  src={devImg}
                  alt="Workflow Integration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                to="/services"
                className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-800/30 transition-colors text-sm sm:text-base"
              >
                Explore all Services
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    d="M6.5 3.5L11 8L6.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({
  id,
  title,
  description,
  icon,
  index,
}: FeatureCardProps) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="services"
      className={cn(
        "relative p-6 sm:p-8 rounded-xl border transition-all duration-300 h-full transform-gpu cursor-pointer",
        theme === "dark"
          ? "border-gray-800 hover:border-brand-800/70 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-brand-500/5"
          : "border-gray-100 hover:border-brand-100 hover:shadow-xl",
        index % 3 === 1
          ? theme === "dark"
            ? "bg-gradient-to-br from-gray-900 to-gray-900/50"
            : "bg-gradient-to-br from-white to-brand-50/30"
          : theme === "dark"
          ? "bg-gray-900/30"
          : "bg-white",
        isHovered ? "scale-[1.02]" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute blur-lg -bottom-px -right-px w-[3.5rem] sm:w-[4rem] aspect-square bg-blue-50/50 dark:bg-blue-900/20 rounded-tl-[100px] rounded-br-xl -z-10 opacity-70"></div>

      <div className="flex flex-col h-full relative z-10  sm:text-left">
        <div
          className={cn(
            "p-2 sm:p-3 rounded-lg w-fit mb-5 relative overflow-hidden group transition-all duration-300 sm:mx-0",
            theme === "dark"
              ? "bg-brand-900/50 text-brand-400"
              : "bg-brand-50 text-brand-700"
          )}
        >
          {icon}
        </div>

        <h4
          className={cn(
            "text-lg sm:text-xl font-bold mb-3",
            theme === "dark" ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </h4>

        <p
          className={cn(
            "mb-5 flex-grow text-sm sm:text-base",
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          )}
        >
          {description}
        </p>

        <Link
          to={`/services/${id}`}
          className={cn(
            "inline-flex items-center  sm:justify-start mt-auto group text-sm sm:text-base",
            theme === "dark" ? "text-brand-400" : "text-brand-600"
          )}
        >
          <span className="font-medium relative">
            Learn more
            <span
              className={cn(
                "absolute left-0 bottom-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
                isHovered ? "scale-x-100" : "scale-x-0"
              )}
            ></span>
          </span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform duration-200 transform"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <path
              d="M6.5 3.5L11 8L6.5 12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Features;
