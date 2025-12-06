"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SalonTourSection() {
  return (
    <section className="py-[120px] md:py-[120px] bg-cream relative overflow-hidden">
      {/* Soft arch mask behind entire grid - Section bounding box */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-[60%]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        {/* Section Header - Consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            Our Salon
          </h2>
          {/* Brand signature motion - Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1px] bg-gold-soft/60 mx-auto mt-10 origin-center"
          />
        </motion.div>

        {/* Vogue-level Photo Collage - 1 large vertical hero + lifestyle detail shots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Large Vertical Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 relative aspect-[3/4] overflow-hidden rounded-organic-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop"
              alt="Manzer Hair Studio interior - Danforth hair salon Toronto with warm natural lighting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Warm vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
          </motion.div>

          {/* Lifestyle Detail Shots: Tools, chairs, hands, color bowls */}
          <div className="md:col-span-2 flex flex-col gap-6 lg:gap-8">
            {/* Detail shot 1: Tools / Color bowls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-organic-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&auto=format&fit=crop"
                alt="Salon detail - Professional hair color tools and bowls at Manzer Hair Studio Danforth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              {/* Warm vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
            </motion.div>
            {/* Detail shot 2: Hands / Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-organic-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&auto=format&fit=crop"
                alt="Salon detail - Stylist hands working with hair at Manzer Hair Studio Danforth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              {/* Warm vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Warm Paragraph - Enhanced copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-olive/80 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-4">
            A warm, welcoming space designed to feel like home — calm light, soft textures, and thoughtful details everywhere.
          </p>
          {/* Micro-copy personality */}
          <p className="text-clay/70 text-base max-w-xl mx-auto font-light italic">
            Where craft meets comfort on the Danforth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
