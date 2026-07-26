"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import Process from "../components/Process";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

const SERVICES = [
  {
    number: "01",
    icon: <Image src="/images/services/web-dev.webp" alt="Web Development" width={400} height={400} className="object-contain" />,
    category: "Web Development",
    title: "Web Design & Development",
    description:
      "Crafting responsive, visually stunning websites that reflect your brand identity and engage your audience. Our expert team ensures your online presence is both beautiful and functional.",
  },
  {
    number: "02",
    icon: <Image src="/images/services/app-dev.webp" alt="Software Solutions" width={400} height={400} className="object-contain" />,
    category: "Software Solutions",
    title: "Custom Software Solutions",
    description:
      "We build scalable, tailored software and apps that streamline your business operations and boost productivity. From enterprise solutions to mobile applications, we've got you covered.",
  },
  {
    number: "03",
    icon: <Image src="/images/services/digital-marketing-1.webp" alt="Digital Marketing" width={400} height={400} className="object-contain" />,
    category: "Digital Marketing",
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing services including SEO optimization, Google Ads management, Analytics insights, and My Business optimization to maximize your online presence and ROI.",
  },
  {
    number: "04",
    icon: <Image src="/images/services/digital-marketing-2.webp" alt="Social Media" width={400} height={400} className="object-contain" />,
    category: "Social Media",
    title: "Social Media Marketing",
    description:
      "Strategic social media management across Instagram, Facebook, LinkedIn, and more. We create engaging content and campaigns that build your brand presence and connect with your audience.",
  },
  {
    number: "05",
    icon: <Image src="/images/services/content-creation.webp" alt="Content Creation" width={400} height={400} className="object-contain" />,
    category: "Content Creation",
    title: "Content Creation",
    description:
      "Professional video editing and content creation services that bring your brand story to life. From social media reels to marketing videos, we create content that engages and converts.",
  },
  {
    number: "06",
    icon: <Image src="/images/services/marketing-team.webp" alt="Branding" width={400} height={400} className="object-contain" />,
    category: "Branding",
    title: "Creative Content & Branding",
    description:
      "Complete branding solutions from logo design to content strategy. We help you build a cohesive brand identity that resonates with your audience and drives business growth.",
  },
];

function ServiceRow({ service, index }) {
  const rowRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const isOdd = index % 2 === 0; // 01, 03, 05 → icon left / text right

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Icon convergence
      gsap.fromTo(
        iconRef.current,
        {
          x: isOdd ? -100 : 100,
          rotation: isOdd ? -8 : 8,
          scale: 0.7,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 1.2,
          },
        }
      );
      // Text convergence (opposite side)
      gsap.fromTo(
        textRef.current,
        { x: isOdd ? 60 : -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 1.2,
          },
        }
      );
    }, rowRef);
    return () => ctx.revert();
  }, [isOdd]);

  return (
    <div
      ref={rowRef}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-12 md:py-16"
      style={{ borderBottom: "1px solid rgba(51,59,68,0.4)" }}
    >
      {/* Ghost number behind row */}
      <span
        className="absolute font-label select-none pointer-events-none opacity-[0.04]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 12vw, 10rem)",
          color: "var(--color-gold-500)",
          lineHeight: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {service.number}
      </span>

      {/* Icon (odd: cols 1-4 | even: cols 9-12) */}
      <div
        ref={iconRef}
        className={`md:col-span-4 flex items-center justify-center ${!isOdd ? "md:col-start-9 md:row-start-1" : ""}`}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          {service.icon}
        </motion.div>
      </div>

      {/* Text (odd: cols 6-12 | even: cols 1-7) */}
      <div
        ref={textRef}
        className={`flex flex-col gap-5 ${isOdd ? "md:col-span-7 md:col-start-5" : "md:col-span-7 md:col-start-1 md:row-start-1"}`}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-label"
            style={{ color: "var(--color-gold-500)" }}
          >
            {service.number}
          </span>
          <div
            className="h-px w-8"
            style={{ background: "var(--color-green-700)" }}
          />
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>
            {service.category}
          </span>
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
          {service.title}
        </h2>

        <p style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "var(--fs-body)" }}>
          {service.description}
        </p>

        <Link href="/contact" className="btn-gold self-start">
          Get Started
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Custom Software & IT Projects Solutions | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Explore our comprehensive digital services: Web Design & Development, Custom Software, Digital Marketing, Social Media, Content Creation and Creative Branding." />
        <link rel="canonical" href="https://www.webniqueds.com/services" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* Page hero */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(246,121,99,0.08), transparent 70%)",
            }}
          />
          {/* Hairline grid */}
          {[25, 50, 75].map((p) => (
            <div
              key={p}
              className="absolute top-0 bottom-0 w-px pointer-events-none"
              style={{ left: `${p}%`, background: "var(--color-green-700)", opacity: 0.12 }}
            />
          ))}

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 font-label" style={{ color: "var(--color-green-800)", fontSize: "0.75rem" }}>
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <span style={{ color: "var(--color-green-950)" }}>Services</span>
            </div>

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
                maxWidth: "700px",
              }}
            >
              Services{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
                That We Provide
              </em>
            </motion.h1>
          </div>
        </section>

        {/* Services rows — SVG convergence */}
        <section className="max-w-[1400px] mx-auto px-8 md:px-12 pb-24">
          {SERVICES.map((svc, i) => (
            <ServiceRow key={svc.number} service={svc} index={i} />
          ))}
        </section>

        {/* Process section */}
        <Process />

        {/* CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
