import React from 'react';
import styles from './OrderModal.module.css';

function OrderModal({ order, onClose }) {
  const modalClass = order
    ? `${styles['order-modal']} ${styles.open}`
    : styles['order-modal'];

  return (
    <div className={modalClass}>
      <div className={styles['modal-content']}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Selected Order</h2>
        <p>Name: {order.title}</p>
        <p>Number of Products: {order.products.length}</p>
        <p>Date (Formatted 1): {new Date(order.date).toLocaleString()}</p>
        <p>Date (Formatted 2): {order.date}</p>
        {/* Рассчитываем сумму прихода и отображаем ее здесь */}
        {/* Реализуем конвертацию валюты и отображаем сумму в разных валютах */}
      </div>
    </div>
  );
}

export default OrderModal;
