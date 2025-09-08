import { useState } from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout } from './layout/Layout';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Shop } from './pages/shop/Shop';
import { SingleProduct } from './pages/single-product/SingleProduct';
import { Cart } from './pages/cart/Cart';
import { Favorite } from './pages/favorite/Favorite';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop/:productTitle/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
