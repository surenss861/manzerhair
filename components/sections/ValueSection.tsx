"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from "framer-motion";
import { Leaf, Award, MapPin, Heart, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly Everything",
    description: "Green Circle certified, cruelty-free, PPD-free color, sustainable products.",
    microStory: "A greener way to colour.",
    badge: "Eco Certified",
    iconHaloSize: 1.15,
    topHighlight: 0.08,
    innerBorder: 0.5,
    grainOpacity: 0.01,
    ctaText: "Discover our eco approach",
    ctaHref: "/sustainability",
    accentType: "leaf-texture",
    easing: [0.16, 1, 0.3, 1], // easeOut
  },
  {
    icon: Award,
    title: "Award-Winning Stylists",
    description: "Specialists known for personalized transformations and color expertise.",
    microStory: "Crafted by specialists.",
    badge: "Award-Winning Team",
    iconHaloSize: 1.0,
    topHighlight: 0.12,
    innerBorder: 0.5,
    grainOpacity: 0.01,
    ctaText: "Meet our stylists",
    ctaHref: "/team",
    accentType: "gold-spark",
    easing: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
  },
  {
    icon: MapPin,
    title: "A Neighbourhood Staple",
    description: "Serving The Danforth for 15+ years.",
    microStory: "Loved on the Danforth.",
    badge: "Local Favourite",
    iconHaloSize: 1.0,
    topHighlight: 0.08,
    innerBorder: 1.0,
    grainOpacity: 0.01,
    ctaText: "See our history",
    ctaHref: "/about",
    accentType: "map-glow",
    easing: [0.215, 0.61, 0.355, 1], // easeOutCubic
  },
  {
    icon: Heart,
    title: "Made For You",
    description: "We believe great hair starts with listening.",
    microStory: "Your hair, your ritual.",
    badge: "Signature Service",
    iconHaloSize: 1.0,
    topHighlight: 0.08,
    innerBorder: 0.5,
    grainOpacity: 0.02,
    ctaText: "Our philosophy",
    ctaHref: "/philosophy",
    accentType: "heart-underline",
    easing: [0.23, 1, 0.32, 1], // easeOutQuint
  },
];

export function ValueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  
  // Scroll-triggered effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5],
    [0, 0.04, 0]
  );

  // Improvement #3: Horizontal scroll reveal line
  const revealProgress = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    [0, 1]
  );
  
  // Transform reveal progress to clipPath percentage (inverted: 100% -> 0%)
  const clipPathProgress = useTransform(revealProgress, (v) => 100 - v * 100);
  
  // Create clipPath template from motion value
  const clipPath = useMotionTemplate`inset(0 ${clipPathProgress}% 0 0)`;
  
  // Improvement B: Micro-scroll landmark system - sequence animations
  const scrollSequence = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25, 0.35],
    [0, 1, 2, 3]
  );
  
  // Improvement H: Left vignette responds to scroll
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [0.03, 0.05, 0.03]
  );
  
  // Improvement #10: Parallax gradient mask - warm gradient tied to scroll
  const parallaxGradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.06, 0.04, 0]
  );
  
  // Improvement #5: Card connection lines on scroll
  const connectionLine1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const connectionLine2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const connectionLine3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="py-[12vh] md:py-[16vh] bg-cream relative overflow-hidden -mt-[2%]"
    >
      {/* Subtle grain texture - global */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      
      {/* Improvement #4: Subtle hair-strand texture - diagonal linear noise layer */}
      <div
        className="absolute inset-0 opacity-[0.007] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hairStrandFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hairStrandFilter)' transform='rotate(15 200 200)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Improvement #3: Soft radial gold flecks - microscopic particles drifting upward */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            animate={{
              y: ["100%", "-20%"],
              opacity: [0, 0.008, 0.006, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear",
            }}
            style={{
              left: `${15 + i * 12}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: "radial-gradient(circle, rgba(196, 167, 125, 0.8) 0%, transparent 100%)",
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
      
      {/* Improvement #10: Parallax gradient mask - warm gradient tied to scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: parallaxGradientOpacity,
          background: "linear-gradient(135deg, rgba(196, 167, 125, 0.08) 0%, rgba(217, 201, 181, 0.04) 50%, transparent 100%)",
          filter: "blur(100px)",
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />
      
      {/* Micro left-edge shadow strip */}
      {/* Improvement H: Left vignette responds to scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(59, 46, 37, 0.08) 0%, rgba(59, 46, 37, 0.04) 8%, transparent 12%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          opacity: vignetteOpacity,
        }}
      />
      
      {/* Soft arch mask */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-6xl h-[50%]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(217, 201, 181, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Soft horizontal texture band behind headline */}
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2"
            style={{
              height: "350px",
              background: "linear-gradient(to right, rgba(217, 201, 181, 0.05) 0%, rgba(217, 201, 181, 0.03) 50%, rgba(217, 201, 181, 0.05) 100%)",
              filter: "blur(80px)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-[0.01]"
            style={{
              height: "350px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />
          
          {/* Improvement #3: Horizontal scroll reveal line - soft clay tint brush-stroke */}
          <motion.div
            ref={headlineRef}
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[200px] pointer-events-none overflow-hidden"
            style={{
              clipPath,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right, rgba(217, 201, 181, 0.08) 0%, rgba(217, 201, 181, 0.04) 50%, transparent 100%)",
                filter: "blur(40px)",
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-10"
          >
            {/* Improvement #8: Floating "section label" above headline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold-soft/70 text-xs uppercase tracking-[0.15em] mb-6 font-light"
            >
              SECTION I — Philosophy
            </motion.p>
            
            {/* Improvement G: Faint gold breathing halo behind heading */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              animate={{
                opacity: [0.005, 0.008, 0.005],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 7, // 6-8 second cycle (using 7)
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "750px", // 600-900px wide (using 750px)
                height: "750px",
                background: "radial-gradient(circle, rgba(196, 167, 125, 0.15) 0%, rgba(217, 201, 181, 0.08) 50%, transparent 100%)",
                filter: "blur(60px)",
              }}
            />
            
            {/* Headline - Increased weight and darker for more authority */}
            <h2 
              className="font-heading mb-4 relative z-10"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 550, // Increased from 500 to 550
                color: "#251C15", // Darker espresso: #2A2018 → #251C15
                letterSpacing: "-0.01em",
                textShadow: "0 1px 2px rgba(59, 46, 37, 0.08)",
              }}
            >
              Why Clients Love Us
              {/* Improvement B: Animate underline on scroll-in sequence */}
              <motion.div
                style={{
                  scaleX: useTransform(scrollYProgress, [0.05, 0.15], [0, 0.5]),
                  background: "linear-gradient(to right, transparent 0%, rgba(196, 167, 125, 0.75) 20%, rgba(196, 167, 125, 0.75) 80%, transparent 100%)",
                  boxShadow: "0 0 1px rgba(196, 167, 125, 0.015)",
                }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] origin-center"
              />
            </h2>
            
            {/* Section intro block */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg max-w-xl mx-auto font-light leading-relaxed mb-8"
              style={{
                lineHeight: "1.6",
                color: "rgba(217, 201, 181, 0.65)",
                letterSpacing: "0.02em",
              }}
            >
              A neighbourhood salon trusted for its warmth, its craft, and its care.
            </motion.p>
            
            {/* Improvement B: Divider under subtitle - scroll sequence */}
            <motion.div
              style={{
                scaleX: useTransform(scrollYProgress, [0.1, 0.2], [0, 1]),
              }}
              className="w-12 h-[1px] bg-gold-soft/20 mx-auto mb-8 origin-center"
            />
            
            {/* Improvement B: Story anchor - scroll sequence */}
            <motion.p
              style={{
                opacity: useTransform(scrollYProgress, [0.15, 0.25], [0, 1]),
                y: useTransform(scrollYProgress, [0.15, 0.25], [10, 0]),
                lineHeight: "1.6",
              }}
              className="font-heading text-base italic text-clay/65 max-w-sm mx-auto mb-12"
            >
              Rooted in craft. Driven by care.
            </motion.p>
            
            {/* Improvement B: Second divider - scroll sequence */}
            <motion.div
              style={{
                scaleX: useTransform(scrollYProgress, [0.2, 0.3], [0, 1]),
              }}
              className="w-16 h-[1px] bg-gold-soft/25 mx-auto mb-12 md:mb-16 origin-center"
            />
          </motion.div>
        </div>
        
        {/* Soft left-to-right gradient pass on scroll */}
        <motion.div
          style={{
            opacity: gradientOpacity,
            background: "linear-gradient(to right, transparent 0%, rgba(196, 167, 125, 0.04) 50%, transparent 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            pointerEvents: "none",
            zIndex: 5,
            transition: "opacity 0.4s ease",
          }}
        />
        
        {/* Cards Container - Improvement C: Micro-reactive diffusion on hover */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHoveringSection(true)}
          onMouseLeave={() => setIsHoveringSection(false)}
        >
          {/* Improvement A: Directional light - top-left → bottom-right with shadow choreography */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              x: ["-3px", "3px", "-3px"],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              background: "linear-gradient(135deg, rgba(217, 201, 181, 0.05) 0%, rgba(217, 201, 181, 0.02) 50%, transparent 100%)",
              filter: "blur(200px)",
            }}
          />
          
          {/* Improvement C: Micro-reactive diffusion - backdrop gradient diffuses on hover */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: isHoveringSection ? 1.015 : 1, // Diffuses outward by 1-2%
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: "95%",
              maxWidth: "6xl",
              height: "400px",
              background: "rgba(217, 201, 181, 0.021)",
              filter: "blur(70px)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />
          
          {/* Improvement D: Whispered ambient noise movement - paper texture drifts 1-2px vertically */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01]"
            animate={{
              y: ["0px", "1.5px", "0px"], // 1-2px drift (using 1.5px)
            }}
            transition={{
              duration: 18, // 16-20 seconds (using 18)
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "95%",
              maxWidth: "6xl",
              height: "400px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01]"
            style={{
              width: "95%",
              maxWidth: "6xl",
              height: "400px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />
          
          {/* Improvement #5: Card connection lines on scroll - gold lines connecting cards sequentially */}
          <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
            {/* Line 1 → 2 */}
            <motion.svg
              className="absolute top-1/2 left-[25%]"
              style={{
                opacity: connectionLine1,
              }}
              width="25%"
              height="1"
              viewBox="0 0 100 1"
            >
              <motion.line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="rgba(196, 167, 125, 0.3)"
                strokeWidth="0.2"
                style={{
                  pathLength: connectionLine1,
                }}
              />
            </motion.svg>
            {/* Line 2 → 3 */}
            <motion.svg
              className="absolute top-1/2 left-[50%]"
              style={{
                opacity: connectionLine2,
              }}
              width="25%"
              height="1"
              viewBox="0 0 100 1"
            >
              <motion.line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="rgba(196, 167, 125, 0.3)"
                strokeWidth="0.2"
                style={{
                  pathLength: connectionLine2,
                }}
              />
            </motion.svg>
            {/* Line 3 → 4 */}
            <motion.svg
              className="absolute top-1/2 left-[75%]"
              style={{
                opacity: connectionLine3,
              }}
              width="25%"
              height="1"
              viewBox="0 0 100 1"
            >
              <motion.line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="rgba(196, 167, 125, 0.3)"
                strokeWidth="0.2"
                style={{
                  pathLength: connectionLine3,
                }}
              />
            </motion.svg>
          </div>
          
          {/* Cards Grid - Improvement #6: Micro-timing per card with different easing curves */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12 relative z-10" style={{ rowGap: "2.5rem" }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              
              // Micro-parallax on scroll
              const cardScrollY = useTransform(
                scrollYProgress,
                [0, 1],
                [0, (index + 1) * 4]
              );
              
              // Improvement #9: Subtle horizontal drift for each card - slow left ↔ right (1-2px over 12 seconds)
              // Each card drifts independently with different patterns
              
              // Improvement #9: Light parallax for icons only
              const iconParallaxY = useTransform(
                scrollYProgress,
                [0, 1],
                [0, (index + 1) * 1]
              );
              
              // Improvement #2: Vertical staggering offsets
              const verticalOffset = index === 1 ? 8 : index === 2 ? -2 : 0;
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  style={{ 
                    y: cardScrollY,
                    marginTop: `${verticalOffset}px`,
                  }}
                  animate={{
                    x: [0, index === 0 ? 1.5 : index === 1 ? -1.2 : index === 2 ? 1.8 : -1.0, 0], // Improvement #9: Slow horizontal drift (1-2px over 12 seconds)
                  }}
                  transition={{
                    opacity: {
                      duration: 0.25,
                      delay: index * 0.12, // Improvement #6: 0ms, 120ms, 240ms, 360ms
                      ease: value.easing, // Improvement #6: Different easing curves per card
                    },
                    y: {
                      duration: 0.25,
                      delay: index * 0.12,
                      ease: value.easing,
                    },
                    x: {
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ 
                    y: -2, // Improvement #7: Card lifts 2px
                    transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] } // Improvement #7: 160ms synchronized
                  }}
                  className="group relative"
                >
                  {/* Improvement #2: Portrait shadows behind cards - super subtle vertical silhouettes */}
                  {index % 2 === 0 && (
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-40 pointer-events-none opacity-[0.015]"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(59, 46, 37, 0.3) 0%, transparent 70%)",
                        filter: "blur(20px)",
                        transform: "scaleY(1.2)",
                      }}
                    />
                  )}
                  
                  {/* Improvement #8: Contextual tag badges - floating badges above cards */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: index * 0.12 + 0.2 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
                  >
                    <span className="px-3 py-1 bg-cream-light/80 backdrop-blur-sm text-xs font-light text-gold-soft rounded-full border border-gold-soft/40 whitespace-nowrap">
                      {value.badge}
                    </span>
                  </motion.div>
                  {/* Card */}
                  <div
                    className="relative p-10 rounded-organic transition-all duration-300"
                    style={{
                      backgroundColor: "#F3EEE6",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      boxShadow: `
                        0 1px 3px rgba(0, 0, 0, 0.05), 
                        0 2px 8px rgba(0, 0, 0, 0.03)
                      `,
                    }}
                  >
                    {/* Improvement #7: Micro-texture depth under each card */}
                    <div
                      className="absolute -bottom-2 left-2 right-2 h-4 rounded-b-organic pointer-events-none opacity-[0.015]"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(59, 46, 37, 0.1) 0%, transparent 70%)",
                        filter: "blur(8px)",
                      }}
                    />
                    {/* Faint paper fiber texture */}
                    <div
                      className="absolute inset-0 rounded-organic pointer-events-none opacity-[0.008]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: "200px 200px",
                        mixBlendMode: "multiply",
                      }}
                    />
                    
                    {/* Improvement E: Each card's grain unique - different noise seeds */}
                    <div
                      className="absolute inset-0 rounded-organic pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter${index}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${1.2 + index * 0.1}' numOctaves='${3 + index % 2}' stitchTiles='stitch' seed='${index * 7}'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter${index})'/%3E%3C/svg%3E")`,
                        backgroundSize: `${150 + index * 10}px ${150 + index * 10}px`, // Unique size per card
                        opacity: value.grainOpacity,
                        mixBlendMode: "overlay",
                      }}
                    />
                    
                    {/* Top highlight */}
                    <div
                      className="absolute top-0 left-0 right-0 h-2 rounded-t-organic pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, ${value.topHighlight}) 0%, rgba(255, 255, 255, ${value.topHighlight * 0.5}) 50%, transparent 100%)`,
                      }}
                    />
                    
                    {/* Improvement #10: Dynamic lighting reaction - top highlight animates on hover */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-2 rounded-t-organic pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, ${value.topHighlight * 1.5}) 0%, transparent 100%)`,
                      }}
                    />
                    
                    {/* Inner border */}
                    <div
                      className="absolute inset-[0.5px] rounded-organic pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, rgba(250, 247, 242, 0.5) 0%, rgba(250, 247, 242, 0.2) 50%, transparent 100%)",
                        border: `${value.innerBorder}px solid rgba(250, 247, 242, 0.3)`,
                      }}
                    />
                    
                    {/* Icon with parallax */}
                    <motion.div 
                      className="w-12 h-12 mb-6 flex items-center justify-center relative"
                      style={{ y: iconParallaxY }}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.12 }}
                    >
                      {/* Improvement #7: Icon halo brightens on hover - synchronized */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ opacity: 0.05 }}
                        whileHover={{ 
                          opacity: 0.15, // Brightens more
                          transition: { duration: 0.16 } // 160ms synchronized
                        }}
                        style={{
                          background: "radial-gradient(circle, rgba(196, 167, 125, 1) 0%, rgba(196, 167, 125, 0.4) 100%)",
                          width: `${48 * value.iconHaloSize}px`,
                          height: `${48 * value.iconHaloSize}px`,
                          transform: "translate(-50%, -50%)",
                          top: "50%",
                          left: "50%",
                        }}
                      />
                      
                      {/* Improvement #4: Card-specific accent moments on hover */}
                      {value.accentType === "gold-spark" && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: "radial-gradient(circle, rgba(196, 167, 125, 0.3) 0%, transparent 70%)",
                            filter: "blur(4px)",
                          }}
                        />
                      )}
                      {value.accentType === "map-glow" && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: "radial-gradient(circle, rgba(196, 167, 125, 0.2) 0%, transparent 70%)",
                            filter: "blur(6px)",
                          }}
                        />
                      )}
                      
                      {/* Icon - ink stroke style */}
                      <motion.div
                        animate={{
                          strokeWidth: [1.3, 1.1, 1.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ color: "#B89A6F" }}
                        style={{ transition: "color 0.12s" }}
                      >
                        <Icon 
                          className="w-6 h-6 text-gold-soft relative z-10" 
                          strokeWidth="1.2"
                          style={{
                            filter: "contrast(1.05)",
                          }}
                        />
                      </motion.div>
                      
                      {/* Improvement #5: Tiny gold "spark" or micro-reflection to icons on hover - Very subtle, like light catching metal */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 0.07 }} // 6-8% opacity (using 0.07 = 7%)
                        transition={{ duration: 0.12, ease: "easeInOut" }} // 120ms duration
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(196, 167, 125, 0.8) 50%, transparent 100%)",
                          width: "200%",
                          filter: "blur(2px)", // Soft whisper effect
                        }}
                      />
                    </motion.div>
                    
                    {/* Improvement #4: Card-specific accent - leaf texture overlay */}
                    {value.accentType === "leaf-texture" && (
                      <motion.div
                        className="absolute inset-0 rounded-organic pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.02 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200,50 Q150,100 200,150 T200,250 T200,350' stroke='rgba(196,167,125,0.3)' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
                          backgroundSize: "300px 300px",
                          mixBlendMode: "overlay",
                        }}
                      />
                    )}
                    
                    {/* Title */}
                    <h3 
                      className="font-heading text-xl font-semibold mb-3 text-espresso leading-tight"
                      style={{
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-olive/80 text-sm leading-relaxed font-light"
                      style={{
                        lineHeight: "1.6",
                        maxWidth: "18rem",
                      }}
                    >
                      {value.description}
                    </p>
                    
                    {/* Improvement #1: Micro-stories on hover - 3-5 word phrases */}
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      whileHover={{ opacity: 0.6, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-heading text-xs italic text-clay/60 mt-3"
                      style={{
                        lineHeight: "1.5",
                      }}
                    >
                      {value.microStory}
                    </motion.p>
                    
                    {/* Improvement #7: Gold-line hover triggers - synchronized animations */}
                    <div className="mt-10 relative">
                      <motion.div
                        className="h-[1px] bg-gold-soft/40 origin-left"
                        initial={{ width: "3rem" }}
                        whileHover={{ 
                          width: "6rem",
                          transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] } // 160ms synchronized
                        }}
                      >
                        {/* Divider grows from left → center → right */}
                        <motion.div
                          className="absolute inset-0 bg-gold-soft/60"
                          initial={{ scaleX: 0, transformOrigin: "left" }}
                          whileHover={{ 
                            scaleX: 1,
                            transformOrigin: "center",
                            transition: { duration: 0.16 }
                          }}
                        />
                      </motion.div>
                      {/* Improvement #4: Heart underline expands on hover */}
                      {value.accentType === "heart-underline" && (
                        <motion.div
                          className="absolute -bottom-1 left-0 h-[2px] bg-gold-soft/60"
                          initial={{ width: "0px" }}
                          whileHover={{ width: "24px" }}
                          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                    </div>
                    
                    {/* Improvement #5: "Learn More" pill CTA under each card */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="mt-6"
                    >
                      <Link
                        href={value.ctaHref}
                        className="inline-flex items-center gap-1.5 text-clay/70 hover:text-gold-soft font-light text-xs transition-colors duration-150"
                      >
                        <span>{value.ctaText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                    
                    {/* Improvement #7: Inner shadow shifts on hover - synchronized */}
                    <motion.div
                      className="absolute inset-0 rounded-organic pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(196, 167, 125, 0.2)", // Shadow shifts with light direction
                        transition: { duration: 0.16 } // 160ms synchronized
                      }}
                      style={{
                        border: "1px solid rgba(196, 167, 125, 0.3)",
                      }}
                    />
                    
                    {/* Improvement #10: Dynamic lighting - card highlights shift 2-3% on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-organic pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%)",
                      }}
                    />
                    
                    {/* Improvement A: Shadow choreography - sync shadows with directional light (top-left → bottom-right) */}
                    <motion.div
                      className="absolute inset-0 rounded-organic pointer-events-none -z-10"
                      initial={{ 
                        opacity: 0,
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.03)",
                      }}
                      whileHover={{ 
                        opacity: 1,
                        // Shadow direction matches top-left → bottom-right light
                        boxShadow: "4px 4px 18px rgba(0, 0, 0, 0.08), 8px 8px 30px rgba(0, 0, 0, 0.04)", // Offset shadows to match light direction
                        filter: "blur(0.5px)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Micro CTA with caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-clay/80 hover:text-gold-soft font-light text-sm transition-colors duration-300"
          >
            <span className="relative">
              See Our Services
              <motion.span
                className="absolute bottom-0 left-0 h-[1px] bg-gold-soft origin-left"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-clay/50 text-xs font-light mt-2 italic">
            Explore transformations, pricing & more.
          </p>
          
          {/* Improvement F: Emotional microcopy at base */}
          <p className="font-heading text-sm italic text-clay/60 mt-6 max-w-md mx-auto">
            Good hair starts with trust.
          </p>
        </motion.div>
        
        {/* Expanded vertical rhythm */}
        <div className="mt-32 md:mt-40" />
        
        {/* Bookend divider at bottom */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-16 h-[1px] bg-gold-soft/25 mx-auto origin-center"
          style={{
            boxShadow: "0 0 8px rgba(196, 167, 125, 0.1)",
          }}
        />
      </div>
    </section>
  );
}
