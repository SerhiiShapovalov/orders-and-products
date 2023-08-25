import React, { useState } from 'react';
import Product from '../Product/Product';

function Order({ order, products }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const orderProducts = products.filter(product =>
    order.products.includes(product.id)
  );

  return (
    <div className="order">
      <h2>{order.title}</h2>
      <button onClick={toggleDetails}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && (
        <div className="order-details">
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
