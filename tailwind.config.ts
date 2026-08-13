import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Baby-pink fertility brand system
        bloom: {
          50: "#FFF7FA",  // very light pink background
          100: "#FCE4ED", // soft blush
          200: "#F8D6E2", // light rose
          300: "#F6C9DA", // primary baby pink
          400: "#EFAFC7", // transitional
          border: "#F2D7E1",
        },
        rose: {
          400: "#D85C8B", // secondary rose accent
          500: "#C24A78", // mid accent
          600: "#B83E6B", // primary deep accent
          muted: "#C98A9F",
        },
        ink: {
          900: "#332B2E", // warm charcoal text
          600: "#5C4F54",
          400: "#74666C", // secondary text
        },
        cream: "#FFFDFD", // warm white
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -10px rgba(184, 62, 107, 0.15)",
        card: "0 4px 20px -6px rgba(184, 62, 107, 0.12)",
        lift: "0 20px 45px -15px rgba(184, 62, 107, 0.25)",
      },
      backgroundImage: {
        "bloom-gradient": "linear-gradient(135deg, #FFF7FA 0%, #FCE4ED 60%, #F8D6E2 100%)",
        "rose-gradient": "linear-gradient(135deg, #C24A78 0%, #B83E6B 100%)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
