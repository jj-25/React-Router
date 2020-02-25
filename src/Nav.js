import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="logo"><img src="logo192.png" alt=""/></div>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to ="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
