'use client';

import BlurReveal from '@/components/BlurReveal';
import Reveal from '@/components/Reveal';

export default function ReadyToStartSection() {
  return (
    <section className="ready-to-start">
      <BlurReveal as="h2">Ready to start your project?</BlurReveal>
      <Reveal as="p" start="top 88%" delay={0.2}>Let&apos;s create something amazing together.</Reveal>
      <Reveal start="top 90%" delay={0.35}>
        <a href="/contact" className="ow-marquee-cta">
          Get in Touch
        </a>
      </Reveal>
    </section>
  );
}
