"use client";

import { motion } from "framer-motion";
import { Award, Star, Users, Shield, Leaf } from "lucide-react";
import Link from "next/link";

const trustElements = [
  {
    icon: Star,
    stat: "4.9/5",
    label: "Average Rating",
    description: "From 200+ Google reviews",
    link: "https://g.page/r/.../review", // Add actual Google review link
  },
  {
    icon: Users,
    stat: "5,000+",
    label: "Happy Clients",
    description: "Since 2015 on Danforth",
  },
  {
    icon: Award,
    stat: "Award-Winning",
    label: "Team",
    description: "Recognized excellence",
  },
  {
    icon: Shield,
    stat: "Green Circle",
    label: "Certified",
    description: "Sustainable practices",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-cream-light border-y border-clay/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustElements.map((element, index) => {
            const Icon = element.icon;

            return (
              <motion.div
                key={element.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-center ${element.link ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-14 h-14 bg-gold-soft/10 rounded-full mb-4"
                >
                  <Icon className="w-7 h-7 text-espresso" />
                </motion.div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-2">
                  {element.stat}
                </div>
                <div className="text-sm font-semibold text-olive mb-1">
                  {element.label}
                </div>
                <div className="text-xs text-olive/70 font-light">{element.description}</div>
                {element.link && (
                  <Link
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sr-only"
                    aria-label={`View ${element.label} details`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
