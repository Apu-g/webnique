'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const images = [
    '/images/marque1.jpeg',
    '/images/marque2.jpeg',
    '/images/marque3.jpeg',
];

export default function Showreel() {
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        const el = titleRef.current;
        if (!el) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const words = el.querySelectorAll('.showreel__word');
        if (!words.length) return;

        gsap.set(words, {
            opacity: 0,
            yPercent: 60,
            filter: 'blur(16px)',
            willChange: 'opacity, transform, filter',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
            },
        });

        tl.to(words, {
            opacity: 1,
            yPercent: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.09,
        });

        return () => {
            tl.scrollTrigger && tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section className="showreel-section" id="showreel-section">
            <div className="showreel__marquee">
                <div className="showreel__track showreel__track--up">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
                <div className="showreel__track showreel__track--down">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
                <div className="showreel__track showreel__track--up-alt">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="showreel__content">
                <h2 className="showreel__title" ref={titleRef}>
                    <span className="showreel__word">where </span>
                    <span className="showreel__word showreel__word--italic"><em>vision</em></span>
                    <span className="showreel__word"> meets </span>
                    <span className="showreel__word showreel__word--accent">craft</span>
                </h2>
            </div>
        </section>
    );
}
