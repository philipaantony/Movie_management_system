import React from 'react';
import { Link } from 'react-router-dom';


function Error404() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Oops! Page not found</p>
        <p>The page you are looking for might be unavailable or moved.</p>
        
      </div>
    </div>
  )
}

export default Error404