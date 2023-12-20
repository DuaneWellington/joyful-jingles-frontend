// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Auth/LogoutButton";
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
      <LogoutButton />
    </header>
  );
};

export default Header;
