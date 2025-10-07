
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealAnimation from "./ui/RevealAnimation";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(
      "pt-20 pb-8 relative overflow-hidden",
      theme === "dark" ? "bg-black" : "bg-gray-50"
    )}>
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16">
          {/* Company info and newsletter */}
          <div className="lg:col-span-5">
            <RevealAnimation direction="up" delay={0.1}>
              <div className="flex items-center mb-6">
                {/* <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div> */}
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
                <span className={cn(
                  "ml-3 text-2xl font-display font-bold",
                  theme === "dark"
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                )}>
                  DevConnect
                </span>
              </div>

              <p className={cn(
                "mb-8 max-w-md text-base leading-relaxed",
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              )}>
                Bringing you the future of tech with developers, innovators, and creators shaping software, Web3, AI, and beyond.
              </p>

              {/* Contact information */}
              <div className="space-y-4 mb-8">
                <ContactItem icon={<Mail className="w-5 h-5" />} text="meet.devconnect@gmail.com" />
                <ContactItem icon={<Phone className="w-5 h-5" />} text="+234 81-4479-6373" />
                <ContactItem icon={<MapPin className="w-5 h-5" />} text="Nigeria 🇳🇬" />
              </div>
            </RevealAnimation>

            {/* Newsletter signup */}
            <RevealAnimation direction="up" delay={0.2}>
              <div className={cn(
                "p-6 rounded-2xl",
                theme === "dark"
                  ? "dark-glass"
                  : "glass-card"
              )}>
                <h4 className={cn(
                  "text-lg font-semibold mb-4",
                  theme === "dark" ? "text-white" : "text-gray-900"
                )}>
                  Join our newsletter
                </h4>
                <p className={cn(
                  "text-sm mb-4",
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                )}>
                  Get the latest updates on AI advancements and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "flex-grow rounded-xl",
                      theme === "dark"
                        ? "bg-gray-800/70 border-gray-700"
                        : "bg-white border-gray-200"
                    )}
                  />
                  <Button className="rounded-xl bg-brand-500 hover:bg-brand-600 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20">
                    Subscribe
                  </Button>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <RevealAnimation direction="up" delay={0.3}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Product
                  </h4>
                  <ul className="space-y-4">
                    {/* <FooterLink href="#features">AI Features</FooterLink> */}
                    <FooterLink href="#roadmap">Product Roadmap</FooterLink>
                    {/* <FooterLink href="#">Integrations</FooterLink> */}
                    {/* <FooterLink href="#">Changelog</FooterLink> */}
                    <FooterLink href="#">Documentation</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>

              <RevealAnimation direction="up" delay={0.4}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Resources
                  </h4>
                  <ul className="space-y-4">
                    <FooterLink href="#">Getting Started</FooterLink>
                    {/* <FooterLink href="#">API Reference</FooterLink> */}
                    {/* <FooterLink href="#">Tutorials</FooterLink> */}
                    <FooterLink href="#">Community Forum</FooterLink>
                    <FooterLink href="#">Case Studies</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>

              <RevealAnimation direction="up" delay={0.5}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Company
                  </h4>
                  <ul className="space-y-4">
                    <FooterLink href="#">About Us</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                    <FooterLink href="#">Press Kit</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center pt-8 border-t",
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        )}>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <SocialIcon>
              <a href=""><FaLinkedin /></a>
            </SocialIcon>

            <SocialIcon>
              <a href=""><FaXTwitter /></a>
            </SocialIcon>

            <SocialIcon>
              <a href=""> <FaInstagramSquare /></a>
            </SocialIcon>

            <SocialIcon>
              <a href=""><FaYoutube /></a>
            </SocialIcon>
          </div>

          <p className={cn(
            "text-sm",
            theme === "dark" ? "text-gray-500" : "text-gray-500"
          )}>
            © {currentYear} DevConnect. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Privacy
            </a>
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Terms
            </a>
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center">
      <div className={cn(
        "h-8 w-8 mr-3 rounded-lg flex items-center justify-center",
        theme === "dark"
          ? "bg-gray-800 text-brand-400"
          : "bg-brand-50 text-brand-600"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-sm",
        theme === "dark" ? "text-gray-300" : "text-gray-700"
      )}>
        {text}
      </span>
    </div>
  );
};

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const { theme } = useTheme();

  return (
    <a
      href="#"
      className={cn(
        "h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300",
        theme === "dark"
          ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
          : "bg-gray-100 text-gray-600 hover:text-brand-500 hover:bg-brand-50"
      )}
    >
      {children}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const { theme } = useTheme();

  return (
    <li>
      <a
        href={href}
        className={cn(
          "group flex items-center transition-all duration-300",
          theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-brand-500"
        )}
      >
        <ChevronRight className="h-3 w-0 opacity-0 mr-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-3 group-hover:mr-1" />
        {children}
      </a>
    </li>
  );
};

export default Footer;
