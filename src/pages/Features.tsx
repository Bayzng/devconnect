
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { cn } from "@/lib/utils";

// Import the features data
import { features } from "@/data/featuresData";
import { ArrowLeft } from "lucide-react";

const Features = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "dark bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mb-8 ml-16">
          <Link
            to="/"
            className={`inline-flex items-center text-sm ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            } transition-colors`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Home
          </Link>
        </div>
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <RevealAnimation>
              <h2 className="text-3xl text-center font-bold w-fit mx-auto block tracking-wide uppercase mb-3 text-main-primary">
                Our Services
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Discover our powerful features
              </h3>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Explore DevConnect’s suite of solutions built to sharpen your skills, accelerate innovation, and drive lasting success.
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ id, title, description, icon, index }: FeatureCardProps) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div
      className={cn(
        "relative p-8 rounded-xl border transition-all duration-300 h-full transform-gpu",
        theme === "dark"
          ? "border-gray-800 hover:border-brand-800/70 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-brand-500/5"
          : "border-gray-100 hover:border-brand-100 hover:shadow-xl",
        index % 3 === 1
          ? theme === "dark"
            ? "bg-gradient-to-br from-gray-900 to-gray-900/50"
            : "bg-gradient-to-br from-white to-brand-50/30"
          : theme === "dark" ? "bg-gray-900/30" : "bg-white",
        isHovered ? "scale-[1.02]" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute blur-lg -bottom-px -right-px w-[4rem] aspect-square bg-blue-50/50 dark:bg-blue-900/20 rounded-tl-[100px] rounded-br-xl -z-10 opacity-70"></div>
    
      {/* Animated border effect */}
      <div className={cn(
        "absolute inset-0 rounded-md opacity-0 pointer-events-none transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-pulse-slow"></div>
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-400 to-transparent animate-pulse-slow"></div>
      </div>
    
      <div className="flex flex-col h-full relative z-10">
        <div className={cn(
          "p-3 rounded-lg w-fit mb-5 relative overflow-hidden group transition-all duration-300",
          theme === "dark"
            ? "bg-brand-900/50 text-brand-400"
            : "bg-brand-50 text-brand-700"
        )}>
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
            isHovered ? "animate-shimmer" : ""
          )}></div>
          {icon}
        </div>
    
        <h4 className={cn(
          "text-xl font-bold mb-3 transition-colors duration-300",
          theme === "dark" ? "text-white" : "text-gray-900"
        )}>
          {title}
        </h4>
    
        <p className={cn(
          "mb-5 flex-grow transition-colors duration-300",
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        )}>
          {description}
        </p>
    
        <Link
          to={`/services/${id}`}
          className={cn(
            "inline-flex items-center mt-auto group transition-colors duration-300",
            theme === "dark" ? "text-brand-500" : "text-brand-600"
          )}
        >
          <span className="font-medium relative">
            Learn more
            <span className={cn(
              "absolute left-0 bottom-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
              isHovered ? "scale-x-100" : "scale-x-0"
            )}></span>
          </span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform duration-200 transform"
            style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
          >
            <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Features;
