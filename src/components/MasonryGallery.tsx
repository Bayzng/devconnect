import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, ImageIcon, Maximize, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  thumbnail?: string;
  category?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    alt: "Team collaboration",
    category: "teamwork",
  },
  {
    id: "2",
    type: "video",
    src: "/devConnect.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1664575599730-0814817939de?q=80&w=2070&auto=format&fit=crop",
    alt: "AI Innovation",
    category: "AI",
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    alt: "Team meeting",
    category: "teamwork",
  },
  {
    id: "4",
    type: "image",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    alt: "Business professional",
    category: "business",
  },
  {
    id: "5",
    type: "video",
    src: "/devConnect.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    alt: "Corporate Business",
    category: "business",
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=2187&auto=format&fit=crop",
    alt: "Innovation & Technology",
    category: "technology",
  },
  {
    id: "7",
    type: "image",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=5304&auto=format&fit=crop",
    alt: "Ai Technology",
    category: "technology",
  },
];

const MasonryGallery = ({ className, items = galleryItems }) => {
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [fullscreenItem, setFullscreenItem] = useState<GalleryItem | null>(
    null
  );
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = Array.from(
    new Set(items.map((item) => item.category).filter(Boolean) as string[])
  );
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  useGSAP(() => {
    gsap.fromTo(
      ".masonry-item",
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: { amount: 0.8, from: "random" },
        ease: "power3.out",
      }
    );
  }, [selectedCategory]);

  const handleMouseEnter = (id, type) => {
    setActiveItem(id);
    if (type === "video" && videoRefs.current[id]) videoRefs.current[id].play();
  };

  const handleMouseLeave = (id, type) => {
    setActiveItem(null);
    if (type === "video" && videoRefs.current[id])
      videoRefs.current[id].pause();
  };

  const handleExpandItem = (id) =>
    setExpanded(expanded === id ? null : id);

  const openFullscreen = (item) => {
    setFullscreenItem(item);
    if (item.type === "video" && videoRefs.current[item.id])
      videoRefs.current[item.id].pause();
  };

  const closeFullscreen = () => setFullscreenItem(null);

  useGSAP(() => {
    if (fullscreenItem) {
      gsap.fromTo(
        ".fullscreen-modal",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [fullscreenItem]);

  return (
    <>
      <div
        className={cn("container mx-auto px-3 sm:px-4 py-10 sm:py-16", className)}
        ref={containerRef}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            <span
              className={
                theme === "dark" ? "dark-gradient-text" : "light-gradient-text"
              }
            >
              Visual Showcase
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Explore our work through this curated collection of images and
            videos showcasing our projects and achievements.
          </p>

          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-1">
              <button
                className={cn(
                  "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                  !selectedCategory
                    ? "bg-brand-500 text-white shadow-lg"
                    : "bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={cn(
                    "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                    selectedCategory === category
                      ? "bg-brand-500 text-white shadow-lg"
                      : "bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 🧩 Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[300px] gap-4 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "masonry-item group overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer",
                "shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl",
                expanded === item.id && "sm:col-span-2 sm:row-span-2",
                index % 5 === 0 && "lg:col-span-2 row-span-2",
                theme === "dark" ? "bg-gray-900" : "bg-white",
                "transform-gpu hover:scale-[1.02]"
              )}
              onClick={() => openFullscreen(item)}
              onMouseEnter={() => handleMouseEnter(item.id, item.type)}
              onMouseLeave={() => handleMouseLeave(item.id, item.type)}
            >
              <div className="w-full h-full relative overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.alt}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                          activeItem === item.id ? "opacity-0" : "opacity-100"
                        )}
                        loading="lazy"
                      />
                    )}
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[item.id] = el;
                      }}
                      src={item.src}
                      loop
                      muted
                      playsInline
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                        activeItem === item.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-3">
          <div className="fullscreen-modal relative w-full h-[80vh] sm:h-[90vh] max-w-[95vw] sm:max-w-[90vw] m-auto">
            <button
              onClick={closeFullscreen}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </button>

            {fullscreenItem.type === "image" ? (
              <img
                src={fullscreenItem.src}
                alt={fullscreenItem.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={fullscreenItem.src}
                autoPlay
                controls
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGallery;
