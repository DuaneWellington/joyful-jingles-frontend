// PATH: 'src/components/Headers/ProductPageHeader.jsx'

import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Auth/LogoutButton";
import "../App/App.css"

const ProductPageHeader = () => {
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

export default ProductPageHeader;