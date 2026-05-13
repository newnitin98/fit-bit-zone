"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, MessageCircle, ArrowRight, ChevronDown, Users, Trophy, Wifi } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const heroImages = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80", alt: "Strength Zone", label: "Strength Zone" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2a51b8f23?auto=format&fit=crop&w=600&q=80", alt: "Iron Area", label: "Iron Area" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80", alt: "Training Floor", label: "Training Floor" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80", alt: "Power Rack", label: "Power Rack" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80", alt: "Cardio Zone", label: "Cardio Zone" },
  { src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=600&q=80", alt: "Results", label: "Results" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pattern-bg opacity-60" />

      {/* Stronger yellow/gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#F5C518]/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F57C00]/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#E53935]/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative vertical accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F5C518]/40 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F5C518]/15 to-transparent" />

      {/* Right-side gym imagery block */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/10 via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />

        {/* Real gym image grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-1 p-1">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                sizes="20vw"
              />
              {/* Colour tint on each panel */}
              <div className="absolute inset-0 bg-[#F5C518]/5 mix-blend-overlay" />
              <span className="absolute bottom-1.5 left-2 text-[8px] text-white/60 uppercase tracking-widest z-10 font-semibold">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative bars */}
        <div className="absolute bottom-16 right-8 flex gap-2 z-20">
          {[60, 80, 50, 70, 90, 55].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              style={{ height: h }}
              className="w-3 bg-gradient-to-t from-[#F5C518]/90 to-[#F5C518]/20 rounded-t-sm origin-bottom"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Location pill */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/10 text-zinc-300 text-xs px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#F5C518]" />
            <span>Shakti Nagar, Jabalpur, Madhya Pradesh</span>
          </motion.div>

          {/* Main headline — "Hardcore" replaced with "Elite" */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-6"
          >
            <span className="block text-white">Jabalpur&apos;s</span>
            <span className="block text-gradient-yellow">Elite</span>
            <span className="block text-white">Fitness Hub</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Train with purpose at{" "}
            <span className="text-white font-semibold">Fit Bit Zone Gym</span>, Shakti
            Nagar — a high-energy fitness space built for{" "}
            <span className="text-[#F5C518]">strength, discipline,</span> and real
            results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#membership"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#F5C518] text-black font-black text-base rounded-xl hover:bg-[#D4A017] transition-all duration-300 hover:shadow-[0_0_35px_rgba(245,197,24,0.55)] uppercase tracking-wide"
            >
              Join Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918269491116"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#25D366] text-[#25D366] font-bold text-base rounded-xl hover:bg-[#25D366] hover:text-black transition-all duration-300 uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            {/* Rating badge */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#F5C518]/30 rounded-xl px-4 py-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F5C518] text-[#F5C518]" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.8</span>
              <span className="text-zinc-500 text-xs">/ 95+ Reviews</span>
            </div>

            {/* Followers badge */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <Users className="w-4 h-4 text-[#F5C518]" />
              <span className="text-white font-bold text-sm">1.1K+</span>
              <span className="text-zinc-400 text-xs">Instagram Followers</span>
            </div>

            {/* Online badge */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <Wifi className="w-4 h-4 text-[#F5C518]" />
              <span className="text-zinc-100 text-sm font-medium">Online Classes</span>
            </div>

            {/* Trophy */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <Trophy className="w-4 h-4 text-[#F5C518]" />
              <span className="text-zinc-100 text-sm font-medium">Trusted Local Gym</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#F5C518]/70" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
