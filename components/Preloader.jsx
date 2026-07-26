"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const letters = "WEBNIQUE".split("");
  const containerRef = useRef(null);
  const scanRef = useRef(null);
  const [phase, setPhase] = useState("letters"); // letters | scan | iris

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Stagger letters in
      const tl = gsap.timeline();
      tl.from(".preloader-letter", {
        y: 60,
        opacity: 0,
        rotateX: -40,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      })
        // 2. Pause, then scan-line sweeps across
        .to(".preloader-scanline", {
          x: "105vw",
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.2,
          onStart: () => setPhase("scan"),
        })
        // 3. Iris wipe out
        .to(
          containerRef.current,
          {
            clipPath: "circle(0% at 50% 50%)",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.2,
            onStart: () => setPhase("iris"),
            onComplete: () => {
              if (onComplete) onComplete();
            },
          }
        );
    }, containerRef);
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "var(--color-green-950)",
        clipPath: "circle(150% at 50% 50%)",
      }}
    >
      {/* Gold ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(246,121,99,0.08), transparent 70%)",
        }}
      />

      {/* WEBNIQUE letters */}
      <div className="relative flex items-end gap-0 perspective-[800px]">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="preloader-letter inline-block"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-gold-500)",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Gold scan-line */}
      <div
        ref={scanRef}
        className="preloader-scanline absolute top-0 bottom-0 w-[3px] pointer-events-none"
        style={{
          left: "-10px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-gold-500), transparent)",
          boxShadow: "0 0 20px var(--gold-glow), 0 0 60px var(--gold-glow)",
          opacity: 0.9,
        }}
      />

      {/* Corner label */}
      <div className="absolute bottom-8 right-8">
        <span className="font-label text-ash opacity-30 text-[11px]">
          Loading experience
        </span>
      </div>
    </div>
  );
}
