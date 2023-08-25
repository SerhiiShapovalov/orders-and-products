import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>Type: {product.type}</p>
      <p>Serial Number: {product.serialNumber}</p>
      {/* Display more product details here */}
    </div>
  );
}

export default Product;
