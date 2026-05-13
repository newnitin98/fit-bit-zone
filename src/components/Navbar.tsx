"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1a1a1a] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#F5C518] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(245,197,24,0.5)] transition-all duration-300">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <div className="leading-none">
              <span className="block text-white font-black text-sm tracking-wider uppercase">
                Fit Bit Zone
              </span>
              <span className="block text-[#F5C518] text-[10px] tracking-[0.2em] uppercase font-semibold">
                Gym · Jabalpur
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-[#F5C518] transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918269491116"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#F5C518] text-black text-sm font-bold rounded-lg hover:bg-[#D4A017] transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,197,24,0.4)] uppercase tracking-wide"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0D0D] border-t border-[#1a1a1a] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 text-zinc-300 hover:text-[#F5C518] hover:bg-white/5 rounded-lg transition-all font-medium tracking-wide text-sm uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/918269491116"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 py-3 px-4 bg-[#F5C518] text-black text-sm font-bold rounded-lg text-center hover:bg-[#D4A017] transition-colors uppercase tracking-wide"
              >
                Join Now →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
