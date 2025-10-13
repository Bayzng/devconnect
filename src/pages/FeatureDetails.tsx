import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  MapPin,
  Star,
  Clock,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dotPattern";
import { ImageSlider } from "@/components/ui/image-slider";
import { Card, CardContent } from "@/components/ui/card";

// Import the features data
import { features } from "@/data/featuresData";

const FeatureDetails = () => {
  const { featureId } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [feature, setFeature] = useState<any>(null);
  const [nextFeature, setNextFeature] = useState<any>(null);
  const [prevFeature, setPrevFeature] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Find the current feature
    const featureIndex = features.findIndex((f) => f.id === featureId);

    if (featureIndex !== -1) {
      setFeature(features[featureIndex]);

      // Set next and previous features for navigation
      setNextFeature(features[(featureIndex + 1) % features.length]);
      setPrevFeature(
        features[(featureIndex - 1 + features.length) % features.length]
      );
    } else {
      // Redirect or show not found if feature doesn't exist
      setFeature(null);
    }
  }, [featureId]);

  if (!feature) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>
          Feature not found.{" "}
          <Link to="/services" className="text-brand-500 underline">
            Go back to features
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "dark bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden -z-10">
          {isDark ? (
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent opacity-70"></div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-transparent opacity-70"></div>
          )}
          <DotPattern
            className={cn(
              "opacity-10",
              isDark ? "fill-white" : "fill-brand-900"
            )}
            width={24}
            height={24}
            cx={12}
            cy={12}
            cr={1.5}
          />
        </div>

        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <Link
              to="/services"
              className={`inline-flex items-center text-sm ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              } transition-colors`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all services
            </Link>
          </div>

          {/* Hero section */}
          <div className="mb-16">
            <RevealAnimation>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1">
                  <div
                    className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4",
                      isDark
                        ? "bg-brand-900/30 text-brand-400"
                        : "bg-brand-50 text-brand-700"
                    )}
                  >
                    <Star className="mr-1 h-3.5 w-3.5" />
                    <span>Premium Service</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {feature.title}
                  </h1>

                  <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>

                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
                    >
                      Bootcamp
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="w-full md:w-2/5 mt-8 md:mt-0">
                  {feature.image && (
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transition-transform hover:scale-[1.02]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center text-white">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span className="text-sm font-medium">
                          Global Service
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Tabs Navigation */}
          <RevealAnimation delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 border-b dark:border-gray-800">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === "overview"
                    ? isDark
                      ? "text-white border-b-2 border-brand-500"
                      : "text-gray-900 border-b-2 border-brand-600"
                    : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("benefits")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === "benefits"
                    ? isDark
                      ? "text-white border-b-2 border-brand-500"
                      : "text-gray-900 border-b-2 border-brand-600"
                    : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === "process"
                    ? isDark
                      ? "text-white border-b-2 border-brand-500"
                      : "text-gray-900 border-b-2 border-brand-600"
                    : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Process
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === "gallery"
                    ? isDark
                      ? "text-white border-b-2 border-brand-500"
                      : "text-gray-900 border-b-2 border-brand-600"
                    : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Gallery
              </button>
            </div>
          </RevealAnimation>

          {/* Content based on active tab */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <RevealAnimation delay={0.2}>
                {activeTab === "overview" && (
                  <div
                    className={cn(
                      "rounded-2xl overflow-hidden mb-8",
                      theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                    )}
                  >
                    <div className="p-6 md:p-10">
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl font-bold mb-6">
                          Service Overview
                        </h2>
                        <p className="text-xl">{feature.longDescription}</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div
                            className={cn(
                              "p-6 rounded-xl",
                              isDark ? "bg-gray-800" : "bg-white"
                            )}
                          >
                            <div
                              className={cn(
                                "p-3 rounded-lg w-fit mb-4",
                                isDark
                                  ? "bg-green-900/30 text-green-400"
                                  : "bg-green-50 text-green-700"
                              )}
                            >
                              <Sparkles className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                              Pricing Plans
                            </h3>
                            <p className="mb-2">
                              Flexible and transparent pricing designed for
                              every stage of your journey.
                            </p>
                            <a
                              href="https://forms.gle/6eAD11nGuPx6wrNM8"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="w-full mt-20 rounded-full bg-green-600 hover:bg-green-700">
                                Apply
                              </Button>
                            </a>
                          </div>

                          <div
                            className={cn(
                              "p-6 rounded-xl",
                              isDark ? "bg-gray-800" : "bg-white"
                            )}
                          >
                            <div
                              className={cn(
                                "p-3 rounded-lg w-fit mb-4",
                                isDark
                                  ? "bg-blue-900/30 text-blue-400"
                                  : "bg-blue-50 text-blue-700"
                              )}
                            >
                              <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                              Pricing Plan
                            </h3>
                            <p className="text-lg font-semibold mb-2 text-green-700">
                              #{feature.price}{" "}
                              <span className="text-sm font-normal text-white">
                                / {feature.month} months
                              </span>
                            </p>
                            <ul className="text-sm space-y-1">
                              <li>✅ Full access to all DevConnect programs</li>
                              <li>
                                ✅ Hands-on mentorship & real project training
                              </li>
                              <li>✅ Community networking & career guidance</li>
                              <li>✅ Certification after completion</li>
                            </ul>
                            <p className="mt-7 text-xs text-gray-500">
                              💡 Tip: Invest once, gain skills for a lifetime.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "benefits" && (
                  <div
                    className={cn(
                      "rounded-2xl overflow-hidden mb-8",
                      theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                    )}
                  >
                    <div className="p-6 md:p-10">
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl font-bold mb-6">
                          Key Benefits
                        </h2>

                        <div className="space-y-6">
                          {feature.benefits.map(
                            (benefit: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-4">
                                <div
                                  className={cn(
                                    "p-2 rounded-full flex-shrink-0 mt-1",
                                    isDark
                                      ? "bg-brand-900/30 text-brand-400"
                                      : "bg-brand-50 text-brand-700"
                                  )}
                                >
                                  <Check className="h-5 w-5" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold mb-2">
                                    {benefit}
                                  </h3>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    {
                                      [
                                        "Enhanced performance",
                                        "Streamlined processes",
                                        "Long-term value",
                                        "Innovative approach",
                                      ][idx % 4]
                                    }
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "process" && (
                  <div
                    className={cn(
                      "rounded-2xl overflow-hidden mb-8",
                      theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                    )}
                  >
                    <div className="p-6 md:p-10">
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl font-bold mb-6">Our Process</h2>

                        <div className="relative border-l-2 border-brand-500 pl-8 pb-10">
                          {feature.steps?.map((step: string, idx: number) => (
                            <div key={idx} className="mb-10 last:mb-0 relative">
                              <div className="absolute -left-10 top-0 flex items-center justify-center w-6 h-6 rounded-full text-white bg-brand-500">
                                {idx + 1}
                              </div>
                              <h3 className="text-xl font-bold mb-2">{step}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "gallery" && feature.gallery && (
                  <div className="rounded-2xl overflow-hidden mb-8">
                    <div className="p-6 md:p-10">
                      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                      <ImageSlider
                        images={feature.gallery}
                        variant="glass"
                        indicatorType="thumbnails"
                        aspectRatio="21/9"
                        showControls={true}
                        autoPlay={true}
                      />
                      <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
                        {feature.title} in action: Explore our visual portfolio
                      </p>
                    </div>
                  </div>
                )}
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <div className="flex items-center justify-between mt-12 border-t pt-8 dark:border-gray-800">
                  <Link
                    to={`/services/${prevFeature.id}`}
                    className="group inline-flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm">
                      <span className="block text-gray-500 dark:text-gray-400">
                        Previous
                      </span>
                      <span className="font-medium">{prevFeature.title}</span>
                    </span>
                  </Link>

                  <Link
                    to={`/services/${nextFeature.id}`}
                    className="group inline-flex items-center text-right"
                  >
                    <span className="text-sm">
                      <span className="block text-gray-500 dark:text-gray-400">
                        Next
                      </span>
                      <span className="font-medium">{nextFeature.title}</span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </RevealAnimation>
            </div>

            <div className="lg:col-span-1">
              <RevealAnimation delay={0.4}>
                <div
                  className={cn(
                    "rounded-xl p-6",
                    theme === "dark"
                      ? "bg-gray-900/50 border border-gray-800"
                      : "bg-gray-50 border border-gray-100"
                  )}
                >
                  <div
                    className={cn(
                      "p-4 rounded-lg w-16 h-16 mb-5 flex items-center justify-center",
                      theme === "dark"
                        ? "bg-brand-900/50 text-brand-400"
                        : "bg-brand-50 text-brand-700"
                    )}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Experience the power of DevConnect’s{" "}
                    {feature.title.toLowerCase()} program and unlock the skills
                    to transform your future.
                  </p>

                  <Link
                    to={"https://calendly.com/meet-devconnect/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full rounded-full bg-green-600 hover:bg-green-700">
                      Request a Call
                    </Button>
                  </Link>

                  <div className="mt-8 pt-6 border-t dark:border-gray-800">
                    <h4 className="font-medium mb-4">Related Services</h4>
                    <ul className="space-y-3">
                      {features
                        .filter((f) => f.id !== feature.id)
                        .slice(0, 3)
                        .map((relatedFeature, idx) => (
                          <li key={idx}>
                            <Link
                              to={`/services/${relatedFeature.id}`}
                              className="inline-flex items-center text-brand-500 hover:text-brand-600 dark:hover:text-brand-400"
                            >
                              <span className="mr-2">
                                {relatedFeature.title}
                              </span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeatureDetails;

// https://forms.gle/cQ6r1T4GekobnGbL6