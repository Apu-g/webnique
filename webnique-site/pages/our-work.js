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

gsap.registerPlugin(ScrollTrigger);

// All 14 portfolio projects from extracted.md
const PROJECTS = [
  {
    id: "01",
    client: "Only Frnz",
    category: "Social Media App",
    title: "Only Frnz — Social Media App",
    description:
      "A social media app built on principles of authenticity. Our team handled the complete full-stack development.",
    live: "#",
    image: "/images/clients/onlyfrnz.png",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: "02",
    client: "Astratec",
    category: "Business Website",
    title: "Astratec — Business Website",
    description:
      "A professional corporate website showcasing Astratec's engineering solutions with a clean, trust-building design.",
    live: "#",
    image: "/images/clients/ast.png",
    tags: ["Next.js", "Tailwind", "CMS"],
  },
  {
    id: "03",
    client: "Saravana Industries",
    category: "E-commerce",
    title: "Saravana Industries — E-commerce",
    description:
      "End-to-end e-commerce solution for an industrial goods supplier, with catalog, cart, and enquiry features.",
    live: "#",
    image: "/images/clients/saravana.png",
    tags: ["React", "WooCommerce", "SEO"],
  },
  {
    id: "04",
    client: "My Fruit Bowl",
    category: "Ordering App",
    title: "My Fruit Bowl — Ordering Platform",
    description:
      "A fresh, health-forward brand with an online ordering interface for a fruit delivery service.",
    live: "#",
    image: "/images/clients/frute.png",
    tags: ["React", "Stripe", "Firebase"],
  },
  {
    id: "05",
    client: "Car Fit",
    category: "Service Booking",
    title: "Car Fit — Auto Service Booking",
    description:
      "A multi-location car service booking portal with real-time slot scheduling and SMS confirmation.",
    live: "#",
    image: "/images/clients/carfit.png",
    tags: ["Next.js", "PostgreSQL", "Twilio"],
  },
  {
    id: "06",
    client: "ELLZBURGER",
    category: "F&B Website",
    title: "ELLZBURGER — Food Brand Website",
    description:
      "Mouth-watering food photography and an irresistible digital menu for a premium burger brand.",
    live: "#",
    image: "/images/clients/burger-2.png",
    tags: ["HTML/CSS", "GSAP", "SEO"],
  },
  {
    id: "07",
    client: "Lakeview Camp",
    category: "Hospitality",
    title: "Lakeview Camp — Booking Platform",
    description:
      "A nature retreat website with breathtaking visuals, package listings, and integrated booking flow.",
    live: "#",
    image: "/images/clients/lakeview.png",
    tags: ["React", "Stripe", "CMS"],
  },
  {
    id: "08",
    client: "Serene Aquatics",
    category: "E-commerce",
    title: "Serene Aquatics — Aquarium Store",
    description:
      "A specialty aquatics store with product catalogs, care guides, and live chat support integration.",
    live: "#",
    image: "/images/clients/serene.png",
    tags: ["Shopify", "Klaviyo", "SEO"],
  },
  {
    id: "09",
    client: "Proflex Window Profiles",
    category: "B2B Website",
    title: "Proflex Window Profiles — B2B Portal",
    description:
      "A B2B product catalog and dealer enquiry portal for window profile manufacturing.",
    live: "#",
    image: "/images/clients/pwp.png",
    tags: ["Next.js", "HubSpot", "SEO"],
  },
  {
    id: "10",
    client: "MicrobeWorks Scientific",
    category: "Research Platform",
    title: "MicrobeWorks — Scientific Platform",
    description:
      "Clean, academic-grade website for a scientific startup with research publications and product catalog.",
    live: "#",
    image: "/images/clients/microbework.png",
    tags: ["React", "Strapi", "Analytics"],
  },
  {
    id: "11",
    client: "Camera Service Centre",
    category: "Service Website",
    title: "Camera Service Centre — Repair Portal",
    description:
      "A repair booking and tracking portal for a professional camera service center.",
    live: "#",
    image: "/images/clients/camera.png",
    tags: ["Next.js", "Forms", "SEO"],
  },
  {
    id: "12",
    client: "KGK",
    category: "Business Website",
    title: "KGK — Corporate Website",
    description:
      "Corporate identity website for KGK with brand storytelling and lead generation forms.",
    live: "#",
    image: "/images/clients/kgk.png",
    tags: ["React", "Formspree", "SEO"],
  },
  {
    id: "13",
    client: "Eventzr",
    category: "Event Platform",
    title: "Eventzr — Event Management App",
    description:
      "Full-featured event ticketing and management platform with organizer dashboards.",
    live: "#",
    image: "/images/clients/eventzr.png",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "14",
    client: "VVM Strategies & Solutions",
    category: "Consulting",
    title: "VVM Strategies — Consulting Website",
    description:
      "Professional consulting website with case study presentations and service inquiry flows.",
    live: "#",
    image: "/images/clients/vvm.png",
    tags: ["React", "CMS", "Analytics"],
  },
];

function PortfolioEntry({ project, index }) {
  const isOdd = index % 2 === 0;
  const ref = useRef(null);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ delay: 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-14 md:py-20"
      style={{ borderBottom: "1px solid rgba(51,59,68,0.4)" }}
    >
      {/* Image (odd: left, even: right) */}
      <div
        className={`md:col-span-6 relative overflow-hidden ${
          !isOdd ? "md:col-start-7 md:row-start-1" : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col gap-5 md:col-span-5 ${
          isOdd ? "md:col-start-8" : "md:col-start-1 md:row-start-1"
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-label"
            style={{ color: "var(--color-gold-500)" }}
          >
            {project.id}
          </span>
          <div className="h-px w-8" style={{ background: "var(--color-green-700)" }} />
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>
            {project.category}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h3)",
            color: "var(--color-green-950)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h2>

        <p style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "0.875rem" }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-label px-3 py-1 rounded-full"
              style={{
                background: "var(--glass-fill)",
                border: "1px solid var(--glass-border)",
                color: "var(--color-green-800)",
                fontSize: "11px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function MonitorHero() {
  const monitorRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dolly-zoom effect — monitor scales up as page scrolls, clip-path tightens
      gsap.fromTo(
        monitorRef.current,
        { scale: 0.75, filter: "blur(3px)" },
        {
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 flex flex-col items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(246,121,99,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-[700px] mx-auto px-8 mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-label mb-4 block"
          style={{ color: "var(--color-gold-500)" }}
        >
          Our Work
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
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
          Websites &amp;{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
            Applications
          </em>{" "}
          We've Built
        </motion.h1>
      </div>

      {/* CSS 3D Monitor */}
      <div ref={monitorRef} className="relative" style={{ perspective: "1000px" }}>
        <motion.div
          initial={{ rotateX: 8 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Monitor body */}
          <div
            className="relative rounded-[20px] p-3 overflow-hidden"
            style={{
              background: "var(--color-green-800)",
              border: "1px solid var(--glass-border)",
              boxShadow: "0 30px 100px rgba(0,0,0,0.6), 0 0 60px rgba(246,121,99,0.08)",
              width: "min(800px, 90vw)",
            }}
          >
            {/* Monitor chrome */}
            <div
              className="flex items-center gap-2 px-3 py-2 mb-1 rounded-t-xl"
              style={{ background: "var(--color-green-700)" }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              <div
                className="flex-1 mx-4 h-6 rounded-full flex items-center px-3"
                style={{ background: "var(--color-green-900)" }}
              >
                <span className="font-label" style={{ color: "var(--color-ash-400)", fontSize: "11px" }}>
                  webniqueds.com
                </span>
              </div>
            </div>

            {/* Screen content */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: "var(--color-green-950)", aspectRatio: "16/9" }}
            >
              {/* Grid of portfolio preview thumbnails */}
              <div className="grid grid-cols-3 gap-2 p-4" style={{ height: "100%" }}>
                {PROJECTS.slice(0, 6).map((p, i) => (
                  <div
                    key={p.id}
                    className="rounded-lg overflow-hidden relative flex items-center justify-center"
                    style={{ aspectRatio: "16/9", background: "var(--color-green-950)" }}
                  >
                    <img
                      src={p.image}
                      alt={p.client}
                      className="w-full h-full object-contain"
                      style={{ opacity: 0.85 }}
                      onError={(e) => { e.currentTarget.style.opacity = "0"; }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 px-2 py-1.5"
                      style={{ background: "rgba(20,24,28,0.85)" }}
                    >
                      <span className="font-label" style={{ color: "var(--color-bone-100)", fontSize: "9px" }}>
                        {p.client}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monitor stand */}
          <div className="flex justify-center">
            <div
              className="w-24 h-4 rounded-b-xl"
              style={{ background: "var(--color-green-700)" }}
            />
          </div>
          <div
            className="mx-auto w-32 h-1.5 rounded-full"
            style={{ background: "var(--color-green-700)", boxShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  return (
    <>
      <Head>
        <title>Our Works | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Explore Webnique Digital Solutions' portfolio of websites, apps, and digital products built for clients across India and New Zealand." />
        <link rel="canonical" href="https://www.webniqueds.com/our-work" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* 3D Monitor dolly-zoom hero */}
        <div className="pt-20">
          <MonitorHero />
        </div>

        {/* Portfolio entries */}
        <section className="max-w-[1400px] mx-auto px-8 md:px-12 pb-24">
          {PROJECTS.map((project, i) => (
            <PortfolioEntry key={project.id} project={project} index={i} />
          ))}
        </section>

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
