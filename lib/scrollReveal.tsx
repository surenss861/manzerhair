"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Scroll reveal animation wrapper
 * Provides consistent fade-up animations for sections
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered scroll reveal for lists
 */
export function StaggeredReveal({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          delay={delay + index * staggerDelay}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}

