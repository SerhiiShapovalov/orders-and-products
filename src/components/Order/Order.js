import React, { useState } from 'react';
import Product from '../Product/Product';
import styles from './Order.module.css';
import { BsTrash3Fill } from 'react-icons/bs';

function Order({ order, products, onDeleteClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const orderProducts = products.filter(product =>
    order.products.includes(product.id)
  );

  const calculateTotalAmount = order => {
    const orderProducts = products.filter(product =>
      order.products.includes(product.id)
    );

    return orderProducts.reduce(
      (total, product) =>
        total + product.price.find(price => price.isDefault).value,
      0
    );
  };

  const calculateTotalAmountInUSD = order => {
    const orderProducts = products.filter(product =>
      order.products.includes(product.id)
    );

    const totalInUSD = orderProducts.reduce(
      (total, product) =>
        total + product.price.find(price => price.symbol === 'USD').value,
      0
    );

    return totalInUSD.toFixed(2);
  };

  return (
    <div className={styles['order']}>
      <h2 className={styles['order-title']}>{order.title}</h2>
      <p>Date: {new Date(order.date).toLocaleString()}</p>
      <p>{order.products.length} Products</p>
      <p>Description: {order.description}</p>
      <p>
        {calculateTotalAmountInUSD(order)}
        <span className={styles.currency}>USD</span>
        {calculateTotalAmount(order)}
        <span className={styles.currency}>UAH</span>
      </p>
      <button onClick={toggleDetails} className={`${styles['button']}`}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && (
        <div className="order-details">
          <h3>Products:</h3>
          <ul>
            {orderProducts.map(product => (
              <li key={product.id}>
                <Product product={product} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => onDeleteClick(order)}
        className={`${styles['custom-button']}`}
      >
        <BsTrash3Fill />
      </button>
    </div>
  );
}

export default Order;
