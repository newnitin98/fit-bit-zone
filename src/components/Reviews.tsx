"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    initials: "RS",
    name: "R. Singh",
    rating: 5,
    text: "Great gym atmosphere and supportive training environment. The equipment is solid and the energy here is serious. Exactly what I was looking for.",
    tag: "Strength Training",
  },
  {
    initials: "AM",
    name: "A. Mishra",
    rating: 5,
    text: "Good place for serious strength training. One of the trusted fitness spots around Shakti Nagar. The trainers guide you well and keep you focused.",
    tag: "Bodybuilding",
  },
  {
    initials: "PK",
    name: "P. Kumar",
    rating: 5,
    text: "Highly recommend Fit Bit Zone to anyone in Jabalpur looking for a real gym. The crowd is motivated and the training environment is genuinely energetic.",
    tag: "Weight Loss",
  },
  {
    initials: "VJ",
    name: "V. Joshi",
    rating: 5,
    text: "Started my fitness journey here and it's been a great experience. Very welcoming for beginners while still being hardcore for the experienced crowd.",
    tag: "Beginner",
  },
  {
    initials: "NT",
    name: "N. Tiwari",
    rating: 5,
    text: "The gym has a real transformation mindset. Everyone here is serious about their goals. It's the kind of place that keeps you accountable.",
    tag: "Transformation",
  },
  {
    initials: "SK",
    name: "S. Kundra",
    rating: 5,
    text: "Best gym in Shakti Nagar, no doubt. 4.8 stars is well deserved. The vibe, the equipment, and the community here are all top quality.",
    tag: "Community",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#F5C518] text-[#F5C518]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5C518]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#F5C518]" />
            Member Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Members{" "}
            <span className="text-gradient-yellow">Say</span>
          </h2>

          {/* Overall rating display */}
          <div className="inline-flex items-center gap-4 bg-[#191919] border border-[#2a2a2a] rounded-2xl px-6 py-4 mt-4">
            <div className="text-5xl font-black text-[#F5C518] leading-none">4.8</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />
                ))}
              </div>
              <div className="text-zinc-400 text-xs font-medium">Based on 95+ Google Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative bg-[#191919] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#F5C518]/20 hover:bg-[#141414] transition-all duration-300 group overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-[#F5C518]" />
              </div>

              {/* Tag */}
              <div className="inline-flex text-[9px] font-bold uppercase tracking-widest bg-[#F5C518]/10 text-[#F5C518] px-2 py-1 rounded-full mb-4">
                {review.tag}
              </div>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Text */}
              <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-5 group-hover:text-zinc-300 transition-colors">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F5C518]/20 flex items-center justify-center text-[#F5C518] text-xs font-black flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{review.name}</div>
                  <div className="text-zinc-600 text-xs">Google Review</div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-zinc-700 text-[11px] mt-8 max-w-lg mx-auto leading-relaxed"
        >
          Review highlights are written as website display samples based on public rating
          information. These are not verbatim quotes. The gym holds a 4.8 Google rating
          with 95+ reviews.
        </motion.p>
      </div>
    </section>
  );
}
