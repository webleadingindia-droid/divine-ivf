"use client";

import { ReactNode } from "react";
import { ScrollAnimation } from "./ScrollAnimation";

interface StaggerAnimationProps {
  children: ReactNode[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function StaggerAnimation({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
}: StaggerAnimationProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollAnimation key={index} delay={delay + index * staggerDelay}>
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}

export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}