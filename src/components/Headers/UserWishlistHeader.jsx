// PATH: 'src/components/Headers/UserWishlistHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import "../App/App.css"
import WishlistShare from "../UserDashboard/WishlistShare";

const UserWishlistHeader = () => {
  const linkStyle = {
    color: "whitesmoke",
    textDecoration: "none",
  };
  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            </li>
            <li>
            <Link to="/profile" style={linkStyle}>Profile</Link>
          </li>
          <li>
          <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default UserWishlistHeader;