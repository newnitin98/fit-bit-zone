"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare, Users, Wifi, MapPin } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.8",
    suffix: "★",
    label: "Google Rating",
    sub: "Highly Rated",
    color: "#F5C518",
  },
  {
    icon: MessageSquare,
    value: "95+",
    suffix: "",
    label: "Google Reviews",
    sub: "Verified feedback",
    color: "#F5C518",
  },
  {
    icon: Users,
    value: "1.1K+",
    suffix: "",
    label: "Instagram Followers",
    sub: "@fitbitzone_gym",
    color: "#F5C518",
  },
  {
    icon: Wifi,
    value: "Online",
    suffix: "",
    label: "Classes Available",
    sub: "Train from anywhere",
    color: "#F5C518",
  },
  {
    icon: MapPin,
    value: "Shakti",
    suffix: " Nagar",
    label: "Jabalpur, M.P.",
    sub: "Sainik Society Road",
    color: "#F5C518",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-[#0A0A0A] border-y border-[#1a1a1a]">
      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#191919] border border-[#2a2a2a] rounded-2xl p-5 hover:border-[#F5C518]/30 hover:bg-[#202020] transition-all duration-300 overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#F5C518]/5 rounded-bl-full" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 flex items-center justify-center mb-3 group-hover:bg-[#F5C518]/20 transition-colors">
                <stat.icon className="w-5 h-5 text-[#F5C518]" />
              </div>

              {/* Value */}
              <div className="text-2xl md:text-3xl font-black text-white mb-0.5">
                {stat.value}
                {stat.suffix && (
                  <span className="text-[#F5C518]">{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mb-1">
                {stat.label}
              </div>

              {/* Sub */}
              <div className="text-[11px] text-zinc-600">{stat.sub}</div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />
    </section>
  );
}
