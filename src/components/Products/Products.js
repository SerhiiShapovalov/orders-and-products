import React, { useState } from 'react';
import Product from '../Product/Product';
import productsData from '../../data/products';

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
    <div className="products-page">
      <h1>Products</h1>
      <select onChange={handleTypeChange}>
        <option value="All">All</option>
        <option value="Monitors">Monitors</option>
        <option value="Books">Books</option>
        <option value="Other">Other</option>
      </select>
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
