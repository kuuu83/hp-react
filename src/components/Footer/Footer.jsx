import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

function Footer({ onOpenContact }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-column footer-about">
          <h3 className="footer-logo">魚とら</h3>
          <p>新鮮な海の幸、心温まるおもてなし。
          皆様のお越しを心よりお待ちしております。</p>
        </div>
        <div className="footer-column footer-links">
          <ul>
            <li><a href="#root">トップ</a></li>
            <li><a href="#menu">お品書き</a></li>
            <li><a href="#gallery">写真</a></li>
            <li><a href="#info">店舗情報</a></li>
            <li><a href="#social-feed">最新情報</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>ご予約・お問い合わせ</a></li>
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <p>
            住所: 神奈川県海老名市中央1-14-26 オアシス2<br />
            電話: 046-206-5531<br />
            営業時間: 17:00～23:00 (日曜日のみ17:00～22:00)
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/uotora.ebina/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/roku55808309" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.facebook.com/uotora.ebina/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Uotora. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;