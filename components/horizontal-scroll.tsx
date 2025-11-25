"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const newScrollPosition = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg bg-background/80 backdrop-blur-sm"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div
        ref={scrollRef}
        className={cn("flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4", className)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg bg-background/80 backdrop-blur-sm"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
