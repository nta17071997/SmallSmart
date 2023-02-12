import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Shop from '../views/Shop';
import ProductDetail from '../views/ProductDetail';
import Cart from '../views/Cart';
import Checkout from '../views/Checkout';
import Login from '../views/Login';
import Signup from '../views/Signup';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
