'use client';

import React from 'react';
import '../app/styles/process.css';

const processSteps = [
    {
        num: '01',
        title: 'Discovery and Strategy',
        desc: 'We begin by understanding your industry and audience to craft a plan tailored specifically to you.',
        color: 'var(--color-green)'
    },
    {
        num: '02',
        title: 'Design and Development',
        desc: 'Our creative team designs visually appealing and user-friendly websites. Which is responsive and compatible with all devices.',
        color: 'var(--color-orange)'
    },
    {
        num: '03',
        title: 'Monitoring and Optimization',
        desc: 'We consistently review data to improve and enhance our strategies.',
        color: 'var(--color-pink)'
    },
    {
        num: '04',
        title: 'Marketing and Promotion',
        desc: 'We develop marketing strategies to enhance your visibility online.',
        color: 'var(--color-lightblue)'
    }
];

export default function ProcessSection() {
    return (
        <section className="process-section">
            <div className="process-container">
                <div className="process-header">
                    <h4 className="process-subtitle">Our Process</h4>
                    <h2 className="process-title">From Vision to Results</h2>
                </div>
                
                <div className="process-grid">
                    {processSteps.map((step, index) => (
                        <div key={index} className="process-card group">
                            <div className="process-num" style={{ '--hover-color': step.color }}>
                                {step.num}
                            </div>
                            <h3 className="process-card-title">{step.title}</h3>
                            <p className="process-card-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
