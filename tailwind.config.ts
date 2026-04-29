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
        // ── Bleu marine — couleur principale MD Transition ─────────────
        navy: {
          DEFAULT: "#143459",
          50:  "#EEF3FA",
          100: "#D5E1F0",
          200: "#ACC3E1",
          300: "#83A5D2",
          400: "#5A87C3",
          500: "#3A6DB4",
          600: "#2A56A0",
          700: "#1E4A8C",
          800: "#193D72",
          900: "#143459",
          950: "#0C2038",
        },

        // ── Orange signature — action, CTA, accents ─────────────────────
        orange: {
          DEFAULT: "#F29430",
          50:  "#FFF7EC",
          100: "#FFEECE",
          200: "#FFD99A",
          300: "#FFBE64",
          400: "#FDA234",
          500: "#F29430",
          600: "#D97B18",
          700: "#BA6510",
          800: "#954F0F",
          900: "#7A400D",
          950: "#421E05",
        },

        // ── Fond de page — jaune clair charte MD Transition ────────────
        cream: {
          DEFAULT: "#FFFDEE",
          50:  "#FFFDEE",
          100: "#FFFCE0",
          200: "#FFF9C2",
        },

        // ── Textes ──────────────────────────────────────────────────────
        "text-gray":       "#737373",
        "text-gray-dark":  "#7C7C7C",
        "text-gray-light": "#A0A0A0",
      },

      fontFamily: {
        sans:    ["var(--font-inter)",    "system-ui", "sans-serif"],
        display: ["var(--font-display)",  "var(--font-inter)", "sans-serif"],
      },

      backgroundImage: {
        // Hero bleu marine profond
        "gradient-hero":
          "linear-gradient(150deg, #0C2038 0%, #143459 40%, #1E4A8C 75%, #143459 100%)",
        // Section CTA sombre bleu
        "cta-gradient":
          "linear-gradient(145deg, #0C2038 0%, #143459 50%, #1E4A8C 85%, #0C2038 100%)",
        // Orange pour éléments déco
        "gradient-orange":
          "linear-gradient(135deg, #F29430 0%, #D97B18 100%)",
        // Dark bleu pour cartes sombres
        "gradient-navy":
          "linear-gradient(135deg, #143459 0%, #0C2038 100%)",
        // Patterns de points
        "dots-navy":
          "radial-gradient(circle, rgba(20,52,89,0.06) 1px, transparent 1px)",
        "dots-white":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        "dots-orange":
          "radial-gradient(circle, rgba(242,148,48,0.09) 1px, transparent 1px)",
      },

      boxShadow: {
        card:              "0 1px 3px rgba(20,52,89,0.04), 0 4px 16px rgba(20,52,89,0.06)",
        "card-hover":      "0 8px 32px rgba(20,52,89,0.12), 0 2px 8px rgba(20,52,89,0.06)",
        navy:              "0 4px 20px rgba(20,52,89,0.32)",
        "navy-sm":         "0 2px 10px rgba(20,52,89,0.16)",
        orange:            "0 4px 20px rgba(242,148,48,0.35)",
        "orange-sm":       "0 2px 10px rgba(242,148,48,0.20)",
        header:            "0 1px 0 rgba(20,52,89,0.06), 0 2px 12px rgba(20,52,89,0.06)",
        "header-scrolled": "0 1px 0 rgba(20,52,89,0.06), 0 4px 20px rgba(20,52,89,0.07)",
      },

      animation: {
        "fade-in":     "fadeIn 0.55s ease-out forwards",
        "slide-up":    "slideUp 0.55s ease-out forwards",
        "slide-left":  "slideLeft 0.55s ease-out forwards",
        "slide-right": "slideRight 0.55s ease-out forwards",
        float:         "float 6s ease-in-out infinite",
        "pulse-soft":  "pulseSoft 3s ease-in-out infinite",
        "spin-slow":   "spin 12s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },

      keyframes: {
        fadeIn:     { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp:    { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideLeft:  { from: { opacity: "0", transform: "translateX(-22px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        slideRight: { from: { opacity: "0", transform: "translateX(22px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        float:      { "0%,100%": { transform: "translateY(0)" },      "50%": { transform: "translateY(-12px)" } },
        pulseSoft:  { "0%,100%": { opacity: "0.5", transform: "scale(1)" }, "50%": { opacity: "0.8", transform: "scale(1.05)" } },
        bounceSoft: { "0%,100%": { transform: "translateY(0)" },      "50%": { transform: "translateY(-6px)" } },
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
