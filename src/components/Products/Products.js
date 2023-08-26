import React, { useState } from 'react';
import Product from '../Product/Product';
import productsData from '../../data/products';

function Products() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredProducts =
    selectedType === 'All'
      ? productsData
      : productsData.filter(product => product.type === selectedType);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <select onChange={e => setSelectedType(e.target.value)}>
        <option value="All">All</option>
        <option value="Monitors">Monitors</option>
        <option value="Other">Other</option>
      </select>
      {filteredProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
