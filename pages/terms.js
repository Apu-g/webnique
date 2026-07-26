"use client";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Webnique Digital Solutions website and services, you accept and agree to be bound by the Terms and Conditions set forth below. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "2. Services",
    content: `Webnique Digital Solutions Private Limited provides digital services including but not limited to web design and development, custom software solutions, digital marketing, social media marketing, content creation, and creative branding. The scope of services for each client engagement is defined in individual service agreements or proposals.`,
  },
  {
    title: "3. Intellectual Property",
    content: `All content on this website, including text, graphics, logos, images, and software, is the property of Webnique Digital Solutions Private Limited or its content suppliers and is protected by applicable intellectual property laws.

Upon full payment of all fees, clients will own the final deliverables created specifically for them. However, we retain the right to use completed work for portfolio and promotional purposes unless otherwise agreed in writing.`,
  },
  {
    title: "4. Client Responsibilities",
    content: `Clients agree to:
• Provide accurate and complete information required for service delivery
• Review and approve deliverables within agreed timeframes
• Make payments as specified in the service agreement
• Provide necessary access, assets, and resources for project completion
• Ensure they have the rights to any materials they provide to us`,
  },
  {
    title: "5. Payment Terms",
    content: `Payment terms are specified in individual service agreements. Generally, projects require a deposit before work commences. Final deliverables will be released upon receipt of full payment. Webnique reserves the right to pause or terminate services for overdue accounts.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `Webnique Digital Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client for the specific service in question.

We do not guarantee specific outcomes such as search engine rankings, social media follower counts, or revenue increases, as these depend on many factors outside our control.`,
  },
  {
    title: "7. Termination",
    content: `Either party may terminate a service agreement with written notice as specified in the individual agreement. Upon termination, the client is responsible for payment of all work completed to the date of termination. Webnique will deliver all completed work upon receipt of outstanding payments.`,
  },
  {
    title: "8. Governing Law",
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts in Bangalore, Karnataka, India.`,
  },
  {
    title: "9. Changes to Terms",
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.`,
  },
  {
    title: "10. Contact",
    content: `For questions about these Terms and Conditions, please contact:

Webnique Digital Solutions Private Limited
302, 3rd Cross, HRBR Layout I block KalyanNagar
Bangalore 560043, India

Email: contactus@webniqueds.com
Phone: +91 9353703412`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Terms and Conditions for Webnique Digital Solutions Private Limited. Governing the use of our website and services." />
        <link rel="canonical" href="https://www.webniqueds.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Navbar />

      <main id="main-content">
        <section className="relative pt-40 pb-24">
          <div className="max-w-[860px] mx-auto px-8 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 font-label" style={{ color: "var(--color-green-800)", fontSize: "0.75rem" }}>
              <Link href="/" className="transition-colors duration-200" onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-500)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-green-800)")}>
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "var(--color-green-950)" }}>Terms & Conditions</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-h1)",
                color: "var(--color-green-950)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Terms &amp; Conditions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-label mb-16"
              style={{ color: "var(--color-green-800)" }}
            >
              Effective Date: January 1, 2025 · Last Updated: January 1, 2025
            </motion.p>

            <div className="flex flex-col gap-12">
              {SECTIONS.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ delay: i * 0.04, duration: 0.6 }}
                >
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--fs-h3)",
                      color: "var(--color-green-950)",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {section.title}
                  </h2>
                  <div
                    style={{
                      color: "var(--color-green-800)",
                      lineHeight: 1.8,
                      fontSize: "var(--fs-body)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {section.content}
                  </div>
                  <div
                    className="mt-12 h-px"
                    style={{ background: "var(--color-green-700)", opacity: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
