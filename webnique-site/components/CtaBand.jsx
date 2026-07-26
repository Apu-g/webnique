"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Warm gold-tinted green atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: "transparent",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(246,121,99,0.1), transparent 70%)",
        }}
      />

      {/* Hairline top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-gold-500)", opacity: 0.25 }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Heading + CTA (cols 1-7) */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4">
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>05</span>
            <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
            <span className="font-label" style={{ color: "var(--color-gold-500)" }}>
              Need a Project?
            </span>
          </div>

          <h2
            id="cta-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h1)",
              color: "var(--color-green-950)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Let's work together.{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
              Fix a meeting
            </em>
          </h2>

          <Link href="/contact" className="btn-gold self-start">
            Fix a Meeting
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Right: Contact info (cols 8-12) */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5" stroke="var(--color-gold-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="var(--color-gold-500)" strokeWidth="1.5"/>
                </svg>
              ),
              label: "Email",
              value: "contactus@webniqueds.com",
              href: "mailto:contactus@webniqueds.com",
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 1h3l1.5 3.5-2 1.2c.8 1.6 2.3 3 3.8 3.8L10.5 7.5 14 9v3c0 1-1 2-2 2C5 14 2 8 2 3c0-1 1-2 1-2z" stroke="var(--color-gold-500)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              ),
              label: "Phone",
              value: "IN +91 9353703412 | NZ +64 223788699",
              href: "tel:+919353703412",
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z" stroke="var(--color-gold-500)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8" cy="6" r="1.5" stroke="var(--color-gold-500)" strokeWidth="1.5"/>
                </svg>
              ),
              label: "Location",
              value: "India | New Zealand",
              href: null,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "transparent", border: "1px solid var(--glass-border)" }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors duration-200"
                    style={{ color: "var(--color-green-900)", fontSize: "0.875rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-500)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-green-900)")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: "var(--color-green-900)", fontSize: "0.875rem" }}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Address block */}
          <div
            className="mt-2 p-4 rounded-2xl"
            style={{ background: "transparent", border: "1px solid var(--glass-border)" }}
          >
            <p className="font-label mb-2" style={{ color: "var(--color-gold-500)", fontSize: "11px" }}>
              India (Headquarters)
            </p>
            <p style={{ color: "var(--color-green-800)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
              302, 3rd Cross, HRBR Layout I block KalyanNagar,<br />
              Bangalore 560043
            </p>
            <div
              className="my-3 h-px"
              style={{ background: "var(--color-green-700)", opacity: 0.5 }}
            />
            <p className="font-label mb-2" style={{ color: "var(--color-gold-500)", fontSize: "11px" }}>
              New Zealand (Partner Office)
            </p>
            <p style={{ color: "var(--color-green-800)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
              21 Queen Street, Auckland CBD,<br />
              Auckland 1010, New Zealand
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hairline bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />
    </section>
  );
}
