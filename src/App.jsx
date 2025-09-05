import { useState } from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout } from './layout/Layout';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Shop } from './pages/shop/Shop';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
