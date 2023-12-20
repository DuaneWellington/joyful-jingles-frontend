// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Auth/LoginButton";
import "./App/App.css"

const Header = () => {
  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </nav>
      {/* <LoginButton /> */}
    </header>
  );
};

export default Header;
