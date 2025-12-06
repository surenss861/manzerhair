"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Palette, Sparkles, Droplet, Wind } from "lucide-react";
import { ArrowRight } from "lucide-react";

const heroServices = [
  {
    id: 1,
    title: "Cut + Style",
    icon: Scissors,
    description: "Precision cuts tailored to your face shape, lifestyle, and natural texture.",
  },
  {
    id: 2,
    title: "Balayage",
    icon: Sparkles,
    description: "Hand-painted highlights for natural, sun-kissed dimension that grows out beautifully.",
  },
  {
    id: 3,
    title: "Highlights",
    icon: Palette,
    description: "Classic or dimensional highlights customized to enhance your natural color.",
  },
  {
    id: 4,
    title: "Root Touch-Up",
    icon: Droplet,
    description: "Seamless color matching for natural-looking root coverage and maintenance.",
  },
  {
    id: 5,
    title: "Blowout",
    icon: Wind,
    description: "Professional styling for special occasions or everyday polish.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-[120px] md:py-[120px] bg-cream-light relative overflow-hidden">
      {/* Organic mask - asymmetrical arch (section bounding box) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-[50%]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header - Consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            Our Services
          </h2>
          <p className="text-olive/80 text-lg max-w-xl mx-auto font-light leading-relaxed mb-10">
            Expert colourists + stylists specializing in lived-in, effortless hair.
          </p>
          {/* Micro-copy personality */}
          <p className="text-clay/70 text-base max-w-xl mx-auto font-light italic mb-10">
            Hair that grows with you.
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

        {/* Service Menu Preview - Hero services only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {heroServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Service Card */}
                <div className="bg-cream-light/80 backdrop-blur-xs rounded-organic overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-clay/30 hover:border-gold-soft/40 h-full flex flex-col p-8">
                  {/* Gold Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center border border-gold-soft/20 group-hover:bg-gold-soft/15 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-gold-soft" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-semibold text-espresso mb-3">
                    {service.title}
                  </h3>

                  {/* 1-line description */}
                  <p className="text-olive/70 text-sm leading-relaxed font-light mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* "Explore Pricing →" CTA */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-gold-soft hover:text-gold-light font-light text-sm transition-colors duration-300 group/link"
                  >
                    Explore Pricing
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-clay/60 text-sm font-light italic">
            Full pricing available during consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
