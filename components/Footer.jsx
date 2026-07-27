'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SOCIAL_ICONS, WIGGLE_CONFIG } from '@/lib/data';
import TransitionLink from './TransitionLink';

function initWiggle(element, intensity) {
    const target = element.querySelector('[data-wiggle-target]') || element;
    gsap.set(target, { transformOrigin: 'center center' });
    let tween;
    const onEnter = () => { tween = gsap.to(target, { rotation: intensity, duration: 0.17, repeat: -1, yoyo: true, ease: 'steps(1)' }); };
    const onLeave = () => { if (tween) { tween.kill(); gsap.to(target, { rotation: 0, duration: 0.3, ease: 'power2.out' }); } };
    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);
    return () => { element.removeEventListener('mouseenter', onEnter); element.removeEventListener('mouseleave', onLeave); };
}

export default function Footer() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ─── Credits pop-out ───
        const creditsWrapper = document.querySelector('.footer-credits-wrapper');
        if (creditsWrapper) {
            const creditsBox = creditsWrapper.querySelector('.credits-box');
            const creditsItems = creditsBox.querySelectorAll('.credits-item');

            gsap.set(creditsBox, { visibility: 'visible', width: 'auto', height: 'auto', opacity: 1 });
            const boxRect = creditsBox.getBoundingClientRect();
            const fullWidth = boxRect.width;
            const fullHeight = boxRect.height;
            const boxHeight = boxRect.height; 

            const creditsBtn = creditsWrapper.querySelector('.footer-credits');
            const startY = creditsBtn.offsetHeight + 15;

            gsap.set(creditsBox, { visibility: 'hidden', width: 0, height: 0, opacity: 0, y: startY });
            gsap.set(creditsItems, { y: boxHeight });

            const onEnter = () => {
                gsap.set(creditsBox, { visibility: 'visible' });
                gsap.killTweensOf(creditsBox);
                gsap.killTweensOf(creditsItems);

                gsap.to(creditsBox, { width: fullWidth, height: fullHeight, opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' });
                gsap.to(creditsItems, { y: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out', delay: 0.1 });
            };

            const onLeave = () => {
                gsap.killTweensOf(creditsBox);
                gsap.killTweensOf(creditsItems);

                gsap.to(creditsBox, {
                    width: 0, height: 0, opacity: 0, y: startY, duration: 0.35, ease: 'power3.in',
                    onComplete: () => gsap.set(creditsBox, { visibility: 'hidden' })
                });
                gsap.to(creditsItems, { y: boxHeight, duration: 0.4, ease: 'power3.in', stagger: -0.03, delay: 0.1 });
            };

            creditsWrapper.addEventListener('mouseenter', onEnter);
            creditsWrapper.addEventListener('mouseleave', onLeave);
        }

        // ─── Footer sticker logic removed ───

        // ─── Wiggle on footer interactive elements ───
        const wiggleTargets = [
            { selector: '.footer-get-in-touch', key: 'jobHeading' },
            { selector: '.footer-email', key: 'email' },
            { selector: '.footer-socials a', key: 'socials' },
            { selector: '.credits-name', key: 'socials' },
        ];
        wiggleTargets.forEach(({ selector, key }) => {
            document.querySelectorAll(selector).forEach(el => initWiggle(el, WIGGLE_CONFIG[key] || 15));
        });

    }, []);

    return (
        <div className="footer-inner">
            <div className="footer-top">
                {/* Column 1: Get In Touch & Bio */}
                <div className="footer-column" style={{ flex: '1.5', minWidth: '300px' }}>
                    <div className="footer-logo" style={{ marginBottom: '20px' }}>
                        <img src="/images/logo/logo-transparent.png" alt="Webnique" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <span className="footer-badge footer-get-in-touch" style={{ color: 'var(--color-gold)' }}>GET IN TOUCH</span>
                    
                    <div className="footer-profile" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                        <img src="/images/profile/md_sir.jpeg" alt="Deepak Raj O S" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>Deepak Raj O S</h3>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-orange)', letterSpacing: '1px', fontWeight: 'bold' }}>FOUNDER & MANAGING DIRECTOR</span>
                        </div>
                    </div>

                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', maxWidth: '95%', marginTop: '10px' }}>
                        Meet Deepak Raj O S, the Founder & Managing Director of Webnique Digital Solutions Pvt. Ltd. A dynamic professional with a deep passion for digital innovation and storytelling. His vision is to make top-tier digital services accessible to businesses of all sizes — driven by creativity, integrity, and results.
                    </p>

                    <a href="mailto:contactus@webniqueds.com" className="footer-email" style={{ fontSize: '1.1rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        CONTACTUS@WEBNIQUEDS.COM
                    </a>

                    <div className="footer-socials" id="footer-socials" style={{ marginTop: '15px' }}>
                        {SOCIAL_ICONS.map(({ href, label, svg }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="single-social w-inline-block"
                                aria-label={label}
                                style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%', padding: '10px' }}
                                dangerouslySetInnerHTML={{ __html: svg }}
                            />
                        ))}
                    </div>
                </div>

                {/* Column 2: Company */}
                <div className="footer-column footer-nav-links">
                    <span className="footer-badge">COMPANY</span>
                    <ul>
                        <li><TransitionLink href="/">HOME</TransitionLink></li>
                        <li><TransitionLink href="/about">ABOUT US</TransitionLink></li>
                        <li><TransitionLink href="/our-works">OUR WORKS</TransitionLink></li>
                        <li><TransitionLink href="/contact">CONTACT</TransitionLink></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className="footer-column footer-nav-links">
                    <span className="footer-badge">SERVICES</span>
                    <ul>
                        <li><TransitionLink href="/services">WEB DESIGN & DEVELOPMENT</TransitionLink></li>
                        <li><TransitionLink href="/services">CUSTOM SOFTWARE</TransitionLink></li>
                        <li><TransitionLink href="/services">DIGITAL MARKETING</TransitionLink></li>
                        <li><TransitionLink href="/services">SOCIAL MEDIA</TransitionLink></li>
                        <li><TransitionLink href="/services">CONTENT CREATION</TransitionLink></li>
                        <li><TransitionLink href="/services">BRANDING</TransitionLink></li>
                    </ul>
                </div>

                {/* Column 4: Legal */}
                <div className="footer-column footer-nav-links">
                    <span className="footer-badge">LEGAL</span>
                    <ul>
                        <li><TransitionLink href="/privacy-policy">PRIVACY POLICY</TransitionLink></li>
                        <li><TransitionLink href="/terms-conditions">TERMS & CONDITIONS</TransitionLink></li>
                    </ul>
                </div>
            </div>

            {/* Big WEBNIQUE wordmark removed as per user request */}
            <div className="footer-bottom">
                {/* Stickers removed along with the logo */}

                {/* Bottom row: credits */}
                <div className="footer-bottom-row">
                    <div></div>
                    <div className="footer-credits-wrapper">
                        <div className="credits-box">
                            <div className="credits-content">
                                <div className="credits-item credit-wiggle">
                                    <div className="overflow-wrapper"><span className="credits-label">Copyright © 2025</span></div>
                                    <div className="overflow-wrapper"><span className="credits-name" style={{fontSize:'16px'}}>Webnique Digital Solutions</span></div>
                                </div>
                                <div className="credits-item credit-wiggle">
                                    <div className="overflow-wrapper"><span className="credits-label">All rights reserved.</span></div>
                                    <div className="overflow-wrapper"><TransitionLink href="/privacy-policy" className="credits-name" style={{fontSize:'16px', marginRight:'10px'}}>Privacy Policy</TransitionLink> <TransitionLink href="/terms-conditions" className="credits-name" style={{fontSize:'16px'}}>Terms & Conditions</TransitionLink></div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="footer-credits">credits</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
