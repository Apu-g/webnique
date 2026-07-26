"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassPanel from "./GlassPanel";

const wordVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -30 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// New: Abstract Floating Grid Lines
function AnimatedGridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical Lines */}
      {[20, 45, 75, 90].map((pos, i) => (
        <motion.div
          key={`v-${pos}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${pos}%`,
            background: i % 2 === 0 ? "var(--grid-line-abstract)" : "var(--grid-line-gold)",
          }}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 2, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Horizontal Lines */}
      {[20, 50, 80].map((pos, i) => (
        <motion.div
          key={`h-${pos}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${pos}%`,
            background: i % 2 !== 0 ? "var(--grid-line-abstract)" : "var(--grid-line-green)",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 + (i * 0.3), ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

export default function Hero({ isVisible = true }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <AnimatedGridLines />

      {/* Main layout */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)] py-16">
        
        {/* Left: Headline + CTA (cols 1-7) */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }} 
          className="lg:col-span-7 flex flex-col gap-8 py-8"
        >
          {/* Section eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className="font-label"
              style={{ fontSize: "var(--fs-label)", color: "var(--color-green-800)" }}
            >
              01 / Digital Agency
            </span>
            <div
              className="flex-1 h-px max-w-[60px]"
              style={{ background: "var(--grid-line-gold-solid)" }}
            />
          </div>

          {/* Mixed-size headline */}
          <h1
            className="leading-none"
            style={{ perspective: "800px" }}
          >
            <motion.span
              custom={0}
              variants={wordVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
                color: "var(--color-green-800)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                display: "block",
              }}
            >
              Your
            </motion.span>

            <motion.span
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="block overflow-hidden"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-hero)",
                fontStyle: "italic",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                display: "block",
                color: "var(--color-gold-500)",
              }}
            >
              Digital
            </motion.span>

            <motion.span
              custom={2}
              variants={wordVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-hero)",
                color: "var(--color-green-950)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                display: "block",
              }}
            >
              Transformation
            </motion.span>

            <motion.span
              custom={3}
              variants={wordVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
                color: "var(--color-green-800)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                display: "block",
              }}
            >
              Starts Here
            </motion.span>
          </h1>

          {/* Subheadline + body */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 max-w-[520px]"
          >
            <p
              className="font-label"
              style={{ color: "var(--color-gold-500)", marginBottom: "0.25rem" }}
            >
              Empowering Digital Growth Through Integrity and Innovation
            </p>
            <p style={{ color: "var(--color-green-800)", lineHeight: 1.7, fontSize: "var(--fs-body)" }}>
              We collaborate with global partners to engineer scalable
              infrastructures &amp; resilient architectures, blending the latest
              technologies with a foundation of trust and ethical excellence.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 flex-wrap mt-4"
          >
            <Link href="/contact" className="btn-gold rounded-full px-6 py-3">
              Get Started
            </Link>
            <Link href="/our-work" className="btn-ghost rounded-full px-6 py-3 border border-grid-line-abstract" style={{ color: "var(--color-green-950)" }}>
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Floating Image panel (cols 8-12) */}
        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, x: 60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Flat artistic image wrapper */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-2xl shadow-xl shadow-black/5">
            <img
              src="/images/banner/hero-illustration.webp"
              alt="Digital Marketing Illustration"
              className="w-full h-full object-cover grayscale opacity-90 contrast-125"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 mix-blend-multiply" style={{ background: "var(--color-green-800)", opacity: 0.1 }} />
          </div>

          {/* Floating Info strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 bg-[var(--color-green-950)] p-6 rounded-2xl shadow-lg shadow-black/5 border border-grid-line-abstract flex flex-col gap-2"
          >
            <span className="font-label uppercase tracking-widest text-gold text-xs">
              Bangalore · Auckland
            </span>
            <span className="text-green-950 font-medium text-sm">
              Global Digital Solutions
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full animate-pulse bg-gold" />
              <span className="font-label text-green-800 text-[10px]">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* Abstract geometric accents */}
          <div className="absolute -top-12 -right-12 w-24 h-24 border border-gold rounded-full opacity-50 pointer-events-none" />
          <div className="absolute top-1/2 -right-4 w-8 h-8 bg-green-800 rounded-sm pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
