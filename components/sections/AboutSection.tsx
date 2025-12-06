"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-40 md:py-56 bg-cream-light relative overflow-hidden">
      {/* Organic section divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-cream-light" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Image - Editorial style with warm lighting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[650px] lg:h-[750px] rounded-organic overflow-hidden shadow-soft-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&auto=format&fit=crop"
              alt="Manzer Hair Studio - Eco-friendly sustainable salon in Toronto's Danforth neighborhood"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/10 to-transparent" />
          </motion.div>

          {/* Content - People-focused storytelling with SEO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 lg:pl-12"
          >
            <div>
              <p className="font-script text-2xl md:text-3xl text-gold-soft mb-4">Our Story</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-espresso leading-[1.1] tracking-tight mb-8">
                Eco-Friendly Hair Care in Toronto
              </h2>
            </div>
            <div className="space-y-8 pt-2">
              <p className="text-lg md:text-xl text-olive leading-relaxed font-light">
                At Manzer Hair Studio, we believe that great hair is an art form. Our team of
                award-winning stylists brings 15+ years of expertise and passion to every cut, colour,
                and style. Located in the heart of Toronto&apos;s Danforth neighborhood, we&apos;ve built a
                reputation for personalized service, sustainable practices, and results that exceed
                expectations.
              </p>
              <p className="text-lg md:text-xl text-olive leading-relaxed font-light">
                We&apos;re more than a salon—we&apos;re your neighborhood beauty destination. Green Circle
                certified, PPD-free color, cruelty-free products, and scalp massages are just the beginning.
                Every visit is a conversation, every style a collaboration.
              </p>
              <div className="pt-4">
                <ul className="space-y-3">
                  {[
                    "Green Circle Certified",
                    "PPD-free color formulas",
                    "Cruelty-free products",
                    "Complimentary scalp massages",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-olive font-light"
                    >
                      <span className="w-1.5 h-1.5 bg-gold-soft rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
