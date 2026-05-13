"use client";

import { motion } from "framer-motion";
import { CheckCircle, Flame, Shield, Target } from "lucide-react";

const highlights = [
  { icon: Flame, text: "High-energy training environment" },
  { icon: Target, text: "Strength and bodybuilding focused" },
  { icon: Shield, text: "Supportive and disciplined community" },
  { icon: CheckCircle, text: "Suitable for all levels — beginner to advanced" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F5C518]/[0.025] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E53935]/[0.02] rounded-full blur-3xl translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main visual block */}
            <div className="relative">
              {/* Large placeholder image */}
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1a1208] via-[#111111] to-[#0A0A0A] border border-[#222222] overflow-hidden relative">
                {/* Grid pattern */}
                <div className="absolute inset-0 pattern-bg opacity-60" />

                {/* Center decorative element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-2 border-[#F5C518]/20 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border border-[#F5C518]/40 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#F5C518]/20 rounded-full" />
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-[#F5C518]/20"
                    />
                  </div>
                </div>

                {/* Corner labels */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] text-[#F5C518]/50 uppercase tracking-widest">Est. · Jabalpur</span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">Shakti Nagar</div>
                  <div className="text-[10px] text-zinc-700">Sainik Society Rd</div>
                </div>

                {/* Vertical text */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 writing-mode-vertical">
                  <span
                    className="text-[9px] text-[#F5C518]/20 uppercase tracking-[0.4em]"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    STRENGTH · DISCIPLINE · RESULTS
                  </span>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-[#F5C518] text-black rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-2xl font-black leading-none">4.8★</div>
                <div className="text-xs font-semibold uppercase tracking-wide mt-1">Google Rating</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#191919] border border-[#222222] text-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-xl font-black text-[#F5C518] leading-none">95+</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">Reviews</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            {/* Section tag */}
            <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" />
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6">
              Built for People Who Take{" "}
              <span className="text-gradient-yellow">Fitness Seriously</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
              Fit Bit Zone Gym is a fitness space in Shakti Nagar, Jabalpur, designed
              for people who want to build{" "}
              <span className="text-white font-medium">
                strength, discipline, confidence, and consistency
              </span>
              .
            </p>

            <p className="text-zinc-400 text-base leading-relaxed mb-10">
              Whether you&apos;re starting your fitness journey, returning after a
              break, or pushing toward bodybuilding goals — this gym provides an
              energetic, focused environment built around real results.
            </p>

            {/* Highlight list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 bg-[#191919] border border-[#2a2a2a] rounded-xl p-3"
                >
                  <item.icon className="w-5 h-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm leading-snug">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Instagram tag */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/fitbitzone_gym"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#F5C518] text-sm transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
                <span className="font-medium">@fitbitzone_gym</span>
                <span className="text-zinc-600">· 1.1K+ followers</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
