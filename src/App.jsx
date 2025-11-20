import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Admissions from './components/Admissions';
import './index.css';

function App() {
  return (
    <div className="app">
      <nav className="glass-panel" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
          BETA ACADEMY
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#philosophy" style={{ color: 'white', textDecoration: 'none' }}>The Algorithm</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none' }}>Investment</a>
          <a href="#admissions" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Join Waitlist</a>
        </div>
      </nav>

      <Hero />
      <Philosophy />
      <Pricing />
      <Admissions />

      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5 }}>
        <p>&copy; 2025 Beta Academy. Optimizing the next generation.</p>
      </footer>
    </div>
  );
}

export default App;
