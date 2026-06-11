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
        background: "#07091A",
        surface: "#0E1120",
        primary: {
          from: "#534AB7",
          to: "#7F77DD",
        },
        teal: {
          from: "#1D9E75",
          to: "#5DCAA5",
        },
        coral: {
          from: "#D85A30",
          to: "#F0997B",
        },
        text: {
          primary: "#F0EEFF",
          secondary: "rgba(240,238,255,0.55)",
        },
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 90px rgba(83, 74, 183, 0.22)",
        teal: "0 22px 70px rgba(29, 158, 117, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "soft-pulse": "softPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
