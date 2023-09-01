import React, { useState } from 'react';
import Product from '../Product/Product';
import productsData from '../../data/products';
import styles from './Products.module.css';

function Products() {
  const [selectedType, setSelectedType] = useState('All');

  const handleTypeChange = e => {
    setSelectedType(e.target.value);
  };

  const filteredProducts =
    selectedType === 'All'
      ? productsData
      : selectedType === 'Other'
      ? productsData.filter(
          product => product.type !== 'Monitors' && product.type !== 'Books'
        )
      : productsData.filter(product => product.type === selectedType);

  return (
    <div className={styles['products-page']}>
      <div className={styles['products-wrapper']}>
        <h1 className={styles['products-title']}>Products</h1>
        <select className={styles['handle-filter']} onChange={handleTypeChange}>
          <option value="All">All</option>
          <option value="Monitors">Monitors</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {filteredProducts.map(product => (
        <Product
          className={styles['product']}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;
