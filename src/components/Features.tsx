import React, { useState } from "react";
import { Link } from "react-router-dom";
import RevealAnimation from "./ui/RevealAnimation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import devImg from "/connetdiscuss.png";
import { features } from "@/data/featuresData";
import { DotPattern } from "./ui/dotPattern";

const Features = () => {
  const { theme } = useTheme();

  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container flex flex-col justify-center items-center px-4 ">
        <div className="text-center flex flex-col justify-center items-center mb-16">
          <RevealAnimation>
            <h2 className="text-3xl text-center font-bold w-fit block tracking-wide uppercase mb-3 text-main-primary">
              Our Services
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Build and thrive in Web2 & Web3
            </h3>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Streamline your growth with DevConnect
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-24 relative">
          <RevealAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Seamless workflow integration
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how DevConnect integrates with your existing tools to create
                a unified workspace.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="relative mx-auto overflow-hidden rounded-2xl backdrop-blur-md p-5 border-[1px] border-slate/20 mask-video-b">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-gray-950 dark:to-gray-950 opacity-60 z-10 pointer-events-none"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-brand-500/5 max-w-6xl mx-auto aspect-[14/7]">
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
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-800/30 transition-colors"
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
    <>
      <div
        id="services"
        className={cn(
          "relative p-8 rounded-xl border transition-all duration-300 h-full transform-gpu cursor-pointer",
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
        <div className="absolute blur-lg -bottom-px -right-px w-[4rem] aspect-square bg-blue-50/50 dark:bg-blue-900/20 rounded-tl-[100px] rounded-br-xl -z-10 opacity-70"></div>

        {/* Animated border effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-md opacity-0 pointer-events-none transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-pulse-slow"></div>
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-400 to-transparent animate-pulse-slow"></div>
        </div>

        <div className="flex flex-col h-full relative z-10">
          <div
            className={cn(
              "p-3 rounded-lg w-fit mb-5 relative overflow-hidden group transition-all duration-300",
              theme === "dark"
                ? "bg-brand-900/50 text-brand-400"
                : "bg-brand-50 text-brand-700"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                isHovered ? "animate-shimmer" : ""
              )}
            ></div>
            {icon}
          </div>

          <h4
            className={cn(
              "text-xl font-bold mb-3 transition-colors duration-300",
              theme === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            {title}
          </h4>

          <p
            className={cn(
              "mb-5 flex-grow transition-colors duration-300",
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            )}
          >
            {description}
          </p>

          <Link
            to={`/services/${id}`}
            className={cn(
              "inline-flex items-center mt-auto group transition-colors duration-300",
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
    </>
  );
};

export default Features;
