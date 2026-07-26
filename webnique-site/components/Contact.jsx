"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import GlassPanel from "./GlassPanel";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const [activeTab, setActiveTab] = useState("india");
  const [formStatus, setFormStatus] = useState(null); // null | "success" | "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://webniqueds.com/sendmail.php", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      if (text.trim() === "success") {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32" style={{ background: "transparent" }}>
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-label inline-block mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold-500)" }}
          >
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "var(--fs-h2)" }}
          >
            Feel Free to Contact Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassPanel className="p-8 md:p-10" hoverable={false}>
              <h3 className="text-green-950 mb-8" style={{ fontSize: "var(--fs-h3)" }}>
                Leave a Reply
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-label block mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl text-green-950 placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--glass-border)",
                      fontFamily: "var(--font-body)",
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-label block mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl text-green-950 placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--glass-border)",
                      fontFamily: "var(--font-body)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-label block mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl text-green-950 placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all resize-none"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--glass-border)",
                      fontFamily: "var(--font-body)",
                    }}
                    placeholder="Tell us about your project"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-green-950 transition-all duration-300 hover:shadow-[0_0_40px_rgba(246,121,99,0.45)] hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 focus-gold"
                  style={{ background: "var(--color-gold-500)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                      style={{ color: "#4ade80" }}
                    >
                      Message sent successfully. We&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {formStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                      style={{ color: "var(--color-ruby-pop)" }}
                    >
                      Something went wrong. Please try again or email us directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassPanel>
          </motion.div>

          {/* Contact info + Address tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-6"
          >
            <GlassPanel className="p-8" hoverable={false}>
              <h4 className="text-green-950 mb-6" style={{ fontSize: "var(--fs-h3)" }}>
                Contact Info
              </h4>

              <div className="space-y-5">
                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Email
                  </span>
                  <a href="mailto:contactus@webniqueds.com" className="text-green-950 hover:text-gold-500 transition-colors">
                    contactus@webniqueds.com
                  </a>
                </div>

                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Phone
                  </span>
                  <div className="text-green-950 space-y-1 text-sm">
                    <div>IN +91 9353703412</div>
                    <div>NZ +64 223788699</div>
                  </div>
                </div>

                <div>
                  <span className="font-label block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-green-800)" }}>
                    Location
                  </span>
                  <span className="text-green-950 text-sm">India | New Zealand</span>
                </div>
              </div>
            </GlassPanel>

            {/* Address tabs */}
            <GlassPanel className="p-6" hoverable={false}>
              <div className="flex gap-1 mb-4 p-1 rounded-lg" style={{ background: "transparent" }}>
                {["india", "nz"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 focus-gold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: activeTab === tab ? "var(--color-gold-500)" : "transparent",
                      color: activeTab === tab ? "var(--color-green-950)" : "var(--color-green-800)",
                    }}
                  >
                    {tab === "india" ? "India" : "New Zealand"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "india" ? (
                  <motion.div
                    key="india"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-bone-200 leading-relaxed"
                  >
                    <strong className="block mb-1 text-green-950">India (Headquarters)</strong>
                    302, 3rd Cross, HRBR Layout I block KalyanNagar, Bangalore 560043
                  </motion.div>
                ) : (
                  <motion.div
                    key="nz"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-bone-200 leading-relaxed"
                  >
                    <strong className="block mb-1 text-green-950">New Zealand (Operational Partner Office)</strong>
                    <span className="text-green-800 block mb-1">In collaboration with our Channel Partner</span>
                    42 Willcott Street, Mt Albert, Auckland, 1025
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
