import React from 'react';

const Philosophy = () => {
    return (
        <section id="philosophy" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Algorithm <br /> Knows Best</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#ccc', fontSize: '1.1rem' }}>
                            Why trust a human teacher's "intuition" when you can rely on 175 billion parameters of pure pedagogical precision?
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: '#ccc', fontSize: '1.1rem' }}>
                            Our proprietary LLM (Lesson Learning Model) generates a unique curriculum for your child every 15 seconds, adjusting in real-time based on biometric feedback and engagement metrics.
                        </p>
                        <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
                            {[
                                "Predictive Behavioral Correction",
                                "Algorithmic Social Engineering",
                                "Prompt Engineering as a Second Language",
                                "GPU-Accelerated Recess"
                            ].map((item, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                    color: 'var(--accent-color)'
                                }}>
                                    <span style={{ marginRight: '1rem' }}>◉</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-panel">
                        <img
                            src="./assets/classroom_play_1763659243405.png"
                            alt="Play-based learning environment"
                            style={{ width: '100%', borderRadius: '10px', marginBottom: '1.5rem' }}
                        />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Play-Based Data Mining</h3>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>
                            We don't just let kids play. We capture every interaction to fine-tune their cognitive weights.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
