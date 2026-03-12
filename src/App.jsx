import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
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
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
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
      <Analytics />
    </div>
  );
}

export default App;