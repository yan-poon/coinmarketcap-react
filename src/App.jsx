import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CoinSummary from './components/CoinSummary';
import About from './components/About';
import AuthRoute from './components/AuthRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div id="root">
        <Header /> 
        <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<AuthRoute element={<Home />}/>}/>
          <Route path="/coins" element={<AuthRoute element={<Home />}/>} />
          <Route path="/coins/:coinId" element={<AuthRoute element={<CoinSummary />}/>} />
          <Route path="*" element={<About />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
