'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WIGGLE_CONFIG, SOCIAL_ICONS } from '@/lib/data';
import TransitionLink from './TransitionLink';

gsap.registerPlugin(ScrollTrigger);

function initWiggle(element, intensity) {
    const target = element.querySelector('[data-wiggle-target]') || element;
    gsap.set(target, { transformOrigin: 'center center' });
    let tween;
    const onEnter = () => {
        tween = gsap.to(target, { rotation: intensity, duration: 0.17, repeat: -1, yoyo: true, ease: 'steps(1)' });
    };
    const onLeave = () => {
        if (tween) { tween.kill(); gsap.to(target, { rotation: 0, duration: 0.3, ease: 'power2.out' }); }
    };
    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);
    return () => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
    };
}

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
    const [menuOpen, setMenuOpen] = useState(false);
    const [popoutOpen, setPopoutOpen] = useState(false);
    const popoutRef = useRef(null);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const togglePopout = useCallback(() => {
        setPopoutOpen(prev => !prev);
    }, []);

    const closePopout = useCallback(() => {
        setPopoutOpen(false);
    }, []);

    const handleNavClick = useCallback((selector) => {
        scrollToSection(selector);
        closePopout();
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => document.body.classList.remove('menu-open');
    }, [menuOpen]);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const contentSection = document.querySelector('.content-section');
        const footerEl = document.querySelector('.main-footer');

        if (navbar) { navbar.classList.add('on-dark'); navbar.classList.remove('on-light'); }

        const updateNavbarColor = () => {
            if (!navbar || !contentSection || !footerEl) return;
            const scrollPos = window.scrollY + navbar.offsetHeight / 2;
            const contentTop = contentSection.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY > 50) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }

            const showreelSection = document.querySelector('#showreel-section');
            const showreelTop = showreelSection ? showreelSection.getBoundingClientRect().top + window.scrollY : Infinity;

            const serviceCardsSection = document.querySelector('.service-cards-wrapper');
            const serviceCardsTop = serviceCardsSection ? serviceCardsSection.getBoundingClientRect().top + window.scrollY : Infinity;

            const doubleMarquee = document.querySelector('.Double-marquee');
            const doubleMarqueeTop = doubleMarquee ? doubleMarquee.getBoundingClientRect().top + window.scrollY : Infinity;
            const footerTop = footerEl.getBoundingClientRect().top + window.scrollY;

            if (scrollPos >= footerTop) {
                navbar.classList.add('on-dark'); navbar.classList.remove('on-light');
            } else if (scrollPos >= doubleMarqueeTop) {
                navbar.classList.add('on-light'); navbar.classList.remove('on-dark');
            } else if (scrollPos >= serviceCardsTop) {
                navbar.classList.add('on-light'); navbar.classList.remove('on-dark');
            } else if (scrollPos >= showreelTop) {
                navbar.classList.add('on-dark'); navbar.classList.remove('on-light');
            } else if (scrollPos >= contentTop) {
                navbar.classList.add('on-light'); navbar.classList.remove('on-dark');
            } else {
                navbar.classList.add('on-dark'); navbar.classList.remove('on-light');
            }
        };

        window.addEventListener('scroll', updateNavbarColor);
        updateNavbarColor();

        const logoTruus = document.querySelector('.logo-truus');

        const cleanups = [];
        if (logoTruus) cleanups.push(initWiggle(logoTruus, WIGGLE_CONFIG.logoTruus));
        
        const workContainer = document.querySelector('.logo-work-container');
        if (workContainer) cleanups.push(initWiggle(workContainer, WIGGLE_CONFIG.logoTruus));

        const overlay = document.querySelector('.nav-overlay');
        if (overlay) {
            gsap.set(overlay, { opacity: 0, visibility: 'hidden' });
        }
        const showOverlay = () => {
            if (overlay) {
                gsap.set(overlay, { visibility: 'visible' });
                gsap.to(overlay, { opacity: 1, duration: 0.35, ease: 'power2.out' });
            }
        };
        const hideOverlay = () => {
            if (overlay) {
                gsap.to(overlay, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => gsap.set(overlay, { visibility: 'hidden' }) });
            }
        };

        const navRight = document.querySelector('.nav-right');
        const workBox = document.querySelector('.nav-right .nav-popout');
        const workBlob = document.querySelector('.nav-bar__work-blob-svg');

        if (navRight && workBox && workBlob) {
            const workInner = workBox.querySelector('.nav-popout-inner');
            const workItems = workInner ? Array.from(workInner.children) : [];

            gsap.set(workBox, { visibility: 'visible', scale: 1, opacity: 1 });
            const boxRect = workBox.getBoundingClientRect();
            const blobRect = workBlob.getBoundingClientRect();
            const originX = (blobRect.left + blobRect.width / 2) - boxRect.left;
            const originY = (blobRect.top + blobRect.height / 2) - boxRect.top;
            const workOrigin = `${originX}px ${originY}px`;

            gsap.set(workBox, {
                visibility: 'hidden',
                scale: 0,
                opacity: 0,
                transformOrigin: workOrigin
            });
            gsap.set(workItems, { y: 10, opacity: 0 });
            gsap.set(workBlob, { transformOrigin: 'center center' });

            const openPopout = () => {
                gsap.killTweensOf(workBox);
                gsap.killTweensOf(workItems);
                gsap.killTweensOf(workBlob);
                showOverlay();

                gsap.to(workBlob, { rotation: '+=360', duration: 0.7, ease: 'power3.inOut' });

                gsap.set(workBox, { visibility: 'visible' });
                gsap.fromTo(workBox,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: 'expo.out' }
                );
                gsap.to(workItems, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out', delay: 0.18 });
            };

            const closePopoutAnim = () => {
                gsap.killTweensOf(workBox);
                gsap.killTweensOf(workItems);
                gsap.killTweensOf(workBlob);
                hideOverlay();

                gsap.to(workItems, { y: 10, opacity: 0, duration: 0.15, ease: 'power2.in' });
                gsap.to(workBox, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'expo.in',
                    delay: 0.05,
                    onComplete: () => gsap.set(workBox, { visibility: 'hidden' })
                });
            };

            // Expose for React click handler
            window.__navOpenPopout = openPopout;
            window.__navClosePopout = closePopoutAnim;

            const onLeaveRight = () => {
                if (!window.__navPopoutKeepOpen) {
                    closePopoutAnim();
                }
            };

            navRight.addEventListener('mouseleave', onLeaveRight);
            cleanups.push(() => {
                navRight.removeEventListener('mouseleave', onLeaveRight);
            });
        }

        const workItems = document.querySelectorAll('.nav-work-item');
        workItems.forEach(item => {
            const badge = item.querySelector('.nav-work-badge');
            const img = item.querySelector('.nav-work-item__img');
            let wiggleTween;

            const onItemEnter = () => {
                if (badge) {
                    gsap.set(badge, { transformOrigin: 'center center' });
                    wiggleTween = gsap.to(badge, { rotation: 5, duration: 0.15, repeat: -1, yoyo: true, ease: 'steps(1)' });
                }
                if (img) gsap.to(img, { rotation: 16, scale: 1.15, duration: 0.25, ease: 'power2.out' });
            };
            const onItemLeave = () => {
                if (wiggleTween) { wiggleTween.kill(); }
                if (badge) gsap.to(badge, { rotation: 0, duration: 0.3, ease: 'power2.out' });
                if (img) gsap.to(img, { rotation: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
            };
            item.addEventListener('mouseenter', onItemEnter);
            item.addEventListener('mouseleave', onItemLeave);
            cleanups.push(() => {
                item.removeEventListener('mouseenter', onItemEnter);
                item.removeEventListener('mouseleave', onItemLeave);
            });
        });

        const workBtn = document.querySelector('.nav-work-btn');
        if (workBtn) {
            let btnWiggle;
            const onBtnEnter = () => {
                const btnText = workBtn.querySelector('.nav-work-btn__text');
                if (btnText) {
                    gsap.set(btnText, { transformOrigin: 'center center', display: 'inline-block' });
                    btnWiggle = gsap.to(btnText, { rotation: 4, duration: 0.12, repeat: -1, yoyo: true, ease: 'steps(1)' });
                }
            };
            const onBtnLeave = () => {
                const btnText = workBtn.querySelector('.nav-work-btn__text');
                if (btnWiggle) { btnWiggle.kill(); }
                if (btnText) gsap.to(btnText, { rotation: 0, duration: 0.3, ease: 'power2.out' });
            };
            workBtn.addEventListener('mouseenter', onBtnEnter);
            workBtn.addEventListener('mouseleave', onBtnLeave);
            cleanups.push(() => {
                workBtn.removeEventListener('mouseenter', onBtnEnter);
                workBtn.removeEventListener('mouseleave', onBtnLeave);
            });
        }

        return () => {
            window.removeEventListener('scroll', updateNavbarColor);
            cleanups.forEach(fn => fn && fn());
        };
    }, []);

    // React to popoutOpen state
    useEffect(() => {
        if (popoutOpen) {
            window.__navPopoutKeepOpen = true;
            if (window.__navOpenPopout) window.__navOpenPopout();
        } else {
            window.__navPopoutKeepOpen = false;
            if (window.__navClosePopout) window.__navClosePopout();
        }
    }, [popoutOpen]);

    // Click outside to close
    useEffect(() => {
        if (!popoutOpen) return;
        const handleClick = (e) => {
            if (popoutRef.current && !popoutRef.current.contains(e.target) &&
                !e.target.closest('.logo-work-container')) {
                setPopoutOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [popoutOpen]);

    const menuItems = [
        { label: 'Home', target: null },
        { label: 'Works', target: '.ow-main' },
        { label: 'Services', target: '.service-cards-wrapper' },
        { label: 'Review', target: '.testimonials-section' },
        { label: 'Contact', target: 'bottom' },
    ];

    return (
        <>
            <div className="nav-overlay"></div>
            <nav className="navbar">
                <div className="nav-left">
                </div>

                {/* Desktop: Menu popout */}
                <div className="nav-right" ref={popoutRef}>
                    <div className="nav-hover-trigger">
                        <button
                            className="logo-work-container"
                            onClick={togglePopout}
                            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <img src="/assets/Navbar SVG/nav-work-blob.svg" width="60" height="55" className="nav-bar__work-blob-svg" alt="" aria-hidden="true" />
                            <span className="logo-work-text">menu</span>
                        </button>

                        <div className="nav-popout nav-work-box">
                            <div className="nav-popout-inner">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.label}
                                        className="nav-menu-item"
                                        onClick={() => handleNavClick(item.target)}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile: Hamburger button */}
                <button
                    className={`navbar-hamburger ${menuOpen ? 'is-open' : ''}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className="navbar-hamburger__line"></span>
                    <span className="navbar-hamburger__line"></span>
                    <span className="navbar-hamburger__line"></span>
                </button>
            </nav>

            {/* Mobile fullscreen menu overlay */}
            <div className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`}>
                <div className="mobile-menu-overlay__backdrop" onClick={closeMenu}></div>
                <div className="mobile-menu-overlay__content">
                    <nav className="mobile-menu-overlay__nav">
                        <button className="mobile-menu-overlay__link" onClick={() => { scrollToSection(null); closeMenu(); }}>home</button>
                        <button className="mobile-menu-overlay__link" onClick={() => { scrollToSection('.ow-main'); closeMenu(); }}>works</button>
                        <button className="mobile-menu-overlay__link" onClick={() => { scrollToSection('.service-cards-wrapper'); closeMenu(); }}>services</button>
                        <button className="mobile-menu-overlay__link" onClick={() => { scrollToSection('.testimonials-section'); closeMenu(); }}>review</button>
                        <button className="mobile-menu-overlay__link" onClick={() => { scrollToSection('bottom'); closeMenu(); }}>contact</button>
                    </nav>

                    <div className="mobile-menu-overlay__socials">
                        {SOCIAL_ICONS.map(({ href, label, svg }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                dangerouslySetInnerHTML={{ __html: svg }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
