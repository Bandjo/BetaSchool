import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Admissions from './components/Admissions';
import './index.css';

function App() {
  return (
    <div className="app">
      <nav className="glass-panel nav-container" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="./vite.svg" alt="Beta Academy Logo" style={{ height: '1.5rem' }} />
          BETA ACADEMY
        </div>
        <div className="nav-links">
          <a href="#philosophy" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500 }}>The Approach</a>
          <a href="#pricing" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500 }}>Tuition</a>
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
