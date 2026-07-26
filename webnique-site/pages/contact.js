"use client";
import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassPanel from "../components/GlassPanel";

const OFFICES = [
  {
    id: "india",
    label: "India (Headquarters)",
    address: "302, 3rd Cross, HRBR Layout I block KalyanNagar,\nBangalore 560043",
    phone: "+91 9353703412",
    email: "contactus@webniqueds.com",
  },
  {
    id: "nz",
    label: "New Zealand (Partner Office)",
    address: "21 Queen Street, Auckland CBD,\nAuckland 1010, New Zealand",
    phone: "+64 223788699",
    email: "contactus@webniqueds.com",
  },
];

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState("india");
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const office = OFFICES.find((o) => o.id === activeOffice);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate send (replace with your backend/formspree endpoint)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1rem",
    background: "var(--glass-fill)",
    border: "1px solid var(--glass-border)",
    borderRadius: "12px",
    color: "var(--color-green-950)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <>
      <Head>
        <title>Contact Us | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Get in touch with Webnique Digital Solutions. Offices in Bangalore, India and Auckland, New Zealand. Let's build something great together." />
        <link rel="canonical" href="https://www.webniqueds.com/contact" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* Page Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(246,121,99,0.08), transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-label block mb-6"
              style={{ color: "var(--color-gold-500)" }}
            >
              Let's Talk
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
                maxWidth: "700px",
              }}
            >
              Have a Project in{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold-500)" }}>
                Mind?
              </em>
            </motion.h1>
          </div>
        </section>

        {/* Main grid — Form + Contact info */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact form (cols 1-7) */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel goldEdge className="p-8 md:p-12" tilt={false}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center text-center gap-6 py-16"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(246,121,99,0.15)", border: "1px solid var(--glass-gold-edge)" }}
                      >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M5 14l7 7L23 8" stroke="var(--color-gold-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--fs-h3)",
                          color: "var(--color-green-950)",
                          fontWeight: 600,
                        }}
                      >
                        Message Sent!
                      </h3>
                      <p style={{ color: "var(--color-green-800)", lineHeight: 1.7 }}>
                        Thank you for reaching out. Our team will get back to you
                        within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Jane Smith"
                            value={formState.name}
                            onChange={handleChange}
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-500)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="jane@company.com"
                            value={formState.email}
                            onChange={handleChange}
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-500)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 9999 999 999"
                            value={formState.phone}
                            onChange={handleChange}
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-500)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                            Service Needed
                          </label>
                          <select
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            style={{ ...inputStyle, cursor: "pointer" }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-500)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                          >
                            <option value="" style={{ background: "var(--color-green-800)" }}>Select a service</option>
                            {["Web Design & Development", "Custom Software Solutions", "Digital Marketing", "Social Media Marketing", "Content Creation", "Creative Content & Branding"].map((s) => (
                              <option key={s} value={s} style={{ background: "var(--color-green-800)" }}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          placeholder="Tell us about your project..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-500)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-gold"
                        disabled={submitting}
                        style={{ opacity: submitting ? 0.7 : 1 }}
                      >
                        {submitting ? "Sending..." : "Send Message"}
                        {!submitting && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </motion.div>

            {/* Contact details (cols 9-12) */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Office tabs */}
              <div className="flex gap-2">
                {OFFICES.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setActiveOffice(o.id)}
                    className="font-label px-4 py-2 rounded-full transition-all duration-300"
                    style={{
                      background:
                        activeOffice === o.id
                          ? "var(--color-gold-500)"
                          : "var(--glass-fill)",
                      border: `1px solid ${activeOffice === o.id ? "var(--color-gold-500)" : "var(--glass-border)"}`,
                      color: activeOffice === o.id ? "#fff" : "var(--color-green-800)",
                      fontSize: "11px",
                    }}
                  >
                    {o.id === "india" ? "🇮🇳 India" : "🇳🇿 New Zealand"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassPanel className="p-6 flex flex-col gap-5" tilt maxTilt={3}>
                    <h3
                      className="font-label"
                      style={{ color: "var(--color-gold-500)" }}
                    >
                      {office.label}
                    </h3>

                    {[
                      {
                        label: "Address",
                        value: office.address,
                        href: null,
                      },
                      {
                        label: "Phone",
                        value: office.phone,
                        href: `tel:${office.phone.replace(/\s/g, "")}`,
                      },
                      {
                        label: "Email",
                        value: office.email,
                        href: `mailto:${office.email}`,
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-1">
                        <span className="font-label" style={{ color: "var(--color-green-800)", fontSize: "11px" }}>
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="transition-colors duration-200"
                            style={{ color: "var(--color-green-950)", fontSize: "0.875rem", lineHeight: 1.6 }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-500)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-green-950)")}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ color: "var(--color-green-950)", fontSize: "0.875rem", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </GlassPanel>
                </motion.div>
              </AnimatePresence>

              {/* Business hours */}
              <GlassPanel className="p-6" tilt maxTilt={3}>
                <h4 className="font-label mb-4" style={{ color: "var(--color-gold-500)" }}>
                  Business Hours
                </h4>
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2"
                    style={{ borderBottom: "1px solid rgba(51,59,68,0.4)" }}
                  >
                    <span className="font-label" style={{ color: "var(--color-green-800)", fontSize: "0.8125rem" }}>
                      {h.day}
                    </span>
                    <span
                      className="font-label"
                      style={{
                        color: h.hours === "Closed" ? "var(--color-green-800)" : "var(--color-green-950)",
                        fontSize: "0.8125rem",
                        opacity: h.hours === "Closed" ? 0.5 : 1,
                      }}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </GlassPanel>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
