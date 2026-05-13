"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Rich background treatment */}
      <div className="absolute inset-0 pattern-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />

      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F5C518]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E53935]/[0.03] rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/[0.03] rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F5C518]/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F5C518]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 bg-[#F5C518] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F5C518]/30 rotate-3">
            <Zap className="w-10 h-10 text-black fill-black" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Ready to Start Your{" "}
          <span className="text-gradient-fire">Fitness Journey?</span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Message{" "}
          <span className="text-white font-semibold">Fit Bit Zone Gym</span> today and
          take the first step toward a stronger version of yourself.{" "}
          <span className="text-[#F5C518]">
            Strength. Discipline. Real results.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://wa.me/918269491116"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-base rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] uppercase tracking-wide w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            WhatsApp: 8269491116
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://www.instagram.com/fitbitzone_gym"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-black text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:opacity-90 uppercase tracking-wide w-full sm:w-auto justify-center"
          >
            <Instagram className="w-5 h-5" />
            @fitbitzone_gym
          </a>
        </motion.div>

        {/* Location reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-zinc-600 text-sm"
        >
          <div className="h-px w-16 bg-[#222222]" />
          <span>Pawan Bhoomi, Sainik Society Road, Shakti Nagar, Jabalpur 482001</span>
          <div className="h-px w-16 bg-[#222222]" />
        </motion.div>
      </div>
    </section>
  );
}
