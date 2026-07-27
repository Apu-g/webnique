'use client';

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const svgRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetRoute, setTargetRoute] = useState(null);

    // Initialize paths
    useEffect(() => {
        if (!svgRef.current) return;
        const paths = Array.from(svgRef.current.querySelectorAll('path'));
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
    }, []);

    // Effect to trigger enter animation when pathname changes and targetRoute matches
    useEffect(() => {
        if (targetRoute === pathname && isTransitioning) {
            enterAnimation();
        }
    }, [pathname, targetRoute]);

    const leaveAnimation = () => {
        return new Promise(resolve => {
            if (!svgRef.current) return resolve();
            const paths = Array.from(svgRef.current.querySelectorAll('path'));
            if (paths.length === 0) return resolve();
            
            const tl = gsap.timeline({ onComplete: resolve });
            paths.forEach((path) => {
                tl.to(path, {
                    strokeDashoffset: 0,
                    attr: { "stroke-width": 700 },
                    duration: 1,
                    ease: "power1.inOut"
                }, 0);
            });
        });
    };

    const enterAnimation = () => {
        if (!svgRef.current) {
            setIsTransitioning(false);
            setTargetRoute(null);
            return;
        }
        const paths = Array.from(svgRef.current.querySelectorAll('path'));
        if (paths.length === 0) {
            setIsTransitioning(false);
            setTargetRoute(null);
            return;
        }
        
        const tl = gsap.timeline({ 
            onComplete: () => {
                setIsTransitioning(false);
                setTargetRoute(null);
            } 
        });
        
        paths.forEach((path) => {
            const length = path.getTotalLength();
            tl.to(path, {
                strokeDashoffset: -length,
                attr: { "stroke-width": 200 },
                duration: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.set(path, { strokeDashoffset: length });
                }
            }, 0);
        });
    };

    const navigate = async (route) => {
        if (isTransitioning || route === pathname) return;
        
        try {
            setIsTransitioning(true);
            setTargetRoute(route);
            
            await leaveAnimation();
            
            // Push the new route. The useEffect will catch the pathname change.
            router.push(route);
            
            // Fallback in case route doesn't change
            setTimeout(() => {
                if (window.location.pathname !== route && isTransitioning) {
                    setIsTransitioning(false);
                    setTargetRoute(null);
                }
            }, 3000);
        } catch (err) {
            console.error("Transition failed", err);
            window.location.href = route;
        }
    };

    return (
        <TransitionContext.Provider value={{ navigate, isTransitioning }}>
            {children}
            {/* Transition SVG overlay */}
            <div className="global-transition-svg" aria-hidden="true" style={{ pointerEvents: isTransitioning ? 'auto' : 'none' }}>
                <svg ref={svgRef} viewBox="0 0 2453 2535" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                        stroke="var(--color-black)"
                        strokeWidth="200"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                        stroke="var(--color-black)"
                        strokeWidth="200"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    return useContext(TransitionContext);
}
