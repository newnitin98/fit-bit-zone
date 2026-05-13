"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Brain,
  Users,
  Dumbbell,
  Target,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Hardcore Gym Environment",
    desc: "No distractions. Pure, focused energy. A space built for serious training.",
  },
  {
    icon: Brain,
    title: "Experienced Guidance",
    desc: "Trained support to help you move correctly, progress safely, and achieve more.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    desc: "Train alongside motivated individuals who push each other toward better results.",
  },
  {
    icon: Dumbbell,
    title: "Strength-Focused Equipment",
    desc: "Equipped with the tools you need for real strength training and bodybuilding work.",
  },
  {
    icon: Target,
    title: "Transformation Mindset",
    desc: "Every member's journey is taken seriously. Progress, accountability, and results — always.",
  },
  {
    icon: MapPin,
    title: "Trusted Local Gym",
    desc: "A known and trusted fitness spot in Shakti Nagar, Jabalpur. 4.8 stars. 95+ reviews.",
  },
  {
    icon: Instagram,
    title: "Active Instagram Presence",
    desc: "Follow real training content, client stories, and fitness motivation @fitbitzone_gym.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Contact",
    desc: "Reach out instantly on WhatsApp. Simple, direct, no waiting — just message us.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-[#F5C518]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            Why Fit Bit Zone
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">
              8 Reasons to Train{" "}
              <span className="text-gradient-yellow">With Us</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right">
              More than a gym. A place where transformation happens.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#F5C518]/25 hover:bg-[#191919] transition-all duration-300 overflow-hidden"
            >
              {/* Number */}
              <div className="absolute top-4 right-5 text-[40px] font-black text-[#F5C518]/[0.06] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-11 h-11 bg-[#F5C518]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F5C518]/20 transition-colors">
                <item.icon className="w-5 h-5 text-[#F5C518]" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-sm mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-600 text-xs leading-relaxed group-hover:text-zinc-500 transition-colors">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />
    </section>
  );
}
