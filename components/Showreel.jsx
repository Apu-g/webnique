'use client';

const images = [
    '/images/marque1.jpeg',
    '/images/marque2.jpeg',
    '/images/marque3.jpeg',
];

export default function Showreel() {
    return (
        <section className="showreel-section" id="showreel-section">
            <div className="showreel__marquee">
                <div className="showreel__track showreel__track--up">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
                <div className="showreel__track showreel__track--down">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
                <div className="showreel__track showreel__track--up-alt">
                    {[...images, ...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="showreel__item">
                            <img src={src} alt="" className="showreel__img" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="showreel__content">
                <h2 className="showreel__title">
                    <span className="showreel__word">where </span>
                    <span className="showreel__word showreel__word--italic"><em>vision</em></span>
                    <span className="showreel__word"> meets </span>
                    <span className="showreel__word showreel__word--accent">craft</span>
                </h2>
            </div>
        </section>
    );
}
