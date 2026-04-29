"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  id?: string;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark for animation (hidden initially via CSS)
    el.classList.add("will-animate");

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      // Already in viewport — reveal immediately, no animation
      requestAnimationFrame(() => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-dir={direction}
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
