import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavigationMenu.module.css';

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav className={styles['navigation-menu']}>
      <ul>
        <li className={styles['navigation-li']}>
          <Link
            className={`${styles['navigation-link']} ${
              location.pathname === '/orders' ? styles.active : ''
            }`}
            to="/orders"
          >
            Orders
          </Link>
        </li>
        <li className={styles['navigation-li']}>
          <Link
            className={`${styles['navigation-link']} ${
              location.pathname === '/products' ? styles.active : ''
            }`}
            to="/products"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
