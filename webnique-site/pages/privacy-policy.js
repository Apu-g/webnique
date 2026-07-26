"use client";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    title: "1. Information Collection",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with our team. This may include your name, email address, phone number, company name, and the details of your inquiry.

We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar technologies.`,
  },
  {
    title: "2. Use of Information",
    content: `We use the information we collect to:
• Respond to your inquiries and provide our services
• Send you updates about your project or account
• Improve our website and services
• Comply with legal obligations
• Send marketing communications (with your consent)`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law. We may share your information with trusted service providers who assist us in operating our website and delivering services, subject to confidentiality obligations.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your personal information
• Opt out of marketing communications
• Lodge a complaint with a data protection authority

To exercise these rights, please contact us at contactus@webniqueds.com`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:

Webnique Digital Solutions Private Limited
302, 3rd Cross, HRBR Layout I block KalyanNagar
Bangalore 560043, India

Email: contactus@webniqueds.com
Phone: +91 9353703412`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Webnique Digital Solutions Private Limited</title>
        <meta name="description" content="Privacy Policy for Webnique Digital Solutions Private Limited. How we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.webniqueds.com/privacy-policy" />
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
              <span style={{ color: "var(--color-green-950)" }}>Privacy Policy</span>
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
              Privacy Policy
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-12"
              style={{ color: "var(--color-green-800)", lineHeight: 1.8, fontSize: "var(--fs-body)" }}
            >
              Webnique Digital Solutions Private Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </motion.p>

            {/* Sections */}
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
