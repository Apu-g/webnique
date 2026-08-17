'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import SmartHero from '@/components/SmartHero';
import ServiceCards from '@/components/ServiceCards';
import MotionCards from '@/components/MotionCards';
import Showreel from '@/components/Showreel';
import OurWorksSection from '@/components/OurWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReadyToStartSection from '@/components/ReadyToStartSection';
import ExitPage from '@/components/ExitPage';
import TransitionScribble from '@/components/TransitionScribble';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';

import ProductsSection from '@/components/ProductsSection';

export default function Home() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
                <SmartHero />
            </header>
            <main>
                <div className="content-section motion-cards-wrapper">
                    <MotionCards />
                </div>
                <Showreel />
                <div className="content-section service-cards-wrapper" id="services">
                    <ServiceCards />
                </div>
                <ProductsSection />
            </main>
            <OurWorksSection />
            <TestimonialsSection />
            <ReadyToStartSection />
            <ExitPage />
            
            <TransitionScribble />
        </>
    );
}
