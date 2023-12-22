// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import ApiTest from "../ApiTest";
import "../App/App.css"

const Header = () => {
  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/apitest">API Test</Link>
          </li>

          {/* Add more nav links as needed */}
        </ul>
      </nav>
      <LogoutButton />
    </header>
  );
};

export default Header;