"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Leaf } from "lucide-react";

const trustIndicators = [
  {
    id: 1,
    label: "15+ Years on the Danforth",
    icon: Award,
  },
  {
    id: 2,
    label: "1,000+ Transformations",
    icon: Users,
  },
  {
    id: 3,
    label: "Loved by Locals",
    icon: Heart,
  },
  {
    id: 4,
    label: "Green Circle Certified",
    icon: Leaf,
  },
];

export function TrustIndicatorsSection() {
  return (
    <section className="py-16 md:py-20 bg-cream relative overflow-hidden">
      {/* Low-opacity section divider background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(217, 201, 181, 0.08), transparent)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={indicator.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gold-soft/10 flex items-center justify-center border border-gold-soft/20">
                  <Icon className="w-6 h-6 text-gold-soft" strokeWidth={1.5} />
                </div>
                {/* Label */}
                <p className="text-espresso/80 text-sm font-light text-center max-w-[180px]">
                  {indicator.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

