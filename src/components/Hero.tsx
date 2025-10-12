import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BringToFrontIcon, Phone } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import ComputersCanvas from "./canvas/computers";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const HeroRef = useRef();
  const HeroVideoRef = useRef<HTMLVideoElement>(null);
  const CursorRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useGSAP(
    (_, contextSafe) => {
      gsap.from(".text-main-primary", {
        backgroundImage: `linear-gradient(
        1500deg,
        hsl(0, 0%, 0%) 0%,
        hsl(142, 100%, 45%) -100%,
        hsl(106, 100%, 25%) 0%
      )`,
        duration: 10,
      });

      let timeoutId; // Store timeout ID

      const handleVideo = contextSafe(() => {
        if (HeroVideoRef.current) {
          HeroVideoRef.current.muted = false;
          HeroVideoRef.current.play();
        }

        gsap.to(CursorRef.current, {
          scale: 3,
          backgroundColor: "rgba(34, 197, 94, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          gsap.to(CursorRef.current, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3,
          });
        }, 500);
      });

      const handleDoubleClick = contextSafe(() => {
        if (HeroVideoRef.current) {
          HeroVideoRef.current.muted = true;
        }

        gsap.to(CursorRef.current, {
          scale: 4,
          backgroundColor: "rgba(255, 0, 0, 0.5)", // Red color for mute
          duration: 0.6,
          ease: "power4.out",
        });

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          gsap.to(CursorRef.current, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3,
          });
        }, 500);
      });

      const handleMouseMove = contextSafe((e) => {
        if (CursorRef.current) {
          gsap.to(CursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleVideo);
      window.addEventListener("dblclick", handleDoubleClick);

      return () => {
        clearTimeout(timeoutId); // Cleanup timeout
        window.removeEventListener("click", handleVideo);
        window.removeEventListener("dblclick", handleDoubleClick);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: HeroRef }
  );

  return (
    <section ref={HeroRef} className={`relative pt-32 overflow-hidden`}>
      {/* Background gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, rgba(0, 0, 0, 0) 50%)"
              : "radial-gradient(circle at 50% 50%, rgba(187, 247, 208, 0.4) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />
      <div
        ref={CursorRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-green-500 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Glowy orbs */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 animate-float ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${theme === "dark" ? "bg-brand-700/10" : "bg-brand-300/20"}`}
        style={{ animationDelay: "0s" }}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 animate-float ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${theme === "dark" ? "bg-blue-600/10" : "bg-blue-200/20"}`}
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex pointer-events-none items-center px-3 py-1 mb-6 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
              <span>Introducing Dev Connect</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-4xl pointer-events-none md:text-6xl h-fit font-display font-bold mb-6 leading-tight text-gray-900 dark:text-white mask-text">
              The{" "}
              <span className="text-main-primary ">Next Generation</span>{" "}
              of Tech Leaders
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-md  pointer-events-none text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Empower your future by learning, building, and collaborating — scaling your impact in Africa’s fastest-growing developer network.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div
              className={`flex  flex-col sm:flex-row items-center justify-center gap-4 ${
                theme === "dark" ? "" : "mb-12"
              }`}
            >
              <Link to={""}>
                <Button className="relative cursor-pointer  px-8 py-6 text-lg rounded-full bg-black text-white font-medium border border-green-600 shadow-md hover:bg-gray-900 transition duration-300 ease-in-out overflow-hidden group">
                  <span className="relative z-10">Bootcamp</span>
                  <BringToFrontIcon />
                  <div className="absolute inset-0 bg-gradient-to-b from-green-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-[70%] left-1/2 w-24 h-10 bg-green-600 rounded-full transform -translate-x-1/2 blur-xl"></div>
                </Button>
              </Link>
              <Link
                to={"https://calendly.com/meet-devconnect"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full cursor-pointer  px-8 py-6 text-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Phone />
                  Enquires
                </Button>
              </Link>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.5}>
          <div
            className={`relative flex justify-center pointer-events-none   items-center w-full  h-[70vh] overflow-hidden rounded-xl ${
              theme === "dark" ? "mask-video translate-y-[-10%]" : ""
            }`}
          >
            <div
  className={`${
    theme === "dark"
      ? "border border-gray-800/30 bg-gray-900/30 backdrop-blur-md "
      : "glass-card border border-white/20"
  } 
    rounded-xl w-full overflow-hidden shadow-2xl transform transition-all duration-500
    ${
      theme === "dark" ? "hover:shadow-brand-500/10" : "hover:shadow-brand-200/20"
    }
    hover:scale-[1.01] 
    mx-auto relative
    h-[400px] sm:h-[500px] md:h-[600px]`}
>
  <div
    className="relative w-full h-full -mt-10 sm:-mt-20 md:-mt-40"
    style={{ marginLeft: "-15px" }}
  >
    <ComputersCanvas />
  </div>
</div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
