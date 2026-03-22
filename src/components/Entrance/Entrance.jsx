import React from 'react';
import './Entrance.css';
import entranceImage from '../../assets/入口.webp';

function Entrance() {
  return (
    <section id="entrance" className="entrance-section">
      <img src={entranceImage} alt="魚とら 店舗入口：海老名駅から徒歩5分の落ち着いた外観" className="entrance-image reveal" loading="lazy" />
    </section>
  );
}

export default Entrance;
