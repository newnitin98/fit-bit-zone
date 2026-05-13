import { MapPin, Phone, Instagram, Facebook, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060606] border-t border-[#111111] overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="w-10 h-10 bg-[#F5C518] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(245,197,24,0.4)] transition-all">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <div className="leading-none">
                <span className="block text-white font-black text-sm tracking-wider uppercase">
                  Fit Bit Zone
                </span>
                <span className="block text-[#F5C518] text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Gym · Jabalpur
                </span>
              </div>
            </a>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-5">
              A high-energy fitness space in Shakti Nagar, Jabalpur. Built for
              strength, discipline, and real transformation.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fitbitzone_gym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.facebook.com/FITBITZoneGymJabalpur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/918269491116"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Gallery", href: "#gallery" },
                { label: "Membership", href: "#membership" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-[#F5C518] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F5C518] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+918269491116"
                    className="text-zinc-400 hover:text-white text-sm transition-colors block"
                  >
                    +91 82694 91116
                  </a>
                  <span className="text-zinc-700 text-xs">Call / WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#F5C518] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.instagram.com/fitbitzone_gym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white text-sm transition-colors block"
                  >
                    @fitbitzone_gym
                  </a>
                  <span className="text-zinc-700 text-xs">Instagram</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="w-4 h-4 text-[#F5C518] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-zinc-400 text-sm block">
                    FIT BIT Zone Gym – Jabalpur
                  </span>
                  <span className="text-zinc-700 text-xs">Facebook Page</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Location
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-4 h-4 text-[#F5C518] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Pawan Bhoomi,
                  <br />
                  Sainik Society Road,
                  <br />
                  Shakti Nagar, Jabalpur
                  <br />
                  Madhya Pradesh – 482001
                </p>
              </div>
            </div>

            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-[#191919] border border-[#2a2a2a] rounded-xl px-3 py-2">
              <span className="text-[#F5C518] font-black text-sm">4.8 ★</span>
              <span className="text-zinc-600 text-xs">95+ Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#111111] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-700 text-xs">
            © {currentYear} Fit Bit Zone Gym, Jabalpur. All rights reserved.
          </p>

          {/* Demo note */}
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/5 border border-[#F5C518]/10 rounded-lg px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
            <p className="text-zinc-600 text-[11px]">
              This is a concept demo website created for presentation purposes.
            </p>
          </div>

          <p className="text-zinc-800 text-[10px]">
            Start your fitness journey. @fitbitzone_gym
          </p>
        </div>
      </div>
    </footer>
  );
}
