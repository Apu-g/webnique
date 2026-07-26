"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const SOCIAL = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/12LFfs5bPy7/", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/webniquedigitalsolutions?igsh=bTB3cmgzZmd5bjk=", label: "Instagram" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/webnique-digital-solutions/", label: "LinkedIn" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@WebniqueDigitalSolutions", label: "YouTube" },
];

const NAV_COLS = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Works", href: "/our-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web Design & Development", href: "/services" },
      { label: "Custom Software", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
      { label: "Social Media", href: "/services" },
      { label: "Content Creation", href: "/services" },
      { label: "Branding", href: "/services" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "transparent" }}
      aria-label="Site footer"
    >
      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.4 }}
      />

      {/* ── Get In Touch band ── */}
      <div
        className="relative py-16 md:py-20"
        style={{
          background: "transparent",
        }}
      >
        {/* Gold ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(246,121,99,0.06), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder section (cols 1-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="font-label" style={{ color: "var(--color-gold-500)" }}>
                Get In Touch
              </span>

              <div className="flex items-start gap-5">
                {/* Founder circular photo */}
                <div
                  className="relative w-20 h-20 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: "2px solid var(--grid-line-abstract)" }}
                >
                  <Image
                    src="/images/profile/md_sir.jpeg"
                    alt="Deepak Raj O S — Founder & MD"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      color: "var(--color-green-950)",
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    Deepak Raj O S
                  </p>
                  <span className="font-label" style={{ color: "var(--color-gold-500)" }}>
                    Founder & Managing Director
                  </span>
                </div>
              </div>

              <p style={{ color: "var(--color-green-800)", lineHeight: 1.75, fontSize: "0.875rem" }}>
                Meet Deepak Raj O S, the Founder &amp; Managing Director of Webnique
                Digital Solutions Pvt. Ltd. A dynamic professional with a deep passion
                for digital innovation and storytelling. His vision is to make top-tier
                digital services accessible to businesses of all sizes — driven by
                creativity, integrity, and results.
              </p>

              <a
                href="mailto:contactus@webniqueds.com"
                className="font-label transition-colors duration-200"
                style={{ color: "var(--color-green-800)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-gold-500)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-green-800)")
                }
              >
                contactus@webniqueds.com
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--glass-border)",
                      color: "var(--color-green-800)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--color-gold-500)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "var(--color-gold-500)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--color-green-800)";
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns (cols 7-12) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              {NAV_COLS.map((col) => (
                <div key={col.heading} className="flex flex-col gap-4">
                  <span
                    className="font-label"
                    style={{ color: "var(--color-green-950)", marginBottom: "0.5rem" }}
                  >
                    {col.heading}
                  </span>
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors duration-200 font-label"
                      style={{ color: "var(--color-green-800)", fontSize: "0.8125rem" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-gold-500)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-green-800)")
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="py-6"
        style={{ borderTop: "1px solid var(--color-green-700)", opacity: 1 }}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <div className="relative w-[100px] h-[30px]">
            <Image
              src="/images/logo/logo-transparent.png"
              alt="Webnique Digital Solutions"
              fill
              sizes="100px"
              className="object-contain object-left"
            />
          </div>

          {/* Copyright */}
          <span
            className="font-label"
            style={{ color: "var(--color-green-800)", fontSize: "0.75rem", opacity: 0.7 }}
          >
            Copyright © 2025 Webnique Digital Solutions Private Limited. All rights reserved.
          </span>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-label transition-colors duration-200"
              style={{ color: "var(--color-green-800)", fontSize: "0.75rem" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold-500)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-green-800)")
              }
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-label transition-colors duration-200"
              style={{ color: "var(--color-green-800)", fontSize: "0.75rem" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold-500)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-green-800)")
              }
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
