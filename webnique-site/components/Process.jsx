"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassPanel from "./GlassPanel";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Discovery and Strategy",
    description:
      "We begin by understanding your industry and audience to craft a plan tailored specifically to you.",
  },
  {
    number: "02",
    title: "Design and Development",
    description:
      "Our creative team designs visually appealing and user-friendly websites. Which is responsive and compatible with all devices.",
  },
  {
    number: "03",
    title: "Monitoring and Optimization",
    description:
      "We consistently review data to improve and enhance our strategies.",
  },
  {
    number: "04",
    title: "Marketing and Promotion",
    description:
      "We develop marketing strategies to enhance your visibility online.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the SVG path stroke from 0 to full length on scroll
      const path = lineRef.current;
      if (!path) return;
      const length = path.getTotalLength ? path.getTotalLength() : 800;
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1.2,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>06</span>
          <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>Our Process</span>
        </div>

        <motion.h2
          id="process-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[600px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h1)",
            color: "var(--color-green-950)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          From{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>Vision</em>{" "}
          to Results
        </motion.h2>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 md:auto-rows-[minmax(280px,auto)]">
          {STEPS.map((step, i) => {
            let spanClasses = "md:col-span-6";
            if (i === 1) spanClasses = "md:col-span-5";
            if (i === 2) spanClasses = "md:col-span-7";
            if (i === 3) spanClasses = "md:col-span-5";

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col h-full ${spanClasses}`}
              >
                <GlassPanel className="p-8 md:p-12 h-full flex flex-col overflow-hidden group" tilt maxTilt={4}>
                  <span
                    className="font-mono text-sm tracking-widest mb-12"
                    style={{ color: "var(--color-gold-500)" }}
                  >
                    {step.number}
                  </span>
                  <div className="mt-auto relative z-10">
                    <h3
                      className="font-display mb-4"
                      style={{ fontSize: "var(--fs-h3)", color: "var(--color-green-950)", lineHeight: 1.1 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{ color: "var(--color-green-800)", fontSize: "0.95rem", lineHeight: 1.6 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section hairline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />
    </section>
  );
}
