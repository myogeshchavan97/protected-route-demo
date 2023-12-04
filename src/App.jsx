import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Orders from './components/Orders';
import Payment from './components/Payment';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
