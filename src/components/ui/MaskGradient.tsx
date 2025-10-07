
import React from "react";
import { cn } from "@/lib/utils";

type MaskGradientProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  intensity?: "light" | "medium" | "heavy";
  className?: string;
};

const MaskGradient = ({
  children,
  direction = "right",
  intensity = "medium",
  className,
}: MaskGradientProps) => {
  // Define mask intensity levels
  const intensityMap = {
    light: {
      left: "mask-image: linear-gradient(to left, black 80%, transparent 100%)",
      right: "mask-image: linear-gradient(to right, black 80%, transparent 100%)",
      top: "mask-image: linear-gradient(to top, black 80%, transparent 100%)",
      bottom: "mask-image: linear-gradient(to bottom, black 80%, transparent 100%)",
    },
    medium: {
      left: "mask-image: linear-gradient(to left, black 70%, transparent 100%)",
      right: "mask-image: linear-gradient(to right, black 70%, transparent 100%)",
      top: "mask-image: linear-gradient(to top, black 70%, transparent 100%)",
      bottom: "mask-image: linear-gradient(to bottom, black 70%, transparent 100%)",
    },
    heavy: {
      left: "mask-image: linear-gradient(to left, black 60%, transparent 100%)",
      right: "mask-image: linear-gradient(to right, black 60%, transparent 100%)",
      top: "mask-image: linear-gradient(to top, black 60%, transparent 100%)",
      bottom: "mask-image: linear-gradient(to bottom, black 60%, transparent 100%)",
    },
  };

  // Get the corresponding class name based on direction and intensity
  const getMaskClass = () => {
    switch (direction) {
      case "left":
        return "mask-gradient-l";
      case "right":
        return "mask-gradient-r";
      case "top":
        return "mask-gradient-t";
      case "bottom":
        return "mask-gradient-b";
      default:
        return "mask-gradient-r";
    }
  };

  return (
    <div className={cn(getMaskClass(), className)} style={{ WebkitMaskImage: intensityMap[intensity][direction] }}>
      {children}
    </div>
  );
};

export default MaskGradient;
