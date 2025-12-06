"use client";

import Link from "next/link";
import { Calendar, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PersistentBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="#book"
            className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-olive via-olive-light to-gold-soft text-cream-light rounded-organic-lg font-medium shadow-glow hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-soft to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Calendar className="w-5 h-5" />
            </motion.div>
            <span className="relative z-10 font-heading text-sm">Book Now</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Heart className="w-4 h-4 opacity-70" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
