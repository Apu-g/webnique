"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AbstractGridBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity: 0.8 }}>
      {/* Vertical Lines */}
      {[15, 35, 65, 85].map((pos, i) => (
        <motion.div
          key={`v-${pos}`}
          className="absolute top-0 bottom-0 w-[1px]"
          style={{
            left: `${pos}%`,
            background: i % 2 === 0 ? "var(--grid-line-abstract)" : "var(--grid-line-green)",
          }}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 3, delay: i * 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Horizontal Lines */}
      {[25, 45, 75].map((pos, i) => (
        <motion.div
          key={`h-${pos}`}
          className="absolute left-0 right-0 h-[1px]"
          style={{
            top: `${pos}%`,
            background: i % 2 !== 0 ? "var(--grid-line-abstract)" : "var(--grid-line-gold)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 3, delay: 1 + (i * 0.4), ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Floating abstract rectangles */}
      <motion.div
        className="absolute top-[25%] left-[15%] w-[20%] h-[20%] border border-grid-line-abstract"
        style={{ background: "rgba(0,0,0,0.01)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      />
      <motion.div
        className="absolute top-[75%] right-[15%] w-[15%] h-[25%] border border-grid-line-abstract"
        style={{ background: "rgba(0,0,0,0.01)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 3 }}
      />
    </div>
  );
}
