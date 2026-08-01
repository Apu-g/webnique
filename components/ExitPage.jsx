'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

export default function ExitPage() {
    const exitPageRef = useRef(null);
    const menuBgRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let localIsOpen = false;

        const ctx = gsap.context(() => {
            const svgWidth = 1131;
            const svgHeight = 861;
            const svgCenterX = svgWidth / 2;

            const OPEN_HIDDEN = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,0 L${svgWidth},0 Z`;
            const OPEN_BULGE = `M${svgWidth},345 Q${svgCenterX},620 0,345 L0,0 L${svgWidth},0 Z`;
            const OPEN_FULL = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,0 L${svgWidth},0 Z`;
            const CLOSE_START = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
            const CLOSE_BULGE = `M${svgWidth},350 Q${svgCenterX},130 0,350 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
            const CLOSE_HIDDEN = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,${svgHeight} L${svgWidth},${svgHeight} Z`;

            gsap.set(menuBgRef.current, { attr: { d: OPEN_HIDDEN } });
            gsap.set('.exit-page-content', { opacity: 0, y: 100 });

            let isAnimating = false;

            const openExitPage = () => {
                if (isAnimating) return;
                isAnimating = true;
                localIsOpen = true;
                exitPageRef.current.classList.add('is-open');
                if (window.__lenis) window.__lenis.stop();

                const tl = gsap.timeline({
                    onComplete: () => {
                        isAnimating = false;
                    },
                });

                tl.to(menuBgRef.current, {
                    duration: 0.5,
                    attr: { d: OPEN_BULGE },
                    ease: "power4.in",
                }).to(menuBgRef.current, { duration: 0.5, attr: { d: OPEN_FULL }, ease: "power4.out" });

                tl.to(
                    '.exit-page-content',
                    {
                        duration: 0.75,
                        opacity: 1,
                        y: 0,
                        ease: "power3.out",
                    },
                    "-=0.35",
                );
            };

            const closeExitPage = () => {
                if (isAnimating) return;
                isAnimating = true;
                
                gsap.set(menuBgRef.current, { attr: { d: CLOSE_START } });

                const tl = gsap.timeline({
                    onComplete: () => {
                        exitPageRef.current.classList.remove('is-open');
                        gsap.set(menuBgRef.current, { attr: { d: OPEN_HIDDEN } });
                        gsap.set('.exit-page-content', { opacity: 0, y: 100 });
                        localIsOpen = false;
                        if (window.__lenis) window.__lenis.start();
                        isAnimating = false;
                        
                        const testimonials = document.querySelector('.testimonials-section');
                        if (testimonials) {
                            testimonials.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.scrollBy({ top: -300, behavior: 'smooth' });
                        }
                    },
                });

                tl.to('.exit-page-content', { duration: 0.3, opacity: 0, y: -50 });

                tl.to(
                    menuBgRef.current,
                    { duration: 0.5, attr: { d: CLOSE_BULGE }, ease: "power3.in" },
                    "<",
                ).to(menuBgRef.current, {
                    duration: 0.5,
                    attr: { d: CLOSE_HIDDEN },
                    ease: "power3.out",
                });
            };

            window.closeExitPage = closeExitPage;

            ScrollTrigger.create({
                trigger: '.ready-to-start',
                start: 'bottom bottom',
                onEnter: () => {
                    if (!localIsOpen) {
                        openExitPage();
                    }
                },
            });
        });

        const handleWheel = (e) => {
            if (localIsOpen && e.deltaY < 0) {
                const exitPageEl = exitPageRef.current;
                const contentEl = exitPageEl.querySelector('.exit-page-content');
                if (contentEl && contentEl.scrollTop <= 0) {
                    window.closeExitPage();
                }
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e) => {
            if (localIsOpen) {
                const touchY = e.touches[0].clientY;
                const deltaY = touchStartY - touchY;
                if (deltaY < -10) {
                    const exitPageEl = exitPageRef.current;
                    const contentEl = exitPageEl.querySelector('.exit-page-content');
                    if (contentEl && contentEl.scrollTop <= 0) {
                        window.closeExitPage();
                    }
                }
            }
        };
        
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            ctx.revert();
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div ref={exitPageRef} className="exit-page">
            <svg className="exit-bg-svg" viewBox="0 0 1131 861" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={menuBgRef} fill="var(--color-darkblue)" d="M1131,0 Q565.5,0 0,0 L0,0 L1131,0 Z" />
            </svg>
            
            <div className="exit-page-content">
                <button className="exit-close-btn" onClick={() => window.closeExitPage && window.closeExitPage()}>
                    ✕ Close
                </button>
                <Footer />
            </div>
        </div>
    );
}
