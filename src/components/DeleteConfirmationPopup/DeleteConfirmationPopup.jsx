import React, { useState } from 'react';
import { BsTrash3Fill } from 'react-icons/bs';
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
      <div className={styles['popup-wrapper']}>
        <div className={styles['popup-content']}>
          <span className={styles.close} onClick={closePopup}>
            &times;
          </span>
          <h2>Delete Order</h2>
          <p>Are you sure you want to delete the order "{order.title}"?</p>
        </div>
        <div className={styles['button-wrapper']}>
          <button onClick={onClose} className={styles['cancel-button']}>
            No
          </button>
          <button
            onClick={() => onDelete(order)}
            className={styles['delete-button']}
          >
            <BsTrash3Fill />
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationPopup;
