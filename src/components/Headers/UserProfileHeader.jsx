// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Headers/UserProfileHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import ApiTest from "../ApiTest";
import "../App/App.css"

const UserProfileHeader = () => {
  const linkStyle = {
    color: "whitesmoke",
    textDecoration: "none",
  };

  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/wishlist" style={linkStyle}>Wishlist</Link>
            </li>
            <li>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          <li>
          <LogoutButton />
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default UserProfileHeader;