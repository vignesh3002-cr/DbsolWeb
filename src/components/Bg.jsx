import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AdvancedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Parallax depth layers
  const xSlow = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const ySlow = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const xFast = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
  const yFast = useTransform(mouseY, [0, window.innerHeight], [-60, 60]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black -z-10">

      {/* 🌌 Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* 🌊 Animated Gradient Wave */}
      <motion.div
        className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,200,0,0.15),transparent_40%)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* 🔆 Glow Layer 1 */}
      <motion.div
        style={{ x: xSlow, y: ySlow }}
        className="absolute w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[160px] top-[10%] left-[10%]"
      />

      {/* 🔆 Glow Layer 2 */}
      <motion.div
        style={{ x: xFast, y: yFast }}
        className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[140px] bottom-[10%] right-[10%]"
      />

      {/* 🎯 Mouse Follow Light */}
      <motion.div
        style={{
          x: useTransform(mouseX, (v) => v - 150),
          y: useTransform(mouseY, (v) => v - 150),
        }}
        className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* 🔳 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ✨ Noise Texture (optional) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

    </div>
  );
}