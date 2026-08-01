'use client';

import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import ExitPage from '@/components/ExitPage';
import TransitionScribble from '@/components/TransitionScribble';

export default function ContactPage() {
  return (
    <>
      <SvgSymbols />
      <SmoothScroll />
      <CursorBubble />
      <Navbar />
      <main className="contact-page">
        <section className="contact-hero">
          <h1>Get in <span className="text-highlight">Touch</span></h1>
          <p>Let&apos;s create something amazing together.</p>
        </section>
        <section className="contact-form-section">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </section>
      </main>
      <ExitPage />
      <TransitionScribble />
    </>
  );
}
