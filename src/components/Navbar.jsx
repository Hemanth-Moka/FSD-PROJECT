import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Navbar.css"; // Ensure CSS exists and updated

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Concerts", path: "/concerts" },
    { name: "Movies", path: "/movies" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/UserLogin" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Eventify
        </Link>

        {/* Hamburger Icon (Custom 3-line) */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`mobile-link ${isActive(item.path) ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
