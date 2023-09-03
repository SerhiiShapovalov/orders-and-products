import React, { useState } from 'react';
import Product from '../Product/Product';
import styles from './Order.module.css';

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
      <p>Number of Products: {order.products.length} Products</p>
      <p>Description: {order.description}</p>
      <p>
        Total Amount: {calculateTotalAmount(order)} UAH (USD:{' '}
        {calculateTotalAmountInUSD(order)} USD)
      </p>
      <button onClick={toggleDetails} className={styles['button']}>
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
      <button onClick={() => onDeleteClick(order)} className={styles['button']}>
        Delete
      </button>
    </div>
  );
}

export default Order;
