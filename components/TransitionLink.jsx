'use client';

import React from 'react';
import { useTransition } from './TransitionContext';

export default function TransitionLink({ href, children, className, ...props }) {
    const transition = useTransition();

    const handleClick = (e) => {
        e.preventDefault();
        
        // If href starts with '#', it's an anchor link, just scroll
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        if (transition) {
            transition.navigate(href).catch((err) => {
                console.error("Link transition failed:", err);
                window.location.href = href;
            });
        } else {
            window.location.href = href;
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className} {...props}>
            {children}
        </a>
    );
}
