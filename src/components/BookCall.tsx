
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, PhoneCall } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";
import { toast } from "./ui/use-toast";

const BookCall = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedTime: ""
  });

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM", 
    "1:00 PM - 2:00 PM",
    "3:00 PM - 4:00 PM",
    "5:00 PM - 6:00 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Call Scheduled!",
      description: "We'll be in touch shortly to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      selectedTime: ""
    });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, selectedTime: time });
  };

  return (
    <section id="book-call" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className={`absolute inset-0 ${
        theme === "dark" ? "bg-gray-950" : "bg-gradient-to-b from-brand-50/50 to-white"
      }`}></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 translate-x-1/2 w-64 h-64 rounded-full bg-green-600/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Business info */}
          <RevealAnimation className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <RevealAnimation delay={0.2}>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 mask-text">
                    Let's discuss how our expertise can transform your workflow
                  </h3>
                </RevealAnimation>
                
                <RevealAnimation delay={0.3}>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Schedule a personalized call with our team to explore how DevConnect can be tailored to your specific business needs and challenges.
                  </p>
                </RevealAnimation>
              </div>
              
              <div className="space-y-6">
                <RevealAnimation delay={0.4}>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Why book a call with us?
                  </h4>
                </RevealAnimation>
                
                <RevealAnimation delay={0.5}>
                  <div className="grid gap-4">
                    {[
                      {
                        icon: <MessageSquare className="h-5 w-5 text-brand-500" />,
                        title: "Personalized Solutions",
                        description: "Get tailored recommendations for your specific business challenges."
                      },
                      {
                        icon: <PhoneCall className="h-5 w-5 text-brand-500" />,
                        title: "Expert Consultation",
                        description: "Speak directly with our AI specialists with years of experience."
                      },
                      {
                        icon: <Calendar className="h-5 w-5 text-brand-500" />,
                        title: "Flexible Scheduling",
                        description: "Choose a time that works best for your team's availability."
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${theme === "dark" ? "border-gray-800 bg-gray-900/50" : "border-gray-200 bg-white"} flex items-start space-x-4 transition-all duration-300 hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700`}>
                        <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-brand-50"}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white">{item.title}</h5>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
          
          {/* Right column: Booking form */}
          <RevealAnimation className="order-1 lg:order-2" delay={0.3}>
            <Card className={`overflow-hidden ${
              theme === "dark"
                ? "border-gray-800 bg-gray-900/60 backdrop-blur-sm"
                : "border-gray-200 bg-white/90 backdrop-blur-sm shadow-xl"
            } transition-all duration-300 hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-800`}>
              <CardHeader className="border-b border-gray-200 dark:border-gray-800">
                <CardTitle className="text-2xl font-display">Schedule Your Call</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Preferred Time
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timeSlots.map((time, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg border transition-all ${
                              formData.selectedTime === time
                                ? "bg-brand-500 text-white border-brand-500 dark:bg-brand-600 dark:border-brand-600"
                                : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-brand-400 dark:hover:border-brand-700"
                            }`}
                          >
                            <Clock className="h-4 w-4" />
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business needs..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full rounded-lg py-6 bg-gradient-to-r from-brand-600 to-brand-400 hover:from-brand-700 hover:to-brand-500 border-0 text-lg font-medium shadow-lg shadow-brand-500/20 dark:shadow-brand-500/10 transition-all duration-300"
                  >
                    <PhoneCall className="h-5 w-5 mr-2" />
                    Book Your Call Now
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    We'll confirm your appointment within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
