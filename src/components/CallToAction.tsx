import React from "react";
import { Button } from "@/components/ui/button";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className={`absolute top-1/4 left-0 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-brand-800/10" : "bg-brand-200/20"
        }`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-blue-800/10" : "bg-blue-200/20"
        }`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border ${
            theme === "dark"
              ? "bg-gray-900/60 backdrop-blur-md border-gray-700/30"
              : "glass-card border-white/20"
          }`}
        >
          <div className="px-6 py-12 md:px-12 md:py-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent"></div>

            <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-gradient-to-br from-brand-200/20 to-brand-400/20 dark:from-brand-800/10 dark:to-brand-600/10 blur-3xl"></div>
            <div className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-800/10 dark:to-blue-600/10 blur-3xl"></div>

            <div className="text-center max-w-2xl mx-auto">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Ready to transform your experience?
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.1}>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Join thousands of developers and innovators at Dev Connect to learn, build, and boost your productivity. Be part of the movement today
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to={"https://calendly.com/meet-devconnect/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-brand-600 to-brand-400 hover:from-brand-700 hover:to-brand-500 border-0 text-lg font-medium shadow-lg shadow-brand-500/20 dark:shadow-brand-500/10">
                      Get Started Free
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border-gray-300 dark:border-gray-700 text-lg font-medium dark:text-white dark:hover:bg-gray-800"
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                  No credit card required. Cancel anytime.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
