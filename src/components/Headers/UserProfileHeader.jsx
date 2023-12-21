// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Headers/UserProfileHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../UserDashboard/UserProfile";
import LogoutButton from "../Auth/LogoutButton";
import ApiTest from "../ApiTest";
import "../App/App.css"

const UserProfileHeader = () => {
  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
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