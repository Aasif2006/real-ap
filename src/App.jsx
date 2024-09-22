import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Exprience from './components/Exprience';
import ShoppingCart from './components/ShoppingCart';
import Service from './components/Service';
import Contact from './components/Contact';
import Error from './components/Error';
import Flip from './components/Flip'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from local storage
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const handleAddToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingProductIndex].quantity += product.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  useEffect(() => {
    // Save cart items to local storage whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/exprience/:id" element={<Exprience onAddToCart={handleAddToCart} />} />
        <Route path="/shopping-cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Flip/>
    </BrowserRouter>
  );
}

export default App;

