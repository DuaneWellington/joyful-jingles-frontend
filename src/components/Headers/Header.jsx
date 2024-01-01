// PATH: 'src/components/Header/Header.jsx'

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/share">Share</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
