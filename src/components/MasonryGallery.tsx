import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, ImageIcon, Maximize, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Define the gallery item type for better type checking
export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  thumbnail?: string;
  category?: string;
};

// Sample gallery items array - can be extended or moved to a data file
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
    alt: "AI Video",
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
    alt: "Corporate Video",
    category: "business",
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=2187&auto=format&fit=crop",
    alt: "Woman with VR headset",
    category: "technology",
  },
  {
    id: "7",
    type: "image",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=5304&auto=format&fit=crop",
    alt: "Woman using laptop",
    category: "technology",
  },
];

interface MasonryGalleryProps {
  className?: string;
  items?: GalleryItem[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  className,
  items = galleryItems,
}) => {
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [fullscreenItem, setFullscreenItem] = useState<GalleryItem | null>(
    null
  );
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Get unique categories from items
  const categories = Array.from(
    new Set(items.map((item) => item.category).filter(Boolean) as string[])
  );
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  useGSAP(() => {
    // Stagger animation for gallery items on load
    gsap.fromTo(
      ".masonry-item",
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "random",
        },
        ease: "power3.out",
      }
    );
  }, [selectedCategory]); // Re-run animation when category changes

  const handleMouseEnter = (id: string, type: "image" | "video") => {
    setActiveItem(id);
    if (type === "video" && videoRefs.current[id]) {
      videoRefs.current[id]
        .play()
        .catch((err) => console.error("Error playing video:", err));
    }
  };

  const handleMouseLeave = (id: string, type: "image" | "video") => {
    setActiveItem(null);
    if (type === "video" && videoRefs.current[id]) {
      videoRefs.current[id].pause();
    }
  };

  const handleExpandItem = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const openFullscreen = (item: GalleryItem) => {
    setFullscreenItem(item);
    if (item.type === "video" && videoRefs.current[item.id]) {
      videoRefs.current[item.id].pause();
    }
  };

  const closeFullscreen = () => {
    setFullscreenItem(null);
  };

  useGSAP(() => {
    if (fullscreenItem) {
      gsap.fromTo(
        ".fullscreen-modal",
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [fullscreenItem]);

  return (
    <>
      <div
        className={cn("container mx-auto px-4 py-16", className)}
        ref={containerRef}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span
              className={
                theme === "dark" ? "dark-gradient-text" : "light-gradient-text"
              }
            >
              Visual Showcase
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our work through this curated collection of images and
            videos showcasing our projects and achievements.
          </p>

          {/* Category filters */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
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
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "masonry-item group overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer",
                "shadow-lg hover:shadow-2xl",
                expanded === item.id &&
                  "md:col-span-2 lg:col-span-2 row-span-2",
                index % 5 === 0 && "lg:col-span-2 row-span-2",
                index % 3 === 1 && "row-span-2",
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

                {/* Hover Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  )}
                >
                  <div
                    className={cn(
                      "transform transition-all duration-500 flex flex-col items-center gap-4",
                      "translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    )}
                  >
                    <div className="bg-white/90 dark:bg-gray-900/90 p-4 rounded-full">
                      {item.type === "video" ? (
                        <Play className="w-6 h-6 text-brand-500" />
                      ) : (
                        <ImageIcon className="w-6 h-6 text-brand-500" />
                      )}
                    </div>

                    <button
                      onClick={() => handleExpandItem(item.id)}
                      className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <Maximize className="w-4 h-4 text-brand-500" />
                    </button>
                  </div>
                </div>

                {/* Caption */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                    "transform transition-all duration-300",
                    "translate-y-full group-hover:translate-y-0"
                  )}
                >
                  <p className="text-white text-lg font-medium mb-1">
                    {item.alt}
                  </p>
                  {item.category && (
                    <span className="text-sm text-gray-300">
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="fullscreen-modal relative w-full h-full max-w-[90vw] max-h-[90vh] m-auto">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {fullscreenItem.type === "image" ? (
              <img
                src={fullscreenItem.src}
                alt={fullscreenItem.alt}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={fullscreenItem.src}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <p className="text-white text-xl font-medium mb-2">
                {fullscreenItem.alt}
              </p>
              {fullscreenItem.category && (
                <span className="text-lg text-gray-300">
                  {fullscreenItem.category.charAt(0).toUpperCase() +
                    fullscreenItem.category.slice(1)}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGallery;
