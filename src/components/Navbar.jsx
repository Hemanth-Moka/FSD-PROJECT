import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Eventify
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-600 ${
                isActive(item.path) ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block hover:text-blue-600 ${
                isActive(item.path) ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
