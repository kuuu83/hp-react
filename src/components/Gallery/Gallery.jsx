import React, { useRef } from 'react';
import './Gallery.css';
import sasimiImage from '../../assets/sasimi.webp';
import unagiImage from '../../assets/unagi.webp';
import fuguImage from '../../assets/fugu.webp';
import crabImage from '../../assets/crab.webp';
import anagoImage from '../../assets/穴子.webp';
import layoutImage from '../../assets/HPレイアウト.webp';

const IMAGE_WIDTH = 350; // CSSと合わせる
const NUM_IMAGES = 5;

// 表示する画像のリスト
const imageItems = [
  { src: sasimiImage, alt: '海老名 魚とら 旬の刺身盛合せ' },
  { src: unagiImage, alt: '海老名 魚とら こだわりの上うな重' },
  { src: fuguImage, alt: '海老名 魚とら 揚げたてのふぐ唐揚げ' },
  { src: crabImage, alt: '海老名 魚とら 新鮮なカニ料理' },
  { src: anagoImage, alt: '海老名 魚とら 自家製活穴子煮' },
];

function Gallery() {
  const images = [...imageItems, ...imageItems]; // ループ用に2セット

  const galleryRef = useRef(null);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="reveal">
        写真
        <span className="section-subtitle">GALLERY</span>
      </h2>
      <div
        className="gallery-scroll-wrapper reveal delay-1"
        ref={galleryRef}
      >
        <div className="gallery-scroll-container">
          {images.map((item, index) => (
            <div key={index} className="gallery-item-wrapper">
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-item"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="single-layout-image-container">
        <img src={layoutImage} alt="落ち着いた和モダンの店内レイアウト" className="single-layout-image" loading="lazy" />
      </div>
    </section>
  );
}

export default Gallery;