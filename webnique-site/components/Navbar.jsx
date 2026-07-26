"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Works", href: "/our-work" },
  { label: "Testimonial", href: "/#testi" },
  { label: "Contact", href: "/contact" },
];

// QUIP dropdown — homepage only
const QUIP_ITEM = {
  label: "Products",
  dropdown: [
    {
      label: "QUIP",
      href: "https://quip.wb-roots.com/",
      logo: "/images/logo/quip.png",
      external: true,
    },
  ],
};

export default function Navbar({ showProducts = false }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(239, 235, 227, 0.85)"
            : "transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.05)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div
          className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between"
          style={{ height: scrolled ? "64px" : "80px", transition: "height 0.4s ease" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-[160px] h-[48px]">
              <Image
                src="/images/logo/logo-transparent.png"
                alt="Webnique Digital Solutions"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-label text-ash transition-colors duration-200 relative group"
                style={{
                  color: isActive(item.href)
                    ? "var(--color-gold-500)"
                    : "var(--color-green-800)",
                }}
              >
                {item.label}
                {/* Active dot */}
                {isActive(item.href) && (
                  <span
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--color-gold-500)" }}
                  />
                )}
                {/* Hover underline */}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--color-gold-500)" }}
                />
              </Link>
            ))}

            {/* Products dropdown — homepage only */}
            {showProducts && (
              <div className="relative">
                <button
                  className="font-label text-ash transition-colors duration-200 flex items-center gap-1"
                  style={{ color: "var(--color-green-800)" }}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {QUIP_ITEM.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 p-2 rounded-xl min-w-[160px]"
                      style={{
                        background: "var(--color-green-800)",
                        border: "1px solid var(--glass-border)",
                        backdropFilter: "blur(20px)",
                      }}
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      {QUIP_ITEM.dropdown.map((d) => (
                        <a
                          key={d.label}
                          href={d.href}
                          target={d.external ? "_blank" : undefined}
                          rel={d.external ? "noreferrer" : undefined}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200"
                          style={{ color: "var(--color-green-950)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                              src={d.logo}
                              alt={d.label}
                              fill
                              sizes="32px"
                              className="object-contain"
                            />
                          </div>
                          <span className="font-label text-xs">{d.label}</span>
                          <svg
                            className="ml-auto opacity-50"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 8L8 2M8 2H3M8 2v5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-gold focus-visible:outline-gold-500"
            >
              Let's Talk
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-gold-500"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px"
                style={{ background: "var(--color-green-950)" }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px"
                style={{ background: "var(--color-green-950)" }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px"
                style={{ background: "var(--color-green-950)" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: "var(--color-green-950)" }}
          >
            {/* Noise on drawer */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
            <nav className="relative flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block py-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 6vw, 3.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: isActive(item.href)
                        ? "var(--color-gold-500)"
                        : "var(--color-green-950)",
                      lineHeight: 1.1,
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {/* Hairline between items */}
                  <div
                    className="w-full h-px"
                    style={{ background: "var(--color-green-700)", opacity: 0.4 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="btn-gold self-start"
                  onClick={() => setMobileOpen(false)}
                >
                  Let's Talk
                </Link>
              </motion.div>
            </nav>

            {/* Corner label */}
            <div className="absolute bottom-8 left-8">
              <span className="font-label text-ash opacity-40 text-[11px]">
                India | New Zealand
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
