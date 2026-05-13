"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            Find Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Visit{" "}
            <span className="text-gradient-yellow">Fit Bit Zone Gym</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto">
            Located in the heart of Shakti Nagar, Jabalpur. Easy to reach, hard to
            leave.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#2a2a2a] bg-[#0f0f0f]">
              {/* Map placeholder content */}
              <div className="absolute inset-0 pattern-bg opacity-40" />

              {/* Decorative grid lines (map-style) */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-b border-white/[0.03]"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 bottom-0 border-r border-white/[0.03]"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>

              {/* Road-like elements */}
              <div className="absolute top-1/3 left-0 right-0 h-6 bg-zinc-800/40 flex items-center justify-center">
                <div className="text-[8px] text-zinc-600 uppercase tracking-widest">
                  Sainik Society Road
                </div>
              </div>
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-zinc-800/30" />

              {/* Location pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-[#F5C518] rounded-full flex items-center justify-center shadow-2xl shadow-[#F5C518]/40">
                    <MapPin className="w-6 h-6 text-black fill-black" />
                  </div>
                  <div className="w-2 h-2 bg-[#F5C518] rounded-full mt-1" />
                  <div className="w-6 h-1 bg-black/30 rounded-full mt-0.5 blur-sm" />
                </motion.div>
              </div>

              {/* Pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-16 h-16 rounded-full border-2 border-[#F5C518]/40 absolute -inset-8"
                />
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.2, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                  className="w-16 h-16 rounded-full border-2 border-[#F5C518]/20 absolute -inset-8"
                />
              </div>

              {/* Location label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#191919]/90 backdrop-blur-sm border border-[#222222] rounded-xl p-3">
                  <div className="text-white text-sm font-bold">Fit Bit Zone Gym</div>
                  <div className="text-zinc-400 text-xs mt-0.5">
                    Pawan Bhoomi, Sainik Society Road
                  </div>
                  <div className="text-zinc-500 text-xs">Shakti Nagar, Jabalpur 482001</div>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              href="https://maps.google.com/?q=Pawan+Bhoomi+Sainik+Society+Road+Shakti+Nagar+Jabalpur+Madhya+Pradesh+482001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#191919] border border-[#2a2a2a] hover:border-[#F5C518]/30 hover:bg-[#141414] text-white rounded-xl text-sm font-bold transition-all group"
            >
              <Navigation className="w-4 h-4 text-[#F5C518] group-hover:rotate-12 transition-transform" />
              Get Directions on Google Maps
            </motion.a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Address card */}
            <div className="bg-[#191919] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#F5C518]/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5C518]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#F5C518]" />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Address
                  </div>
                  <div className="text-white font-bold text-base leading-snug mb-1">
                    Fit Bit Zone Gym
                  </div>
                  <div className="text-zinc-400 text-sm leading-relaxed">
                    Pawan Bhoomi, Sainik Society Road
                    <br />
                    Shakti Nagar, Jabalpur
                    <br />
                    Madhya Pradesh — 482001
                  </div>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-[#191919] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#F5C518]/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F5C518]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#F5C518]" />
                </div>
                <div className="flex-1">
                  <div className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    Phone / WhatsApp
                  </div>
                  <div className="text-white font-bold text-lg">+91 82694 91116</div>
                </div>
                <a
                  href="tel:+918269491116"
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-lg transition-colors uppercase tracking-wide"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Business hours card */}
            <div className="bg-[#191919] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#F5C518]/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5C518]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#F5C518]" />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Timings
                  </div>
                  <div className="text-white text-sm font-medium mb-1">
                    Contact us for current gym hours
                  </div>
                  <div className="text-zinc-500 text-xs leading-relaxed">
                    WhatsApp us to confirm timings before your first visit.
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918269491116"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-sm rounded-2xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />
    </section>
  );
}
