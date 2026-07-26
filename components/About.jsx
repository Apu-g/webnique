"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useInView } from "framer-motion";
import GlassPanel from "./GlassPanel";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const [readMore, setReadMore] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: "transparent" }}>
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        {/* Section intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-label inline-block mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
            style={{ fontSize: "var(--fs-h1)" }}
          >
            Welcome to{" "}
            <span className="text-gradient-gold" style={{ fontStyle: "italic" }}>
              Webnique
            </span>{" "}
            Digital Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-green-800 leading-relaxed"
            style={{ fontSize: "var(--fs-body)" }}
          >
            At Webnique Digital Solutions, we believe that a strong digital presence is the heartbeat of every
            successful brand. In today&apos;s ever-evolving digital world, your online identity is your first impression —
            and we&apos;re here to ensure it leaves a lasting impact.
          </motion.p>
        </div>

        {/* Read More expandable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <AnimatePresence>
            {readMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-4 text-green-800 leading-relaxed pb-6" style={{ fontSize: "var(--fs-body)" }}>
                  <p>
                    We&apos;re more than just a digital agency — we&apos;re your creative growth partners. With a team of passionate
                    designers, strategists, developers, and marketers, we bring your brand&apos;s vision to life through
                    innovative, high-quality solutions. Whether you&apos;re a startup finding your voice or an established
                    business ready to scale, we offer tailored digital services to meet your unique needs.
                  </p>
                  <p>
                    Our core strength lies in delivering end-to-end solutions — from building visually stunning,
                    responsive websites to crafting powerful social media campaigns, running result-driven ads, and
                    enhancing your online visibility through SEO. We don&apos;t believe in one-size-fits-all approaches. Every
                    business is different, and so are our strategies. Your goals become our mission.
                  </p>
                  <p>
                    At Webnique, creativity meets technology. We blend artistic vision with cutting-edge tools to create
                    meaningful digital experiences that resonate with your audience. Every project we undertake is fueled
                    by data, guided by insights, and backed by a commitment to excellence.
                  </p>
                  <p>
                    We take pride in our transparent communication, timely delivery, and long-term client relationships.
                    Our process is collaborative — we work closely with you at every step to ensure your brand stands out
                    in the digital crowd.
                  </p>
                  <p>
                    So whether you&apos;re looking to launch a brand-new website, revamp your online strategy, grow your
                    audience, or boost conversions — Webnique Digital Solutions Pvt. Ltd is your trusted partner.
                  </p>
                  <p className="text-green-950 font-medium">
                    Let&apos;s build something amazing together. Your digital success story starts here.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setReadMore(!readMore)}
            className="font-label mx-auto block transition-colors duration-300 hover:text-gold-500 focus-gold"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </motion.div>

        {/* About card with image + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <GlassPanel className="overflow-hidden">
              <img
                src="/images/about/personal-infothumb.png"
                alt="Webnique Digital Solutions"
                className="w-full h-auto object-cover"
              />
            </GlassPanel>
          </motion.div>

          {/* Mission + Vision */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <GlassPanel className="p-8 h-full">
                <span
                  className="font-label block mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
                >
                  Our Mission
                </span>
                <p className="text-bone-200 leading-relaxed" style={{ fontSize: "var(--fs-body)" }}>
                  To empower businesses with innovative and affordable digital solutions that
                  drive growth, visibility, and engagement.
                </p>
              </GlassPanel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <GlassPanel className="p-8 h-full">
                <span
                  className="font-label block mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
                >
                  Our Vision
                </span>
                <p className="text-bone-200 leading-relaxed" style={{ fontSize: "var(--fs-body)" }}>
                  To be a trusted digital partner for businesses worldwide renowned for
                  creativity, performance, and people-first strategies.
                </p>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
