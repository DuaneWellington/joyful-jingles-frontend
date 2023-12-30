// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Headers/UserDashboardHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import "../Styles/UserDashboard.css";

const UserDashboardHeader = () => {
  return (
    <header className="ud-header-container">
      <nav className="ud-headerNav">
        <ul className="ud-navList">
          <li className="ud-navItem">
            <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="ud-navItem">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="ud-navItem">
          <LogoutButton />
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default UserDashboardHeader;
