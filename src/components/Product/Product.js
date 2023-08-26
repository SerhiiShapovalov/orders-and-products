import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>Type: {product.type}</p>
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
      <img src={product.photo} alt={product.title} />
    </div>
  );
}

export default Product;
