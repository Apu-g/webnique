'use client';

import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import ExitPage from '@/components/ExitPage';
import TransitionScribble from '@/components/TransitionScribble';
import WorksDetail from '@/components/WorksDetail';

export default function OurWorksPage() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <Navbar />
            <WorksDetail />
            <ExitPage />
            <TransitionScribble />
        </>
    );
}
