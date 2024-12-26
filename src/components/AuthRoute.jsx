import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const AuthRoute = ({ element }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or component
  }

  return isAuthenticated ? element : <Navigate to="/about" />;
};

export default AuthRoute;