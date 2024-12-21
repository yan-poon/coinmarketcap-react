import React from 'react';
import './App.css';
import Header from './components/Header';
import CoinList from './components/CoinList';
import CoinSummary from './components/CoinSummary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coins" element={<CoinList />} />
          <Route path="/coins/:coinId" element={<CoinSummary />} />
          <Route path="*" element={<CoinList />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
