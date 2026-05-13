"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const galleryItems = [
  {
    label: "Strength Zone",
    sublabel: "Heavy lifts only",
    accent: "#F5C518",
    size: "large",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  },
  {
    label: "Client Love",
    sublabel: "Real members, real results",
    accent: "#F59E0B",
    size: "small",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Bench Press",
    sublabel: "Push your limit",
    accent: "#F97316",
    size: "small",
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Gym Love",
    sublabel: "#fitbitzone_gym",
    accent: "#F5C518",
    size: "small",
    src: "https://images.unsplash.com/photo-1517963879433-6ad2a51b8f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Transformation Journey",
    sublabel: "Before & after stories",
    accent: "#D4A017",
    size: "large",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    label: "Workout Reels",
    sublabel: "See us in action",
    accent: "#E53935",
    size: "small",
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Training Floor",
    sublabel: "High energy space",
    accent: "#F5C518",
    size: "small",
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Fitness Community",
    sublabel: "Train together, grow together",
    accent: "#F59E0B",
    size: "small",
    src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=600&q=80",
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const isLarge = item.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#272727] hover:border-[#F5C518]/40 transition-all duration-500 cursor-pointer
        ${isLarge ? "md:col-span-2 aspect-[2/1]" : "aspect-square"}`}
    >
      {/* Real photo */}
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700 ease-out"
        sizes={isLarge ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 50vw, 320px"}
      />

      {/* Subtle colour overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${item.accent}40, transparent)` }}
      />

      {/* Dark vignette for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

      {/* Instagram icon on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <div className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
          <Instagram className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Bottom label — always slightly visible, slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div
          className="text-xs font-bold uppercase tracking-widest mb-0.5 drop-shadow"
          style={{ color: item.accent }}
        >
          {item.label}
        </div>
        <div className="text-[11px] text-zinc-300 drop-shadow">{item.sublabel}</div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Subtle warm ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F5C518]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
              <Instagram className="w-3.5 h-3.5" />
              Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Inside{" "}
              <span className="text-gradient-yellow">Fit Bit Zone</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/fitbitzone_gym"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-400 hover:text-[#F5C518] text-sm font-medium transition-colors"
          >
            <span>Follow @fitbitzone_gym</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 border border-white/10 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">@fitbitzone_gym</div>
              <div className="text-zinc-400 text-xs">Follow for daily gym content, transformations & motivation</div>
            </div>
            <a
              href="https://www.instagram.com/fitbitzone_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors uppercase tracking-wide"
            >
              Follow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
