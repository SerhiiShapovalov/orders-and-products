import React from 'react';
import Order from '../Order/Order';
import ordersData from '../../data/orders';
import productsData from '../../data/products'; // Import products data

function Orders() {
  return (
    <div className="orders-page">
      <h1>Orders</h1>
      {ordersData.map(order => (
        <Order key={order.id} order={order} products={productsData} />
      ))}
    </div>
  );
}

export default Orders;
