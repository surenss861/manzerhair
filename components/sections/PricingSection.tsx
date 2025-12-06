"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Cut & Style", price: "Starting at $85" },
  { name: "Balayage", price: "Starting at $200" },
  { name: "Highlights", price: "Starting at $180" },
  { name: "Root Touch-Up", price: "Starting at $150" },
  { name: "Blowout", price: "Starting at $65" },
];

export function PricingSection() {
  return (
    <section className="py-[120px] md:py-[120px] bg-clay/10 relative overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      
      {/* Soft arch mask - Section bounding box */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-6xl h-[50%]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Section Header - Consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            Pricing
          </h2>
          {/* Micro-copy personality */}
          <p className="text-clay/70 text-base max-w-xl mx-auto font-light italic mb-10">
            Simple, honest, transparent.
          </p>
          {/* Brand signature motion - Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1px] bg-gold-soft/60 mx-auto origin-center"
          />
        </motion.div>

        {/* Clean Table Layout - Clay background, 1px gold borders, serif headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-clay/20 backdrop-blur-sm rounded-organic border border-gold-soft/20 shadow-soft overflow-hidden"
        >
          <div className="divide-y divide-gold-soft/20">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center justify-between p-6 hover:bg-clay/10 transition-colors duration-300"
              >
                <span className="font-heading text-lg text-espresso">{service.name}</span>
                <div className="flex items-center gap-3">
                  {/* Gold dot separator */}
                  <span className="w-1 h-1 rounded-full bg-gold-soft/60" />
                  <span className="text-olive/80 font-light">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-8 text-olive/70 text-sm font-light italic"
        >
          Full pricing available during consultation.
        </motion.p>
      </div>
    </section>
  );
}
