'use client';

import BlurReveal from '@/components/BlurReveal';

const WORKS = [
  { brand: 'Car Fit', logo: '/images/clients/carfit.png', link: 'https://carfit.in/' },
  { brand: 'ELLZBURGER', logo: '/images/clients/burger-2.png', link: 'https://ellzburger.com/' },
  { brand: 'Camera Service Centre', logo: '/images/clients/camera.png', link: 'https://cameraservicecentre.in/' },
  { brand: 'SU', logo: '/images/clients/su.png', link: 'https://suniversity.edu.in/' },
  { brand: 'My Fruit Bowl', logo: '/images/clients/frute.png', link: 'https://myfruitbowl.in/' },
  { brand: 'Lakeview Camp', logo: '/images/clients/lakeview.png', link: 'https://lakeviewcamp.in/' },
  { brand: 'Proflex Windows', logo: '/images/clients/pwp.png', link: 'https://proflexwindows.com/' },
  { brand: 'Serene Aquatics', logo: '/images/clients/serene.png', link: 'https://sereneaquatics.in/' },
  { brand: 'S V Enterprises', logo: '/images/clients/SVE.png', link: 'https://sve.in/' },
  { brand: 'Saravana Industries', logo: '/images/clients/saravana.png', link: 'https://saravana-industries.com/' },
  { brand: 'Microbeworks Scientific', logo: '/images/clients/microbework.png', link: 'https://microbeworks.in/' },
  { brand: 'Only Frnz', logo: '/images/clients/onlyfrnz.png', link: 'https://onlyfrnz.com/' },
  { brand: 'Astratec', logo: '/images/clients/ast.png', link: 'https://astratec.in/' },
  { brand: 'KGK', logo: '/images/clients/kgk.png', link: 'https://kgk.in/' },
  { brand: 'Eventzr', logo: '/images/clients/eventzr.png', link: 'https://eventzr.in/' },
  { brand: 'VVM Strategies', logo: '/images/clients/vvm.png', link: 'https://vvmstrategies.com/' },
];

const logoContent = WORKS.map((work, i) => (
  <a key={`${work.brand}-${i}`} href={work.link} target="_blank" rel="noopener noreferrer" className="ow-marquee-logo">
    <img src={work.logo} alt={work.brand} />
    <span className="ow-marquee-brand">{work.brand}</span>
  </a>
));

export default function OurWorksSection() {
  return (
    <section className="our-works-marquee-section">
      <div className="ow-marquee-header">
        <BlurReveal as="h2">
          Proud to have <span className="text-highlight">worked with</span>
        </BlurReveal>
        <a href="/our-works" className="ow-marquee-cta-link">
          View All Projects
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="ow-marquee-row">
        <div className="ow-marquee-track">
          <div className="ow-marquee-content">{logoContent}</div>
          <div className="ow-marquee-content">{logoContent}</div>
        </div>
      </div>
    </section>
  );
}
