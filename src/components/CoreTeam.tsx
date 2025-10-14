import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Hexagon, Sparkles } from "lucide-react";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { MemberCard } from "./ui/MemberCard";
import { useTheme } from "@/contexts/ThemeContext";
import gsap from "gsap";

// Team member data
const teamMembers = [
  
  {
    id: 1,
    name: "Adedeji K",
    role: "Blockchain Developer",
    bio: "Specialized in blockchain development, smart contracts, and decentralized systems.",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
    socials: {
      twitter: "",
      github: "",
      linkedin: "",
      email: "",
    },
  },
  {
    id: 2,
    name: "A. Adebayo",
    role: "Lead Developer",
    bio: "Passionate developer driving innovation and growth in Africa’s tech ecosystem.",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
    socials: {
      twitter: "https://twitter.com/dev_bayz",
      github: "https://github.com/Bayzng",
      linkedin: "https://www.linkedin.com/in/abdulakeem-adebayo-678530199",
      email: "meet.bayzng@gmail.com",
    },
  },
  {
    id: 3,
    name: "I. Omolara",
    role: "Head of Operation",
    bio: "Head of Operations, leading strategy and execution to drive growth and efficiency across all teams.",
    avatar:
      "https://t4.ftcdn.net/jpg/09/99/29/97/360_F_999299711_eLb2AXXKyMwRjEkeyPgVFkRVowIJNi2W.jpg",
    socials: {
      twitter: "",
      github: "",
      linkedin: "",
      email: "",
    },
  },
  {
    id: 4,
    name: "Ella Johnson",
    role: "Event Lead",
    bio: "Event Lead, driving impactful tech events that connect and inspire communities..",
    avatar:
      "https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg",
    socials: {
      twitter: "",
      github: "",
      linkedin: "",
      email: "",
    },
  },
];

const CoreTeam = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create floating particles
    const createFloatingElements = () => {
      const container = sectionRef.current;
      if (!container) return;

      // Clean up existing particles first
      const existingParticles =
        container.querySelectorAll(".floating-particle");
      existingParticles.forEach((el) => el.remove());

      // Create new particles
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement("div");
        const size = Math.random() * 6 + 4;
        const isSquare = Math.random() > 0.7;

        particle.className = `floating-particle absolute pointer-events-none ${
          isSquare ? "rounded-sm" : "rounded-full"
        } bg-brand-500/10 dark:bg-brand-400/10`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        container.appendChild(particle);

        gsap.to(particle, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          rotation: `random(-180, 180)`,
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 10 + 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2,
        });
      }
    };

    // Create glow orbs
    const createGlowOrbs = () => {
      const container = sectionRef.current;
      if (!container) return;

      // Clean up existing orbs first
      const existingOrbs = container.querySelectorAll(".glow-orb");
      existingOrbs.forEach((el) => el.remove());

      // Create orbs
      for (let i = 0; i < 3; i++) {
        const orb = document.createElement("div");
        const size = Math.random() * 300 + 200;

        orb.className =
          "glow-orb absolute rounded-full opacity-30 blur-3xl pointer-events-none";
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.background = `radial-gradient(circle, rgba(var(--brand-500-rgb), 0.2) 0%, rgba(var(--brand-500-rgb), 0) 70%)`;
        orb.style.transform = "translate(-50%, -50%)";

        container.appendChild(orb);

        gsap.to(orb, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          scale: "random(0.8, 1.3)",
          opacity: "random(0.15, 0.35)",
          duration: Math.random() * 20 + 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 5,
        });
      }
    };

    // Staggered team animation
    const animateTeam = () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.children;

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotateX: -5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    };

    // Title animation
    const animateTitle = () => {
      if (!titleRef.current || !subtitleRef.current) return;

      const chars = new SplitText(titleRef.current, { type: "chars" });

      gsap.fromTo(
        chars.chars,
        {
          y: 100,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    };

    // Execute animations based on browser capabilities
    const runAnimations = () => {
      createFloatingElements();
      createGlowOrbs();

      // Check if SplitText is available before using it
      if (typeof SplitText !== "undefined") {
        animateTitle();
      } else {
        // Fallback if SplitText is not available
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
          );
        }
        if (subtitleRef.current) {
          gsap.fromTo(
            subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
          );
        }
      }

      animateTeam();
    };

    // Run animations
    const initTimeout = setTimeout(runAnimations, 100);

    // Cleanup
    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 overflow-hidden relative"
    >
      {/* ...background elements... */}

      <div className="container relative z-10 px-4 sm:px-6 md:px-0">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 relative">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4 relative">
            <div className="absolute -inset-x-4 sm:-inset-x-8 -inset-y-3 sm:-inset-y-4">
              <div className="w-full h-full opacity-30 blur-lg sm:blur-xl absolute bg-gradient-to-r from-brand-300/0 via-brand-500/80 to-brand-300/0" />
              <div className="w-full h-full opacity-20 absolute top-0 left-0 bg-[radial-gradient(circle_at_50%_120%,var(--brand-600),transparent_70%)]" />
            </div>

            <Hexagon className="text-brand-500 w-5 h-5 sm:w-6 sm:h-6 mr-2 opacity-80" />
            <span className="uppercase tracking-widest text-xs sm:text-sm font-medium text-brand-500">
              Our Talent
            </span>
            <Hexagon className="text-brand-500 w-5 h-5 sm:w-6 sm:h-6 ml-2 opacity-80" />
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 dark:text-white/90 relative inline-block"
          >
            The Minds Behind{" "}
            <span className="relative items-center text-main-primary">
              Dev Connect
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400 absolute -right-6 sm:-right-7 top-0 animate-pulse" />
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg max-w-md sm:max-w-2xl mx-auto text-muted-foreground px-2 sm:px-0"
          >
            Passionate pioneers building the future of autonomous systems.
          </p>

          <div className="h-0.5 w-16 sm:w-24 mx-auto mt-4 sm:mt-6 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-70" />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="transform transition-all duration-500"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
