// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Headers/UserWishlistHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import ApiTest from "../ApiTest";
import "../App/App.css"

const UserWishlistHeader = () => {
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
          <LogoutButton />
          </li>

          

          {/* Add more nav links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default UserWishlistHeader;