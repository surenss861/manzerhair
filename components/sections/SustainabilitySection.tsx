"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Droplets, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const sustainabilityPoints = [
  {
    icon: Leaf,
    title: "Green Circle Certified",
    description: "100% of salon waste recycled. Recognized for our commitment to environmental responsibility.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Comprehensive recycling and waste minimization programs. Zero waste to landfill.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "65% water saved per wash. Efficient water usage and eco-friendly product choices.",
  },
  {
    icon: Heart,
    title: "Sustainable Products",
    description: "PPD-free color, paraben-free, cruelty-free. We choose brands that align with our environmental values.",
  },
];

const ecoFacts = [
  "100% of salon waste recycled",
  "65% water saved per wash",
  "PPD-free color formulas",
  "Paraben-free products",
  "Cruelty-free certified",
];

export function SustainabilitySection() {
  return (
    <section className="py-40 md:py-56 bg-espresso text-cream-light relative overflow-hidden">
      {/* Organic top divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-espresso" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gold-soft/20 rounded-full mb-8"
            >
              <Leaf className="w-10 h-10 text-gold-soft" />
            </motion.div>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Sustainability Matters
            </h2>
            <p className="text-xl md:text-2xl text-gold-light leading-relaxed mb-8 font-light">
              At Manzer Hair Studio, we&apos;re proud to be Green Circle certified. Our commitment
              to sustainability isn&apos;t just about the environment—it&apos;s about creating a
              better future for our community and our clients.
            </p>
            <p className="text-base md:text-lg text-clay-light leading-relaxed font-light max-w-3xl mx-auto mb-10">
              We believe that beautiful hair shouldn&apos;t come at the cost of our planet. Every
              decision we make, from product selection to waste management, reflects our dedication
              to responsible practices.
            </p>

            {/* Eco Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              {ecoFacts.map((fact, index) => (
                <motion.div
                  key={fact}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-clay/10 rounded-organic backdrop-blur-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-soft" />
                  <p className="text-xs text-clay-light font-light text-center">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sustainability Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {sustainabilityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center bg-clay/10 backdrop-blur-xs p-8 rounded-organic border border-clay/20 hover:border-gold-soft/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gold-soft/20 rounded-full mb-6"
                >
                  <Icon className="w-8 h-8 text-gold-soft" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-sm text-clay-light leading-relaxed font-light">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/salon#sustainability"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-soft text-espresso rounded-organic-lg font-medium hover:bg-gold-light transition-colors duration-300 shadow-soft-lg"
          >
            <span>Learn More About Our Eco Practices</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
