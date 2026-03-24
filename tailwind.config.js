/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {/* ── Custom font families ── */
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
     keyframes: {
    dmReveal: { "0%":{"opacity":"0","transform":"translateY(28px)"},"100%":{"opacity":"1","transform":"translateY(0)"} },
    dmGlow:   { "0%,100%":{"opacity":".38"},"50%":{"opacity":".72"} },
    dmPulse:  { "0%,100%":{"transform":"scale(1)","opacity":"1"},"50%":{"transform":"scale(1.3)","opacity":".6"} },
    dmSlide:  { "from":{"opacity":"0","transform":"translateY(10px)"},"to":{"opacity":"1","transform":"translateY(0)"} },
    dmMqee:   { "from":{"transform":"translateX(0)"},"to":{"transform":"translateX(-50%)"} },
    dmBlink:  { "0%,100%":{"opacity":"1"},"50%":{"opacity":".3"} },
    dmRipple: { "0%":{"transform":"scale(1)","opacity":".6"},"100%":{"transform":"scale(2.4)","opacity":"0"} },
  },
  animation: {
    "dm-reveal":  "dmReveal 0.65s cubic-bezier(0.4,0,0.2,1) forwards",
    "dm-glow":    "dmGlow 8s ease-in-out infinite",
    "dm-pulse":   "dmPulse 2.2s ease-in-out infinite",
    "dm-slide":   "dmSlide 0.45s ease both",
    "dm-marquee": "dmMqee 28s linear infinite",
    "dm-blink":   "dmBlink 1.4s ease infinite",
    "dm-ripple":  "dmRipple 2.2s ease-out infinite",
  },
      /* ── Brand & accent colors ── */
      colors: {
        gold: {
          DEFAULT: "#D4A853",
          light: "#F5D07A",
          dark: "#C8962A",
          10: "rgba(212,168,83,0.10)",
          16: "rgba(212,168,83,0.16)",
          20: "rgba(212,168,83,0.20)",
          30: "rgba(212,168,83,0.30)",
        },
        surface: {
          DEFAULT: "#060608",
          2: "rgba(255,255,255,0.02)",
          3: "rgba(255,255,255,0.03)",
          5: "rgba(255,255,255,0.05)",
          6: "rgba(255,255,255,0.06)",
        },
        border: {
          subtle: "rgba(255,255,255,0.05)",
          soft:   "rgba(255,255,255,0.07)",
          mid:    "rgba(255,255,255,0.10)",
          bright: "rgba(255,255,255,0.12)",
        },
      },
 
      /* ── Custom keyframes ── */
      keyframes: {
        tmReveal: {
          "0%":   { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tmGlow: {
          "0%,100%": { opacity: "0.5" },
          "50%":     { opacity: "0.85" },
        },
        tmPulse: {
          "0%,100%": { transform: "scale(1)" },
          "50%":     { transform: "scale(1.14)" },
        },
        tmFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-7px)" },
        },
        spinRing: {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        vmFadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        vmSlideUp: {
          "0%":   { transform: "translateY(40px) scale(0.96)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        fadePhase: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
 
      /* ── Animation helpers ── */
      animation: {
        "tm-reveal":   "tmReveal 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
        "tm-glow":     "tmGlow 7s ease-in-out infinite",
        "tm-pulse":    "tmPulse 2.2s ease-in-out infinite",
        "tm-float":    "tmFloat 3.5s ease-in-out infinite",
        "spin-ring":   "spinRing 12s linear infinite",
        "marquee":     "marquee 24s linear infinite",
        "vm-fade-in":  "vmFadeIn 0.2s ease forwards",
        "vm-slide-up": "vmSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "fade-phase":  "fadePhase 0.18s ease forwards",
      },
 
      /* ── Aspect ratios ── */
      aspectRatio: {
        "video-tall": "16 / 7.2",
      },
 
      /* ── Background image helpers ── */
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(rgba(255,255,255,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.9) 1px,transparent 1px)",
        "gold-gradient":
          "linear-gradient(90deg,#C8962A,#F5D07A,#C8962A)",
        "scanlines":
          "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.6) 2px,rgba(255,255,255,0.6) 3px)",
        "mask-marquee":
          "linear-gradient(90deg,transparent 0%,black 12%,black 88%,transparent 100%)",
      },
 
      /* ── Background sizes ── */
      backgroundSize: {
        "grid-64": "64px 64px",
        "200pct":  "200% auto",
      },
 
      /* ── Box shadow extras ── */
      boxShadow: {
        "video": "0 20px 60px rgba(0,0,0,0.65)",
        "badge": "0 8px 28px rgba(0,0,0,0.45)",
        "modal": "0 0 120px rgba(212,168,83,0.07), 0 40px 80px rgba(0,0,0,0.85)",
      },
 
      /* ── Transition timing ── */
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34,1.56,0.64,1)",
      },
    },
  },
  plugins: [],
};