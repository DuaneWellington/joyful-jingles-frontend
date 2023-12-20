// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton.jsx";
import UserDashboard from "../UserDashboard/UserDashboard.jsx";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
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
      <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/" />} 
      />
    </Routes>
  );
};

export default App;
