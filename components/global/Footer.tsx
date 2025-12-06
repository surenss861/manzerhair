import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Instagram, Facebook, Star, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream-light relative overflow-hidden">
      {/* Soft grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      
      {/* Organic top divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream to-espresso" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/manzer-logo.avif"
              alt="Manzer Hair Studio - Danforth hair salon Toronto"
              width={140}
              height={50}
              className="h-10 w-auto object-contain mb-8 brightness-0 invert"
            />
            <p className="text-clay text-sm leading-relaxed font-light max-w-xs">
              A refined, sustainable, community-driven hair studio in Toronto&apos;s Danforth neighborhood.
            </p>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-heading text-2xl font-semibold mb-6 text-cream-light">Visit Us on the Danforth</h4>
            <div className="space-y-5 text-sm font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold-soft mt-0.5 flex-shrink-0" />
                <div className="text-clay-light">
                  <p className="text-cream-light font-medium mb-1">1993 Danforth Ave</p>
                  <p>Toronto, ON M4C 1J6</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold-soft mt-0.5 flex-shrink-0" />
                <div className="text-clay-light">
                  <p className="text-cream-light font-medium mb-1">Hours</p>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews Preview */}
          <div>
            <h4 className="font-heading text-2xl font-semibold mb-6 text-cream-light">Local Guide</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-soft fill-gold-soft" />
                  ))}
                </div>
                <span className="text-clay-light text-sm font-light">4.9 / 5</span>
              </div>
              <p className="text-clay text-sm leading-relaxed font-light mb-4">
                &quot;The best salon on the Danforth. Professional, warm, and my hair has never looked better.&quot;
              </p>
              <a
                href="https://g.page/r/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-soft hover:text-gold-light text-sm font-light transition-colors duration-300 inline-flex items-center gap-1"
              >
                Read more reviews
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-heading text-2xl font-semibold mb-6 text-cream-light">Stay Connected</h4>
            {/* Newsletter Signup */}
            <form className="mb-6">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-cream-light/10 border border-gold-soft/30 rounded-organic text-cream-light placeholder-clay/50 text-sm font-light focus:outline-none focus:border-gold-soft/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold-soft/20 hover:bg-gold-soft/30 border border-gold-soft/40 text-cream-light rounded-organic text-sm font-light transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </form>
            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://instagram.com/manzerhair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-soft/30 hover:border-gold-soft/60 flex items-center justify-center transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gold-soft group-hover:text-gold-light transition-colors" strokeWidth="1.5" />
              </a>
              <a
                href="https://facebook.com/manzerhair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-soft/30 hover:border-gold-soft/60 flex items-center justify-center transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gold-soft group-hover:text-gold-light transition-colors" strokeWidth="1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Thin gold divider */}
        <div className="border-t border-gold-soft/20 pt-10 pb-10">
          <p className="text-clay text-sm font-light text-center mb-4">
            &copy; {new Date().getFullYear()} Manzer Hair Studio. All rights reserved.
          </p>
          {/* Soft ending - Tiny one-liner */}
          <p className="text-clay/70 text-xs font-light text-center italic">
            Proudly serving the Danforth community for 15+ years.
          </p>
        </div>
      </div>
      
      {/* Extra bottom padding + soft grain fade */}
      <div className="h-[80px] md:h-[120px] bg-gradient-to-b from-espresso via-espresso to-transparent opacity-50" />
    </footer>
  );
}
