import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // NavigationのCSSをインポート
import './MenuModal.css';
import sasimiImage from '../../assets/sasimi.JPG'; // sasimi.JPGをインポート
import unagiImage from '../../assets/unagi.png'; // unagi.pngをインポート
import anagoImage from '../../assets/穴子.png'; // 穴子.pngをインポート
import sazaeImage from '../../assets/sazae.JPG'; // sazae.JPGをインポート (Re-added)
import soysaladImage from '../../assets/soysalad.png'; // soysalad.pngをインポート (Re-added)
import crabImage from '../../assets/crab.JPG'; // お飲み物用
import fuguImage from '../../assets/fugu.JPG'; // お飲み物用

const ITEMS_PER_PAGE = 6; // 1ページあたりのアイテム数

function MenuModal({ isOpen, onClose, data }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      if (swiper) {
        swiper.slideTo(0, 0); // スライダーを最初のページにリセット
      }
    }
  }, [isOpen, swiper]);

  const getImageSrc = (index, title) => {
    if (title === 'お食事') {
      if (index === 0) return sasimiImage;
      if (index === 1) return unagiImage;
      if (index === 2) return anagoImage;
      if (index === 3) return sazaeImage;
      if (index === 4) return soysaladImage;
      return sasimiImage;
    } else {
      // お飲み物用
      if (index === 2) return crabImage;
      if (index === 3) return fuguImage;
      return null;
    }
  };

  const getImageAlt = (index, title) => {
    if (title === 'お食事') {
      if (index === 0) return "刺身";
      if (index === 1) return "うなぎ";
      if (index === 2) return "穴子";
      if (index === 3) return "サザエ";
      if (index === 4) return "ソイサラダ";
      return "メニュー";
    } else {
      if (index === 2) return "カニ";
      if (index === 3) return "フグ";
      return "メニュー";
    }
  };

  const getLayoutType = (index, title) => {
    if (title === 'お食事') return 'is-image';
    return 'is-simple'; // お飲み物は全ページシンプルに統一
  };

  const pages = useMemo(() => {
    if (!data) return [];
    const allItems = data.categories.flatMap(category => category.items);
    const chunkedPages = [];
    for (let i = 0; i < allItems.length; i += ITEMS_PER_PAGE) {
      chunkedPages.push(allItems.slice(i, i + ITEMS_PER_PAGE));
    }
    // ページ数が足りない場合は空のページを追加して8ページにする（お飲み物のみ）
    if (data.title === 'お飲み物' && chunkedPages.length < 8) {
      while (chunkedPages.length < 8) {
        chunkedPages.push([]);
      }
    }
    return chunkedPages;
  }, [data]);

  return (
    <div className={`menu-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      {data && (
        <div className="menu-modal-content" onClick={e => e.stopPropagation()}>
          <button className="menu-close-button" onClick={onClose}>&times;</button>
          
          <Swiper
            loop={true}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={setSwiper}
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="modal-swiper-container"
          >
            {pages.map((pageItems, pageIndex) => {
              const layoutType = getLayoutType(pageIndex, data.title);
              return (
                <SwiperSlide key={pageIndex}>
                  <div className={`modal-main-view ${layoutType}`}>
                    <div className="menu-items-column">
                      <ul>
                        {pageItems.map(item => (
                          <li key={item.name}>
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {layoutType === 'is-image' && (
                      <div className="menu-image-column">
                        <img
                          src={getImageSrc(pageIndex, data.title)}
                          alt={`背景 ${pageIndex + 1}`}
                          className="menu-item-image-bg"
                        />
                        <div style={{
                          position: 'absolute',
                          height: '63%',
                          width: '100%',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                          overflow: 'hidden',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          <img
                            src={getImageSrc(pageIndex, data.title)}
                            alt={getImageAlt(pageIndex, data.title)}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              border: 'none'
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* ページ番号の表示は残す場合（オプション） */}
          <div className="page-number-display">
            <span>{activeIndex + 1} / {pages.length}</span>
          </div>
        </div>
      )}
      {/* カスタムナビゲーション矢印 */}
      <div ref={prevRef} className="menu-arrow-prev" onClick={(e) => e.stopPropagation()}></div>
      <div ref={nextRef} className="menu-arrow-next" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
}

export default MenuModal;