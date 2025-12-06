"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  "Craft Over Speed.",
  "Hair With Heart.",
  "Designed For Real People.",
  "Warm Light. Warm People.",
  "Made With Care.",
];

interface ValuesMicroMomentProps {
  value: string;
  index: number;
}

export function ValuesMicroMoment({ value, index }: ValuesMicroMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -20]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="py-12 md:py-16 text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-2xl md:text-3xl text-espresso/70 font-light italic tracking-tight"
      >
        {value}
      </motion.p>
    </motion.div>
  );
}

// Export array for use in page
export { values as salonValues };

