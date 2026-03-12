import React from 'react';
import './FixedCallButton.css';
import { FiPhone } from 'react-icons/fi';

const FixedCallButton = () => {
  return (
    <a href="tel:046-206-5531" className="fixed-call-button" aria-label="電話で予約">
      <FiPhone className="call-icon" />
      <span className="call-text">電話予約</span>
    </a>
  );
};

export default FixedCallButton;
