import React from 'react';
import './Entrance.css';
import entranceImage from '../../assets/入口.jpeg';

function Entrance() {
  return (
    <section id="entrance" className="entrance-section">
      <img src={entranceImage} alt="店舗入口" className="entrance-image reveal" />
    </section>
  );
}

export default Entrance;
