import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import AuthRoute from './AuthRoute';
import Home from './Home';
import CoinSummary from './CoinSummary';

const RoutesConfig = ({isAuthenticated}) => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<AuthRoute isAuthenticated={isAuthenticated} element={<Home />} />} />
            <Route path="/coins" element={<AuthRoute isAuthenticated={isAuthenticated} element={<Home />} />} />
            <Route path="/coins/:coinId" element={<AuthRoute isAuthenticated={isAuthenticated} element={<CoinSummary />} />} />
            <Route path="*" element={<About />} />
        </Routes>
    );
};

export default RoutesConfig;