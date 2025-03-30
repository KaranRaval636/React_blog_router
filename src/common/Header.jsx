import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h2>📝 My Blog</h2>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            🏠 Home
          </Link>
          <Link to="/bloglist" className="nav-link">
            📖 Blogs
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
