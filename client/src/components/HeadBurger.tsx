import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="text-white text-2xl xl:hidden ml-10 mt-3"
        onClick={toggleMenu}
        aria-label="Toggle Mobile Menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Close Mobile Menu"
        >
          ×
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col mt-20 space-y-8 px-6">
          <Link to="/" className="text-lg font-semibold" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/templates"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Templates
          </Link>
          <Link
            to="/products"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/resources"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
