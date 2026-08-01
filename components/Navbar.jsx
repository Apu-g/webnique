'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from './TransitionContext';

const PRODUCTS = [
  { name: 'Quip', href: 'https://quip.wb-roots.com/', desc: 'AI-powered customer support' },
  { name: 'WBFlow', href: 'https://wbflow.wb-roots.com/', desc: 'Business management simplified' },
];

const NAV_ITEMS = [
  { label: 'Home', route: '/' },
  { label: 'Works', route: '/our-works' },
  { label: 'Services', target: '.service-cards-wrapper' },
  { label: 'Review', target: '.testimonials-section' },
  { label: 'Contact', target: 'bottom' },
];

function scrollToSection(selector) {
  if (!selector) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (selector === 'bottom') {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const transition = useTransition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = useCallback((target, route) => {
    setMenuOpen(false);
    setProductsOpen(false);
    if (route) {
      if (transition) {
        transition.navigate(route).catch(() => router.push(route));
      } else {
        router.push(route);
      }
      return;
    }
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => scrollToSection(target), 400);
    } else {
      scrollToSection(target);
    }
  }, [router, transition, pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav className="glass-navbar">
        <div className="glass-navbar__inner">
          <a href="/" className="glass-navbar__logo" onClick={(e) => { e.preventDefault(); handleNav(null, '/'); }}>
            Webnique
          </a>

          <div className="glass-navbar__links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className="glass-navbar__link"
                onClick={() => handleNav(item.target, item.route)}
              >
                {item.label}
              </button>
            ))}

            <div className="glass-navbar__products" ref={dropdownRef}>
              <button
                className={`glass-navbar__link glass-navbar__products-btn ${productsOpen ? 'is-open' : ''}`}
                onClick={() => setProductsOpen((v) => !v)}
              >
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="glass-navbar__chevron">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`glass-navbar__dropdown ${productsOpen ? 'is-open' : ''}`}>
                {PRODUCTS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-navbar__dropdown-item"
                  >
                    <span className="glass-navbar__dropdown-name">{p.name}</span>
                    <span className="glass-navbar__dropdown-desc">{p.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`glass-navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`glass-navbar__mobile ${menuOpen ? 'is-open' : ''}`}>
        <div className="glass-navbar__mobile-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="glass-navbar__mobile-content">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className="glass-navbar__mobile-link"
              onClick={() => handleNav(item.target, item.route)}
            >
              {item.label}
            </button>
          ))}
          <div className="glass-navbar__mobile-products">
            <p className="glass-navbar__mobile-products-label">Products</p>
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-navbar__mobile-product"
              >
                {p.name}
                <span>{p.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
