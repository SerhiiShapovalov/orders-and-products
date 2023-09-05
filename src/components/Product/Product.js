import React from 'react';
import styles from './Product.module.css';

function Product({ product }) {
  return (
    <div className={styles['product']}>
      <img
        className={styles['product-monitor']}
        src="monitor.jpg"
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <div className={styles['type-wrapper']}>
        <p>Type: {product.type}</p>
      </div>
      <p>Serial Number: {product.serialNumber}</p>
      <p>Is New: {product.isNew === 1 ? 'Yes' : 'No'}</p>
      <p>Specification: {product.specification}</p>
      <p>
        Guarantee: {new Date(product.guarantee.start).toLocaleDateString()} -{' '}
        {new Date(product.guarantee.end).toLocaleDateString()}
      </p>
      {product.price.map(price => (
        <p key={price.symbol}>
          Price ({price.symbol}): {price.value}
        </p>
      ))}
    </div>
  );
}

export default Product;
