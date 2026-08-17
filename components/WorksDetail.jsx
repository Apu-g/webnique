'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const THEMES = [
  { name: 'green', bg: '#e8f0ea', fg: '#1a2e1c', fgSoft: 'rgba(26,46,28,0.55)', line: 'rgba(26,46,28,0.16)' },
  { name: 'darkblue', bg: '#e3eaf0', fg: '#121c28', fgSoft: 'rgba(18,28,40,0.55)', line: 'rgba(18,28,40,0.16)' },
  { name: 'maroon', bg: '#f0e8e8', fg: '#2c1a1a', fgSoft: 'rgba(44,26,26,0.55)', line: 'rgba(44,26,26,0.16)' },
  { name: 'orange', bg: '#f0ecdc', fg: '#2c2412', fgSoft: 'rgba(44,36,18,0.55)', line: 'rgba(44,36,18,0.16)' },
  { name: 'pink', bg: '#f2ebeb', fg: '#2c1e1e', fgSoft: 'rgba(44,30,30,0.55)', line: 'rgba(44,30,30,0.16)' },
];

const WORKS = [
  {
    brand: 'Car Fit', tag: 'Automotive', link: 'https://carfit.in/',
    heading: 'Driving Digital Excellence — a full-stack transformation for an automotive leader.',
    rows: [
      { label: '(Strategy)', text: 'Brand audit, competitor mapping, and a UX strategy built for conversion from day one.' },
      { label: '(+Design)', text: 'Clean, performance-inspired visuals with a focus on service clarity and trust signals.' },
      { label: '(=Impact)', stats: [['Traffic', '240%'], ['Engagement', '68%']] },
    ],
    logo: '/images/clients/carfit.png',
    theme: 0,
  },
  {
    brand: 'ELLZBURGER', tag: 'Food & Bev', link: 'https://ellzburger.com/',
    heading: 'Bold Branding & Launch — a visual identity that tastes as good as it looks.',
    rows: [
      { label: '(Strategy)', text: 'Positioning a premium burger chain with a personality-first digital footprint.' },
      { label: '(+Design)', text: 'Dynamic menu systems, location-aware UI, and feast-for-the-eyes photography.' },
      { label: '(=Impact)', stats: [['Online Orders', '12K+'], ['Brand Reach', '3.2M']] },
    ],
    logo: '/images/clients/burger-2.png',
    theme: 1,
  },
  {
    brand: 'Camera Service Centre', tag: 'Electronics', link: 'https://cameraservicecentre.in/',
    heading: 'Focusing on Precision — a refined digital presence for precision repair experts.',
    rows: [
      { label: '(Strategy)', text: 'Service-led UX design that puts trust, speed, and expertise front and centre.' },
      { label: '(+Design)', text: 'Booking integration, service tracking dashboards, and a gallery that showcases craft.' },
      { label: '(=Impact)', stats: [['Appointments', '3.2K+'], ['Conversion', '41%']] },
    ],
    logo: '/images/clients/camera.png',
    theme: 2,
  },
  {
    brand: 'SU', tag: 'Education', link: 'https://suniversity.edu.in/',
    heading: 'Modern Education Portal — learning reimagined for the digital generation.',
    rows: [
      { label: '(Strategy)', text: 'Student-first information architecture with streamlined admissions flow.' },
      { label: '(+Design)', text: 'Course discovery, virtual campus tours, and an engaging academic showcase.' },
      { label: '(=Impact)', stats: [['Enquiries', '8.5K+'], ['Page Views', '1.2M']] },
    ],
    logo: '/images/clients/su.png',
    theme: 3,
  },
  {
    brand: 'My Fruit Bowl', tag: 'Health', link: 'https://myfruitbowl.in/',
    heading: 'Fresh Brand Identity — a subscription experience as vibrant as the produce.',
    rows: [
      { label: '(Strategy)', text: 'Rebranding a health-conscious subscription service with story-driven commerce.' },
      { label: '(+Design)', text: 'Bold visual language, seamless checkout, and a narrative that sells wellness.' },
      { label: '(=Impact)', stats: [['Subscribers', '1.8K+'], ['Revenue', '2.3×']] },
    ],
    logo: '/images/clients/frute.png',
    theme: 4,
  },
  {
    brand: 'Lakeview Camp', tag: 'Travel', link: 'https://lakeviewcamp.in/',
    heading: 'Wilderness Reimagined — bringing the outdoors into every pixel.',
    rows: [
      { label: '(Strategy)', text: 'Immersive storytelling that lets explorers taste the experience before they book.' },
      { label: '(+Design)', text: 'Virtual tours, cabin previews, and a frictionless booking engine.' },
      { label: '(=Impact)', stats: [['Bookings', '4.1K+'], ['Avg. Stay', '4.2 days']] },
    ],
    logo: '/images/clients/lakeview.png',
    theme: 0,
  },
  {
    brand: 'Proflex Window Profiles', tag: 'Manufacturing', link: 'https://proflexwindows.com/',
    heading: 'Industrial Precision — B2B crafted with the same rigor as the product.',
    rows: [
      { label: '(Strategy)', text: 'Technical specification architecture for architects, builders, and dealers.' },
      { label: '(+Design)', text: 'Product configurator, dealer network map, and compliance-ready documentation.' },
      { label: '(=Impact)', stats: [['Leads', '2.3K+'], ['Dealers', '180+']] },
    ],
    logo: '/images/clients/pwp.png',
    theme: 1,
  },
  {
    brand: 'Serene Aquatics', tag: 'Lifestyle', link: 'https://sereneaquatics.in/',
    heading: 'Aquatic Elegance — where lifestyle meets liquid serenity.',
    rows: [
      { label: '(Strategy)', text: 'Curated e-commerce UX built for a passionate community of aquatics enthusiasts.' },
      { label: '(+Design)', text: 'Product discovery, care guides, and a visually rich shopping experience.' },
      { label: '(=Impact)', stats: [['Products', '600+'], ['Rating', '4.8/5']] },
    ],
    logo: '/images/clients/serene.png',
    theme: 2,
  },
  {
    brand: 'S V Enterprises', tag: 'Industrial', link: 'https://sve.in/',
    heading: 'Enterprise Scale — industrial supply chain, digitised.',
    rows: [
      { label: '(Strategy)', text: 'End-to-end procurement platform for a large-scale industrial supplier.' },
      { label: '(+Design)', text: 'Inventory integration, client dashboards, and role-based procurement workflows.' },
      { label: '(=Impact)', stats: [['Products', '5K+'], ['Clients', '350+']] },
    ],
    logo: '/images/clients/SVE.png',
    theme: 3,
  },
  {
    brand: 'Saravana Industries', tag: 'Manufacturing', link: 'https://saravana-industries.com/',
    heading: 'Industrial Modernisation — legacy meets lean digital operations.',
    rows: [
      { label: '(Strategy)', text: 'Digital transformation roadmap for a manufacturing giant with legacy systems.' },
      { label: '(+Design)', text: 'Real-time production tracking, client portals, and a refreshed brand identity.' },
      { label: '(=Impact)', stats: [['Efficiency', '35%'], ['Downtime Cut', '28%']] },
    ],
    logo: '/images/clients/saravana.png',
    theme: 4,
  },
  {
    brand: 'Microbeworks Scientific', tag: 'Science', link: 'https://microbeworks.in/',
    heading: 'Science Amplified — precision instruments meet precision design.',
    rows: [
      { label: '(Strategy)', text: 'Global B2B platform strategy for a scientific instruments manufacturer.' },
      { label: '(+Design)', text: 'Product catalogues, research paper repository, and distributor management.' },
      { label: '(=Impact)', stats: [['Countries', '40+'], ['Instruments', '2.1K+']] },
    ],
    logo: '/images/clients/microbework.png',
    theme: 0,
  },
  {
    brand: 'Only Frnz', tag: 'Social', link: 'https://onlyfrnz.com/',
    heading: 'Social by Design — connection is the core feature.',
    rows: [
      { label: '(Strategy)', text: 'Community-first UX strategy for a next-generation social platform.' },
      { label: '(+Design)', text: 'Real-time interaction design, modern UI system, and growth-oriented onboarding.' },
      { label: '(=Impact)', stats: [['Users', '50K+'], ['Retention', '76%']] },
    ],
    logo: '/images/clients/onlyfrnz.png',
    theme: 1,
  },
  {
    brand: 'Astratec', tag: 'Technology', link: 'https://astratec.in/',
    heading: 'Tech Forward — B2B brand built for scale from day one.',
    rows: [
      { label: '(Strategy)', text: 'Lead generation funnel and B2B positioning for an emerging tech startup.' },
      { label: '(+Design)', text: 'Product showcases, case study engine, and a lean conversion-focused UI.' },
      { label: '(=Impact)', stats: [['Leads', '1.5K+'], ['Bounce Rate', '22%']] },
    ],
    logo: '/images/clients/ast.png',
    theme: 2,
  },
  {
    brand: 'KGK', tag: 'Business', link: 'https://kgk.in/',
    heading: 'Legacy Reborn — a trusted name, digitally reinvented.',
    rows: [
      { label: '(Strategy)', text: 'Digital refresh strategy for an established business services firm.' },
      { label: '(+Design)', text: 'Client portal, modern web presence, and streamlined communication tools.' },
      { label: '(=Impact)', stats: [['Portal Users', '800+'], ['Response', '2.1 hrs']] },
    ],
    logo: '/images/clients/kgk.png',
    theme: 3,
  },
  {
    brand: 'Eventzr', tag: 'Events', link: 'https://eventzr.in/',
    heading: 'Event Elevated — from ticketing to unforgettable moments.',
    rows: [
      { label: '(Strategy)', text: 'End-to-end event management platform strategy for organisers and attendees.' },
      { label: '(+Design)', text: 'Ticketing engine, scheduling tools, and real-time event engagement features.' },
      { label: '(=Impact)', stats: [['Events', '1.2K+'], ['Tickets Sold', '75K+']] },
    ],
    logo: '/images/clients/eventzr.png',
    theme: 4,
  },
  {
    brand: 'VVM Strategies', tag: 'Consulting', link: 'https://vvmstrategies.com/',
    heading: 'Strategic Vision — where insight meets interface.',
    rows: [
      { label: '(Strategy)', text: 'Premium digital positioning for a strategy consulting firm with global ambition.' },
      { label: '(+Design)', text: 'Thought leadership publishing, case study library, and refined client acquisition.' },
      { label: '(=Impact)', stats: [['Deals Closed', '120+'], ['Satisfaction', '97%']] },
    ],
    logo: '/images/clients/vvm.png',
    theme: 0,
  },
];

function splitIntoLines(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = '';
  el.style.visibility = 'visible';
  el.style.whiteSpace = 'pre-wrap';

  const container = document.createElement('div');
  container.style.position = 'relative';
  el.appendChild(container);

  const wordEls = words.map((w, i) => {
    const sp = document.createElement('span');
    sp.textContent = w + (i < words.length - 1 ? ' ' : '');
    sp.style.display = 'inline-block';
    sp.style.whiteSpace = 'pre-wrap';
    container.appendChild(sp);
    return sp;
  });

  let top = null;
  const lineEls = [];
  let currentLineWords = [];

  wordEls.forEach((sp) => {
    const t = sp.offsetTop;
    if (top === null) top = t;
    if (t > top) {
      lineEls.push(currentLineWords);
      currentLineWords = [sp];
      top = t;
    } else {
      currentLineWords.push(sp);
    }
  });
  if (currentLineWords.length) lineEls.push(currentLineWords);

  wordEls.forEach((sp) => sp.remove());

  const splitLines = [];

  lineEls.forEach((words) => {
    const mask = document.createElement('div');
    mask.style.overflow = 'hidden';
    mask.style.display = 'block';
    container.appendChild(mask);

    const line = document.createElement('div');
    line.style.display = 'block';
    words.forEach((w) => line.appendChild(w));
    mask.appendChild(line);

    splitLines.push(line);
  });

  return splitLines;
}

export default function WorksDetail() {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      const introLabel = wrapper.querySelector('.ow-intro-label');
      const introTitle = wrapper.querySelector('.ow-intro-title');
      if (introLabel) {
        splitIntoLines(introLabel);
        gsap.set(introLabel.children, { yPercent: 90 });
        gsap.set(introLabel, { visibility: 'visible' });
      }
      if (introTitle) {
        splitIntoLines(introTitle);
        gsap.set(introTitle.children, { yPercent: 90 });
        gsap.set(introTitle, { visibility: 'visible' });
      }
      const introLines = introTitle ? introTitle.children : null;
      if (introLabel && introLines) {
        gsap.timeline()
          .to(introLabel.children, { yPercent: 0, duration: 1.4, ease: 'power4.out', stagger: 0.08 })
          .to(introLines, { yPercent: 0, duration: 1.4, ease: 'power4.out', stagger: 0.08 }, '<');
      }

      const sections = wrapper.querySelectorAll('.ow-section');
      sections.forEach((section) => {
        const bg = section.querySelector('.ow-bg');
        const h2 = section.querySelector('.heading');

        if (!h2 || !bg) return;

        const lineEls = splitIntoLines(h2);

        gsap.set(lineEls, { yPercent: 90 });

        gsap.to(bg, {
          y: -220,
          skewY: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            end: 'top 40%',
            scrub: 0.5,
          },
        });

        ScrollTrigger.create({
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => {
            gsap.to(lineEls, {
              yPercent: 0,
              duration: 1.4,
              ease: 'power4.out',
              stagger: 0.08,
            });
          },
          onLeaveBack: () => {
            gsap.to(lineEls, {
              yPercent: 90,
              duration: 0.8,
              ease: 'power2.in',
              stagger: 0.04,
            });
          },
        });
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div className="ow-main" ref={wrapperRef}>
        <section className="ow-intro-section ow-ink">
          <p className="ow-intro-label">Webnique Digital Solutions</p>
          <h1 className="ow-intro-title">Our <span className="ow-intro-accent">Works</span></h1>
        </section>

        {WORKS.map((work, i) => {
          const t = THEMES[work.theme];
          return (
            <section
              key={work.brand}
              className={`ow-section ow-theme-${t.name}`}
              style={{
                zIndex: i + 2,
                '--ow-bg': t.bg,
                '--ow-fg': t.fg,
                '--ow-fg-soft': t.fgSoft,
                '--ow-line': t.line,
              }}
            >
              <div className="ow-skew-bg">
                <div className={`ow-bg ow-theme-${t.name}`} />
              </div>
              <div className="ow-container">
                <h2 className="heading" style={{ visibility: 'hidden' }}>
                  {work.heading}
                </h2>
                <div className="ow-content">
                  <div className="ow-media">
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <img src={work.logo} alt={work.brand} />
                    </a>
                  </div>
                  <div className="ow-details">
                    {work.rows.map((row, ri) => (
                      <div className="ow-row" key={ri}>
                        <span>{row.label}</span>
                        {row.stats ? (
                          <ul className="ow-stats-list">
                            {row.stats.map((s) => (
                              <li key={s[0]}><span>{s[0]}</span><span>{s[1]}</span></li>
                            ))}
                          </ul>
                        ) : (
                          <p>{row.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="ow-cta-section ready-to-start" style={{ zIndex: WORKS.length + 2 }}>
          <div className="ow-ready-cta">
            <h2>Ready to Start?</h2>
            <p>Scroll down to talk with us</p>
            <div className="scroll-arrow">&darr;</div>
          </div>
        </section>
    </div>
  );
}
