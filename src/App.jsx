import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './components/RoutesConfig';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div id="root">
        <Header user={user} isAuthenticated={isAuthenticated} isLoading={isLoading} />
        <div className="container">
          <RoutesConfig  isAuthenticated={isAuthenticated} />
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
