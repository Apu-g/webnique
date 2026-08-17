'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, CheckCircle2, ArrowRight, LayoutTemplate, Sparkles, BarChart3 } from 'lucide-react';

export default function DigitalHero() {
  // Animation variants
  const floatAnim = (delay = 0, yOffset = 10, duration = 3) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -yOffset, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }
  });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
  });

  return (
    <section className="digital-hero relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Orbs / Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="digital-hero__orb digital-hero__orb--left" />
        <div className="digital-hero__orb digital-hero__orb--right" />
        <div className="absolute inset-0 bg-[var(--bg-color)]/80 backdrop-blur-[100px] z-0" />
        <div className="digital-hero__grid z-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN - Messaging & Wireframes */}
        <div className="flex flex-col space-y-10 lg:pr-8">
          
          <motion.div {...fadeUp(0.1)} className="flex items-center space-x-3 mb-2">
            <img src="/images/logo/logo-transparent.png" alt="Webnique" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">Webnique</span>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
              Build Faster.<br/>
              <span className="text-[var(--color-gold)]">Design Better.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed">
              Empowering Digital Growth Through Integrity and Innovation. From wireframes to final design, we accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#services" className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-black-deep)] rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[var(--hero-glow-gold)]">
                Get Started
              </a>
              <a href="/our-works" className="px-8 py-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text-primary)] rounded-xl font-semibold hover:bg-[var(--hover-surface)] transition-all duration-300 backdrop-blur-md">
                View Our Works
              </a>
            </div>
          </motion.div>

          {/* Wireframes Stack Graphic */}
          <motion.div {...fadeUp(0.4)} className="relative h-[200px] mt-8 w-full max-w-md hidden sm:block">
            {/* Badge: Human Strategy */}
            <motion.div 
              variants={floatAnim(0, 8, 3.5)}
              initial="initial"
              animate="animate"
              className="absolute -left-4 -top-8 bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] backdrop-blur-xl px-4 py-2 rounded-2xl flex items-center gap-2 shadow-[var(--shadow-soft)] z-20"
            >
              <div className="bg-purple-500/20 p-1.5 rounded-lg">
                <Brain className="w-5 h-5 text-purple-500" />
              </div>
              <span className="font-semibold text-sm text-[var(--color-text-primary)]">Human Strategy</span>
            </motion.div>

            {/* Stacked wireframe cards */}
            <div className="absolute inset-0 translate-x-12 translate-y-4 opacity-40">
               <WireframeCard />
            </div>
            <div className="absolute inset-0 translate-x-6 translate-y-2 opacity-70">
               <WireframeCard />
            </div>
            <div className="absolute inset-0 z-10 shadow-[var(--shadow-soft)]">
               <WireframeCard active />
            </div>

            {/* Badge: AI Speed */}
            <motion.div 
              variants={floatAnim(1, 12, 4)}
              initial="initial"
              animate="animate"
              className="absolute -right-4 bottom-0 bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] backdrop-blur-xl px-4 py-2 rounded-2xl flex items-center gap-2 shadow-[var(--shadow-soft)] z-20"
            >
              <div className="bg-blue-500/20 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <span className="font-semibold text-sm text-[var(--color-text-primary)]">AI Speed</span>
            </motion.div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN - Final Design Mockup */}
        <motion.div 
          {...fadeUp(0.3)}
          className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end"
        >
          
          {/* Arrow / Flow connecting left to right (desktop only) */}
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 hidden lg:flex items-center text-[var(--color-text-secondary)] opacity-50 z-0">
             <motion.div
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
             >
                <ArrowRight className="w-12 h-12 text-[var(--color-gold)]" strokeWidth={1.5} />
             </motion.div>
          </div>

          {/* Final Design Browser Mockup */}
          <motion.div 
            variants={floatAnim(0.5, 15, 5)}
            initial="initial"
            animate="animate"
            className="relative w-full max-w-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] backdrop-blur-2xl overflow-hidden z-10"
          >
            {/* Browser Header */}
            <div className="h-12 border-b border-[var(--glass-border)] flex items-center px-4 gap-2 bg-[var(--ghost-bg)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto px-4 py-1 rounded-full bg-[var(--color-black-deep)]/10 dark:bg-[var(--color-white)]/5 border border-[var(--glass-border)] text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                <LayoutTemplate className="w-3 h-3" /> webnique.com
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-8 space-y-8 bg-gradient-to-b from-[var(--ghost-bg)] to-transparent">
               
               <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                   <img src="/images/logo/logo-transparent.png" className="h-6 object-contain" alt="Logo" />
                   <div className="w-24 h-4 rounded-md bg-[var(--color-text-primary)]/10" />
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-2 rounded-full bg-[var(--color-text-secondary)]/20" />
                   <div className="w-12 h-2 rounded-full bg-[var(--color-text-secondary)]/20" />
                   <div className="w-12 h-2 rounded-full bg-[var(--color-text-secondary)]/20" />
                 </div>
               </div>

               <div className="space-y-4 pt-4">
                 <div className="w-3/4 h-8 rounded-lg bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-green)] opacity-80" />
                 <div className="w-1/2 h-8 rounded-lg bg-[var(--color-text-primary)]/80" />
                 <div className="w-full h-3 rounded-full bg-[var(--color-text-secondary)]/30 mt-4" />
                 <div className="w-5/6 h-3 rounded-full bg-[var(--color-text-secondary)]/30" />
               </div>

               <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="h-32 rounded-2xl bg-[var(--ghost-bg)] border border-[var(--glass-border)] p-4 flex flex-col justify-between">
                    <Sparkles className="w-6 h-6 text-[var(--color-gold)]" />
                    <div>
                      <div className="w-1/2 h-3 rounded-full bg-[var(--color-text-primary)]/60 mb-2" />
                      <div className="w-3/4 h-2 rounded-full bg-[var(--color-text-secondary)]/30" />
                    </div>
                 </div>
                 <div className="h-32 rounded-2xl bg-[var(--ghost-bg)] border border-[var(--glass-border)] p-4 flex flex-col justify-between">
                    <BarChart3 className="w-6 h-6 text-[var(--color-green)]" />
                    <div>
                      <div className="w-1/2 h-3 rounded-full bg-[var(--color-text-primary)]/60 mb-2" />
                      <div className="w-3/4 h-2 rounded-full bg-[var(--color-text-secondary)]/30" />
                    </div>
                 </div>
               </div>
               
               <div className="pt-4 flex justify-center">
                 <div className="w-32 h-10 rounded-xl bg-[var(--color-gold)] opacity-90" />
               </div>

            </div>
          </motion.div>

          {/* Badge: Client Approval */}
          <motion.div 
            variants={floatAnim(1.5, 10, 4.5)}
            initial="initial"
            animate="animate"
            className="absolute right-0 lg:-right-8 top-1/4 bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] backdrop-blur-xl px-5 py-3 rounded-2xl flex items-center gap-3 shadow-[var(--shadow-soft)] z-20"
          >
            <div className="bg-green-500/20 p-1.5 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <span className="font-bold text-[var(--color-text-primary)]">Client Approval</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for the Wireframe card
function WireframeCard({ active = false }) {
  return (
    <div className={`w-full h-full bg-[var(--card-bg)] border ${active ? 'border-[var(--color-gold)]' : 'border-[var(--color-border)]'} rounded-2xl p-5 flex flex-col gap-4 overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--color-text-primary)]/10" />
        <div className="flex-1 space-y-2">
          <div className="w-1/2 h-2 rounded-full bg-[var(--color-text-primary)]/20" />
          <div className="w-1/3 h-2 rounded-full bg-[var(--color-text-primary)]/10" />
        </div>
      </div>
      {/* Body image placeholder */}
      <div className="w-full h-24 rounded-xl bg-[var(--color-text-primary)]/5 border border-[var(--color-text-primary)]/10 flex items-center justify-center">
        <LayoutTemplate className="w-8 h-8 text-[var(--color-text-secondary)]/30" />
      </div>
      {/* Footer lines */}
      <div className="space-y-2">
        <div className="w-full h-2 rounded-full bg-[var(--color-text-primary)]/10" />
        <div className="w-5/6 h-2 rounded-full bg-[var(--color-text-primary)]/10" />
        <div className="w-4/6 h-2 rounded-full bg-[var(--color-text-primary)]/10" />
      </div>
    </div>
  );
}
