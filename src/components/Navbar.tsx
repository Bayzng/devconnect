import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ui/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MdEmojiEvents } from "react-icons/md";

import {
  Compass,
  Sparkles,
  HelpCircle,
  LogIn,
  ArrowRight,
  PhoneCallIcon,
  TextSelect,
  ScanLine,
  Briefcase,
  Users,
  Calendar,
  Building,
  RocketIcon,
  Film,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import RevealAnimation from "./ui/RevealAnimation";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-12",
        isScrolled
          ? theme === "dark"
            ? "py-3 bg-gray-950/40 backdrop-blur-lg border-b border-gray-800/50 shadow-xl"
            : "py-3 bg-white/50 backdrop-blur-lg shadow-md border-b border-gray-100/50"
          : "py-4 sm:py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between">
          <RevealAnimation className="flex items-center group" delay={0.1}>
            <Link to={"/"} className="flex justify-center gap-0 items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center shadow-lg relative group-hover:shadow-brand-500/30 transition-all duration-300">
                <img
                  style={{
                    width: "2rem",
                    border: "2px solid green", // border style
                    borderRadius: "13px", // rounded corners
                  }}
                  src="../../connect.jpg"
                  alt="DevConnect"
                />
              </div>
              <span className="ml-1 sm:ml-1 text-lg sm:text-xl font-display font-bold transition-all duration-300 text-gradient-primary">
                DevConnect
              </span>
            </Link>
          </RevealAnimation>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent rounded-full hover:bg-green-600/20">
                    <Compass className="mr-1 h-4 w-4" />
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="row-span-3">
                        <div className="p-4 rounded-md bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-950 dark:to-brand-900 h-full flex flex-col">
                          <Sparkles className="h-8 w-8 text-brand-500 mb-2" />
                          <h3 className="text-lg font-medium">
                            Unlock Innovation & Impact
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 mb-auto">
                            Explore our diverse services designed to grow
                            communities, shape industries, and drive success.
                          </p>
                          <Button
                            variant="link"
                            className="px-0 mt-3 justify-start"
                            asChild
                          >
                            <a href="/services">
                              Learn more <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <NavMenuItem
                        href="/services/marketing"
                        title="Marketing"
                        description="Creative campaigns that influence and inspire."
                        icon={<Briefcase className="h-4 w-4 text-brand-500" />}
                      />
                      <NavMenuItem
                        href="/services/community"
                        title="Community"
                        description="Building ecosystems that empower and connect."
                        icon={<Users className="h-4 w-4 text-brand-500" />}
                      />
                      <NavMenuItem
                        href="/services/events"
                        title="Events"
                        description="Crafting experiences that foster collaboration."
                        icon={<Calendar className="h-4 w-4 text-brand-500" />}
                      />
                      <NavMenuItem
                        href="/services/industries"
                        title="Industries"
                        description="Innovating sectors with a community-driven approach."
                        icon={<Building className="h-4 w-4 text-brand-500" />}
                      />
                      <NavMenuItem
                        href="/services/incubation"
                        title="Incubation"
                        description="Empowering startups for breakthrough innovations."
                        icon={<RocketIcon className="h-4 w-4 text-brand-500" />}
                      />
                      <NavMenuItem
                        href="/services/production"
                        title="Bootcamp"
                        description="Bringing ideas to life with creative developers."
                        icon={<Film className="h-4 w-4 text-brand-500" />}
                      />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink
                    href="#testimonials"
                    icon={<ScanLine className="mr-1 h-4 w-4" />}
                  >
                    Testimonials
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink
                    href="#faq"
                    icon={<HelpCircle className="h-4 w-4" />}
                  >
                    FAQ
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink
                    href="https://calendly.com/meet-devconnect/"
                    icon={<PhoneCallIcon className="h-4 w-4" />}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Call Now
                    {/* </a> */}
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle className="rounded-full hover:bg-green-600/20 hover:border-[1px] border-green-600" />
            <a href="https://calendly.com/meet-devconnect/">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 group overflow-hidden border-green-600"
              >
                <MdEmojiEvents className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1 " />
                <span className="relative">Event</span>
              </Button>
            </a>
            <Button className="rounded-full px-5 bg-green-600 hover:animate-glow border-0 shadow-md relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMobileMenu}
              className="relative z-10 hover:bg-green-600/20 rounded-full aspect-square p-0 w-10 h-10 flex items-center justify-center"
            >
              <div className="grid grid-cols-3 gap-[2px] p-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-[3px] h-[3px] rounded-full bg-current 
                    ${mobileMenuOpen ? "animate-pulse" : ""} 
                    transition-all duration-200`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      opacity: mobileMenuOpen ? 0.5 + i * 0.05 : 1,
                    }}
                  />
                ))}
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`lg:hidden w-full absolute left-0 transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen
              ? "max-h-[90vh] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-3 pb-5 bg-background/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-100/20 dark:border-gray-800/20">
            <MobileNavLink
              href="#services"
              icon={<Compass className="h-5 w-5" />}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              href="#testimonials"
              icon={<TextSelect className="h-5 w-5" />}
            >
              Testimonials
            </MobileNavLink>
            <MobileNavLink
              href="#faq"
              icon={<HelpCircle className="h-5 w-5" />}
            >
              FAQ
            </MobileNavLink>
            <MobileNavLink
              href={"https://calendly.com/meet-devconnect/"}
              icon={<PhoneCallIcon className="h-5 w-5" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Call Now
            </MobileNavLink>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://lu.ma/calendar/manage/cal-ds5meFaMYTFohrt">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  <span className="relative z-10">Event</span>
                </Button>
              </a>
              <Button className="w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 border-0 relative">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavMenuItem = ({ href, title, description, icon }) => {
  return (
    <Link
      to={href}
      className="block select-none space-y-1 rounded-md p-3 hover:bg-green-600/20  hover:text-accent-foreground transition-colors"
    >
      <div className="flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <div className="text-sm font-medium">{title}</div>
      </div>
      <p className="line-clamp-2 text-xs text-muted-foreground">
        {description}
      </p>
    </Link>
  );
};

const NavLink = ({ href, children, icon, ...args }) => {
  const isHashLink = href.startsWith("#");
  const LinkComponent = isHashLink ? ScrollLink : Link;

  return (
    <NavigationMenuLink asChild>
      <LinkComponent
        to={isHashLink ? href.slice(1, href.length + 1) : href}
        className="group inline-flex items-center cursor-pointer justify-center px-4 py-2 text-sm hover:bg-green-600/20 font-medium transition-colors border-[1px] hover:border-green-600  hover:text-accent-foreground rounded-full"
        {...(isHashLink && { smooth: true, duration: 500 })}
        {...(href.startsWith("http") && args)}
      >
        {icon && (
          <span className="mr-1 transition-transform group-hover:scale-110">
            {icon}
          </span>
        )}
        {children}
      </LinkComponent>
    </NavigationMenuLink>
  );
};

const MobileNavLink = ({ href, children, icon, ...args }) => {
  const isHashLink = href.startsWith("#");
  const LinkComponent = isHashLink ? ScrollLink : Link;

  return (
    <LinkComponent
      to={isHashLink ? href.slice(1, href.length + 1) : href}
      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
      {...(isHashLink && { smooth: true, duration: 500 })}
      {...(href.startsWith("http") && args)}
    >
      {icon && <span className="text-brand-500">{icon}</span>}
      <span className="font-medium ">{children}</span>
    </LinkComponent>
  );
};

export default Navbar;
