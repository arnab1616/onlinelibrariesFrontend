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
import { MyProfile } from './pages/my-profile/MyProfile';
import { AdminLayout } from './admin/layout/AdminLayout';
import { Dashboard } from './admin/pages/dashboard/Dashboard';
import { AddProduct } from './admin/pages/add-product/AddProduct';
import { NotFound } from './components/NotFound';
import { AllCategories } from './admin/pages/all-categories/AllCategories';
import { TrackProducts } from './admin/pages/track-products/TrackProducts';
import { AdminLogin } from './admin/pages/auth/AdminLogin';
import { ContactSupport } from './admin/pages/contact-support/ContactSupport';
import { MyAccount } from './admin/pages/my-account/MyAccount';
import { Settings } from './admin/pages/settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/admin-login" element={<AdminLogin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route path='dashboard' index element={<Dashboard />} /> 
          <Route path="dashboard" element={<Dashboard />} /> 
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-catagories" element={<AllCategories />} />
          <Route path="track-products" element={<TrackProducts />} />
          <Route path="contact-support" element={<ContactSupport />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="settings" element={<Settings />} />
          <Route path="" element={<NotFound />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="shop/:productTitle/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
