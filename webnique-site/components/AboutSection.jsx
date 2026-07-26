"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassPanel from "./GlassPanel";

const SERVICES = [
  "Web Design & Development",
  "Custom Software Solutions",
  "Digital Marketing Services",
  "Social Media Marketing",
  "Content Creation",
  "Creative Content & Branding",
];

const MISSION = {
  title: "Our Mission",
  text: "To empower businesses with innovative and affordable digital solutions that drive growth, visibility, and engagement.",
  link: "/about",
  linkLabel: "Know more →",
};

const VISION = {
  title: "Our Vision",
  text: "To be a trusted digital partner for businesses worldwide renowned for creativity, performance, and people-first strategies.",
  link: "/contact",
  linkLabel: "Contact Us →",
};

function GoldStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 0l1.8 5.5H16l-4.7 3.4 1.8 5.5L8 11l-5.1 3.4 1.8-5.5L0 5.5h6.2z" fill="var(--color-gold-500)" opacity="0.8" />
    </svg>
  );
}

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── Marquee ──────────────────────────── */}
      <section className="relative overflow-hidden py-6 hairline-x" aria-label="Services marquee">
        {/* Left/Right fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-green-950), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-green-950), transparent)" }}
        />
        <div className="overflow-hidden">
          <div className="marquee-track">
            {/* Double the items for seamless loop */}
            {[...SERVICES, ...SERVICES].map((svc, i) => (
              <span key={i} className="flex items-center gap-4 flex-shrink-0 group">
                <span
                  className="font-label whitespace-nowrap transition-colors duration-200 group-hover:text-bone"
                  style={{ color: "var(--color-green-800)", fontSize: "0.875rem" }}
                >
                  {svc}
                </span>
                <GoldStar />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ────────────────────── */}
      <section className="relative py-24 md:py-32" aria-labelledby="about-heading">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>
              02
            </span>
            <div
              className="h-px w-12"
              style={{ background: "var(--color-green-700)" }}
            />
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>
              About Us
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Headline + copy (cols 1-7) */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                id="about-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--fs-h1)",
                  color: "var(--color-green-950)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Welcome to{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--color-gold-500)",
                  }}
                >
                  Webnique
                </em>{" "}
                Digital Solutions
              </h2>

              <p style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "var(--fs-body)" }}>
                At Webnique Digital Solutions, we believe that a strong digital
                presence is the heartbeat of every successful brand. In today's
                ever-evolving digital world, your online identity is your first
                impression — and we're here to ensure it leaves a lasting impact.
              </p>

              {/* Expandable content */}
              <motion.div
                animate={{ height: expanded ? "auto" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-4 pt-2" style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "var(--fs-body)" }}>
                  <p>
                    We're more than just a digital agency — we're your creative
                    growth partners. With a team of passionate designers,
                    strategists, developers, and marketers, we bring your brand's
                    vision to life through innovative, high-quality solutions.
                    Whether you're a startup finding your voice or an established
                    business ready to scale, we offer tailored digital services to
                    meet your unique needs.
                  </p>
                  <p>
                    Our core strength lies in delivering end-to-end solutions —
                    from building visually stunning, responsive websites to
                    crafting powerful social media campaigns, running result-driven
                    ads, and enhancing your online visibility through SEO. We don't
                    believe in one-size-fits-all approaches. Every business is
                    different, and so are our strategies. Your goals become our
                    mission.
                  </p>
                  <p>
                    At Webnique, creativity meets technology. We blend artistic
                    vision with cutting-edge tools to create meaningful digital
                    experiences that resonate with your audience.
                  </p>
                </div>
              </motion.div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="btn-ghost self-start"
                aria-expanded={expanded}
              >
                {expanded ? "Read Less" : "Read More"}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transform: expanded ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>

            {/* Right: Mission / Vision cards (cols 8-12) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[MISSION, VISION].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassPanel className="p-6 md:p-8" tilt maxTilt={3}>
                    {/* Ghost numeral behind card */}
                    <span
                      className="absolute top-2 right-4 font-label opacity-5 select-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "5rem",
                        color: "var(--color-gold-500)",
                        lineHeight: 1,
                      }}
                    >
                      0{i + 1}
                    </span>

                    <div className="flex flex-col gap-4">
                      <span
                        className="font-label"
                        style={{ color: "var(--color-gold-500)" }}
                      >
                        {card.title}
                      </span>
                      <p
                        style={{
                          color: "var(--color-green-900)",
                          lineHeight: 1.65,
                          fontSize: "var(--fs-body)",
                        }}
                      >
                        {card.text}
                      </p>
                      <Link
                        href={card.link}
                        className="font-label mt-2 transition-colors duration-200"
                        style={{
                          color: "var(--color-green-800)",
                          fontSize: "0.8125rem",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--color-gold-500)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--color-green-800)")
                        }
                      >
                        {card.linkLabel}
                      </Link>
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
    </>
  );
}
