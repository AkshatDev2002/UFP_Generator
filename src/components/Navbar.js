import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navbar Component - Displays navigation links for the application
const Navbar = () => {
  // State to track the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          {/* Logo Image */}
          <img
            src="https://i.postimg.cc/8PBKcx4r/logo-m.png"
            alt="Unicode Generator Logo"
            className="img"
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {/* Link to Power Generator */}
        <Link to="/power-generator" className="navbar-link">
          Power Generator
        </Link>

        {/* Link to Fraction Generator */}
        <Link to="/fraction-generator" className="navbar-link">
          Fraction Generator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
