import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Roadmap from "@/components/Roadmap";
import CoreTeam from "@/components/CoreTeam";
import BookCall from "@/components/BookCall";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Testimonials from "@/components/Testimonials";
import AssociatedBrands from "@/components/AssociatedBrands";
import MasonryGallery from "@/components/MasonryGallery";
import Events from "@/components/Events";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  let LoaderTl = useRef<gsap.core.Timeline | null>(null);

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4 * 1000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Create particles
    const particleCount = 30;
    const particles = document.querySelector(".loader-particles");

    if (particles) {
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("loader-particle");

        // Random position, size and animation delay
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        particles.appendChild(particle);
      }
    }

    // Loader animation
    LoaderTl.current = gsap
      .timeline({})
      .from(".loader-logo", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(
        ".loader-text span",
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )
      .to(
        ".loader-logo",
        {
          scale: 1.1,
          duration: 0.6,
          repeat: 1,
          yoyo: true,
          ease: "power2.inOut",
        },
        "+=0.2"
      )
      .to([".loader-logo", ".loader-text"], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.in",
      })
      .to(
        ".loaderPage",
        {
          yPercent: -100,
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
      <div
        className={`fixed z-[999] loaderPage inset-0 flex items-center justify-center overflow-hidden ${
          theme === "dark" ? "bg-gray-950" : "bg-gray-100"
        }`}
      >
        <div className="loader-particles absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="loader-logo relative mb-6">
            <div
              className={`w-24 h-24 rounded-full ${
                theme === "dark" ? "bg-brand-600" : "bg-brand-500"
              } flex items-center justify-center`}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 animate-pulse-slow"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full border-black dark:border-white border-2  animate-bounce-slow"></div>
            <div className="absolute -bottom-2 -left-3 w-6 h-6 rounded-full bg-green-900 animate-float"></div>
          </div>
          <div className="loader-text flex space-x-2 items-center">
            <span className="text-brand-500 font-light text-4xl">Dev</span>
            <span className="text-brand-600 font-bold text-4xl">Connect</span>
          </div>
        </div>
      </div>
      <div
        className={`min-h-screen relative ${
          theme === "dark"
            ? "dark bg-gray-950 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className={`transition-opacity duration-500`}>
          <Navbar />
          <main>
            <Hero />
            <AssociatedBrands />
            <Features />
            <Statistics />
            <MasonryGallery />
            <CoreTeam />
            {/* <Testimonials /> */}
            <Events />
            <Roadmap />
            {/* <CallToAction /> */}
            {/* <BookCall /> */}
            <Faq />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
