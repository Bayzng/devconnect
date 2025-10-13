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
      answer:
        "DevConnect is a coding hub and innovation community where individuals can learn software development from beginner to expert level. We also specialize in organizing blockchain events and building strong, engaging tech communities.",
    },
    {
      question: "Who can join DevConnect?",
      answer:
        "Anyone interested in technology, software development, or blockchain can join DevConnect — whether you're a complete beginner, an experienced developer, or part of a growing tech startup.",
    },
    {
      question: "What does DevConnect offer?",
      answer:
        "DevConnect offers hands-on coding programs, workshops, and mentorship sessions. We also host blockchain events, community meetups, and developer challenges to help members learn, collaborate, and grow.",
    },
    {
      question: "Does DevConnect support collaborations?",
      answer:
        "Yes! Collaboration is at the heart of DevConnect. We create opportunities for developers, entrepreneurs, and tech enthusiasts to connect, share ideas, and build impactful projects together.",
    },
    {
      question: "How can I join or register?",
      answer:
        "You can register easily through our online platform. Simply sign up, choose your program or event, and you’re set to begin your DevConnect journey.",
    },
    {
      question: "Is there support for new members?",
      answer:
        "Absolutely. Our team provides ongoing support, resources, and mentorship to help both new and existing members succeed in their learning and community engagement.",
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
