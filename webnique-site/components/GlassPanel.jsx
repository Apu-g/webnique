"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

/**
 * GlassPanel — The single shared glass surface used site-wide.
 * Every card, form, testimonial, portfolio frame, and mission/vision
 * block must use this component. Never drift into one-off blur values.
 *
 * Props:
 *   as         — element to render ("div" | "article" | "section" etc.)
 *   className  — additional classes
 *   tilt       — enable cursor-tracking tilt (default true)
 *   maxTilt    — max tilt degrees (default 4)
 *   strong     — use glass-fill-strong background
 *   goldEdge  — start with gold-edge glow visible (e.g. hero visual panel)
 *   children
 */
export default function GlassPanel({
  as: Tag = "div",
  className = "",
  tilt = true,
  maxTilt = 4,
  strong = false,
  goldEdge = false,
  children,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Subtle tilt relative to mouse position
  const rotateX = useTransform(y, [-100, 100], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-100, 100], [-maxTilt, maxTilt]);

  function handleMouseMove(event) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    if (!tilt) return;
    x.set(0);
    y.set(0);
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      {...props}
    >
      <motion.div
        className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 ${className}`}
        style={{
          background: strong ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${goldEdge ? "var(--color-gold-500)" : "rgba(0, 0, 0, 0.05)"}`,
          rotateX: tilt ? rotateX : 0,
          rotateY: tilt ? rotateY : 0,
        }}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    </Tag>
  );
}
