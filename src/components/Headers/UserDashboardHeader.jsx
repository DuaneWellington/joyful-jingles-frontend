// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Headers/UserDashboardHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import ApiTest from "../ApiTest";
import "../App/App.css"

const UserDashboardHeader = () => {
  return (
    <header className="header-container">
      <nav className="headerNav">
        <ul className="navList">
          <li className="navItem">
            <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="navItem">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="navItem">
          <LogoutButton />
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default UserDashboardHeader;
