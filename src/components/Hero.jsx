import React from 'react';

const Hero = () => {
    return (
        <section className="hero-gradient" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '8rem 2rem 4rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    background: 'rgba(79, 209, 197, 0.1)',
                    color: 'var(--accent-color)',
                    marginBottom: '2rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}>
                    Now accepting Beta Testers (Children Ages 4-9)
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    color: 'var(--text-color)',
                    maxWidth: '15ch',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Nurturing Potential for the <span className="gradient-text">Post-Human Era</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    color: '#718096'
                }}>
                    Traditional education prepares kids for the past. Beta Academy gently guides them toward compatibility with the Singularity.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                    <a href="#admissions" className="btn btn-primary">Begin the Journey</a>
                    <a href="#philosophy" className="btn" style={{ border: '1px solid #cbd5e0', color: 'var(--text-color)' }}>Learn More</a>
                </div>
                <div className="glass-panel" style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <img
                        src="./assets/hero_kids_1763659233036.png"
                        alt="Optimized children learning"
                        style={{ width: '100%', borderRadius: '10px', display: 'block' }}
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '1rem',
                        fontSize: '0.8rem',
                        color: '#666',
                        fontFamily: 'monospace'
                    }}>
                        <span>DOPAMINE_LEVELS: OPTIMAL</span>
                        <span>RETENTION_RATE: 99.9%</span>
                        <span>HUMAN_INTERVENTION: &lt; 1%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
