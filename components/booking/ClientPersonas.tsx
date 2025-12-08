"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Scissors, Palette, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { trackCTA } from "@/lib/analytics";

type PersonaType = "transformation" | "maintenance" | "cut" | "unsure" | null;

const personas = [
  {
    id: "transformation" as const,
    title: "I want a colour transformation",
    icon: Palette,
    description: "Ready for a complete colour change or major update",
    suggestedStylists: ["Sarah", "Alyssa"],
    suggestedServices: ["Balayage", "Dimensional Highlights", "Colour Correction"],
    priceRange: "$200 - $400",
    ctaText: "Book Colour Consultation",
  },
  {
    id: "maintenance" as const,
    title: "I need maintenance",
    icon: Sparkles,
    description: "Root touch-ups, trims, and regular upkeep",
    suggestedStylists: ["Alyssa", "Emma", "Jessica"],
    suggestedServices: ["Root Touch-Up", "Trim", "Blowout"],
    priceRange: "$65 - $150",
    ctaText: "Book Maintenance",
  },
  {
    id: "cut" as const,
    title: "I want a fresh cut",
    icon: Scissors,
    description: "New style, shape, or precision cut",
    suggestedStylists: ["Emma", "Alyssa"],
    suggestedServices: ["Custom Cuts", "Precision Cuts", "Textured Styles"],
    priceRange: "$85 - $150",
    ctaText: "Book Cut Consultation",
  },
  {
    id: "unsure" as const,
    title: "I'm unsure — help me choose",
    icon: HelpCircle,
    description: "Not sure what you need? We'll guide you",
    suggestedStylists: ["Jessica", "Alyssa"],
    suggestedServices: ["Consultation", "Hair Analysis", "Style Consultation"],
    priceRange: "$65 - $120",
    ctaText: "Book Consultation",
  },
];

export function ClientPersonas() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>(null);

  const selectedData = selectedPersona
    ? personas.find((p) => p.id === selectedPersona)
    : null;

  return (
    <section className="py-[120px] md:py-[120px] bg-cream-light relative overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            What Best Describes You?
          </h2>
          <p className="text-olive/80 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Tell us what you're looking for, and we'll match you with the perfect stylist and services.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1px] bg-gold-soft/60 mx-auto origin-center"
          />
        </motion.div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            const isSelected = selectedPersona === persona.id;

            return (
              <motion.button
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedPersona(isSelected ? null : persona.id)}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-6 rounded-organic border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2 ${
                  isSelected
                    ? "bg-gold-soft/10 border-gold-soft/50 shadow-soft-lg"
                    : "bg-cream-light/80 border-clay/30 hover:border-gold-soft/40 shadow-soft"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isSelected
                        ? "bg-gold-soft/20 border-2 border-gold-soft/50"
                        : "bg-clay/20 border border-clay/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${
                        isSelected ? "text-gold-soft" : "text-olive/70"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-espresso mb-2">
                      {persona.title}
                    </h3>
                    <p className="text-olive/70 text-sm font-light leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Results Panel */}
        <AnimatePresence>
          {selectedData && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-clay/20 backdrop-blur-sm rounded-organic-lg p-8 md:p-12 border border-gold-soft/30 shadow-soft-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Suggested Stylists */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-espresso mb-4">
                    Suggested Stylists
                  </h4>
                  <div className="space-y-3">
                    {selectedData.suggestedStylists.map((stylist, index) => (
                      <motion.div
                        key={stylist}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gold-soft" />
                        <Link
                          href={`/team#${stylist.toLowerCase()}`}
                          className="text-espresso hover:text-gold-soft font-light transition-colors"
                          onClick={() => trackCTA(`View ${stylist}`, "personas")}
                        >
                          {stylist}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Suggested Services */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-espresso mb-4">
                    Suggested Services
                  </h4>
                  <div className="space-y-3">
                    {selectedData.suggestedServices.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gold-soft" />
                        <span className="text-olive/80 font-light">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-espresso mb-4">
                    Estimated Pricing
                  </h4>
                  <p className="text-gold-soft font-medium text-xl mb-6">
                    {selectedData.priceRange}
                  </p>
                  <Link
                    href="#book"
                    onClick={() => trackCTA(selectedData.ctaText, "personas")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-gold-soft rounded-full font-medium hover:bg-espresso-light transition-all duration-300 shadow-soft focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2"
                  >
                    {selectedData.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-clay/60 text-xs font-light mt-3 italic">
                    Final pricing determined during consultation
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

