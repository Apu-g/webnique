"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassPanel from "./GlassPanel";

import Image from "next/image";

const SERVICES = [
  {
    number: "01",
    icon: <Image src="/images/services/web-dev.webp" alt="Web Development" width={48} height={48} className="object-contain" />,
    category: "Web Development",
    title: "Web Design & Development",
    description:
      "Crafting responsive, visually stunning websites that reflect your brand identity and engage your audience. Our expert team ensures your online presence is both beautiful and functional.",
  },
  {
    number: "02",
    icon: <Image src="/images/services/app-dev.webp" alt="Software Solutions" width={48} height={48} className="object-contain" />,
    category: "Software Solutions",
    title: "Custom Software Solutions",
    description:
      "We build scalable, tailored software and apps that streamline your business operations and boost productivity. From enterprise solutions to mobile applications, we've got you covered.",
  },
  {
    number: "03",
    icon: <Image src="/images/services/digital-marketing-1.webp" alt="Digital Marketing" width={48} height={48} className="object-contain" />,
    category: "Digital Marketing",
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing including SEO, Google Ads, Analytics, and My Business optimization to boost your online presence and drive growth.",
  },
  {
    number: "04",
    icon: <Image src="/images/services/digital-marketing-2.webp" alt="Social Media" width={48} height={48} className="object-contain" />,
    category: "Social Media",
    title: "Social Media Marketing",
    description:
      "Grow your brand presence across platforms like Instagram, Facebook, LinkedIn, and more — with creative content and strategic planning.",
  },
  {
    number: "05",
    icon: <Image src="/images/services/content-creation.webp" alt="Content Creation" width={48} height={48} className="object-contain" />,
    category: "Content Creation",
    title: "Content Creation",
    description:
      "We believe great content is the heart of every successful digital strategy. Our Content Creation team transforms ideas into impactful stories.",
  },
  {
    number: "06",
    icon: <Image src="/images/services/marketing-team.webp" alt="Branding" width={48} height={48} className="object-contain" />,
    category: "Branding",
    title: "Creative Content & Branding",
    description:
      "From logos to blog posts and everything in between — we craft content that builds trust and connects with your audience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      {/* Section hairline top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>04</span>
            <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>
              Services That We Provide
            </span>
          </div>
          <Link href="/services" className="btn-ghost">
            All Services →
          </Link>
        </div>

        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[700px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h1)",
            color: "var(--color-green-950)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Comprehensive{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
            Digital
          </em>{" "}
          Solutions for Your Business Growth
        </motion.h2>

        {/* Service cards — 2-col then 3-col at large */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassPanel className="p-6 h-full flex flex-col gap-5 group" tilt maxTilt={5}>
                {/* Ghost number */}
                <span
                  className="absolute top-0 right-4 font-label select-none pointer-events-none transition-opacity duration-300 opacity-5 group-hover:opacity-10"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "4.5rem",
                    color: "var(--color-gold-500)",
                    lineHeight: 1,
                  }}
                >
                  {svc.number}
                </span>

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  {svc.icon}
                </motion.div>

                {/* Category eyebrow */}
                <span className="font-label" style={{ color: "var(--color-gold-500)", fontSize: "11px" }}>
                  {svc.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--fs-h3)",
                    color: "var(--color-green-950)",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p style={{ color: "var(--color-green-800)", lineHeight: 1.7, fontSize: "0.875rem", flexGrow: 1 }}>
                  {svc.description}
                </p>

                {/* Learn more arrow */}
                <Link
                  href="/services"
                  className="font-label flex items-center gap-2 transition-colors duration-200 self-start mt-auto"
                  style={{ color: "var(--color-green-800)", fontSize: "0.8125rem" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-gold-500)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-green-800)")
                  }
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </GlassPanel>
            </motion.div>
          ))}
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
