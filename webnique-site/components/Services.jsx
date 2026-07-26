"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const services = [
  {
    num: "01",
    category: "Web Development",
    title: "Web Design & Development",
    description:
      "Crafting responsive, visually stunning websites that reflect your brand identity and engage your audience.",
  },
  {
    num: "02",
    category: "Software Solutions",
    title: "Custom Software Solutions",
    description:
      "We build scalable, tailored software and apps that streamline your business operations and boost productivity.",
  },
  {
    num: "03",
    category: "Digital Marketing",
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing including SEO, Google Ads, Analytics, and My Business optimization to boost your online presence and drive growth.",
  },
  {
    num: "04",
    category: "Social Media",
    title: "Social Media Marketing",
    description:
      "Grow your brand presence across platforms like Instagram, Facebook, LinkedIn, and more — with creative content and strategic planning.",
  },
  {
    num: "05",
    category: "Content Creation",
    title: "Content Creation",
    description:
      "We believe great content is the heart of every successful digital strategy. Our Content Creation team transforms ideas into impactful stories that connect with audiences, drive engagement, and build brand loyalty.",
  },
  {
    num: "06",
    category: "Branding",
    title: "Creative Content & Branding",
    description:
      "From logos to blog posts and everything in between — we craft content that builds trust and connects with your audience.",
  },
];

import Image from "next/image";

// Replace SVG icons with provided WebP images
const serviceIcons = [
  <Image key="0" src="/images/services/web-dev.webp" alt="Web Development" width={64} height={64} className="object-contain" />,
  <Image key="1" src="/images/services/app-dev.webp" alt="Software Solutions" width={64} height={64} className="object-contain" />,
  <Image key="2" src="/images/services/digital-marketing-1.webp" alt="Digital Marketing" width={64} height={64} className="object-contain" />,
  <Image key="3" src="/images/services/digital-marketing-2.webp" alt="Social Media" width={64} height={64} className="object-contain" />,
  <Image key="4" src="/images/services/content-creation.webp" alt="Content Creation" width={64} height={64} className="object-contain" />,
  <Image key="5" src="/images/services/marketing-team.webp" alt="Branding" width={64} height={64} className="object-contain" />,
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="services" className="relative py-24 md:py-32" style={{ background: "transparent" }}>
      <div className="container mx-auto px-6 max-w-7xl" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-label inline-block mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
          >
            Services That We Provide
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "var(--fs-h2)" }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
        </div>

        {/* Service rows with SVG convergence */}
        <div className="space-y-8">
          {services.map((service, i) => {
            const isOdd = i % 2 === 0;
            return (
              <ServiceRow
                key={service.num}
                service={service}
                icon={serviceIcons[i]}
                index={i}
                fromLeft={isOdd}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, icon, index, fromLeft }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: false, amount: 0.3 });

  const iconAnim = {
    hidden: {
      x: fromLeft ? -60 : 60,
      opacity: 0,
      rotate: fromLeft ? -8 : 8,
      scale: 0.7,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 },
    },
  };

  const textAnim = {
    hidden: {
      x: fromLeft ? 60 : -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 + 0.15 },
    },
  };

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center py-8"
      style={{ borderBottom: "1px solid var(--grid-line-gold)" }}
    >
      {/* Icon side */}
      <motion.div
        variants={iconAnim}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`flex ${fromLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
        style={{ order: fromLeft ? 0 : 2 }}
      >
        <div
          className="w-20 h-20 flex items-center justify-center rounded-2xl"
          style={{
            background: "rgba(217,146,1,0.08)",
            border: "1px solid rgba(217,146,1,0.25)",
            animation: `float 3.5s ease-in-out ${index * 0.4}s infinite`,
          }}
        >
          {icon}
        </div>
      </motion.div>

      {/* Number (center, ghost outline) */}
      <div className="hidden md:flex justify-center" style={{ order: 1 }}>
        <span
          className="text-[4rem] font-bold leading-none select-none"
          style={{
            fontFamily: "var(--font-display)",
            WebkitTextStroke: "1px var(--grid-line-gold)",
            color: "transparent",
          }}
        >
          {service.num}
        </span>
      </div>

      {/* Text side */}
      <motion.div
        variants={textAnim}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={fromLeft ? "md:order-3" : "md:order-1"}
        style={{ order: fromLeft ? 2 : 0 }}
      >
        <span
          className="font-label block mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)", fontSize: "0.75rem" }}
        >
          {service.category}
        </span>
        <h3 className="mb-3" style={{ fontSize: "var(--fs-h3)", color: "var(--color-green-950)" }}>
          {service.title}
        </h3>
        <p className="leading-relaxed max-w-lg" style={{ fontSize: "var(--fs-body)", color: "var(--color-green-800)" }}>
          {service.description}
        </p>
      </motion.div>
    </div>
  );
}
