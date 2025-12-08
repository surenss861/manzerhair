"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, GripVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1516975080664-ed2fc6a13737?w=800&q=80&auto=format&fit=crop",
    label: "Soft Balayage",
    microStory: "Her goal: softer framing & dimension. Result: effortless natural lift.",
    quote: "I feel like myself, but better.",
    client: "Sarah M.",
    stylist: "Alyssa", // Add stylist attribution
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1512496015851-a90fb38c796f?w=800&q=80&auto=format&fit=crop",
    label: "Dimensional Brunette",
    microStory: "From flat to depth. Rich, warm tones that move with every turn.",
    quote: "I feel like myself, but better.",
    client: "Jessica K.",
    stylist: "Sarah",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
    label: "Blonde Specialist",
    microStory: "Cool, creamy blonde that feels natural, not brassy. Lived-in perfection.",
    quote: "I feel like myself, but better.",
    client: "Emma L.",
    stylist: "Sarah",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1560869713-7d563336772e?w=800&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop",
    label: "Classic Bob",
    microStory: "Precision meets movement. A cut that grows out beautifully, not awkwardly.",
    quote: "I feel like myself, but better.",
    client: "Michelle R.",
    stylist: "Emma",
  },
];

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentTransformation = transformations[currentIndex];

  // Motion values for drag
  const x = useMotionValue(0);
  const dragX = useTransform(x, [-200, 200], [-100, 100]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const nextSlide = () => {
    setDragProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 300);
  };

  const prevSlide = () => {
    setDragProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    }, 300);
  };

  // Auto-reset drag on slide change
  useEffect(() => {
    if (!isDragging) {
      x.set(0);
      setDragProgress(0);
    }
  }, [currentIndex, isDragging, x]);

  // Handle drag end - snap to before/after
  const handleDragEnd = () => {
    setIsDragging(false);
    const threshold = 50;
    
    if (Math.abs(x.get()) > threshold) {
      // Snap to opposite side
      setDragProgress(x.get() > 0 ? 100 : 0);
    } else {
      // Return to current position
      x.set(0);
      setDragProgress(dragProgress);
    }
  };

  const toggleBeforeAfter = () => {
    setDragProgress(dragProgress === 0 ? 100 : 0);
    x.set(0);
  };

  return (
    <section className="py-[120px] md:py-[120px] bg-cream relative overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.008]"
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
        {/* Section Header - Editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            Signature Lookbook
          </h2>
          <p className="text-olive/80 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Real transformations. Real results. Real confidence.
          </p>
          {/* Micro-copy personality */}
          <p className="text-clay/70 text-base max-w-xl mx-auto font-light italic mb-10">
            Every transformation tells a story.
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

        {/* Draggable Before/After Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Large Editorial Tile with Draggable Slider */}
            <div 
              ref={containerRef}
              className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-organic-lg cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {/* Before Image */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 ${100 - dragProgress}% 0 0)`,
                      x: dragX,
                    }}
                  >
                    <Image
                      src={currentTransformation.before}
                      alt={`Before transformation: ${currentTransformation.label} at Manzer Hair Studio Danforth`}
                      fill
                      className="object-cover grayscale-[0.3]"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* After Image */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 0 0 ${dragProgress}%)`,
                      x: dragX,
                    }}
                  >
                    <Image
                      src={currentTransformation.after}
                      alt={`After transformation: ${currentTransformation.label} by Manzer Hair Studio stylists on Danforth Avenue, Toronto`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Drag Handle Indicator */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    style={{
                      left: `${dragProgress}%`,
                      opacity: isDragging ? 1 : 0.7,
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-cream-light/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft-lg border border-gold-soft/30">
                        <GripVertical className="w-6 h-6 text-gold-soft" />
                      </div>
                      <div className="w-1 h-16 bg-gold-soft/60 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Soft warm vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
                  
                  {/* Minimalist Label - Editorial style */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="absolute top-8 left-8 bg-cream-light/95 backdrop-blur-sm px-6 py-3 rounded-organic text-sm font-heading font-medium text-espresso shadow-soft border border-gold-soft/20"
                  >
                    {currentTransformation.label}
                  </motion.div>
                  
                  {/* Before/After indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-8 right-8 bg-cream-light/95 backdrop-blur-sm px-4 py-2 rounded-organic text-xs font-light text-espresso/70 shadow-soft border border-gold-soft/20"
                  >
                    {dragProgress > 50 ? "After" : "Before"}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              {/* Frame with soft shadow + 1px gold outline */}
              <div
                className="absolute inset-0 rounded-organic-lg pointer-events-none"
                style={{
                  boxShadow: "0 12px 40px rgba(59, 46, 37, 0.18), 0 6px 20px rgba(196, 167, 125, 0.12)",
                  border: "1px solid rgba(196, 167, 125, 0.25)",
                }}
              />

              {/* Draggable Area */}
              <motion.div
                className="absolute inset-0 z-10"
                drag="x"
                dragConstraints={{ left: -200, right: 200 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDrag={(_, info) => {
                  const progress = ((info.offset.x + 200) / 400) * 100;
                  setDragProgress(Math.max(0, Math.min(100, progress)));
                }}
                onDragEnd={handleDragEnd}
                style={{ x }}
              />
            </div>

            {/* Toggle Button - Refined */}
            <motion.button
              onClick={toggleBeforeAfter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-cream-light/95 backdrop-blur-sm px-8 py-4 rounded-organic text-sm font-medium text-espresso shadow-soft-lg border border-gold-soft/30 hover:border-gold-soft/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2 z-20"
              aria-label={dragProgress > 50 ? "View before" : "View after"}
            >
              {dragProgress > 50 ? "View Before" : "View After"}
            </motion.button>

            {/* Navigation - Refined */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-cream-light/95 backdrop-blur-sm hover:bg-cream-light p-4 rounded-organic shadow-soft-lg transition-all duration-300 hover:scale-110 z-10 border border-gold-soft/30 hover:border-gold-soft/50 focus:outline-none focus:ring-2 focus:ring-gold-soft/40"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-6 h-6 text-espresso" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-cream-light/95 backdrop-blur-sm hover:bg-cream-light p-4 rounded-organic shadow-soft-lg transition-all duration-300 hover:scale-110 z-10 border border-gold-soft/30 hover:border-gold-soft/50 focus:outline-none focus:ring-2 focus:ring-gold-soft/40"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-6 h-6 text-espresso" />
            </button>
          </div>

          {/* Micro-story caption - Editorial style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-10 max-w-2xl mx-auto"
          >
            <p className="font-heading text-lg text-espresso/90 mb-3 leading-relaxed">
              {currentTransformation.microStory}
            </p>
            <p className="font-heading text-xl text-espresso mb-2 italic mt-6">
              &quot;{currentTransformation.quote}&quot;
            </p>
            <p className="text-olive/70 text-sm font-light mb-2">— {currentTransformation.client}</p>
            {currentTransformation.stylist && (
              <p className="text-clay/60 text-xs font-light italic">
                Styled by {currentTransformation.stylist}
              </p>
            )}
          </motion.div>

          {/* Dots - Refined */}
          <div className="flex justify-center gap-3 mt-10">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDragProgress(0);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-soft/40 ${
                  index === currentIndex ? "bg-espresso w-10" : "bg-gold-soft/30 w-2 hover:bg-gold-soft/50"
                }`}
                aria-label={`Go to transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
