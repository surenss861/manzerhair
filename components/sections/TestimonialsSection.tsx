"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Manzer transformed not just my hair, but my confidence.",
    author: "Sarah M.",
    badge: "Local Guide",
    rating: 5,
    hasHeadshot: true,
    headshot: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "I've been coming here for three years. The stylists are artists.",
    author: "Jessica K.",
    badge: "Google Reviews",
    rating: 5,
    hasHeadshot: true,
    headshot: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "The colour correction work was incredible. Worth every penny.",
    author: "Emma L.",
    badge: "Local Guide",
    rating: 5,
    hasHeadshot: false,
  },
  {
    id: 4,
    quote: "Best haircut I've ever had. They really listened to what I wanted.",
    author: "Michelle R.",
    badge: "Google Reviews",
    rating: 5,
    hasHeadshot: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-[120px] md:py-[120px] bg-clay/10 relative overflow-hidden">
      {/* Subtle grain texture - 1% grain */}
      <div
        className="absolute inset-0 opacity-[0.01]"
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header - Serif headline, consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            What Our Clients Say
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

        {/* Simple Clay Cards - 16-24px padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.25,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-clay/20 backdrop-blur-sm p-6 rounded-organic shadow-soft border border-gold-soft/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-soft text-gold-soft" />
                ))}
              </div>
              
              {/* Quote - 1-2 sentences only */}
              <p className="text-espresso text-base leading-relaxed font-light mb-6 max-w-xl">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* 1px gold divider */}
              <div className="w-12 h-[1px] bg-gold-soft/40 mb-4" />
              
              {/* Reviewer name + badge + headshot */}
              <div className="flex items-center gap-3">
                {testimonial.hasHeadshot && testimonial.headshot && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.headshot}
                      alt={`${testimonial.author}, client at Manzer Hair Studio`}
                      fill
                      className="object-cover"
                      sizes="40px"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-espresso font-medium text-sm">{testimonial.author}</span>
                    <span className="px-2 py-0.5 bg-clay/30 text-olive/80 text-xs rounded-full font-light">
                      {testimonial.badge}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
