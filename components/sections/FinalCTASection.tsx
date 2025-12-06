"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";

export function FinalCTASection() {
  return (
    <section className="py-[120px] md:py-[120px] bg-cream-light relative overflow-hidden">
      {/* Brand Film - Looped, Muted (5-8 second loop) */}
      {/* 
        TO ADD BRAND FILM:
        1. Place video file in /public/brand-film.mp4 (or .webm for better compression)
        2. Replace the div below with:
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/brand-film.mp4" type="video/mp4" />
          <source src="/brand-film.webm" type="video/webm" />
        </video>
        
        Video should be: 5-8 seconds, muted, soft grain, warm light, showing:
        - Hands styling hair
        - Light hitting scissors
        - Warm salon interior
        - Smiling eye contact
        - Slow pan over tools
      */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Placeholder gradient - Replace with video above */}
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/20 via-transparent to-cream-light/40" />
          
          {/* Soft grain overlay for film texture */}
          <div
            className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />
        </div>
      </div>
      
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.008] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      
      {/* Soft arch mask - Section bounding box */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-6xl h-[50%] z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      {/* Warm glow gradient */}
      <div
        className="absolute inset-0 opacity-[0.04] z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(196, 167, 125, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large serif headline - Cinematic */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 text-espresso">
            Your Best Hair Begins Here
          </h2>
          
          {/* Gold underline animation (1 time only) - Brand signature motion */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-[1px] bg-gold-soft/70 mx-auto mb-8 origin-center"
          />
          
          {/* Script line - Cinematic */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-2xl md:text-3xl text-gold-soft mb-10 leading-relaxed"
          >
            Let&apos;s create something beautiful together.
          </motion.p>
          
          <p className="text-olive/80 text-lg max-w-xl mx-auto mb-4 font-light leading-relaxed">
            Meet the stylists behind 1,000+ transformations.
          </p>
          
          {/* Buttons from hero (visual consistency) */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="#book"
                className="group relative px-12 py-5 bg-espresso text-gold-soft rounded-full font-medium text-lg overflow-hidden block"
                style={{
                  boxShadow: "0 4px 20px rgba(59, 46, 37, 0.25), 0 2px 8px rgba(196, 167, 125, 0.15)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Now
                </span>
                <motion.div
                  className="absolute inset-0 bg-espresso-light rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/team"
                className="group relative px-12 py-5 border border-olive/40 text-espresso rounded-full font-medium text-lg backdrop-blur-sm bg-cream-light/30 hover:bg-clay-light/20 transition-all duration-300 overflow-hidden block"
                style={{
                  borderWidth: "1px",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 2px 12px rgba(91, 88, 73, 0.1)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Meet the Team
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
