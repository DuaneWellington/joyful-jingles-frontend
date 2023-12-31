// PATH: 'src/components/Headers/UserDashboardHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import "../Styles/UserDashboard.css";

const UserDashboardHeader = () => {
  const linkStyle = {
    color: "whitesmoke",
    textDecoration: "none",
  };

  return (
    <header className="ud-header-container">
      <nav className="ud-headerNav">
        <ul className="ud-navList">
          <li className="ud-navItem">
            <Link to="/wishlist" style={linkStyle}>Wishlist</Link>
            </li>
            <li className="ud-navItem">
            <Link to="/profile" style={linkStyle}>Profile</Link>
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
