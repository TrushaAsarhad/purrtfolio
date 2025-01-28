import React from 'react';
import './Footer.css';
import catWavingGif from '../assets/cat-waving.gif';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="mailto:harshada.s@somaiya.edu" target="_blank" rel="noreferrer">
          📧 Email
        </a>
        <a href="https://www.linkedin.com/in/harshada-sutar-159782248" target="_blank" rel="noreferrer">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/TrushaAsarhad" target="_blank" rel="noreferrer">
          🐱 GitHub
        </a>
        <a href="https://www.instagram.com/harshada_sutar_07__/profilecard/?igsh=enRtcWZvcDNkdHFx" target="_blank" rel="noreferrer">
          📸 Instagram
        </a>
      </div>

      {/* Isolated waving cat */}
      <div className="cat-wave">
        <img src={catWavingGif} alt="Waving Cat" />
        <p>Goodbye! Stay pawsome 🐾</p>
      </div>
    </footer>
  );
}

export default Footer;
