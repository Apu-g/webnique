"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassPanel from "./GlassPanel";

// QUIP SVG icons (gold stroke)
const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--color-gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="6"/>
    <path d="M16 2v4M16 26v4M2 16h4M26 16h4"/>
    <path d="M7.1 7.1l2.8 2.8M22.1 22.1l2.8 2.8M7.1 24.9l2.8-2.8M22.1 9.9l2.8-2.8"/>
  </svg>
);

const LeadIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--color-gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 28l6-6M10 22l4-12 4 8 4-4 4 8"/>
    <circle cx="4" cy="28" r="2"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--color-gold-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="28" height="18" rx="3"/>
    <path d="M10 8V5a2 2 0 012-2h8a2 2 0 012 2v3"/>
    <path d="M16 14v6M13 17h6"/>
  </svg>
);

const QUIP_FEATURES = [
  {
    icon: <AIIcon />,
    title: "24/7 AI Support",
    text: "Respond instantly to customer questions anytime, ensuring visitors always receive assistance when they need it.",
  },
  {
    icon: <LeadIcon />,
    title: "Smart Lead Generation",
    text: "Capture and qualify leads automatically through natural conversations, helping your team focus on high-value opportunities.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Seamless Website Integration",
    text: "Easily integrate QUIP into your website and provide a modern, interactive customer experience without disrupting your workflow.",
  },
];

export default function QuipSection() {
  return (
    <section
      className="relative py-24 md:py-32"
      aria-labelledby="quip-heading"
      style={{ background: "transparent" }}
    >
      {/* Gold glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(246,121,99,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>03</span>
          <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
          <span className="font-label" style={{ color: "var(--color-gold-500)" }}>
            Introducing QUIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Heading + description (cols 1-5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="quip-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-h1)",
                color: "var(--color-green-950)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              AI-Powered{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
                Customer
              </em>{" "}
              Conversations
            </h2>
            <p style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "var(--fs-body)" }}>
              QUIP by WBROOTS helps businesses engage visitors instantly with
              intelligent, AI-powered conversations. From answering customer
              queries and capturing leads to providing 24/7 support, QUIP
              enhances customer experience while reducing response times and
              support workload.
            </p>
            <Link
              href="https://quip.wb-roots.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-gold self-start mt-2"
            >
              Explore QUIP
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Right: Feature cards (cols 7-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            {QUIP_FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <GlassPanel className="p-8 h-full flex flex-col gap-6" tilt maxTilt={5}>
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,0,0,0.03)",
                      border: "1px solid var(--grid-line-abstract)",
                    }}
                  >
                    {feat.icon}
                  </div>

                  {/* Title + text */}
                  <div className="flex flex-col gap-3">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.125rem",
                        color: "var(--color-green-950)",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p style={{ color: "var(--color-green-800)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                      {feat.text}
                    </p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
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
