"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F9F8F4]">
      {/* Soft Gold Blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{ background: "rgba(217,146,1,0.25)" }}
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 100, -50, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        initial={{ top: "-10%", right: "-10%" }}
      />
      
      {/* Soft Green Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{ background: "rgba(35,53,42,0.15)" }}
        animate={{
          x: [0, -150, 50, -50, 0],
          y: [0, 100, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        initial={{ bottom: "10%", left: "-10%" }}
      />

      {/* Another faint gold blob in the middle */}
      <motion.div
        className="absolute w-[900px] h-[700px] rounded-full blur-[140px] opacity-20"
        style={{ background: "rgba(246,121,99,0.15)" }}
        animate={{
          x: [0, 50, -100, 50, 0],
          y: [0, 50, -50, 100, 0],
          scale: [1, 1.05, 0.95, 1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        initial={{ top: "40%", left: "30%" }}
      />
    </div>
  );
}
