import React, { useState } from 'react';
import Product from '../Product/Product';
import styles from './Order.module.css';

function Order({ order, products }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const orderProducts = products.filter(product =>
    order.products.includes(product.id)
  );

  const totalAmount = orderProducts.reduce(
    (total, product) =>
      total + product.price.find(price => price.isDefault).value,
    0
  );

  return (
    <div className={styles['order']}>
      <h2 className={styles['order-title']}>{order.title}</h2>
      <p>Date: {new Date(order.date).toLocaleString()}</p>
      <p>Description: {order.description}</p>
      <p>Total Amount: {totalAmount} UAH</p>
      <button onClick={toggleDetails}>
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
    </div>
  );
}

export default Order;
