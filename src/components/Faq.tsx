import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";

const Faq = () => {
  const { theme } = useTheme();
  
  const faqs = [
    {
      question: "What is DevConnect?",
      answer: "DevConnect is a community-driven tech event that brings together developers, innovators, and enthusiasts to explore the future of software, Web3, AI, and emerging technologies. It’s a hub for learning, collaboration, and networking."
    },
    {
      question: "Who can attend DevConnect?",
      answer: "Anyone passionate about technology can attend DevConnect — from beginners to experienced developers, tech entrepreneurs, startups, and industry leaders. The event is designed to be inclusive and welcoming to all skill levels."
    },
    {
      question: "What activities take place at DevConnect?",
      answer: "DevConnect features workshops, keynote talks, hackathons, panel discussions, product demos, and networking sessions. It's a hands-on experience designed to help attendees learn, build, and connect with others in the tech ecosystem."
    },
    {
      question: "Does DevConnect support collaborations?",
      answer: "Yes! DevConnect is all about collaboration. Whether you’re a solo developer, part of a startup, or an enterprise innovator, the event provides opportunities to connect, exchange ideas, and build projects together."
    },
    {
      question: "How do I register for DevConnect?",
      answer: "Registration can be completed online through our event platform. Simply choose your ticket type, sign up, and you’ll be ready to join the experience. Follow our updates for special passes and community discounts."
    },
    {
      question: "What support is available for attendees?",
      answer: "Our team provides dedicated support before and during the event. We also offer guidance for first-time attendees, detailed schedules, and community channels to ensure you make the most of DevConnect."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-950/50 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked <span className="text-brand-600 dark:text-brand-400">Questions</span>
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.1}>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about DevConnect and how it brings the tech community together
            </p>
          </RevealAnimation>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation key={index} delay={0.1 * index}>
                <AccordionItem value={`faq-${index}`} className={`
                  ${theme === 'light' 
                    ? 'bg-white/80 shadow-md border border-gray-200/50'
                    : 'bg-gray-900/60 shadow-md shadow-black/5 border border-gray-700/30'
                  } rounded-xl overflow-hidden
                `}>
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-gray-900 dark:text-white font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </RevealAnimation>
            ))}
          </Accordion>
          
          <RevealAnimation delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">Still have questions?</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50">
                <span className="mr-2">💬</span>
                <span>Contact our support team for more information</span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
