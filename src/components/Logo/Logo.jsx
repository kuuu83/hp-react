import React from 'react';
import './Logo.css';
import logoImage from '../../assets/印刷用ロゴ2.png';

function Logo() {
  return (
    <section id="logo-section">
      <div className="logo-area-wrapper reveal">
        <div className="vertical-text-accent left">海老名の隠れ家</div>
        <div className="logo-container">
          <img src={logoImage} alt="店舗ロゴ" className="logo-image" />
        </div>
        <div className="vertical-text-accent right">旬の魚を味わう</div>
      </div>
      <div className="concept-text reveal delay-1">
        <p>魚一筋４０年の<br />大将が造る刺身やにぎり、<br />旬の魚料理を堪能しに来てください。</p>
      </div>
    </section>
  );
}

export default Logo;