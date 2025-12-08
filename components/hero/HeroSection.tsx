"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Heart } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Restrained motion - Micro parallax ONLY on background (2-3px)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.03]);
  // Slight lift on scroll - Barely visible, subconscious depth (1-2px combined with textY)
  const textY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-9.5%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Tiny vertical parallax to headline - SUPER subtle (y: 0 → -6px)
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, -6]);
  
  // Glass panel fade on scroll - Micro fade-in after scroll (20-40px)
  const glassOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 0.8, 0]);
  
  // Background contrast increase on scroll
  const backgroundContrast = useTransform(scrollYProgress, [0, 0.1], [1.1, 1.17]);

  // Split headline into words for letter animation
  const headlineWords = ["Your", "Style,"];
  const refinedWord = "Refined.";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh + 40px)" }}
    >
      {/* Page Load Sequence - Awwwards-Level */}
      {/* 1. Fade in warm gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.12) 0%, transparent 70%)",
        }}
      />
      
      {/* 2. Reveal Curtain - Cream mask sliding away */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-0 bg-cream z-50 pointer-events-none"
      />

      {/* Background Layer - Photo with soft zoom + micro parallax */}
      <motion.div
        style={{ 
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <motion.div
            style={{
              filter: `brightness(0.85) contrast(${backgroundContrast}) saturate(1.05)`,
            }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80&auto=format&fit=crop"
              alt="Manzer Hair Studio interior - warm, inviting boutique salon on Danforth Avenue, Toronto"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Soft radial gradient on top half */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 60% at 50% 30%, rgba(59, 46, 37, 0.4) 0%, rgba(59, 46, 37, 0.2) 40%, transparent 70%)",
          }}
        />

        {/* Increased vignette density - Center-left region behind headline (5-8% more contrast) */}
        <div 
          className="absolute top-[15%] left-[20%]"
          style={{
            width: "50%",
            height: "50%",
            background: "radial-gradient(ellipse at center, rgba(59, 46, 37, 0.35) 0%, rgba(59, 46, 37, 0.2) 40%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Tint gradient from left to right - Subtle clay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(217, 201, 181, 0.15) 0%, rgba(217, 201, 181, 0.08) 30%, transparent 60%)",
          }}
        />

        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-[#D9C9B5]/12" />

        {/* Subtle static grain - Luxury texture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.012 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>

      {/* Mid Layer - Blur bubble moved down 40px (behind headline, not model's head) */}
      <motion.div
        style={{ 
          opacity: glassOpacity,
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {/* Very faint warm gradient behind headline only - Clay at 4% opacity, 600-800px */}
        <div 
          className="absolute top-[18%] left-1/2 -translate-x-1/2"
          style={{
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle at center, rgba(217, 201, 181, 0.04) 0%, rgba(217, 201, 181, 0.02) 50%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Subtle pill-shaped panel - Moved down another 20-30px (from top-[26%] to top-[29%]), height reduced 10%, softened */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[29%] left-1/2 -translate-x-1/2"
          style={{
            width: "75%",
            maxWidth: "700px",
            height: "252px",
            background: "linear-gradient(135deg, rgba(217, 201, 181, 0.03) 0%, rgba(217, 201, 181, 0.015) 100%)",
            borderRadius: "50%",
            filter: "blur(3px)",
            backdropFilter: "blur(3px)",
            border: "1px solid rgba(217, 201, 181, 0.06)",
            boxShadow: "0 2px 15px rgba(59, 46, 37, 0.03)",
          }}
        >
          {/* Very faint grain to glass panel - 1-2% noise, luxury editorial texture */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
              opacity: 0.015,
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>

        {/* Subtle static arch - Moved down to match bubble */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[27%] left-1/2 -translate-x-1/2"
          style={{
            width: "85%",
            maxWidth: "900px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.05) 0%, rgba(217, 201, 181, 0.02) 50%, transparent 80%)",
            borderRadius: "50%",
            filter: "blur(52px)",
          }}
        />
      </motion.div>

      {/* Foreground Layer - ONE subtle bokeh only (behind stylist's hair) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Single subtle bokeh behind stylist's hair - Very faint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.04,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gold-soft/15"
          style={{
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* Content - Added breathing room above nav (+20px), lifted headline by 40-60px (Vogue cover spacing), slight lift on scroll */}
      <motion.div
        style={{ 
          y: textY,
          opacity: textOpacity,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
      >
        <div className="max-w-5xl mx-auto pt-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Headline with word-by-word animation - 4-6% darker, reduced shadow from 0.03→0.02, tiny vertical parallax */}
            {/* Page Load: Typography slides in by 6px */}
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.98, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ 
                y: headlineY,
                textShadow: "0 1.5px 25px rgba(59, 46, 37, 0.02), 0 0.8px 12px rgba(59, 46, 37, 0.015), 0 0 1px rgba(59, 46, 37, 0.5)",
                WebkitTextStroke: "0.3px rgba(59, 46, 37, 0.1)",
                color: "#2d221a",
              }}
              className="font-heading text-7xl md:text-8xl lg:text-[104px] font-semibold mb-4 leading-[1.05] tracking-[-0.02em] relative z-10"
            >
              {/* First line: "Your Style," - Staggered scale + rise */}
              <motion.div className="flex flex-wrap justify-center items-baseline gap-x-3 mb-2">
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Second line: "Refined." - 90-92% opacity, soft shadow */}
              <motion.div className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-espresso-dark relative font-bold"
                  style={{
                    opacity: 0.92,
                    textShadow: "0 1px 1px rgba(0, 0, 0, 0.05), 0 1.5px 18px rgba(59, 46, 37, 0.12), 0 0.8px 8px rgba(59, 46, 37, 0.08)",
                  }}
                >
                  {refinedWord}
                </motion.span>
                
                {/* Golden underline - Thinner: 1px, 40-60% width, soft fade edges (Aritzia energy) */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                  style={{
                    width: "50%",
                    height: "1px",
                    background: "linear-gradient(to right, transparent 0%, #C4A77D 20%, #C4A77D 80%, transparent 100%)",
                    opacity: 0.6,
                  }}
                />
              </motion.div>
            </motion.h1>

            {/* Script Subheading - Added 0.3s delay on reveal (from 0.9 to 1.2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 relative z-10"
            >
              <motion.p
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-script text-2xl md:text-3xl lg:text-[34px] font-medium leading-[1.2]"
                style={{
                  color: "#4a3a2f",
                }}
              >
                Eco-Friendly Hair Care in Toronto&apos;s Danforth
              </motion.p>
              {/* Thin gold divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-[60px] h-[1px] bg-gold-soft/50 mx-auto mt-4 origin-center"
              />
            </motion.div>

            {/* Description paragraph - Reduced max width by another 20px (even more boutique editorial) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-olive/90 mb-8 mx-auto leading-relaxed font-light tracking-wide relative z-10"
              style={{
                letterSpacing: "0.01em",
                maxWidth: "32rem",
              }}
            >
              Green Circle certified, PPD-free color, cruelty-free products. Crafted by award-winning
              stylists who truly see you.
            </motion.p>

            {/* CTA Buttons - Moved down 20-25px (from mb-10 to mb-12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 relative z-10"
            >
              {/* Primary CTA - Rich brown with dropdown shadow, gold arrow accent */}
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="#book"
                  onClick={() => trackCTA("Book My Transformation", "hero")}
                  className="group relative px-14 py-6 bg-espresso text-gold-soft rounded-full font-medium text-lg overflow-hidden block focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2 focus:ring-offset-cream transition-all"
                  style={{
                    boxShadow: "0 4px 20px rgba(59, 46, 37, 0.25), 0 2px 8px rgba(196, 167, 125, 0.15), 0 0 0 1px rgba(196, 167, 125, 0.1) inset",
                    border: "1px solid rgba(196, 167, 125, 0.15)",
                  }}
                  aria-label="Book your hair transformation appointment"
                >
                  {/* 1px hairline gold border INSIDE - Ultra luxurious */}
                  <div
                    className="absolute inset-[1px] rounded-full pointer-events-none"
                    style={{
                      border: "1px solid rgba(196, 167, 125, 0.2)",
                    }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Book My Transformation
                    <motion.div
                      whileHover={{ x: 6, rotate: -15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="text-gold-soft"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                  {/* Hover background lighten + 1px gold inner stroke */}
                  <motion.div
                    className="absolute inset-0 bg-espresso-light rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gold-soft/30"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Secondary CTA - Glass with refined border, 0.5° tilt on hover */}
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  rotate: 0.5,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="/team"
                  onClick={() => trackCTA("Meet Your Stylist", "hero")}
                  className="group relative px-14 py-6 border text-espresso rounded-full font-medium text-lg backdrop-blur-sm bg-cream-light/30 hover:bg-clay-light/20 transition-all duration-300 overflow-hidden block focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2 focus:ring-offset-cream"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 2px 12px rgba(91, 88, 73, 0.1)",
                  }}
                  aria-label="Meet the stylists at Manzer Hair Studio"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Meet Your Stylist
                  </motion.span>
                  {/* Warm background on hover - Clarity increase */}
                  <motion.div
                    className="absolute inset-0 bg-clay-light/30 rounded-full backdrop-blur-md"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Micro-social proof above tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs text-olive/70 font-light mb-4 relative z-10 uppercase tracking-widest"
              style={{
                letterSpacing: "0.12em",
              }}
            >
              Over 1,000 Transformations • Loved in the Danforth
            </motion.p>

            {/* Micro-tagline badge - With gold dot separator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-flex items-center gap-3 px-6 py-3 bg-cream-light/40 backdrop-blur-sm rounded-full border border-gold-soft/20"
            >
              <Heart className="w-4 h-4 text-gold-soft" fill="currentColor" />
              <p 
                className="text-sm text-olive/80 font-light tracking-wide"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                Danforth Favourite
              </p>
              {/* Gold dot separator */}
              <span className="w-1 h-1 rounded-full bg-gold-soft/60" />
              <p 
                className="text-sm text-olive/80 font-light tracking-wide"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                15 Years
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-light/50 pointer-events-none z-15" />
      
      {/* Soft cream fade at bottom (newspaper page transition) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream pointer-events-none z-15" />
      
      {/* Tiny scroll cue (down arrow, opacity 20%) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.2, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-espresso"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
