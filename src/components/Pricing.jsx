import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '8rem 0', background: '#f7fafc' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Tuition & Investment</h2>
                <p style={{ color: '#718096', marginBottom: '4rem' }}>Quality data training isn't cheap.</p>

                <div className="glass-panel" style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    border: '1px solid #e2e8f0',
                    background: 'white'
                }}>
                    <div style={{ padding: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>The Early Adopter</h3>
                        <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
                            $100k<span style={{ fontSize: '1rem', color: '#718096' }}>/year</span>
                        </div>
                    </div>

                    <div style={{ padding: '2rem', textAlign: 'left' }}>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                "Access to GPT-6 (Alpha)",
                                "Personalized Neural Link (Non-invasive)",
                                "24/7 Biometric Monitoring",
                                "Guaranteed Ivy League Placement (Simulated)",
                                "Organic, Nootropic Lunch Menu"
                            ].map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', color: '#4a5568' }}>
                                    <span style={{ color: 'var(--accent-color)', marginRight: '1rem' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                            Secure Your Spot
                        </button>
                        <p style={{ fontSize: '0.8rem', color: '#718096', marginTop: '1rem', textAlign: 'center' }}>
                            *Non-refundable. We accept USD, Bitcoin, and Compute Credits.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
