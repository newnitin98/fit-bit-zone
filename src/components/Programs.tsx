"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Trophy,
  Scale,
  User,
  Zap,
  Wifi,
  Heart,
  Star,
} from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Progressive overload-based training to build raw strength and muscle mass. Perfect for those who want functional power and size.",
    tag: "Foundation",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "Bodybuilding",
    description:
      "Structured bodybuilding routines targeting muscle hypertrophy, symmetry, and definition for physique goals.",
    tag: "Advanced",
    highlight: false,
  },
  {
    icon: Scale,
    title: "Weight Loss",
    description:
      "Calorie-burning, fat-loss-focused training that combines resistance work and conditioning for sustainable results.",
    tag: "Transformation",
    highlight: false,
  },
  {
    icon: User,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your specific body, goals, and schedule. Personalized attention from start to finish.",
    tag: "Premium",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    description:
      "Movement-based training that improves overall athletic performance, mobility, and daily life fitness.",
    tag: "Performance",
    highlight: false,
  },
  {
    icon: Wifi,
    title: "Online Fitness Guidance",
    description:
      "Can't make it to the gym every day? Get expert fitness guidance and workout plans online.",
    tag: "Flexible",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Beginner Support",
    description:
      "New to fitness? Start with confidence. Get guided onboarding, form coaching, and a safe introduction to training.",
    tag: "Beginner",
    highlight: false,
  },
  {
    icon: Star,
    title: "Transformation Training",
    description:
      "Goal-driven programs for dramatic physical change — designed around discipline, consistency, and measurable progress.",
    tag: "Results",
    highlight: true,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#F5C518]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <Dumbbell className="w-3.5 h-3.5" />
            Programs & Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Train With a{" "}
            <span className="text-gradient-yellow">Clear Purpose</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every program at Fit Bit Zone is designed around real results — whether
            you&apos;re building mass, cutting weight, or starting fresh.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 overflow-hidden cursor-default
                ${program.highlight
                  ? "bg-gradient-to-br from-[#1a1208] to-[#111111] border-[#F5C518]/30 hover:border-[#F5C518]/60"
                  : "bg-[#191919] border-[#2a2a2a] hover:border-[#F5C518]/20 hover:bg-[#202020]"
                }`}
            >
              {/* Glow on highlight */}
              {program.highlight && (
                <div className="absolute inset-0 bg-[#F5C518]/[0.03] rounded-2xl" />
              )}

              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-full font-bold
                  ${program.highlight
                    ? "bg-[#F5C518]/20 text-[#F5C518]"
                    : "bg-white/5 text-zinc-500"
                  }`}>
                  {program.tag}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                ${program.highlight
                  ? "bg-[#F5C518]/20 group-hover:bg-[#F5C518]/30"
                  : "bg-white/5 group-hover:bg-[#F5C518]/10"
                }`}>
                <program.icon className={`w-5 h-5 transition-colors duration-300
                  ${program.highlight ? "text-[#F5C518]" : "text-zinc-400 group-hover:text-[#F5C518]"}`} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2 leading-snug pr-8">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {program.description}
              </p>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300
                ${program.highlight
                  ? "bg-gradient-to-r from-transparent via-[#F5C518]/40 to-transparent opacity-100"
                  : "bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent opacity-0 group-hover:opacity-100"
                }`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/918269491116"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5C518] text-black font-black text-sm rounded-xl hover:bg-[#D4A017] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,197,24,0.35)] uppercase tracking-wide"
          >
            Ask About Programs on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
