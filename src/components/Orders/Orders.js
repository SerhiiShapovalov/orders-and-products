import React, { useState } from 'react';
import Order from '../Order/Order';
import ordersData from '../../data/orders';
import productsData from '../../data/products';
import OrderModal from '../OrderModal/OrderModal.jsx';
import styles from './Orders.module.css';

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOrderClick = order => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  return (
    <div className={styles['orders-page']}>
      <h1 className={styles['orders-title']}>Orders</h1>
      {ordersData.map(order => (
        <div className={styles['orders-page-wrapper']} key={order.id}>
          <Order order={order} products={productsData} />
          <button onClick={() => handleOrderClick(order)}>Open</button>
        </div>
      ))}
      {showModal && selectedOrder && (
        <OrderModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
}

export default Orders;
