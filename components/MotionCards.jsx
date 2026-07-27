"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(InertiaPlugin, ScrollTrigger);

export default function MotionCards() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        const ctx = gsap.context(() => {
            // Inertia on cards — desktop only
            if (!isMobile) {
                const cards = document.querySelectorAll(".motion-card__card");
                cards.forEach((card) => {
                    let lastX = 0;
                    let lastY = 0;
                    let speedX = 0;
                    let speedY = 0;

                    const startRotation = gsap.getProperty(card, "rotation");
                    const startX = gsap.getProperty(card, "x");
                    const startY = gsap.getProperty(card, "y");

                    const onMove = (e) => {
                        speedX = e.clientX - lastX;
                        speedY = e.clientY - lastY;
                        lastX = e.clientX;
                        lastY = e.clientY;
                    };

                    const onEnter = (e) => {
                        speedX = 0;
                        speedY = 0;
                        lastX = e.clientX;
                        lastY = e.clientY;
                    };

                    const onLeave = () => {
                        gsap.to(card, {
                            inertia: {
                                x: { velocity: speedX * 20, end: startX },
                                y: { velocity: speedY * 20, end: startY },
                                rotation: { velocity: speedX * 1.5, end: startRotation },
                            },
                        });
                    };

                    card.addEventListener("mousemove", onMove);
                    card.addEventListener("mouseenter", onEnter);
                    card.addEventListener("mouseleave", onLeave);
                });
            }

            // Entry Animations: Sticker Pop & Underline Draw
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            const topStickerImg = sectionRef.current.querySelector(".motion-card__sticker--top img");
            if (topStickerImg) {
                gsap.set(topStickerImg, { scale: 0, opacity: 0, rotation: -30 });
                tl.to(topStickerImg, { scale: 1, opacity: 1, rotation: 0, duration: 1.7, ease: "elastic.out(1, 0.4)" }, 0);
            }

            const underlinePath = sectionRef.current.querySelector(".motion-card__underline-path");
            if (underlinePath) {
                const pathLen = underlinePath.getTotalLength();
                gsap.set(underlinePath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
                tl.to(underlinePath, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" }, 0.2);
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="motion-card-section" id="motion-card-section">
            <div className="motion-card__heading">
                <h2 className="motion-card__title">
                    From Vision
                    <br />
                    to Results.
                </h2>
                <p className="motion-card__subtitle">
                    Our Process
                    <span className="motion-card__sticker motion-card__sticker--top">
                        <img
                            src="/assets/Footer-Sticker SVG/footer-sticker-hands.svg"
                            alt="Green heart hands sticker"
                            className="motion-card__sticker-img"
                        />
                    </span>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 634 28" fill="none" className="motion-card__underline-svg">
                    <path className="motion-card__underline-path" d="M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="motion-card__cards-area">
                <div className="motion-card__blob">
                    <img
                        src="/assets/MotionCard SVG/motion-card-blob.svg"
                        alt=""
                        className="motion-card__blob-svg"
                    />
                </div>

                <div ref={containerRef} className="motion-card__cards">
                    <div className="motion-card__card motion-card__card--1">
                        <div className="motion-card__card-content">
                            <h3 className="motion-card__step-num">01</h3>
                            <h4 className="motion-card__step-title">Discovery and Strategy</h4>
                            <p className="motion-card__step-desc">We begin by understanding your industry and audience to craft a plan tailored specifically to you.</p>
                        </div>
                    </div>

                    <div className="motion-card__card motion-card__card--2">
                        <div className="motion-card__card-content">
                            <h3 className="motion-card__step-num">02</h3>
                            <h4 className="motion-card__step-title">Design and Development</h4>
                            <p className="motion-card__step-desc">Our creative team designs visually appealing and user-friendly websites. Which is responsive and compatible with all devices.</p>
                        </div>
                    </div>

                    <div className="motion-card__card motion-card__card--3">
                        <div className="motion-card__card-content">
                            <h3 className="motion-card__step-num">03</h3>
                            <h4 className="motion-card__step-title">Monitoring and Optimization</h4>
                            <p className="motion-card__step-desc">We consistently review data to improve and enhance our strategies.</p>
                        </div>
                    </div>

                    <div className="motion-card__card motion-card__card--4">
                        <div className="motion-card__card-content">
                            <h3 className="motion-card__step-num">04</h3>
                            <h4 className="motion-card__step-title">Marketing and Promotion</h4>
                            <p className="motion-card__step-desc">We develop marketing strategies to enhance your visibility online.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="motion-card__footer-text">
                <p className="motion-card__description">
                    We're more than just a digital agency -- we're your creative growth partners. 
                    With a team of passionate designers, strategists, developers, and marketers, 
                    we bring your brand's vision to life through innovative, high-quality solutions.
                </p>
            </div>
        </section>
    );
}
