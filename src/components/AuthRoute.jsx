import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="/about" />;
};

export default AuthRoute;