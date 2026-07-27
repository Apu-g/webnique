'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import TransitionLink from './TransitionLink';

export default function VimeoHero() {
    const iframeRef = useRef(null);
    const playerRef = useRef(null);
    const centerTitleRef = useRef(null);

    const [isMuted, setIsMuted] = useState(true);

    // Native video loads immediately enough that we don't need a heavy ready listener.
    // We already handle `setIsLoaded(true)` directly on the <video onLoadedData={...}> element.

    /* ─── Center Title Animation ─── */
    useEffect(() => {
        if (!centerTitleRef.current) return;
        const words = centerTitleRef.current.querySelectorAll('.word-inner');
        
        gsap.to(words, {
            y: '0%',
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.5
        });
    }, []);

    const toggleMute = (e) => {
        if (e) e.stopPropagation();
        if (!iframeRef.current) return;
        iframeRef.current.muted = !isMuted;
        setIsMuted(m => !m);
    };

    return (
        <>
            {/* ── Main hero container ── */}
            <div
                className={`vimeo-hero ${isMuted ? 'is-muted' : 'is-unmuted'}`}
                ref={playerRef}
                onClick={toggleMute}
            >
                {/* 
                  Video Placeholder: 
                  Currently left blank to display a solid black background while you work on text, SVGs, and the navbar.
                  Once you have your personal video file in the `public/` folder, uncomment and update the src below!
                */}
                <video
                    ref={iframeRef}
                    // src="/your-personal-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="vimeo-hero__iframe"
                    style={{ objectFit: 'cover', backgroundColor: '#111' }}
                />

                {/* Animated moving background ambient orbs & mesh grid */}
                <div className="vimeo-hero__bg-animation">
                    <div className="vimeo-hero__orb vimeo-hero__orb--1" />
                    <div className="vimeo-hero__orb vimeo-hero__orb--2" />
                    <div className="vimeo-hero__orb vimeo-hero__orb--3" />
                    <div className="vimeo-hero__grid-overlay" />
                </div>

                {/* Gradient fade */}
                <div className="vimeo-hero__fade" />

                {/* Logo — hero only, not sticky */}
                <div className="vimeo-hero__logo">
                    <TransitionLink href="/" style={{ display: 'flex' }}>
                        <img className="logo-truus" src="/images/logo/logo-transparent.png" alt="Webnique" />
                    </TransitionLink>
                </div>

                {/* Center Title - Animated on load */}
                <div className="vimeo-hero__center-title" ref={centerTitleRef}>
                    <span className="word"><span className="word-inner">WEBNIQUE</span></span>
                    <span className="word"><span className="word-inner">DIGITAL</span></span>
                    <span className="word"><span className="word-inner">SOLUTIONS</span></span>
                </div>

                {/* ① Headline — bottom left, word-by-word layout */}
                <div className="home-header__title">
                    <h1 className="vimeo-hero__title">

                        {/* "empowering" */}
                        <span className="vimeo-hero__word">empowering </span>

                        {/* "digital" + ⑤ smiley (no animation) */}
                        <span className="vimeo-hero__word is--relative">
                            <span>digital </span>
                            <div className="home-header__smiley">
                                <img
                                    src="/assets/VimeoHero SVG/smiley-face.svg"
                                    alt=""
                                    className="home-header__smiley-svg"
                                />
                            </div>
                        </span>

                        {/* "growth" italic */}
                        <span className="vimeo-hero__word"><em>growth </em></span>

                        {/* "through" */}
                        <span className="vimeo-hero__word">through </span>

                        <div style={{ flexBasis: '100%', height: 0 }} />

                        <span className="vimeo-hero__word">integrity </span>
                        <span className="vimeo-hero__word">and </span>

                        {/* "innovation" + ⑤ pink star (no spin) + oval underline */}
                        <span className="vimeo-hero__word is--relative">
                            <div className="home-header__star">
                                <div className="home-header__star-inner">
                                    <img
                                        src="/assets/VimeoHero SVG/pink-star.svg"
                                        alt=""
                                        className="home-header__star-svg"
                                    />
                                </div>
                            </div>
                            {/* Oval underline */}
                            <img
                                src="/assets/VimeoHero SVG/oval-underline.svg"
                                alt=""
                                className="home-header__title-line-svg"
                            />
                            <span>innovation</span>
                        </span>

                    </h1>
                </div>

                {/* Loading spinner removed because native HTML video loads silently in background */}
            </div>
        </>
    );
}
