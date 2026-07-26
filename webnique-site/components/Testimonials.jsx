"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassPanel from "./GlassPanel";

const TESTIMONIALS = [
  {
    id: 1,
    author: "MicrobeWorks Scientific",
    rating: 5,
    quote:
      "Worked with Webnique Digital Solutions to develop and maintain our startup's website. They were prompt and professional. Very happy with the website!",
  },
  {
    id: 2,
    author: "Karthikeyan Palanivelan",
    rating: 5,
    quote:
      "Webnique Digital Solutions Pvt. Ltd has been an absolute game-changer for my business. Their team is highly professional, creative, and truly understands digital marketing inside out. From website design to SEO and social media management, they delivered everything on time with exceptional quality. What I loved most was their attention to detail and their willingness to go the extra mile to ensure client satisfaction. If you're looking for reliable and result-driven digital solutions, I highly recommend Webnique Digital Solutions Private Limited!",
  },
  {
    id: 3,
    author: "Gokul",
    rating: 5,
    quote:
      "Excellent service! The team at Webnique Digital Services delivered a clean, functional website on time and exactly as we envisioned. Highly professional and easy to work with. Highly recommended!",
  },
  {
    id: 4,
    author: "Tarnishta Das",
    rating: 5,
    quote:
      "Genuinely talking it is one of the best platform for quick detailed service. I really liked the services and will definitely recommend to more people.",
  },
  {
    id: 5,
    author: "Mohan",
    rating: 5,
    quote:
      "I highly recommend Webnique Digital Solution for anyone looking for top-notch website development services! Their team is incredibly professional, creative, and responsive. They understood my requirements perfectly and delivered a stunning, fully functional website on time. The design was modern, user-friendly, and tailored exactly to my brand. Communication was smooth throughout the process, and they went the extra mile to ensure everything was perfect. If you want the best website development partner, look no further than Webnique Digital Solution!",
  },
  {
    id: 6,
    author: "Hari nath",
    rating: 5,
    quote:
      "Founder AriseEnergy - Working with Webnique Digital Solutions Private Limited was a game-changer for our business. Their team understood our unique needs and delivered a fully customized software solution that streamlined our operations. Their professionalism, prompt support, and technical expertise are top-notch. Highly recommended!",
  },
  {
    id: 7,
    author: "Santhosh g",
    rating: 5,
    quote: "Wonderful service, within a few minutes I got result for logo.",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--color-gold-500)">
          <path d="M7 0l1.6 4.8H13l-4 2.9 1.5 4.8L7 9.7l-3.5 2.8 1.5-4.8L1 4.8h4.4z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleSelect = (i) => {
    setActive(i);
    startTimer(); // reset timer on interaction
  };

  return (
    <section
      id="testi"
      className="relative py-24 md:py-32"
      aria-labelledby="testi-heading"
    >
      {/* Hairline top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>08</span>
          <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
          <span className="font-label" style={{ color: "var(--color-green-800)" }}>Testimonials</span>
        </div>

        {/* Section heading */}
        <motion.h2
          id="testi-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h1)",
            color: "var(--color-green-950)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "600px",
          }}
        >
          Happy Words From{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
            Happy
          </em>{" "}
          Customer
        </motion.h2>

        {/* Main testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Active quote (cols 1-8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassPanel className="p-8 md:p-12" tilt maxTilt={5}>
                  {/* Quote mark */}
                  <div
                    className="mb-6"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      color: "var(--color-gold-500)",
                      lineHeight: 0.6,
                      opacity: 0.3,
                    }}
                  >
                    "
                  </div>

                  <StarRating count={TESTIMONIALS[active].rating} />

                  <blockquote
                    className="mt-6 mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 1.6vw, 1.375rem)",
                      color: "var(--color-green-900)",
                      lineHeight: 1.7,
                      letterSpacing: "-0.01em",
                      fontStyle: "italic",
                    }}
                  >
                    "{TESTIMONIALS[active].quote}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-label"
                      style={{
                        background: "rgba(0,0,0,0.03)",
                        border: "1px solid var(--grid-line-abstract)",
                        color: "var(--color-gold-500)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {TESTIMONIALS[active].author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-label" style={{ color: "var(--color-green-950)" }}>
                        {TESTIMONIALS[active].author}
                      </p>
                      <p className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                        Verified Client
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial selector list (cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => handleSelect(i)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="text-left p-4 rounded-2xl transition-all duration-300 focus-visible:outline-gold-500"
                style={{
                  background: active === i ? "rgba(0,0,0,0.03)" : "transparent",
                  border: `1px solid ${active === i ? "var(--grid-line-abstract)" : "var(--color-green-700)"}`,
                  boxShadow: active === i ? "0 0 20px rgba(246,121,99,0.1)" : "none",
                }}
                aria-pressed={active === i}
                aria-label={`View testimonial from ${t.author}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-label text-xs flex-shrink-0"
                    style={{
                      background: active === i ? "var(--grid-line-abstract)" : "transparent",
                      color: active === i ? "var(--color-gold-500)" : "var(--color-green-800)",
                    }}
                  >
                    {t.author.charAt(0).toUpperCase()}
                  </div>
                  <span
                    className="font-label truncate"
                    style={{
                      color: active === i ? "var(--color-green-950)" : "var(--color-green-800)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.author}
                  </span>
                </div>
                <p
                  className="text-xs line-clamp-2"
                  style={{ color: "var(--color-green-800)", lineHeight: 1.5 }}
                >
                  {t.quote.slice(0, 80)}...
                </p>

                {/* Progress bar for active */}
                {active === i && (
                  <motion.div
                    key={`progress-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="mt-3 h-px origin-left"
                    style={{ background: "var(--color-gold-500)" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Hairline bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />
    </section>
  );
}
