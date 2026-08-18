"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Subtle, consistent scroll-reveal used across homepage sections.
// Respects prefers-reduced-motion via Framer Motion's built-in handling
// combined with the reduced-motion override in globals.css.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
