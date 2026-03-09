import React from 'react';
import './ContactModal.css';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h3>ご予約・お問い合わせ</h3>
        <p>ご予約は、お電話にて承っております。</p>
        <a href="tel:046-206-5531" className="phone-number">046-206-5531</a>
        <p className="hours-info">営業時間: 17:00～23:00 (日: ～22:00)</p>
      </div>
    </div>
  );
}

export default ContactModal;