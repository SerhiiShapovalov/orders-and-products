import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import TopMenu from './TopMenu/TopMenu';
import Orders from './Orders/Orders';
import Products from './Products/Products';

function App() {
  return (
    <div className="app">
      <TopMenu />
      <NavigationMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
