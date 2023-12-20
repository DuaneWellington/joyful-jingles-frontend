// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0ProviderWithNavigate from "../Auth/Auth0ProviderWithNavigate";
import Header from "../Header.jsx";
import LoginButton from "../Auth/LoginButton";
import UserDashboard from "../UserDashboard";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Auth0ProviderWithNavigate>
            <div>
              <Header />
              <h1>Welcome to Joyful Jingles!!</h1>
              <p>
                Click the button below to get started and access your dashboard.
              </p>
              {isAuthenticated ? (
              <Link to="/dashboard">
                <button style={{ backgroundColor: "blue", color: "white" }}>
                  Get Started
                </button>
              </Link>
              ) : (
                <LoginButton />
              )}
            </div>
          </Auth0ProviderWithNavigate>
        }
      />
      {/* Define a route for the dashboard */}
      <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/" />} 
      />
    </Routes>
  );
};

export default App;
