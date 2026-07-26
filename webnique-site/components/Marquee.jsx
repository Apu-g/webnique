"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  "Web Design & Development",
  "Custom Software Solutions",
  "Digital Marketing Services",
  "Social Media Marketing",
  "Content Creation",
  "Creative Content & Branding",
];

// Small gold star SVG glyph
function StarGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mx-6 flex-shrink-0">
      <path
        d="M8 0L9.5 5.5L15 6.5L10.5 10L12 16L8 12.5L4 16L5.5 10L1 6.5L6.5 5.5L8 0Z"
        fill="var(--color-gold-500)"
        opacity="0.7"
      />
    </svg>
  );
}

export default function Marquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section className="relative py-8 overflow-hidden" style={{ borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)" }}>
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: `marqueeScroll 30s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setHoveredIndex(-1); }}
      >
        {/* Duplicate for seamless loop */}
        {[...services, ...services, ...services].map((service, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-label px-4 py-2 transition-all duration-300 cursor-default"
              style={{
                fontFamily: "var(--font-mono)",
                color: hoveredIndex === i % services.length
                  ? "var(--color-gold-500)"
                  : "var(--color-green-800)",
                textShadow: hoveredIndex === i % services.length
                  ? "0 0 20px rgba(246,121,99,0.3)"
                  : "none",
              }}
              onMouseEnter={() => setHoveredIndex(i % services.length)}
            >
              {service}
            </span>
            <StarGlyph />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
