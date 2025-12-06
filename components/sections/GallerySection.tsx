"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop", alt: "Warm salon interior with natural lighting" },
  { id: 2, src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop", alt: "Expert hair styling in progress" },
  { id: 3, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a13737?w=800&q=80&auto=format&fit=crop", alt: "Beautiful hair colour work" },
  { id: 4, src: "https://images.unsplash.com/photo-1512496015851-a90fb38c796f?w=800&q=80&auto=format&fit=crop", alt: "Stunning client transformation" },
  { id: 5, src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80&auto=format&fit=crop", alt: "Stylist working with precision" },
  { id: 6, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop", alt: "Elegant finished hairstyle" },
  { id: 7, src: "https://images.unsplash.com/photo-1560869713-7d563336772e?w=800&q=80&auto=format&fit=crop", alt: "Inviting salon space" },
  { id: 8, src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&auto=format&fit=crop", alt: "Hair detail and texture" },
];

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-40 md:py-56 bg-cream relative overflow-hidden">
      {/* Organic divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-light to-cream" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <p className="font-script text-2xl md:text-3xl text-gold-soft mb-4">Behind the Scenes</p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-espresso mb-6 leading-tight tracking-tight">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-olive max-w-2xl mx-auto font-light">
            A glimpse into the artistry and atmosphere at Manzer Hair Studio in Toronto&apos;s Danforth neighborhood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-organic cursor-pointer group shadow-soft hover:shadow-soft-lg transition-all duration-500"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredId === image.id ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

