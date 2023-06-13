// jobhunt-frontend/src/Modal.js

import React from 'react';
import './Modal.css';

function Modal({ closeModal, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <div className="modal-actions">
          <button className="modal-close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
