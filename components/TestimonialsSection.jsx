'use client';

import { useLayoutEffect } from 'react';
import { TESTIMONIALS_DATA } from '@/lib/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TestimonialsSection() {
    const row1 = TESTIMONIALS_DATA.slice(0, 4);
    const row2 = TESTIMONIALS_DATA.slice(4, 7);

    const row1Content = [...row1, ...row1].map((item, i) => (
        <div key={`row1-${i}`} className="testimonial-card" style={{ backgroundColor: `var(--color-${item.color})` }}>
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">- {item.author}</p>
        </div>
    ));

    const row2Content = [...row2, ...row2].map((item, i) => (
        <div key={`row2-${i}`} className="testimonial-card" style={{ backgroundColor: `var(--color-${item.color})` }}>
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">- {item.author}</p>
        </div>
    ));

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const marqueeTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        marqueeTl
            .to('.testimonials-underline', { scaleX: 1, opacity: 1, duration: 1, ease: 'power2.out' });

        return () => {
            ScrollTrigger.getAll().forEach(t => { if (t.vars.trigger === '.testimonials-section') t.kill(); });
        };
    }, []);

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2>
                    Happy Words <br/> From Happy <span className="text-highlight">Customers</span>
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="testimonials-underline" viewBox="0 0 132 5" fill="none">
                    <path d="M1 2.08377C44.3458 3.90451 87.9791 5.71442 131 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="testimonials-marquee-container">
                <div className="testimonials-marquee-row row-left">
                    <div className="testimonials-marquee-track">
                        <div className="marquee-content">
                            {row1Content}
                        </div>
                        <div className="marquee-content">
                            {row1Content}
                        </div>
                    </div>
                </div>

                <div className="testimonials-marquee-row row-right">
                    <div className="testimonials-marquee-track reverse">
                        <div className="marquee-content">
                            {row2Content}
                        </div>
                        <div className="marquee-content">
                            {row2Content}
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
}
