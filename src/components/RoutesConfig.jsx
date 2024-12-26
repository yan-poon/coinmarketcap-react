import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import AuthRoute from './AuthRoute';
import Home from './Home'; 
import CoinSummary from './CoinSummary';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<AuthRoute element={<Home />} />} />
      <Route path="/coins" element={<AuthRoute element={<Home />} />} />
      <Route path="/coins/:coinId" element={<AuthRoute element={<CoinSummary />} />} />
      <Route path="*" element={<About />} />
    </Routes>
  );
};

export default RoutesConfig;