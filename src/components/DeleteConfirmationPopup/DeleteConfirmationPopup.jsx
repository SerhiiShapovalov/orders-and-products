import React, { useState } from 'react';
import styles from './DeleteConfirmationPopup.module.css';

function DeleteConfirmationPopup({ order, onDelete, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <div
      className={`${styles['delete-confirmation-popup']} ${
        isOpen ? styles.open : ''
      }`}
    >
      <div className={styles['popup-content']}>
        <span className={styles.close} onClick={closePopup}>
          &times;
        </span>
        <h2>Delete Order</h2>
        <p>Are you sure you want to delete the order "{order.title}"?</p>
        <div className={styles['button-container']}>
          <button
            onClick={() => onDelete(order)}
            className={styles['delete-button']}
          >
            Yes
          </button>
          <button onClick={onClose} className={styles['cancel-button']}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationPopup;
