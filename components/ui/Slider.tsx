"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@lib/utils"

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={
      cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative flex justify-center items-center h-6 w-6 hover:h-9 hover:w-9 rounded-full font-medium border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <span className="text-xs">
        {value}
      </span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root >
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
