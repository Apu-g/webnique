"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import GlassPanel from "./GlassPanel";

const projects = [
  {
    title: "Camera Service Centre",
    description: "For Camera Service Centre, we crafted a professional landing page to streamline service requests, designed a unique brand logo, and managed their social media presence. Through a blend of clean design, strong branding, and engaging digital content, we enhanced their online identity, improved customer interaction, and built a trusted digital presence.",
    url: "https://cameraservicecentre.in/",
    image: "/images/clients/camera.png",
  },
  {
    title: "Car Fit",
    description: "Cat-Fit's landing page introduces a smart platform for browsing and ordering premium car accessories. With a user-friendly interface, detailed product listings, and secure checkout, customers can easily find items that fit their car perfectly.",
    url: "https://www.carfit.co.in",
    image: "/images/clients/carfit.png",
  },
  {
    title: "My Fruit Bowl",
    description: "For My Fruit Bowl, we managed their landing page and social media presence to highlight fresh fruits and healthy living. By optimizing page content, improving user engagement, and curating creative social posts, we enhanced their digital reach.",
    url: "https://www.myfruitbowl.in/",
    image: "/images/clients/frute.png",
  },
  {
    title: "Lakeview Camp",
    subtitle: "Adventure Tent Stay",
    description: "For Lakeview Camp Adventure Tent Stay, we created and managed engaging social media pages that highlight lakeside adventures, camping activities, and serene stays.",
    url: null,
    image: "/images/clients/lakeview.png",
  },
  {
    title: "Proflex Window Profiles",
    description: "For Proflex Window Profiles, we managed social media pages to highlight their durable and stylish window solutions. With engaging visuals, product highlights, and creative campaigns, we built a strong brand presence online.",
    url: "https://proflexwindowprofiles.com/",
    image: "/images/clients/pwp.png",
  },
  {
    title: "Serene Aquatics",
    description: "For Serene Aquatics, we designed and developed a visually rich landing page showcasing aquariums, aquatic plants, and accessories. Alongside, we managed their social media pages with engaging content, creative visuals, and interactive posts.",
    url: "https://www.sereneaquatics.in/",
    image: "/images/clients/serene.png",
  },
  {
    title: "Shri Venkateshwara Enterprises",
    description: "Shri Venkateshwara Enterprises' landing page showcases a professional platform for exploring a wide range of industrial and commercial products. With clear categories, detailed specifications, and simple inquiry options.",
    url: null,
    image: "/images/clients/SVE.png",
  },
  {
    title: "ELLZBURGER",
    description: "For ELLZBURGER, a New Zealand restaurant, we designed a bold and modern logo that reflects the vibrant energy of gourmet street food. Alongside, we developed a sleek landing page with menu highlights, intuitive navigation, and strong call-to-actions.",
    url: "https://ellzburger.co.nz",
    image: "/images/clients/burger-2.png",
  },
  {
    title: "Saravana Industries",
    description: "For Saravana Industries, we designed a premium logo with a modern metallic look, crafted professional visiting cards, and delivered custom graphic designs to strengthen their brand presence.",
    url: null,
    image: "/images/clients/saravana.png",
  },
  {
    title: "Subbaiah Gari Hotel",
    description: "For Subbaiah Gari Hotel, we delivered a full set of branding materials including a premium logo, attractive banner designs, customized menu cards, and professional visiting cards.",
    url: null,
    image: "/images/clients/shg.jpeg",
  },
  {
    title: "Astratec",
    subtitle: "uPVC Window and Door Profiles",
    description: "For Astratec, we crafted a sleek and professional brand identity through creative graphic design. Our work included designing a premium logo, elegant visiting cards, and custom marketing materials.",
    url: null,
    image: "/images/clients/ast.jpeg",
  },
  {
    title: "Microbeworks Scientific",
    description: "For Microbeworks Scientific, we designed a clean, modern, and conversion-focused landing page that clearly communicates the brand's scientific expertise. The landing page was built with a focus on clarity, simplicity, and user-friendly flow.",
    url: "https://www.microbeworksscientific.com/",
    image: "/images/clients/microbework.png",
  },
  {
    title: "Only Frnz",
    description: "At Webnique, we handle the complete social media management for Only Frnz. Our team manages everything from content strategy, creative design, and post scheduling to audience engagement and brand positioning.",
    url: null,
    image: "/images/clients/onlyfrnz.png",
  },
  {
    title: "VVM Strategies & Solutions",
    description: "At Webnique, we provide complete digital marketing services for VVM Strategies & Solutions. Our expertise includes SEO optimization, content creation, and social media management.",
    url: "https://vvmstrategiessolutions.com/",
    image: "/images/clients/vvm.png",
  },
];

// Monitor screenshot images for the intro crossfade
const monitorScreenshots = [
  "/images/clients/carfit.png",
  "/images/clients/serene.png",
  "/images/clients/microbework.png",
  "/images/clients/burger-2.png",
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const monitorRef = useRef(null);
  const gridRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.05 });
  const [screenshotIdx, setScreenshotIdx] = useState(0);

  // Crossfade screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenshotIdx((prev) => (prev + 1) % monitorScreenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Monitor dolly-zoom on scroll
  useEffect(() => {
    if (!monitorRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Monitor scales up and blurs as user scrolls
      gsap.to(monitorRef.current, {
        scale: 2.5,
        opacity: 0,
        filter: "blur(8px)",
        ease: "power2.in",
        scrollTrigger: {
          trigger: monitorRef.current,
          start: "top 40%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Grid fades in as monitor fades out
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative" style={{ background: "var(--color-green-950)" }}>
      {/* Monitor intro */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
        {/* Gold glow behind monitor */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(246,121,99,0.15), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div ref={monitorRef} className="relative z-10" style={{ perspective: 1000 }}>
          {/* Monitor bezel */}
          <div
            className="relative w-[80vw] max-w-[700px] aspect-[16/10] overflow-hidden"
            style={{
              background: "rgba(0,0,0,0.03)",
              border: "2px solid var(--glass-border)",
              borderRadius: "16px",
              backdropFilter: "blur(var(--glass-blur))",
              boxShadow: "0 0 80px rgba(246,121,99,0.12), 0 30px 80px -20px rgba(0,0,0,0.55)",
              transform: "rotateX(4deg) rotateY(-2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Screen content — crossfading screenshots */}
            <AnimatePresence mode="wait">
              <motion.img
                key={screenshotIdx}
                src={monitorScreenshots[screenshotIdx]}
                alt="Client work showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 60px rgba(246,121,99,0.08)" }}
            />
          </div>

          {/* Monitor stand */}
          <div className="flex justify-center">
            <div
              className="w-20 h-16"
              style={{
                background: "linear-gradient(to bottom, var(--glass-border), transparent)",
                clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>

        {/* Caption below monitor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-label mt-8 text-center"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}
        >
          We blend creativity, technology, and strategy to deliver results that matter.
        </motion.p>
      </div>

      {/* Project grid */}
      <div ref={gridRef} className="container mx-auto px-6 max-w-7xl pb-24 md:pb-32 opacity-0">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="font-label inline-block mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
          >
            Our Works
          </span>
          <h2 style={{ fontSize: "var(--fs-h2)" }}>What We&apos;ve Built</h2>
        </div>

        {/* Alternating project entries */}
        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectEntry key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:[direction:rtl]"}`}
    >
      {/* Image */}
      <div className={isEven ? "" : "md:[direction:ltr]"}>
        <GlassPanel className="overflow-hidden" glowIntensity="normal">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </GlassPanel>
      </div>

      {/* Text */}
      <div className={`space-y-4 ${isEven ? "" : "md:[direction:ltr]"}`}>
        {/* Gold connector line */}
        <div
          className={`hidden md:block absolute top-1/2 h-[1px] w-12 ${isEven ? "right-0" : "left-0"}`}
          style={{ background: "var(--color-gold-500)", opacity: 0.3 }}
        />

        <span
          className="font-label"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)", fontSize: "0.75rem" }}
        >
          0{index + 1}
        </span>

        <h3 className="text-green-950" style={{ fontSize: "var(--fs-h3)" }}>
          {project.title}
          {project.subtitle && (
            <span className="text-green-800 font-normal ml-2" style={{ fontSize: "0.85em" }}>
              {project.subtitle}
            </span>
          )}
        </h3>

        <p className="text-green-800 leading-relaxed" style={{ fontSize: "var(--fs-body)" }}>
          {project.description}
        </p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-gold-500 hover:text-green-950 transition-colors group"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
