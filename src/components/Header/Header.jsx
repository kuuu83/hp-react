import React, { useState, useEffect } from 'react';
import './Header.css';
import headerLogo from '../../assets/ふぐ透過.png';

const MOBILE_BREAKPOINT = 768;

function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowCompactHeader = isMobile || isScrolled;

  const toggleNav = (e) => {
    e.stopPropagation();
    setIsNavVisible(!isNavVisible);
  };

  // Close nav when clicking anywhere else
  useEffect(() => {
    const closeNav = () => setIsNavVisible(false);
    if (isNavVisible) {
      window.addEventListener('click', closeNav);
    }
    return () => window.removeEventListener('click', closeNav);
  }, [isNavVisible]);

  return (
    <header className={`site-header ${shouldShowCompactHeader ? 'scrolled' : ''}`}>
      {!shouldShowCompactHeader && (
        <>
          <img src={headerLogo} alt="ロゴ" className="header-logo-image" />
          <nav className="full-nav">
            <ul>
              <li><a href="#menu">お品書き</a></li>
              <li><a href="#gallery">写真</a></li>
              <li><a href="#social-feed">最新情報</a></li>
              <li><a href="#info">店舗情報</a></li>
              <li><button onClick={onOpenContact} className="contact-button">ご予約・お問い合わせ</button></li>
            </ul>
          </nav>
        </>
      )}

      {shouldShowCompactHeader && (
        <div className="scrolled-nav-container">
          <div className="scrolled-logo-menu" onClick={toggleNav}>
            <img src={headerLogo} alt="ロゴ" className="header-logo-image" />
            <span className="menu-text">{isNavVisible ? 'close' : 'menu'}</span>
          </div>
          <nav className={`horizontal-expand-nav ${isNavVisible ? 'visible' : ''}`} onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><a href="#root" onClick={() => setIsNavVisible(false)}>トップ</a></li>
              <li><a href="#menu" onClick={() => setIsNavVisible(false)}>お品書き</a></li>
              <li><a href="#gallery" onClick={() => setIsNavVisible(false)}>写真</a></li>
              <li><a href="#social-feed" onClick={() => setIsNavVisible(false)}>最新情報</a></li>
              <li><a href="#info" onClick={() => setIsNavVisible(false)}>店舗情報</a></li>
              <li><button onClick={() => { onOpenContact(); setIsNavVisible(false); }} className="contact-button">ご予約・お問い合わせ</button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;