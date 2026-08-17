'use client';

import { useRef } from 'react';
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';

/* ── Feature cards ── */
const FEATURES = [
  {
    icon: '📈',
    title: 'Sales',
    desc: 'Data-driven strategies that accelerate your revenue growth',
    lottie: '/animations/growth.json',
  },
  {
    icon: '🎯',
    title: 'Marketing',
    desc: 'Targeted digital campaigns that reach the right audience',
    lottie: '/animations/digital-marketing.json',
  },
];

/* ── Client logos ── */
const CLIENTS = [
  { src: '/assets/Brand Logos SVG/netflix_logo.svg', alt: 'Netflix' },
  { src: '/assets/Brand Logos SVG/kfc_logo.svg', alt: 'KFC' },
  { src: '/assets/Brand Logos SVG/getir_logo.svg', alt: 'Getir' },
  { src: '/assets/Brand Logos SVG/hema_logo.svg', alt: 'Hema' },
  { src: '/assets/Brand Logos SVG/swapfiets_logo.svg', alt: 'Swapfiets' },
];

/* ── Animations ── */
const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

export default function SmartHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.7], ['blur(0px)', 'blur(12px)']);

  return (
    <MotionConfig reducedMotion="user">
      <section className="smart-hero" ref={heroRef}>

        {/* ── Background ── */}
        <div className="smart-hero__bg" aria-hidden="true">
          <span className="smart-hero__orb smart-hero__orb--1" />
          <span className="smart-hero__orb smart-hero__orb--2" />
          <span className="smart-hero__orb smart-hero__orb--3" />
          <div className="smart-hero__grid" />
        </div>

        <motion.div
          className="smart-hero__inner"
          style={{ opacity: heroOpacity, scale: heroScale, filter: heroBlur }}
        >

          {/* ═══════════ LEFT: TEXT ═══════════ */}
          <div className="smart-hero__left">

            {/* Logo + Brand */}
            <motion.div className="smart-hero__logo-wrap" {...fadeUp(0.1)}>
              <div className="smart-hero__logo-glow" />
              <img
                src="/images/logo/logo-transparent.png"
                alt="Webnique"
                className="smart-hero__logo-img"
                draggable="false"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1 className="smart-hero__title" {...fadeUp(0.25)}>
              <span className="smart-hero__title-accent">Webnique</span>
              <br />
              Digital
              <br />
              Agency
            </motion.h1>

            {/* Feature cards */}
            <motion.div className="smart-hero__features" {...fadeUp(0.45)}>
              {FEATURES.map((f) => (
                <div key={f.title} className="smart-hero__feature">
                  <div className="smart-hero__feature-icon">
                    {f.lottie ? (
                      <Lottie
                        path={f.lottie}
                        loop autoplay
                        style={{ width: 24, height: 24 }}
                      />
                    ) : (
                      <span>{f.icon}</span>
                    )}
                  </div>
                  <div className="smart-hero__feature-text">
                    <span className="smart-hero__feature-name">{f.title}</span>
                    <span className="smart-hero__feature-desc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="smart-hero__cta" {...fadeUp(0.6)}>
              <a href="/contact" className="smart-hero__btn smart-hero__btn--primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/our-works" className="smart-hero__btn smart-hero__btn--ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                Explore Our Works
              </a>
            </motion.div>

            {/* Trusted by logos */}
            <motion.div
              className="smart-hero__clients"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="smart-hero__clients-logos">
                {CLIENTS.map((c) => (
                  <img
                    key={c.alt}
                    src={c.src}
                    alt={c.alt}
                    className="smart-hero__client-logo"
                    draggable="false"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ═══════════ RIGHT: JUST THE IMAGE ═══════════ */}
          <div className="smart-hero__right">
            <motion.img
              src="/images/hero-3d-marketer.png"
              alt="Webnique Digital Marketing"
              className="smart-hero__hero-img"
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              draggable="false"
            />
          </div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          className="smart-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-hidden="true"
        >
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
