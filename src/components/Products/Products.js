import React from 'react';
import Product from '../Product/Product';
import productsData from '../../data/products';

function Products() {
  return (
    <div className="products-page">
      <h1>Products</h1>
      {productsData.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
