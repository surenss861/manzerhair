"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const teamImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop",
];

const teamMembers = [
  {
    id: 1,
    name: "Alyssa",
    role: "Senior Stylist",
    experience: "8 years",
    specialties: ["Balayage", "Blonde Expert", "Precision Cuts"],
    quote: "I love bringing out the confidence people already have.",
    signatureQuote: "I believe great hair starts with listening.",
    microBio: "Specializes in lived-in color and effortless cuts. Known for her warm, approachable style and attention to detail.",
    image: "/team/alyssa.jpg",
  },
  {
    id: 2,
    name: "Sarah",
    role: "Master Colourist",
    experience: "12 years",
    specialties: ["Colour Correction", "Vivid Colours", "Highlights"],
    quote: "Every colour tells a story.",
    signatureQuote: "Color is my canvas, your hair is the art.",
    microBio: "Award-winning colorist with a passion for dimensional, natural-looking results. Expert in color correction and custom formulations.",
    image: "/team/sarah.jpg",
  },
  {
    id: 3,
    name: "Emma",
    role: "Cut Specialist",
    experience: "6 years",
    specialties: ["Precision Cuts", "Textured Styles", "Men's Cuts"],
    quote: "The right cut can transform your confidence.",
    signatureQuote: "Precision meets personality in every cut.",
    microBio: "Master of shape and movement. Creates cuts that grow out beautifully and work with your natural texture.",
    image: "/team/emma.jpg",
  },
  {
    id: 4,
    name: "Jessica",
    role: "Stylist",
    experience: "5 years",
    specialties: ["Treatments", "Styling", "Consultations"],
    quote: "Your hair journey is unique, and I'm here to guide it.",
    signatureQuote: "Your hair, your ritual, your transformation.",
    microBio: "Dedicated to personalized consultations and treatments. Helps clients discover their best hair through thoughtful, tailored approaches.",
    image: "/team/jessica.jpg",
  },
];

export function TeamSection() {
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
        {/* Section Header - Consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-espresso">
            Meet The Stylists
          </h2>
          <p className="text-olive/80 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-4">
            Our stylists are known across Toronto for effortless, lived-in, confidence-boosting hair.
          </p>
          {/* Micro-copy personality */}
          <p className="text-clay/70 text-base max-w-xl mx-auto font-light italic mb-10">
            You don't just book a stylist — you meet your person.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.25,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              whileTap={{ rotateX: 2 }}
              className="group relative"
            >
              {/* Magazine cover style card */}
              <div className="bg-cream-light/80 backdrop-blur-xs rounded-organic overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-clay/30 hover:border-gold-soft/40 h-full flex flex-col">
                {/* Portrait with grain, vignette, highlight */}
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={teamImages[index] || teamImages[0]}
                    alt={`${member.name}, ${member.role} at Manzer Hair Studio - ${member.specialties.join(", ")} specialist on Danforth Avenue, Toronto`}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  
                  {/* Soft grain overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: "150px 150px",
                    }}
                  />
                  
                  {/* Warm vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
                  
                  {/* Subtle highlight (top 10%) */}
                  <div className="absolute top-0 left-0 right-0 h-[10%] bg-gradient-to-b from-gold-soft/10 to-transparent" />
                  
                  {/* Heart icon on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute top-6 right-6 w-12 h-12 bg-cream-light/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft-lg"
                  >
                    <Heart className="w-5 h-5 text-gold-soft fill-gold-soft/20" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-heading text-3xl font-semibold text-espresso mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-olive text-sm font-light mb-4">{member.role} • {member.experience}</p>
                  </div>

                  {/* Signature Quote in Script */}
                  <p className="font-script text-lg text-gold-soft mb-4 leading-relaxed">
                    &quot;{member.signatureQuote}&quot;
                  </p>
                  
                  {/* Micro-bio (2 lines max) */}
                  <p className="text-espresso/70 text-sm leading-relaxed font-light mb-6 flex-1">
                    {member.microBio}
                  </p>

                  {/* Specialty tags - with dot separators */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {member.specialties.map((specialty, specIndex) => (
                      <span key={specialty} className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-clay/40 text-espresso text-xs rounded-full font-light border border-clay/50">
                          {specialty}
                        </span>
                        {specIndex < member.specialties.length - 1 && (
                          <span className="w-1 h-1 rounded-full bg-gold-soft/40" />
                        )}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/team#${member.name.toLowerCase()}`}
                    className="block w-full text-center px-6 py-3 bg-espresso text-cream-light rounded-organic font-medium hover:bg-espresso-light transition-all duration-300 shadow-soft focus:outline-none focus:ring-2 focus:ring-gold-soft/40 focus:ring-offset-2"
                    aria-label={`Book an appointment with ${member.name}, ${member.role}`}
                  >
                    Book with {member.name}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
