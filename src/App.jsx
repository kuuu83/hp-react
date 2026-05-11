import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import Info from './components/Info/Info';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import SocialFeed from './components/SocialFeed/SocialFeed';
import Footer from './components/Footer/Footer';
import Entrance from './components/Entrance/Entrance';
import ContactModal from './components/ContactModal/ContactModal';
import MenuModal from './components/MenuModal/MenuModal';
import FixedCallButton from './components/FixedCallButton/FixedCallButton';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reactが起動したら、index.htmlに直書きした静的ローダーを消去
    const initialLoader = document.getElementById('initial-loader');
    if (initialLoader) {
      initialLoader.style.opacity = '0';
      setTimeout(() => initialLoader.remove(), 500);
    }

    if (isLoading) return; // ロード中は何もしない

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    // .revealがついているすべての要素を監視
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="App">
      <div className="wasi-overlay"></div>
      {isLoading && <Loading onLoaded={() => setIsLoading(false)} />}
      
      <div className={`main-content ${!isLoading ? 'visible' : ''}`}>
        <Header onOpenContact={() => setIsContactOpen(true)} />
        <main>
          <Hero />
          <Logo />
          <Menu onOpenMenu={setSelectedMenu} />
          <Gallery />
          <SocialFeed />
          <Info />
          <Entrance />
        </main>
        <Footer onOpenContact={() => setIsContactOpen(true)} />
        
        <FixedCallButton />
        
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <MenuModal 
          isOpen={!!selectedMenu} 
          onClose={() => setSelectedMenu(null)} 
          data={selectedMenu} 
        />
      </div>

    </div>
  );
}

export default App;