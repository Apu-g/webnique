"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--color-green-950)" }}>
      {/* Gold tint bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(246,121,99,0.06), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-label inline-block mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
            >
              Need a Project?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8"
              style={{ fontSize: "var(--fs-h1)" }}
            >
              Let&apos;s work together.{" "}
              <span className="text-gradient-gold" style={{ fontStyle: "italic" }}>
                Fix a meeting
              </span>
            </motion.h2>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: "rgba(246,121,99,0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Email
                  </span>
                  <a href="mailto:contactus@webniqueds.com" className="text-green-950 hover:text-gold-500 transition-colors">
                    contactus@webniqueds.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: "rgba(246,121,99,0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Contact
                  </span>
                  <div className="text-green-950 space-y-1">
                    <div>IN +91 9353703412</div>
                    <div>NZ +64 223788699</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: "rgba(246,121,99,0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Business Addresses
                  </span>
                  <div className="text-green-950 space-y-2 text-sm">
                    <div>
                      <strong className="text-bone-200">India (HQ):</strong>{" "}
                      302, 3rd Cross, HRBR Layout I block KalyanNagar, Bangalore 560043
                    </div>
                    <div>
                      <strong className="text-bone-200">New Zealand:</strong>{" "}
                      21 Queen Street, Auckland CBD, Auckland 1010, New Zealand
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-green-950 transition-all duration-300 hover:shadow-[0_0_40px_rgba(246,121,99,0.45)] hover:scale-105 focus-gold"
                style={{ background: "var(--color-gold-500)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
              >
                Fix a Meeting
              </a>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center"
          >
            <div
              className="relative max-w-sm w-full overflow-hidden"
              style={{
                background: "transparent",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--radius-card)",
                backdropFilter: "blur(var(--glass-blur))",
              }}
            >
              <img
                src="/images/project/project-need.png"
                alt="Start a project with Webnique"
                className="w-full h-auto"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(246,121,99,0.08)",
                  borderRadius: "inherit",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
