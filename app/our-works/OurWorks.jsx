'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import { brands, CARDS_DATA } from '@/lib/data';
import Navbar from '@/components/Navbar';

export default function OurWorks() {
    const containerRef = useRef(null);
    const preloaderRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let splitTitle, splitCopy, splitHeader;

        const ctx = gsap.context(() => {
            // 1. Landing Page Reveal Animation
            const runPreloader = () => {
            // Split texts
            splitTitle = new SplitType('.ow-title', { types: 'chars' });
            splitCopy = new SplitType('.ow-preloader-copy p', { types: 'lines' });
            splitHeader = new SplitType('.ow-hero h1', { types: 'lines' });

            const chars = splitTitle.chars;
            const lines = splitCopy.lines;
            const headerLines = splitHeader.lines;

            gsap.set(chars, { yPercent: (i) => (i % 2 === 0 ? -100 : 100) });
            gsap.set(lines, { yPercent: 100 });
            gsap.set(headerLines, { yPercent: 100 });

            const tl = gsap.timeline({ delay: 0.25 });

            // Progress bar
            tl.to('.ow-progress-bar', { scaleX: 1, duration: 3, ease: 'power3.inOut' })
              .set('.ow-progress-bar', { transformOrigin: 'right' })
              .to('.ow-progress-bar', { scaleX: 0, duration: 1, ease: 'power3.in' });

            // Images reveal
            const images = gsap.utils.toArray('.ow-img');
            const imagesInner = gsap.utils.toArray('.ow-img img');
            
            images.forEach((img, i) => {
                tl.to(img, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1, ease: 'expo.inOut' }, `-=${4 - i * 0.5}`);
            });
            imagesInner.forEach((img, i) => {
                tl.to(img, { scale: 1, duration: 1.5, ease: 'expo.inOut' }, `-=${4 - i * 0.5}`);
            });

            // Text reveal
            tl.to(lines, { yPercent: 0, duration: 1.5, ease: 'expo.out', stagger: 0.1 }, '-=3.5');
            tl.to(chars, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.05 }, '-=3');

            // Hide images
            tl.to('.ow-preloader-images', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 1, ease: 'expo.inOut' }, '-=1');
            
            // Move text up
            tl.to(lines, { yPercent: -100, opacity: 0, duration: 1, ease: 'expo.inOut' }, '-=0.5');

            // Split letters apart
            tl.to(chars, {
                yPercent: (i) => {
                    if (i === 0 || i === chars.length - 1) return 0;
                    return i % 2 === 0 ? 100 : -100;
                },
                opacity: (i) => (i === 0 || i === chars.length - 1 ? 1 : 0),
                duration: 1,
                ease: 'expo.inOut'
            }, '-=0.5');

            // Spread first and last letter
            tl.to([chars[0], chars[chars.length - 1]], {
                x: (i) => {
                    const center = window.innerWidth / 2;
                    const rect = (i === 0 ? chars[0] : chars[chars.length - 1]).getBoundingClientRect();
                    return i === 0 ? (center - rect.left - rect.width - 20) : (center - rect.left + 20);
                },
                duration: 1.5,
                ease: 'expo.inOut'
            });

            // Shrink and move up header
            tl.to('.ow-preloader-header', {
                y: '10vh',
                scale: 0.4,
                duration: 1.5,
                ease: 'expo.inOut'
            }, '<');

            // Hide preloader overlay
            tl.to('.ow-preloader', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: 1.5,
                ease: 'expo.inOut',
                onComplete: () => {
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = 'none';
                    }
                }
            }, '-=0.5');

            // Reveal hero text
            tl.to(headerLines, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.1 }, '-=0.75');
            tl.to('.ow-divider', { scaleX: 1, duration: 1, ease: 'power4.out' }, '<');
        };

        // 2. Sticky Cards Animation Setup
        const initCards = () => {
            const cards = gsap.utils.toArray('.ow-card');
            if (cards.length === 0) return;
            
            const totalCards = cards.length;
            const segmentSize = 1 / totalCards;
            const cardYOffset = 5;
            const cardScaleStep = 0.075;

            cards.forEach((card, i) => {
                gsap.set(card, {
                    xPercent: -50,
                    yPercent: -50 + i * cardYOffset,
                    scale: 1 - i * cardScaleStep,
                    zIndex: totalCards - i,
                });
            });

            ScrollTrigger.create({
                trigger: '.ow-sticky-cards',
                start: 'top top',
                end: `+=${window.innerHeight * (totalCards + 1)}px`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const activeIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1);
                    const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

                    cards.forEach((card, i) => {
                        if (i < activeIndex) {
                            gsap.set(card, { yPercent: -250, rotationX: 35 });
                        } else if (i === activeIndex) {
                            gsap.set(card, {
                                yPercent: gsap.utils.interpolate(-50, -200, segProgress),
                                rotationX: gsap.utils.interpolate(0, 35, segProgress),
                                scale: 1,
                            });
                        } else {
                            const behindIndex = i - activeIndex;
                            const currentYOffset = (behindIndex - segProgress) * cardYOffset;
                            const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;
                            gsap.set(card, { yPercent: -50 + currentYOffset, rotationX: 0, scale: currentScale });
                        }
                    });
                }
            });
        };

            // Run animations
            runPreloader();
            initCards();
        });

        // 3. Smooth Scrolling (Lenis) - keep outside GSAP context since it's not a tween
        const lenis = new Lenis({ lerp: 0.05, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        const raf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            ctx.revert(); // Automatically kills ScrollTriggers and un-pins
            if (splitTitle) splitTitle.revert();
            if (splitCopy) splitCopy.revert();
            if (splitHeader) splitHeader.revert();
            lenis.destroy();
            gsap.ticker.remove(raf);
        };
    }, []);

    // Pick top 4 brands for preloader images
    const preloaderImagesList = brands.slice(0, 4);

    return (
        <div className="our-works-container" ref={containerRef}>
            <Navbar />
            
            {/* Preloader */}
            <div className="ow-preloader" ref={preloaderRef}>
                <div className="ow-progress-bar"></div>
                
                <div className="ow-preloader-images">
                    {preloaderImagesList.map((brand, idx) => (
                        <div className="ow-img" key={`pl-${idx}`}>
                            <img src={brand.src} alt={brand.name} />
                        </div>
                    ))}
                </div>

                <div className="ow-preloader-copy">
                    <p>Webnique Digital Solutions</p>
                    <p>Showcasing our best projects</p>
                </div>
            </div>

            <div className="ow-preloader-header" style={{ mixBlendMode: 'difference' }}>
                <span className="ow-title">WORK</span>
            </div>

            {/* Hero Section */}
            <section className="ow-hero" id="our-works-hero">
                <div className="header-row">
                    <h1>Selected Projects</h1>
                </div>
                <div className="ow-divider"></div>
            </section>

            {/* 3D Sticky Cards */}
            <section className="ow-sticky-cards">
                {brands.map((data, idx) => {
                    const CARD_COLORS = ['green', 'darkblue', 'orange', 'maroon', 'pink', 'charcoal'];
                    const color = CARD_COLORS[idx % CARD_COLORS.length];
                    return (
                        <div className={`ow-card ow-card-${color}`} id={`ow-card-${idx}`} key={`card-${idx}`}>
                            <div className="ow-col">
                                <h2>{data.name}</h2>
                                <p style={{ marginTop: '1rem', fontSize: '1.25rem', opacity: 0.9 }}>
                                    Proudly partnered with {data.name} to deliver exceptional digital experiences and branding solutions.
                                </p>
                            </div>
                            <div className="ow-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '24px' }}>
                                <img src={data.src} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    );
                })}
            </section>
            
            {/* Some extra scroll space at the bottom before footer could be here, but we will leave it as is */}
        </div>
    );
}
