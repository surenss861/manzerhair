"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export function BookingSection() {
  return (
    <section id="book" className="py-40 md:py-56 bg-gradient-to-b from-cream-light via-cream to-clay-light/30 relative overflow-hidden">
      {/* Organic divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-cream-light" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gold-soft/20 rounded-full mb-6"
          >
            <Sparkles className="w-8 h-8 text-gold-soft" />
          </motion.div>
          
          <p className="font-script text-2xl md:text-3xl text-gold-soft mb-4">Let's Begin</p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-espresso mb-8 leading-tight tracking-tight">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg md:text-xl text-olive mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Book your consultation today and discover the difference expert styling makes. 
            Experience eco-friendly hair care in Toronto&apos;s Danforth neighborhood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="#book"
                className="group relative px-12 py-6 bg-espresso text-cream-light rounded-organic-lg font-medium hover:bg-espresso-light transition-colors duration-300 text-center block shadow-soft-lg overflow-hidden"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-3"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-espresso-light via-espresso to-espresso-light"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/team"
                className="px-12 py-6 border-2 border-espresso/30 text-espresso rounded-organic-lg font-medium hover:bg-espresso/5 hover:border-espresso transition-all duration-300 text-center block shadow-soft relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Our Team
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-espresso/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-olive">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-soft rounded-full" />
              <span className="font-light">Green Circle Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-soft rounded-full" />
              <span className="font-light">PPD-Free Color</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-soft rounded-full" />
              <span className="font-light">15+ Years on Danforth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
