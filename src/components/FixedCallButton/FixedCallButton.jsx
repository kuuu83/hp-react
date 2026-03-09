import React from 'react';
import './FixedCallButton.css';
import { FaPhoneAlt } from 'react-icons/fa';

const FixedCallButton = () => {
  return (
    <a href="tel:046-206-5531" className="fixed-call-button" aria-label="電話で予約">
      <div className="call-icon-container">
        <FaPhoneAlt className="call-icon" />
      </div>
      <span className="call-text">電話予約</span>
    </a>
  );
};

export default FixedCallButton;
