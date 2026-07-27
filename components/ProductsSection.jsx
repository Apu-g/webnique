'use client';

export default function ProductsSection() {
    return (
        <section className="products-section" id="products-section">
            <div className="products__inner">
                <div className="products__header">
                    <p className="products__eyebrow">
                        <span className="products__eyebrow-line"></span>
                        Built by Webnique
                        <span className="products__eyebrow-line"></span>
                    </p>
                    <h2 className="products__title">
                        Introducing our <span className="products__title--italic">products</span>
                    </h2>
                </div>

                <div className="products__grid">
                    <a
                        href="https://quip.wb-roots.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="products__card products__card--charcoal"
                    >
                        <span className="products__card-number">01</span>
                        <h3 className="products__card-name">Quip</h3>
                        <p className="products__card-desc">
                            AI-powered customer support. Turn your docs and website into a brilliant assistant that handles tickets and engages customers around the clock.
                        </p>
                        <span className="products__card-cta">
                            Explore Quip
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                                <path d="M12 1L17 6M17 6L12 11M17 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="https://wbflow.wb-roots.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="products__card products__card--orange"
                    >
                        <span className="products__card-number">02</span>
                        <h3 className="products__card-name">WBFlow</h3>
                        <p className="products__card-desc">
                            Business management simplified. Invoicing, client tracking, payments, and reports — everything you need in one clean dashboard.
                        </p>
                        <span className="products__card-cta">
                            Explore WBFlow
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                                <path d="M12 1L17 6M17 6L12 11M17 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </div>

                <p className="products__footer-text">
                    Both products are brought to you by <strong>WBRoots</strong> — a Webnique venture.
                </p>
            </div>
        </section>
    );
}
