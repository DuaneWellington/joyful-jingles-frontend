// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton.jsx";
import UserDashboard from "../UserDashboard/UserDashboard.jsx";
import UserProfile from "../UserDashboard/UserProfile.jsx";
import ApiTest from "../ApiTest.jsx";
import UserWishlist from "../UserWishlist/UserWishlist.jsx";
import Header from "../Headers/Header.jsx";
import { WishlistProvider } from "../WishlistContext/WishlistContext.jsx";
import "../../index.css"
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <WishlistProvider>
    <Routes>
      <Route
        path="/"
        element={
            <div>
              <Header />
              <h1 className="welcome">Welcome to Joyful Jingles!!</h1>
              <p>
                Click the button below to get started and access your dashboard.
              </p>
              {isAuthenticated ? (
              <Link to="/dashboard">
                <button >
                  Get Started
                </button>
              </Link>
              ) : (
                <LoginButton />
              )}
            </div>
        }
      />
      {/* Define a route for the dashboard */}
      <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> 
    : <Navigate to="/" />} />
      <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/" />} />
      <Route path="/apitest" element={isAuthenticated ? <ApiTest /> : <Navigate to="/" />} />
      <Route path="/wishlist" element={isAuthenticated ? <UserWishlist /> : <Navigate to="/" />} 
      />
    </Routes>
    </WishlistProvider>
  );
};

export default App;
