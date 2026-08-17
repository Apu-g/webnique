'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
    as: Tag = 'div',
    className = '',
    children,
    start = 'top 80%',
    blur = 10,
    y = 60,
    duration = 1.1,
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

        const tl = gsap.timeline({
            delay,
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            },
        });

        tl.fromTo(
            el,
            { opacity: 0, y, filter: `blur(${blur}px)`, willChange: 'opacity, transform, filter' },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration,
                ease: 'power3.out',
                ...(once ? { clearProps: 'transform,filter,opacity' } : {}),
            }
        );

        return () => {
            tl.scrollTrigger && tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [start, blur, y, duration, delay, once]);

    return (
        <Tag ref={ref} className={`reveal-block ${className}`} {...rest}>
            {children}
        </Tag>
    );
}
