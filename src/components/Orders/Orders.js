import React, { useState } from 'react';
import Order from '../Order/Order';
import ordersData from '../../data/orders';
import productsData from '../../data/products';
import OrderModal from '../OrderModal/OrderModal.jsx';
import DeleteConfirmationPopup from '../DeleteConfirmationPopup/DeleteConfirmationPopup';
import styles from './Orders.module.css';

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleOrderClick = order => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  const handleDeleteClick = order => {
    setSelectedOrder(order);
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
  };

  const handleDeleteOrder = order => {
    // Код для удаления прихода order здесь
    // После удаления закрываем попап удаления
    closeDeletePopup();
  };

  return (
    <div className={styles['orders-page']}>
      <h1 className={styles['orders-title']}>Orders</h1>
      {ordersData.map(order => (
        <div className={styles['orders-page-wrapper']} key={order.id}>
          <Order
            order={order}
            products={productsData}
            onDeleteClick={handleDeleteClick}
          />
          <button
            onClick={() => handleOrderClick(order)}
            className={styles['button']}
          >
            Open
          </button>
        </div>
      ))}
      {showModal && selectedOrder && (
        <OrderModal order={selectedOrder} onClose={closeModal} />
      )}
      {showDeletePopup && selectedOrder && (
        <DeleteConfirmationPopup
          order={selectedOrder}
          onDelete={handleDeleteOrder}
          onClose={closeDeletePopup}
        />
      )}
    </div>
  );
}

export default Orders;
