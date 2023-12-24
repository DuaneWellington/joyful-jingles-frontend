// PATH: 'src/components/App/App.jsx'

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginButton from "../Auth/LoginButton";
import UserDashboard from "../UserDashboard/UserDashboard";
import "./App.css";

const App = () => {

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="app-name">Wishology</h1>
              <div className="hero-section">
                <p>
                  Explore a world of endless possibilities and get what you
                  wished for!
                </p>
                  <LoginButton />
              </div>
              <footer>
                <p className="footer-text">Wishology</p>
              </footer>
            </div>
          }
        />
        <Route
        path="/dashboard"
        element={<UserDashboard />}
        />
      </Routes>
    </div>
  );
};

export default App;
