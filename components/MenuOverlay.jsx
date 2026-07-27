'use client';

import { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import './MenuOverlay.css'; 

export default function MenuOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const isAnimating = useRef(false);

    useLayoutEffect(() => {
        const menuBg = document.getElementById("menu-path");
        const menuBgSvg = document.querySelector(".menu-bg-svg");
        const menuLinks = document.querySelectorAll(".menu-col-links a");
        const menuInfoItems = document.querySelectorAll(".menu-col-info p, .menu-col-info h3, .menu-col-info h6");
        
        if (!menuBgSvg || !menuBg) return;

        const svgWidth = menuBgSvg.viewBox.baseVal.width || 1131;
        const svgHeight = menuBgSvg.viewBox.baseVal.height || 861;
        const svgCenterX = svgWidth / 2;

        const OPEN_HIDDEN = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,0 L${svgWidth},0 Z`;
        const OPEN_BULGE = `M${svgWidth},345 Q${svgCenterX},620 0,345 L0,0 L${svgWidth},0 Z`;
        const OPEN_FULL = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,0 L${svgWidth},0 Z`;
        const CLOSE_START = `M${svgWidth},0 Q${svgCenterX},0 0,0 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
        const CLOSE_BULGE = `M${svgWidth},350 Q${svgCenterX},130 0,350 L0,${svgHeight} L${svgWidth},${svgHeight} Z`;
        const CLOSE_HIDDEN = `M${svgWidth},${svgHeight} Q${svgCenterX},${svgHeight} 0,${svgHeight} L0,${svgHeight} L${svgWidth},${svgHeight} Z`;

        const splits = [];
        menuLinks.forEach((link) => {
            const split = new SplitType(link, { types: "chars", charClass: "char" });
            splits.push(split);
        });

        const openMenu = () => {
            const tl = gsap.timeline({
                onComplete: () => { isAnimating.current = false; },
            });

            tl.to(menuBg, {
                duration: 0.5,
                attr: { d: OPEN_BULGE },
                ease: "power4.in",
            }).to(menuBg, { duration: 0.5, attr: { d: OPEN_FULL }, ease: "power4.out" });

            tl.to(".menu-logo", { duration: 0.1, opacity: 1, ease: "none" }, "-=0.75");

            tl.to(
                menuInfoItems,
                { duration: 0.75, opacity: 1, y: 0, ease: "power3.out", stagger: 0.075 },
                "-=0.35"
            );

            const menuLinksChars = splits.flatMap((s) => s.chars);
            tl.to(menuLinksChars, { duration: 1.5, x: "0%", ease: "elastic.out(1, 0.25)", stagger: 0.01 }, 0.45);
            tl.to(menuLinksChars, { duration: 0.75, opacity: 1, ease: "power2.out", stagger: 0.01 }, 0.45);
        };

        const closeMenu = () => {
            gsap.set(menuBg, { attr: { d: CLOSE_START } });

            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(menuBg, { attr: { d: OPEN_HIDDEN } });
                    splits.forEach((split) => {
                        gsap.set(split.chars, { opacity: 0, x: "150%" });
                    });
                    gsap.set(menuLinks, { opacity: 1 });
                    gsap.set(menuInfoItems, { opacity: 0, y: 100 });
                    isAnimating.current = false;
                },
            });

            tl.to(".menu-logo", { duration: 0.3, opacity: 0 })
                .to(menuLinks, { duration: 0.3, opacity: 0 }, "<")
                .to(menuInfoItems, { duration: 0.3, opacity: 0 }, "<");

            tl.to(menuBg, { duration: 0.5, attr: { d: CLOSE_BULGE }, ease: "power3.in" }, "<")
              .to(menuBg, { duration: 0.5, attr: { d: CLOSE_HIDDEN }, ease: "power3.out" });
        };

        if (isOpen) {
            openMenu();
        } else {
            if (isAnimating.current) closeMenu();
            else {
                // Initialize states
                gsap.set(menuBg, { attr: { d: OPEN_HIDDEN } });
                splits.forEach((split) => gsap.set(split.chars, { opacity: 0, x: "150%" }));
                gsap.set(menuInfoItems, { opacity: 0, y: 100 });
            }
        }
        
        return () => {
           splits.forEach((split) => split.revert());
        };
    }, [isOpen]);

    const toggleMenu = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="nav-toggle" onClick={toggleMenu}>
                <p className="nav-toggle-menu" style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.25s' }}>Menu</p>
                <p className="nav-toggle-close" style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.25s' }}>Close</p>
            </div>

            <div className={`menu ${isOpen ? 'is-open' : ''}`}>
                <svg className="menu-bg-svg" viewBox="0 0 1131 861" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="menu-path" fill="#f0eeee" d="M1131,0 Q565.5,0 0,0 L0,0 L1131,0 Z" />
                </svg>

                <div className="menu-logo">
                    <a href="/">
                        <img src="/images/logo/logo.png" alt="Webnique Logo" style={{ height: '40px', objectFit: 'contain' }} />
                    </a>
                </div>

                <div className="menu-col menu-col-info">
                    <p>Get in touch</p>
                    <h3>contactus@webniqueds.com</h3>
                    <h3>+91 9353703412</h3>
                    <br />
                    <h6>302, 3rd Cross, HRBR Layout I block KalyanNagar, Bangalore 560043</h6>
                    <h6>India | New Zealand</h6>
                </div>

                <div className="menu-col menu-col-links">
                    <a href="/">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="https://quip.wb-roots.com/" target="_blank" rel="noreferrer">quip</a>
                    <a href="https://wbflow.wb-roots.com/" target="_blank" rel="noreferrer">wbflow</a>
                    <a href="#our-works">our works</a>
                    <a href="#contact">contact</a>
                </div>
            </div>
        </>
    );
}
