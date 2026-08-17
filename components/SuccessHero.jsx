'use client';

import { useRef } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Lottie from 'lottie-react';

const FLOATERS = [
  {
    type: 'img',
    src: '/animations/hero-backend.png',
    label: 'Backend & Code',
    className: 'webnique-hero__floater--code',
    dur: 11, delay: 0, dx: 24, dy: -32, rot: 5,
  },
  {
    type: 'img',
    src: '/animations/hero-marketing.png',
    label: 'Digital Marketing',
    className: 'webnique-hero__floater--marketing',
    dur: 10, delay: 0.4, dx: -24, dy: 30, rot: -5,
  },
  {
    type: 'lottie',
    path: '/animations/growth.json',
    label: 'Business Growth',
    className: 'webnique-hero__floater--growth',
    dur: 12, delay: 0.7, dx: 22, dy: -28, rot: 4,
  },
  {
    type: 'lottie',
    path: '/animations/content-creation.json',
    label: 'Content Creation',
    className: 'webnique-hero__floater--content',
    dur: 13, delay: 0.9, dx: -22, dy: 26, rot: -4,
  },
];

export default function SuccessHero() {
  const containerRef = useRef(null);

  return (
    <MotionConfig reducedMotion="user">
      <section 
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-color)]"
        ref={containerRef}
      >
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[800px] bg-[radial-gradient(ellipse_at_center,var(--color-gold)_0%,transparent_60%)] filter blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          
          {/* Highlighted Webnique Logo & Brand */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-8 z-30"
          >
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-[var(--color-gold)] blur-2xl opacity-40 rounded-full" />
              <img 
                src="/images/logo/logo-transparent.png" 
                alt="Webnique Digital Solutions Logo" 
                className="relative h-24 sm:h-32 md:h-40 object-contain drop-shadow-2xl filter dark:brightness-125 z-10" 
              />
            </div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest text-[var(--color-text-primary)] drop-shadow-lg text-center"
            >
              Webnique
              <span className="block text-xl sm:text-2xl font-semibold tracking-normal mt-2 text-[var(--color-gold)]">
                Digital Solutions
              </span>
            </motion.h1>
          </motion.div>

          {/* Central Workspace Image */}
          <div className="relative w-full max-w-5xl mt-4 sm:mt-8 z-20 flex justify-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative rounded-3xl flex justify-center items-center w-full"
            >
               <img 
                 src="/images/hero-laptop-cutout.png" 
                 alt="Laptop Workspace" 
                 className="w-full h-auto max-h-[75vh] object-contain drop-shadow-2xl"
               />
            </motion.div>

            {/* Floaters (Animations/Gifs) from original Hero */}
            {FLOATERS.map((floater, i) => {
              const { label, dur, delay, dx, dy, rot } = floater;
              
              // Position logic based on index to spread them around the laptop
              let positionClasses = "";
              if (i === 0) positionClasses = "top-[-5%] left-[5%] sm:left-[10%]"; // top left
              if (i === 1) positionClasses = "bottom-[10%] right-[-5%] sm:right-[0%]"; // bottom right
              if (i === 2) positionClasses = "top-[10%] right-[0%] sm:right-[5%]"; // top right
              if (i === 3) positionClasses = "bottom-[5%] left-[0%] sm:left-[5%]"; // bottom left

              return (
                <motion.div
                  key={label}
                  className={`absolute ${positionClasses} z-30 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex flex-col items-center justify-center`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, dx, 0],
                    y: [0, dy, 0],
                    rotate: [0, rot, -rot, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.6 + delay },
                    scale: { duration: 0.6, delay: 0.6 + delay },
                    x: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center drop-shadow-lg">
                    {floater.type === 'lottie' ? (
                      <Lottie
                        path={floater.path}
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={floater.src}
                        alt={label}
                        className="w-full h-full object-contain"
                        draggable="false"
                      />
                    )}
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs font-bold text-center leading-tight bg-[var(--color-gold)] text-[var(--color-black-deep)] px-2 py-1 rounded-full whitespace-nowrap hidden sm:block">
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </MotionConfig>
  );
}
