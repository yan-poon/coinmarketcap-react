import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import CoinSummary from './CoinSummary';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Home />} />
            <Route path="/coins/:coinId" element={<CoinSummary />} />
            <Route path="*" element={<About />} />
        </Routes>
    );
};

export default RoutesConfig;