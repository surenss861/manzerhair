"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    id: 1,
    name: "AG Hair",
    description: "Professional hair care products for styling, treatment, and maintenance.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80&auto=format&fit=crop",
    link: "/products/ag-hair",
  },
  {
    id: 2,
    name: "Kevin Murphy",
    description: "Premium Australian hair care with natural ingredients and sustainable practices.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&auto=format&fit=crop",
    link: "/products/kevin-murphy",
  },
  {
    id: 3,
    name: "Tools",
    description: "Professional styling tools and accessories for salon-quality results at home.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop",
    link: "/products/tools",
  },
];

export function ProductsSection() {
  return (
    <section className="py-40 md:py-56 bg-cream-light relative overflow-hidden">
      {/* Organic divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-cream-light" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <p className="font-script text-2xl md:text-3xl text-gold-soft mb-4">Take It Home</p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-espresso mb-6 leading-tight tracking-tight">
            Premium Products
          </h2>
          <p className="text-lg md:text-xl text-olive max-w-2xl mx-auto font-light">
            Take the salon experience home with our curated selection of professional, cruelty-free hair care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={category.link} className="block">
                <div className="bg-cream-light/80 backdrop-blur-xs rounded-organic overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-clay/30 hover:border-gold-soft/40">
                  {/* Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} cruelty-free products at Manzer Hair Studio`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/5 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-espresso mb-3 leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-olive mb-6 leading-relaxed font-light">{category.description}</p>
                    <div className="flex items-center gap-2 text-espresso font-medium group-hover:gap-3 transition-all duration-300 text-sm">
                      Shop {category.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

