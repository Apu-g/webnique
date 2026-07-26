"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import GlassPanel from "../components/GlassPanel";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";

const TEAM = [
  {
    name: "Deepak Raj O S",
    role: "Founder & Managing Director",
    image: "/images/profile/md_sir.jpeg",
    bio: "Dynamic professional with a deep passion for digital innovation and storytelling. Deepak's vision is to make top-tier digital services accessible to businesses of all sizes — driven by creativity, integrity, and results.",
  },
];

const VALUES = [
  {
    icon: "✦",
    title: "Trust & Integrity",
    text: "We believe in building relationships based on honesty and transparency — not just projects, but lasting partnerships.",
  },
  {
    icon: "◈",
    title: "Innovation First",
    text: "Blending the latest technologies with creative thinking to deliver solutions that are both beautiful and effective.",
  },
  {
    icon: "◉",
    title: "Client-Centric",
    text: "Your goals become our mission. We don't believe in one-size-fits-all approaches — every strategy is tailored to you.",
  },
  {
    icon: "⬡",
    title: "Quality Excellence",
    text: "Every pixel, every line of code, every campaign is crafted with precision and care to meet the highest standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Webnique Digital Solutions — your creative growth partners. Passionate designers, strategists, developers and marketers based in India and New Zealand." />
        <link rel="canonical" href="https://www.webniqueds.com/about" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* ── Page Hero ── */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(246,121,99,0.08), transparent 70%)",
            }}
          />
          {[25, 50, 75].map((p) => (
            <div
              key={p}
              className="absolute top-0 bottom-0 w-px pointer-events-none"
              style={{ left: `${p}%`, background: "var(--color-green-700)", opacity: 0.12 }}
            />
          ))}

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-label block mb-6"
                style={{ color: "var(--color-gold-500)" }}
              >
                01 / About Webnique
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--fs-h1)",
                  color: "var(--color-green-950)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Welcome to{" "}
                <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
                  Webnique
                </em>{" "}
                Digital Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 max-w-[560px]"
                style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "var(--fs-body)" }}
              >
                At Webnique Digital Solutions, we believe that a strong digital
                presence is the heartbeat of every successful brand. We're more
                than just a digital agency — we're your creative growth partners.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link href="/contact" className="btn-gold">
                  Work With Us
                </Link>
                <Link href="/our-work" className="btn-ghost">
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <motion.div
              className="lg:col-span-5 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { v: "14+", l: "Projects Shipped" },
                { v: "2+", l: "Countries" },
                { v: "8+", l: "Industries" },
                { v: "100%", l: "Client Satisfaction" },
              ].map((s) => (
                <GlassPanel key={s.l} className="p-6 flex flex-col gap-2" tilt maxTilt={4}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      color: "var(--color-gold-500)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.v}
                  </span>
                  <span className="font-label" style={{ color: "var(--color-green-800)" }}>
                    {s.l}
                  </span>
                </GlassPanel>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="py-24 md:py-32" style={{ borderTop: "1px solid rgba(51,59,68,0.3)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="font-label" style={{ color: "var(--color-green-800)" }}>02</span>
                <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
                <span className="font-label" style={{ color: "var(--color-green-800)" }}>Our Story</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--fs-h2)",
                  color: "var(--color-green-950)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                }}
              >
                Creativity meets{" "}
                <em style={{ color: "var(--color-gold-500)", fontStyle: "italic" }}>
                  Technology
                </em>
              </h2>

              <p style={{ color: "var(--color-green-800)", lineHeight: 1.75 }}>
                With a team of passionate designers, strategists, developers, and
                marketers, we bring your brand's vision to life through innovative,
                high-quality solutions. Whether you're a startup finding your voice
                or an established business ready to scale, we offer tailored
                digital services to meet your unique needs.
              </p>
              <p style={{ color: "var(--color-green-800)", lineHeight: 1.75 }}>
                Our core strength lies in delivering end-to-end solutions — from
                building visually stunning, responsive websites to crafting powerful
                social media campaigns, running result-driven ads, and enhancing your
                online visibility through SEO.
              </p>
              <p style={{ color: "var(--color-green-800)", lineHeight: 1.75 }}>
                At Webnique, creativity meets technology. We blend artistic vision
                with cutting-edge tools to create meaningful digital experiences
                that resonate with your audience.
              </p>
            </motion.div>

            {/* Founder photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel goldEdge className="p-4 md:p-6" tilt maxTilt={4}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-xs mx-auto">
                  <Image
                    src="/images/profile/md_sir.jpeg"
                    alt="Deepak Raj O S — Founder & Managing Director"
                    fill
                    className="object-cover"
                  />
                  {/* Duotone overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(20,24,28,0.85) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.125rem",
                        color: "var(--color-bone-100)",
                        fontWeight: 600,
                      }}
                    >
                      Deepak Raj O S
                    </p>
                    <span className="font-label" style={{ color: "var(--color-gold-500)", fontSize: "11px" }}>
                      Founder & Managing Director
                    </span>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 md:py-32" style={{ borderTop: "1px solid rgba(51,59,68,0.3)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-12">
            <div className="flex items-center gap-4 mb-16">
              <span className="font-label" style={{ color: "var(--color-green-800)" }}>03</span>
              <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
              <span className="font-label" style={{ color: "var(--color-green-800)" }}>Our Values</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassPanel className="p-6 h-full flex flex-col gap-4" tilt maxTilt={5}>
                    <span style={{ fontSize: "2rem", color: "var(--color-gold-500)" }}>{v.icon}</span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.125rem",
                        color: "var(--color-green-950)",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ color: "var(--color-green-800)", lineHeight: 1.7, fontSize: "0.875rem", flexGrow: 1 }}>
                      {v.text}
                    </p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ClientLogos />
        <Testimonials />
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
