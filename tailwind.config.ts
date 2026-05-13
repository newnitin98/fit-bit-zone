import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5C518",
          gold: "#D4A017",
          black: "#0A0A0A",
          card: "#111111",
          cardHover: "#161616",
          border: "#222222",
          muted: "#888888",
          red: "#E53935",
          orange: "#F57C00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Impact", "Arial Black", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #1a0a00 50%, #0A0A0A 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #F5C518 0%, #D4A017 100%)",
        "dark-card":
          "linear-gradient(145deg, #161616 0%, #111111 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
