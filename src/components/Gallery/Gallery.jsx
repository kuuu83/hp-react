import React, { useRef } from 'react';
import './Gallery.css';
import sasimiImage from '../../assets/sasimi.JPG';
import unagiImage from '../../assets/unagi.png';
import fuguImage from '../../assets/fugu.JPG';
import crabImage from '../../assets/crab.JPG';
import anagoImage from '../../assets/穴子.png';
import layoutImage from '../../assets/HPレイアウト.png';

const IMAGE_WIDTH = 350; // CSSと合わせる
const NUM_IMAGES = 5;

// 表示する画像のリスト
const imageSources = [
  sasimiImage,
  unagiImage,
  fuguImage,
  crabImage,
  anagoImage,
];

function Gallery() {
  const originalImages = imageSources;
  const images = [...originalImages, ...originalImages]; // ループ用に2セット

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
          {images.map((src, index) => (
            <div key={index} className="gallery-item-wrapper">
              <img
                src={src}
                alt={`料理の写真 ${index + 1}`}
                className="gallery-item"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="single-layout-image-container">
        <img src={layoutImage} alt="店内のレイアウト写真" className="single-layout-image" />
      </div>
    </section>
  );
}

export default Gallery;