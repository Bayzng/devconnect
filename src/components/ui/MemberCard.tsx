import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail, Sparkles, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";

interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: SocialLinks;
}

interface MemberCardProps {
  member: TeamMember;
}

export const MemberCard = ({ member }: MemberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  // GSAP animations
  useEffect(() => {
    if (!cardRef.current) return;

    // Create timelines
    const tl = gsap.timeline({ paused: true });
    const particlesTl = gsap.timeline({ paused: true });
    const glowTl = gsap.timeline({ paused: true, repeat: -1 });


    // Image animation and effects
    if (imageRef.current) {
      // Create hexagonal clip path
      tl.to(
        imageRef.current.querySelector(".avatar-container"),
        {
          borderRadius: "0%",
          duration: 0.2,
          ease: "power3.inOut",
        },
        0
      );

      // Add glow effect
      const glowElement = document.createElement("div");
      glowElement.className = "absolute inset-0 opacity-0";
      glowElement.style.background =
        "radial-gradient(circle at 50% 50%, rgba(var(--brand-500-rgb), 0.8) 0%, rgba(var(--brand-500-rgb), 0) 70%)";
      glowElement.style.filter = "blur(12px)";
      imageRef.current.appendChild(glowElement);

      tl.to(
        glowElement,
        {
          opacity: 0.6,
          duration: 0.5,
        },
        0
      );

      // Create orbiting particles
      const particles = Array.from({ length: 12 }).map((_, i) => {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-2 h-2 rounded-full bg-brand-400/70 opacity-0";
        particle.style.top = "50%";
        particle.style.left = "50%";
        particle.style.transform = "translate(-50%, -50%)";
        imageRef.current?.appendChild(particle);
        return particle;
      });

      // Animate particles in orbits
      particles.forEach((particle, i) => {
        const isOuter = i >= 6;
        const particleIndex = isOuter ? i - 6 : i;
        const angleOffset = isOuter ? 0 : Math.PI / 6;
        const angle = (particleIndex / 6) * Math.PI * 2 + angleOffset;
        const radius = isOuter ? 70 : 55;
        const duration = isOuter ? 4 : 3;
        const delay = i * 0.01;

        // Initial position
        gsap.set(particle, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0,
          opacity: 0,
        });

        // Appear animation
        particlesTl.to(
          particle,
          {
            scale: isOuter ? 1.2 : 0.8,
            opacity: isOuter ? 0.7 : 0.5,
            duration: 0.4,
            delay: delay,
          },
          0
        );

        // Orbit animation
        particlesTl.to(
          particle,
          {
            rotation: isOuter ? "+=360" : "-=360",
            transformOrigin: `${-Math.cos(angle) * radius}px ${
              -Math.sin(angle) * radius
            }px`,
            duration: duration,
            ease: "none",
            repeat: -1,
          },
          0.4 + delay
        );

        // Pulse animation
        particlesTl.to(
          particle,
          {
            scale: isOuter ? "+=0.4" : "+=0.3",
            opacity: isOuter ? "-=0.3" : "-=0.2",
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
          0.4 + delay
        );
      });
    }

    // Social icons animation - creative reveal
    if (socialRef.current) {
      const icons = socialRef.current.querySelectorAll("a");
      const positionAngles = [180, 240, 300, 360]; // Angles for positioning icons in a semi-circle

      // Hide icons initially
      gsap.set(icons, {
        y: 50,
        x: 0,
        scale: 0,
        opacity: 0,
      });

      // Fan out icons in a semi-circle
      icons.forEach((icon, i) => {
        if (i < positionAngles.length) {
          const angle = (positionAngles[i] * Math.PI) / 180;
          const radius = 80;

          tl.to(
            icon,
            {
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              scale: 1.3,
              opacity: 1,
              duration : .1
            },
          );

          // Add micro animations for each icon
          tl.to(icon, {
            y: `+=${Math.sin(angle) * 5}`,
            x: `+=${Math.cos(angle) * 5}`,
            duration: 0.1,
          });

        }
      });

      // Add dynamic hover effect to each social icon
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            backgroundColor: "rgba(var(--brand-500-rgb), 0.2)",
            boxShadow: "0 0 12px rgba(var(--brand-500-rgb), 0.5)",
            duration: 0.2,
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            backgroundColor: "transparent",
            boxShadow: "none",
            duration: 1,
            ease : 'power1.out'
          });
        });
      });
    }

    // Content animation
    if (contentRef.current) {
      tl.to(
        contentRef.current.querySelectorAll(".animate-text"),
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      // Improved divider animation
      tl.fromTo(
        contentRef.current.querySelector(".divider"),
        { width: "0%", left: "50%" },
        { width: "100%", left: "0%", duration: 0.5, ease: "power2.inOut" },
        0.2
      );

      // Badge animation
      tl.fromTo(
        contentRef.current.querySelector(".badge"),
        { scale: 0.8, opacity: 0.7 },
        {
          scale: 1.1,
          opacity: 1,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        0.4
      );
    }

    // Play/reverse animations based on hover state
    if (isHovered) {
      tl.play();
      particlesTl.play();
      glowTl.play();
    } else {
      tl.reverse();
      particlesTl.pause(0);
      glowTl.pause(0);

      // Clean up particles on unhover
      if (imageRef.current) {
        const particles = imageRef.current.querySelectorAll("div.opacity-0");
        particles.forEach((particle) => {
          gsap.to(particle, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            onComplete: () => {
              if (imageRef.current) {
                particle.remove();
              }
            },
          });
        });
      }
    }

    return () => {
      tl.kill();
      particlesTl.kill();
      glowTl.kill();
    };
  }, [isHovered]);

  return (
    <TooltipProvider>
      <div
        ref={cardRef}
        className="relative h-full perspective-1000 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="h-full relative py-6 rounded-lg  border-brand-200/20 dark:border-brand-800/20 transition-all duration-100 backdrop-blur-sm bg-background/80">
          {/* Enhanced animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-brand-700/0 transition-all duration-100"></div>

          <CardContent className="p-6 text-center relative z-10 h-full flex flex-col">
            <div className="mb-4 relative mx-auto w-28 h-28 overflow-visible">
              {/* Animated avatar container */}
              <div ref={imageRef} className="relative">
                <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-100 bg-gradient-to-r from-brand-400/30 to-brand-600/30 blur-md"></div>

                {/* Added hover-transition class for clip-path animations */}
                <div className="avatar-container relative transition-all duration-100 ease-out">
                  <Avatar className="w-28 h-28 relative ring-2 ring-brand-200/50 dark:ring-brand-800/50 transition-all duration-100 overflow-hidden">
                    <AvatarImage
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Added decorative elements that appear on hover */}
                {isHovered && (
                  <>
                    <div className="absolute -inset-4 rounded-full border border-dashed border-brand-400/30 animate-spin-slow"></div>
                    <div className="absolute -inset-8 rounded-full border border-dotted border-brand-500/20 animate-spin-slower"></div>
                  </>
                )}
              </div>

              {/* Social Icons - Now arranged in a creative way */}
              <div
                ref={socialRef}
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity"
              >
                {Object.entries(member.socials).map(([platform, url], i) => {
                  let Icon;
                  let label;

                  switch (platform) {
                    case "github":
                      Icon = GithubIcon;
                      label = "GitHub";
                      break;
                    case "twitter":
                      Icon = Twitter;
                      label = "Twitter";
                      break;
                    case "linkedin":
                      Icon = LinkedinIcon;
                      label = "LinkedIn";
                      break;
                    case "email":
                      Icon = Mail;
                      label = "Email";
                      url = `mailto:${url}`;
                      break;
                    default:
                      return null;
                  }

                  return (
                    <Tooltip key={platform}>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full text-black/60 dark:text-white h-8 w-8 opacity-0 absolute"
                          asChild
                        >
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-black"
                          >
                            <Icon  size={16} />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        sideOffset={2}
                        className="bg-brand-900/90 rounded-full dark:bg-brand-800/90 text-white border-brand-600/20"
                      >
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>

            <div ref={contentRef} className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1 transition-colors duration-100 animate-text">
                {member.name}
                {member.id === 1 && (
                  <Sparkles className="inline-block ml-1 w-4 h-4 text-brand-500/70 pointer-events-none"  />
                )}
              </h3>

              <div className="h-0.5 relative bg-gradient-to-r from-brand-300 via-brand-500/50 to-brand-600 mx-auto mb-2 mt-1 w-0 divider"></div>

              <Badge
                variant="outline"
                className="animate-text self-center mb-2 border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 badge"
              >
                {member.role}
              </Badge>

              <p className="text-sm text-muted-foreground mt-auto animate-text">
                {member.bio}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};
