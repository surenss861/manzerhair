"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Users, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// Contextual CTAs based on scroll position
const contextualCTAs = [
  {
    section: "hero",
    text: "Book Now",
    icon: Calendar,
    href: "#book",
    color: "espresso",
  },
  {
    section: "services",
    text: "Explore Pricing",
    icon: Sparkles,
    href: "/services",
    color: "gold",
  },
  {
    section: "lookbook",
    text: "View Similar Transformations",
    icon: Sparkles,
    href: "#transformations",
    color: "gold",
  },
  {
    section: "team",
    text: "Book With Our Stylists",
    icon: Users,
    href: "/team",
    color: "espresso",
  },
  {
    section: "default",
    text: "Book Now",
    icon: Calendar,
    href: "#book",
    color: "espresso",
  },
];

export function StickyConversionCTA() {
  const [currentCTA, setCurrentCTA] = useState(contextualCTAs[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show after scrolling past hero
  const opacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine which section user is viewing
      if (scrollY < windowHeight * 0.5) {
        setCurrentCTA(contextualCTAs.find((cta) => cta.section === "hero") || contextualCTAs[0]);
      } else if (scrollY < windowHeight * 2.5) {
        setCurrentCTA(contextualCTAs.find((cta) => cta.section === "services") || contextualCTAs[1]);
      } else if (scrollY < windowHeight * 4) {
        setCurrentCTA(contextualCTAs.find((cta) => cta.section === "lookbook") || contextualCTAs[2]);
      } else if (scrollY < windowHeight * 5.5) {
        setCurrentCTA(contextualCTAs.find((cta) => cta.section === "team") || contextualCTAs[3]);
      } else {
        setCurrentCTA(contextualCTAs.find((cta) => cta.section === "default") || contextualCTAs[0]);
      }

      // Show after hero
      setIsVisible(scrollY > windowHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Icon = currentCTA.icon;
  const isGold = currentCTA.color === "gold";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{ opacity }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <Link
            href={currentCTA.href}
            className={`group relative flex items-center gap-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden ${
              isGold
                ? "bg-gold-soft text-espresso hover:bg-gold-light shadow-soft-lg"
                : "bg-espresso text-gold-soft hover:bg-espresso-light shadow-soft-lg"
            } ${isExpanded ? "px-6 py-4" : "w-14 h-14 p-0 justify-center"}`}
          >
            {/* Icon - Always visible */}
            <Icon className={`w-5 h-5 flex-shrink-0 ${isExpanded ? "" : ""}`} />

            {/* Text - Expands on hover */}
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap flex items-center gap-2"
                >
                  {currentCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute inset-0 rounded-full ${
                isGold ? "bg-gold-light/20" : "bg-gold-soft/10"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

