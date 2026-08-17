'use client';

import { useRef, useLayoutEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlurReveal({
    as: Tag = 'div',
    className = '',
    children,
    start = 'top 85%',
    blur = 12,
    stagger = 0.05,
    duration = 0.9,
    delay = 0,
    once = false,
    ...rest
}) {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const split = new SplitType(el, { types: 'words', tagName: 'span' });
        const words = split.words;
        if (!words || !words.length) return;

        gsap.set(words, {
            opacity: 0,
            yPercent: 45,
            filter: `blur(${blur}px)`,
            willChange: 'opacity, transform, filter',
        });

        const tl = gsap.timeline({
            delay,
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            },
        });

        tl.to(words, {
            opacity: 1,
            yPercent: 0,
            filter: 'blur(0px)',
            duration,
            ease: 'power3.out',
            stagger,
        });

        return () => {
            tl.scrollTrigger && tl.scrollTrigger.kill();
            tl.kill();
            split.revert();
        };
    }, [start, blur, stagger, duration, delay, once]);

    return (
        <Tag ref={ref} className={`blur-reveal ${className}`} {...rest}>
            {children}
        </Tag>
    );
}
