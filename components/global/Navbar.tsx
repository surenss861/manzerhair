"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/salon", label: "Salon" },
    { href: "/team", label: "Team" },
    { href: "/products", label: "Products" },
  ];

  return (
    <>
      <nav
          className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/manzer-logo.avif"
                alt="Manzer Hair Studio"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-olive hover:text-espresso transition-colors duration-300 font-light text-sm tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#book"
                className="px-8 py-2.5 bg-espresso text-cream-light rounded-organic font-medium hover:bg-espresso-light transition-colors duration-300 shadow-soft"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brown-dark"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-cream pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading text-espresso hover:text-olive transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-espresso text-cream-light rounded-organic-lg font-medium text-center mt-4 shadow-soft"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

