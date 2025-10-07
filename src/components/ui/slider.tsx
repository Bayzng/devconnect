
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-gray-200/50 via-gray-200/70 to-gray-200/50 dark:from-gray-800/50 dark:via-gray-800/70 dark:to-gray-800/50">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-brand-500 to-brand-400 will-change-transform" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-all duration-300 hover:scale-110 focus:scale-110 focus:ring-brand-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 after:absolute after:inset-0 after:-z-10 after:rounded-full after:blur-sm after:bg-brand-500/40 after:opacity-0 hover:after:opacity-100 focus:after:opacity-100">
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-brand-500 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100" style={{ pointerEvents: 'none' }}>
        <span className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-brand-500"></span>
        <span className="value-indicator"></span>
      </span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
