import React from 'react';

const Admissions = () => {
    return (
        <section id="admissions" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <div className="glass-panel" style={{ position: 'relative' }}>
                            <img
                                src="./assets/teacher_portrait_1763659250842.png"
                                alt="Head of Admissions"
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                right: '2rem',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '1rem',
                                borderRadius: '10px',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <h4 style={{ color: 'white', marginBottom: '0.2rem' }}>Sarah Jenkins, PhD</h4>
                                <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>Chief Human Interface</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Apply Now</h2>
                        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
                            Our selection process is rigorous. We only accept children with high potential for AGI alignment.
                        </p>

                        <form className="glass-panel" onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Child's Name</label>
                                <input type="text" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '5px',
                                    color: 'white'
                                }} />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Parent's Net Worth (Verified)</label>
                                <select style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '5px',
                                    color: 'white'
                                }}>
                                    <option>$1M - $5M (Waitlist)</option>
                                    <option>$5M - $20M (Priority)</option>
                                    <option>$20M+ (Instant Access)</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Why does your child deserve the future?</label>
                                <textarea rows="4" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '5px',
                                    color: 'white'
                                }}></textarea>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
