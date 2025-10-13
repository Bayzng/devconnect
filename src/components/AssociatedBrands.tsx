import React from "react";
import {
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BrandLogoProps {
  name: string;
  logo: string;
  description: string;
  className?: string;
}

const BrandLogo = ({ name, logo, description, className }: BrandLogoProps) => {
  const { theme } = useTheme();

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "relative rounded-2xl overflow-hidden transition-all duration-300",
            theme === "dark"
              ? "bg-gray-900/80 backdrop-blur-md border border-gray-800/80"
              : "bg-white/90 backdrop-blur-md border border-gray-100/90",
            className
          )}
        >
          <div className="relative flex h-20 w-full items-center justify-center p-4">
            <img
              src={logo}
              alt={name}
              className={cn("w-8 sm:w-10 object-contain z-10")}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t flex items-center justify-center">
            <span className="text-xs font-medium dark:text-white tracking-wide">
              {name}
            </span>
          </div>
        </div>
      </HoverCardTrigger>
    </HoverCard>
  );
};

const AssociatedBrands = () => {
  const { theme } = useTheme();

  useGSAP(() => {
    gsap.to(".margeeRef .yash", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "none",
    });
    gsap.from(".margeeRef2 .yash", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "none",
    });
  });

  const brandLogos: BrandLogoProps[] = [
    { name: "CryptoFi", logo: "../../cryptofi.png", description: "Advanced AI models and research for autonomous agents optimization." },
    { name: "Metamorphosis", logo: "../../Metamorphosis.png", description: "Interconnected AI infrastructure for enterprise solutions." },
    { name: "Mizzle", logo: "../../Mizzle.png", description: "Scalable AI deployment systems for global operations." },
    { name: "Palkadot", logo: "../../Palkadot.png", description: "Synthetic data generation for autonomous agent training." },
    { name: "Sandbox", logo: "../../sandbox.png", description: "Big data processing and analytics for AI systems." },
  ];

  return (
    <section
      className={cn(
        "py-20 relative overflow-hidden gradientOne",
        theme === "dark" ? "bg-gray-950" : "bg-white"
      )}
    >
      <div className="container px-4 mx-auto relative z-10">
        <RevealAnimation direction="up" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4 font-bold">
            Trusted Partners & Integrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partnering with industry leaders to deliver cutting-edge AI agent solutions
          </p>
        </RevealAnimation>

        <div className="space-y-10">
          {/* First marquee row */}
          <div className="margeeRef flex relative h-24 whitespace-nowrap -ml-6 sm:ml-0">
            {[...Array(3)].map((_, i) => (
              <div key={`set1-${i}`} className="yash flex relative h-24 whitespace-nowrap">
                {brandLogos.map((brand, index) => (
                  <div key={`brand1-${i}-${index}`} className="mx-3">
                    <BrandLogo {...brand} className="w-44 sm:w-48" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second marquee row */}
          <div className="margeeRef2 flex relative h-24 whitespace-nowrap -ml-6 sm:ml-0">
            {[...Array(3)].map((_, i) => (
              <div key={`set2-${i}`} className="yash flex relative h-24 whitespace-nowrap">
                {brandLogos.map((brand, index) => (
                  <div key={`brand2-${i}-${index}`} className="mx-3">
                    <BrandLogo {...brand} className="w-44 sm:w-48" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* View all partners button */}
          <RevealAnimation className="flex justify-center mt-10">
            <button
              className={cn(
                "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border border-brand-400/20 flex items-center gap-2",
                theme === "dark"
                  ? "bg-gray-800/60 text-white"
                  : "bg-gray-100/80 text-gray-800"
              )}
            >
              <span>Premium Partners</span>
            </button>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AssociatedBrands;
