import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <Heart size={19} fill="currentColor" />
          </div>

          <span>BloodLink</span>
        </NavLink>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  );
};

export default Header;