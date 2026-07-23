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
        background: "#090D16",
        foreground: "#F3F4F6",
        glass: {
          surface: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.12)",
          hover: "rgba(255, 255, 255, 0.09)",
          card: "rgba(15, 23, 42, 0.55)",
        },
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
      },
      animation: {
        "marquee": "marquee 22s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(40px)" },
          "100%": { opacity: "0.8", filter: "blur(60px)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-glow": "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        "cyan-glow": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
