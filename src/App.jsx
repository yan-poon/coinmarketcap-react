import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CoinSummary from './components/CoinSummary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Home />} />
          <Route path="/coins/:coinId" element={<CoinSummary />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
