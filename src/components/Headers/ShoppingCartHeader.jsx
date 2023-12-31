// PATH: 'src/components/Headers/ShoppingCartHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Auth/LogoutButton";
import "../App/App.css"

const ShoppingCartHeader = () => {
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
            <Link to="/profile" style={linkStyle}>Profile</Link>
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

export default ShoppingCartHeader;