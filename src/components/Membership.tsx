"use client";

import { motion } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Beginner Plan",
    tagline: "Start Smart",
    suitedFor: "First-time gym-goers and those new to fitness",
    features: [
      "Gym access & basic orientation",
      "Beginner-friendly routine setup",
      "Form guidance for key exercises",
      "Supportive community environment",
      "Progress check-ins",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Strength Plan",
    tagline: "Build Power",
    suitedFor: "Intermediate members focused on strength and muscle gain",
    features: [
      "Full gym access",
      "Structured strength program",
      "Progressive overload guidance",
      "Technique & form coaching",
      "Regular performance tracking",
    ],
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Transformation Plan",
    tagline: "Real Results",
    suitedFor: "Members with serious body transformation goals",
    features: [
      "Full gym access",
      "Custom transformation program",
      "Diet & nutrition guidance",
      "Progress photography (optional)",
      "Dedicated accountability support",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Personal Training",
    tagline: "1-on-1 Focus",
    suitedFor: "Anyone who wants dedicated, personalized coaching",
    features: [
      "One-on-one trainer sessions",
      "Fully personalized program",
      "Flexible scheduling",
      "Detailed form correction",
      "Tailored nutrition advice",
    ],
    highlight: false,
    badge: "Premium",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-24 md:py-32 bg-[#0E0E0E] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5C518]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <Star className="w-3.5 h-3.5" />
            Membership Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Find Your{" "}
            <span className="text-gradient-yellow">Perfect Plan</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto">
            Enquire directly on WhatsApp to get current pricing and availability.
            Every plan is tailored to your goals.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300
                ${plan.highlight
                  ? "bg-[#F5C518] border-[#F5C518] text-black shadow-2xl shadow-[#F5C518]/20 scale-[1.02]"
                  : "bg-[#191919] border-[#2a2a2a] hover:border-[#F5C518]/30 hover:bg-[#141414] text-white"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full
                  ${plan.highlight
                    ? "bg-black/20 text-black"
                    : "bg-[#F5C518]/20 text-[#F5C518]"
                  }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex-1">
                {/* Tagline */}
                <div className={`text-xs font-bold uppercase tracking-widest mb-2
                  ${plan.highlight ? "text-black/60" : "text-[#F5C518]"}`}>
                  {plan.tagline}
                </div>

                {/* Plan name */}
                <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>

                {/* Price placeholder */}
                <div className={`text-sm mb-4 font-medium ${plan.highlight ? "text-black/70" : "text-zinc-500"}`}>
                  Enquire for pricing →
                </div>

                {/* Divider */}
                <div className={`h-px mb-4 ${plan.highlight ? "bg-black/20" : "bg-[#1e1e1e]"}`} />

                {/* Suited for */}
                <p className={`text-xs mb-5 leading-relaxed ${plan.highlight ? "text-black/70" : "text-zinc-500"}`}>
                  <span className={`font-semibold ${plan.highlight ? "text-black" : "text-zinc-300"}`}>
                    Ideal for:{" "}
                  </span>
                  {plan.suitedFor}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                        ${plan.highlight ? "bg-black/20" : "bg-[#F5C518]/15"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.highlight ? "text-black" : "text-[#F5C518]"}`} />
                      </div>
                      <span className={`text-xs leading-snug ${plan.highlight ? "text-black/80" : "text-zinc-400"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-4 pt-0">
                <a
                  href="https://wa.me/918269491116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 uppercase tracking-wide
                    ${plan.highlight
                      ? "bg-black text-[#F5C518] hover:bg-zinc-900"
                      : "bg-[#F5C518]/10 border border-[#F5C518]/30 text-[#F5C518] hover:bg-[#F5C518] hover:text-black"
                    }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-zinc-700 text-xs mt-8 max-w-xl mx-auto"
        >
          Pricing is enquiry-based and may vary. Contact us directly on WhatsApp for
          current rates, offers, and plan details.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />
    </section>
  );
}
