import React, { useState, useEffect } from 'react';
import './Loading.css';
import fuguImage from '../../assets/ふぐ透過.webp';

// 読み込むべき主要な画像のリスト
const imagesToPreload = [
  '/src/assets/sasimi.webp',
  '/src/assets/unagi.webp',
  '/src/assets/fugu.webp',
  '/src/assets/crab.webp',
  '/src/assets/穴子.webp',
  '/src/assets/HPレイアウト.webp',
  '/src/assets/入口.webp'
];

function Loading({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    if (totalImages === 0) {
      setProgress(100);
      setTimeout(() => finishLoading(), 500);
      return;
    }

    const finishLoading = () => {
      setIsFadingOut(true);
      // フェードアウトアニメーションの後に親コンポーネントに通知
      setTimeout(() => {
        onLoaded();
      }, 800);
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        const newProgress = Math.floor((loadedCount / totalImages) * 100);
        setProgress(newProgress);
        
        if (loadedCount === totalImages) {
          // 少しだけ完了余韻を残す
          setTimeout(() => finishLoading(), 600);
        }
      };
      img.onerror = () => {
        // エラーが起きても進める
        loadedCount++;
        if (loadedCount === totalImages) {
          setTimeout(() => finishLoading(), 600);
        }
      };
    });
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="fugu-container">
          <img 
            src={fuguImage} 
            alt="読み込み中" 
            className="loading-fugu" 
            style={{ 
              filter: `grayscale(${100 - progress}%) brightness(${30 + (progress * 0.7)}%) saturate(${progress * 1.5}%)`,
              transform: `scale(${0.7 + (progress * 0.003)})`
            }}
          />
        </div>
        
        <div className="japanese-progress-wrapper">
          <div className="ukiyo-wave-container">
            <svg className="ukiyo-wave-svg" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 背景の静かなガイド線 */}
              <path className="wave-guide" d="M0,12 L160,12" stroke="rgba(175, 139, 80, 0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
              
              {/* 進行状況に合わせて現れる浮世絵の海（切り抜きあり） */}
              <g clipPath="url(#progress-clip)">
                <path className="ukiyo-wave wave-back" d="M-160,14 Q-140,4 -120,14 T-80,14 T-40,14 T0,14 T40,14 T80,14 T120,14 T160,14 T200,14 T240,14" fill="rgba(175, 139, 80, 0.1)" />
                <path className="ukiyo-wave wave-mid" d="M-160,16 Q-130,2 -100,16 T-40,16 T20,16 T80,16 T140,16 T200,16 T260,16" fill="rgba(175, 139, 80, 0.25)" />
                <path className="ukiyo-wave wave-front" d="M-160,18 Q-120,0 -80,18 T0,18 T80,18 T160,18 T240,18 T320,18" fill="rgba(175, 139, 80, 0.45)" />
              </g>

              {/* 最前面の進捗ライン */}
              <path 
                className="wave-progress-line" 
                d="M0,12 Q20,2 40,12 T80,12 T120,12 T160,12" 
                stroke="#af8b50" 
                strokeWidth="1.5"
                strokeDasharray="180"
                strokeDashoffset={180 - (progress * 1.8)}
                style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
              />

              <defs>
                <clipPath id="progress-clip">
                  <rect x="0" y="0" width={progress * 1.6} height="24" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="progress-text-wrapper">
            <span className="progress-number">{progress}</span>
            <span className="progress-unit">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;