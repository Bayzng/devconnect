
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import RevealAnimation from "./ui/RevealAnimation";
import MaskGradient from "./ui/MaskGradient";
import { useIsMobile } from "@/hooks/use-mobile";
import { Check, Flag, Clock, BarChart4, BuildingIcon, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Roadmap = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  
  const milestones = [
    {
      year: "2025 Q4",
      title: "DevConnect Hub",
      description: "Initial launch with core bootcamp sessions and foundational tech workshops.",
      icon: <Rocket className="w-5 h-5" />,
      status: "completed"
    },
    {
      year: "2025 Q1",
      title: "Expanded Ecosystem",
      description: "An expanded ecosystem with new workshops and richer learning experiences",
      icon: <Check className="w-5 h-5" />,
      status: "completed"
    },
    {
      year: "2025 Q2",
      title: "Tech Event",
      description: "A gathering of developers, innovators, and tech enthusiasts shaping the future of software, Web3, and AI.",
      icon: <BarChart4 className="w-5 h-5" />,
      status: "current"
    },
    {
      year: "2026 Q3",
      title: "Custom Agent Builder",
      description: "Low-code tool for creating specialized agents for unique workflows.",
      icon: <Clock className="w-5 h-5" />,
      status: "upcoming"
    },
    {
      year: "2026 Q4",
      title: "Enterprise Suite",
      description: "Advanced security, compliance, and management features for large organizations.",
      icon: <BuildingIcon className="w-5 h-5" />,
      status: "upcoming"
    }
  ];

  const renderMilestoneCard = (milestone, index) => (
    <Card key={index} className={`
      w-full h-full transition-all duration-300 
      hover:shadow-lg group overflow-hidden
      ${milestone.status === 'completed' ? 'border-green-500/20 dark:border-green-500/30' : 
        milestone.status === 'current' ? 'border-yellow-500/30 dark:border-yellow-500/40 shadow-lg' : 
        'border-gray-200 dark:border-gray-700'}
    `}>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Status badge and icon */}
          <div className="flex justify-between items-center">
            <div className={`
              rounded-full px-3 py-1 text-xs font-medium
              ${milestone.status === 'completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' 
                : milestone.status === 'current' 
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 animate-pulse' 
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}
            `}>
              {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
            </div>
            <div className={`
              p-2 rounded-full
              ${milestone.status === 'completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' 
                : milestone.status === 'current' 
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' 
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}
            `}>
              {milestone.icon}
            </div>
          </div>
          
          {/* Title and date */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {milestone.title}
            </h3>
            <span className="inline-block text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-2 py-0.5 rounded">
              {milestone.year}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300">
            {milestone.description}
          </p>
          
          {/* Progress indicator for current milestone */}
          {milestone.status === 'current' && (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
              <div className="bg-yellow-500 dark:bg-yellow-400 h-1.5 rounded-full animate-pulse" style={{ width: '50%' }}></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-transparent dark:from-transparent dark:via-gray-900/20 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Our <span className="text-brand-600 dark:text-brand-400">Roadmap</span>
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.1}>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              The journey ahead for Dev Connect and how we're building the future of technology together.
            </p>
          </RevealAnimation>
        </div>
        
        {/* Desktop timeline view */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-200 via-brand-400 to-gray-200 dark:from-brand-700 dark:via-brand-500 dark:to-gray-700 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <RevealAnimation key={index} delay={0.15 * index} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`relative mb-12 flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10">
                    <div className={`w-5 h-5 rounded-full ${
                      milestone.status === 'completed' 
                        ? 'bg-brand-500 dark:bg-brand-400' 
                        : milestone.status === 'current' 
                          ? 'bg-yellow-500 dark:bg-yellow-400 animate-pulse' 
                          : 'bg-gray-300 dark:bg-gray-600'
                    }`}></div>
                    <div className={`absolute w-8 h-8 rounded-full animate-ping opacity-30 ${
                      milestone.status === 'current' ? 'bg-yellow-500 dark:bg-yellow-400' : 'hidden'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    {renderMilestoneCard(milestone, index)}
                  </div>
                  
                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Mobile view - tabs and cards */}
        <div className="md:hidden">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="w-full mb-6 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-lg">
              <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
              <TabsTrigger value="current" className="flex-1">Current</TabsTrigger>
              <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
            </TabsList>
            
            <TabsContent value="completed" className="space-y-4">
              {milestones
                .filter(milestone => milestone.status === 'completed')
                .map((milestone, index) => (
                  <RevealAnimation key={index} delay={0.1 * index}>
                    {renderMilestoneCard(milestone, index)}
                  </RevealAnimation>
                ))
              }
            </TabsContent>
            
            <TabsContent value="current" className="space-y-4">
              {milestones
                .filter(milestone => milestone.status === 'current')
                .map((milestone, index) => (
                  <RevealAnimation key={index} delay={0.1 * index}>
                    {renderMilestoneCard(milestone, index)}
                  </RevealAnimation>
                ))
              }
            </TabsContent>
            
            <TabsContent value="upcoming" className="space-y-4">
              {milestones
                .filter(milestone => milestone.status === 'upcoming')
                .map((milestone, index) => (
                  <RevealAnimation key={index} delay={0.1 * index}>
                    {renderMilestoneCard(milestone, index)}
                  </RevealAnimation>
                ))
              }
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
