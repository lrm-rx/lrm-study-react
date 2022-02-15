import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Cart from './components/Cart'
import Products from './components/Products'

function App() {
  return (
    <div>
      <h1>Shopping Cart Example</h1>
      <hr />
      <Products />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
