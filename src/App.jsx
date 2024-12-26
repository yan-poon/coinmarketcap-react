import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './components/RoutesConfig';

function App() {

  return (
    <Router>
      <div id="root">
        <Header  />
        <div className="container">
          <RoutesConfig/>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
