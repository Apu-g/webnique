'use client';

import { useRef } from 'react';
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';

const FLOATERS = [
  {
    type: 'img',
    src: '/animations/hero-backend.png',
    label: 'Backend & Code',
    className: 'webnique-hero__floater--code',
    dur: 11, delay: 0, dx: 14, dy: -22, rot: 5,
  },
  {
    type: 'img',
    src: '/animations/hero-marketing.png',
    label: 'Digital Marketing',
    className: 'webnique-hero__floater--marketing',
    dur: 10, delay: 0.4, dx: -14, dy: 20, rot: -5,
  },
  {
    type: 'lottie',
    path: '/animations/growth.json',
    label: 'Business Growth',
    className: 'webnique-hero__floater--growth',
    dur: 12, delay: 0.7, dx: 12, dy: -18, rot: 4,
  },
  {
    type: 'lottie',
    path: '/animations/content-creation.json',
    label: 'Content Creation',
    className: 'webnique-hero__floater--content',
    dur: 13, delay: 0.9, dx: -12, dy: 16, rot: -4,
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroBlur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(12px)']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="webnique-hero" ref={heroRef}>
        <div className="webnique-hero__bg" aria-hidden="true">
          <span className="webnique-hero__orb webnique-hero__orb--1" />
          <span className="webnique-hero__orb webnique-hero__orb--2" />
          <span className="webnique-hero__orb webnique-hero__orb--3" />
          <div className="webnique-hero__grid" />
        </div>

        <motion.div
          className="webnique-hero__fx"
          style={{ filter: heroBlur, opacity: heroOpacity, scale: heroScale }}
        >
          {FLOATERS.map((floater) => {
            const { label, className, dur, delay, dx, dy, rot } = floater;
            return (
              <motion.div
                key={label}
                className={`webnique-hero__floater ${className}`}
                aria-label={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [0, dx, 0],
                  y: [0, dy, 0],
                  rotate: [0, rot, -rot, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 + delay },
                  scale: { duration: 0.6, delay: 0.4 + delay },
                  x: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {floater.type === 'lottie' ? (
                  <Lottie
                    className="webnique-hero__floater-img"
                    path={floater.path}
                    loop
                    autoplay
                  />
                ) : (
                  <img
                    className="webnique-hero__floater-img"
                    src={floater.src}
                    alt={label}
                    draggable="false"
                  />
                )}
                <span className="webnique-hero__floater-label">{label}</span>
              </motion.div>
            );
          })}

          <div className="webnique-hero__content">
            <motion.div
              className="webnique-hero__logo"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img src="/images/logo/logo-transparent.png" alt="Webnique" />
            </motion.div>

            <motion.p
              className="webnique-hero__brand"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              Webnique Digital Solutions
            </motion.p>

            <motion.h1
              className="webnique-hero__title"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Your Digital Transformation
              <span className="webnique-hero__title-accent">Starts Here</span>
            </motion.h1>

            <motion.p
              className="webnique-hero__subtitle"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            >
              Empowering Digital Growth Through Integrity and Innovation
            </motion.p>

            <motion.div
              className="webnique-hero__cta"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <a className="webnique-hero__btn webnique-hero__btn--gold" href="#services">
                Get Started
              </a>
              <a className="webnique-hero__btn webnique-hero__btn--ghost" href="/our-works">
                View Our Works
              </a>
            </motion.div>
          </div>

          <motion.div
            className="webnique-hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            aria-hidden="true"
          >
            <span>scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>

        <div className="webnique-hero__veil" aria-hidden="true" />
      </section>
    </MotionConfig>
  );
}
