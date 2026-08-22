"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const initialTransform: Record<
    "up" | "down" | "left" | "right",
    string
  > = {
    up: "translateY(30px)",
    down: "translateY(-30px)",
    left: "translateX(30px)",
    right: "translateX(-30px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : initialTransform[direction],
        transition: `opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
