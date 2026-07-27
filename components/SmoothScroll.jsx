'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        const lenis = new Lenis({
            duration: isMobile ? 0.8 : 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: isMobile ? 1.0 : 1.5,
        });

        lenis.on('scroll', ScrollTrigger.update);
        const raf = (time) => { lenis.raf(time * 1000); };
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        const originalTitle = document.title;
        const handleVisibility = () => {
            document.title = document.hidden ? "Hey, over here! - Webnique" : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        window.__lenis = lenis;

        return () => {
            lenis.destroy();
            gsap.ticker.remove(raf);
            document.removeEventListener('visibilitychange', handleVisibility);
            delete window.__lenis;
        };
    }, []);

    return null;
}
