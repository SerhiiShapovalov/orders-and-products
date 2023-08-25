import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
