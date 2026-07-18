import React from "react";
import logo from "../assets/img/Logo.png";
import bus from "../assets/img/bus_logo.svg";
import train from "../assets/img/train_logo.svg";
import hotel from "../assets/img/hotel_logo.svg";
import {CircleQuestionMarkIcon,CircleUser, Menu,} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">

          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div className="nav-links">

            <NavLink to="/" className="nav-item">
              <img src={bus} alt="Bus" className="nav-icon" />
              <span>Bus Tickets</span>
            </NavLink>

            <NavLink to="/train" className="nav-item">
              <img src={train} alt="Train" className="nav-icon" />
              <span>Train Tickets</span>
            </NavLink>

            <NavLink to="/hotel" className="nav-item">
              <img src={hotel} alt="Hotel" className="nav-icon" />
              <span>Hotels</span>
            </NavLink>

          </div>
        </div>

        <div className="navbar-right">

          <button className="menu-btn">
            <Menu size={20} />
            Booking
          </button>

          <button className="menu-btn">
            <CircleQuestionMarkIcon size={20} />
            Help
          </button>

          <button className="menu-btn">
            <CircleUser size={20} />
            Account
          </button>

        </div>

        <div className="mobile-navbar">

          <button className="menu-btn">
            <Menu size={20} />
            Booking
          </button>

          <button className="menu-btn">
            <CircleQuestionMarkIcon size={20} />
            Help
          </button>

          <button className="menu-btn">
            <CircleUser size={20} />
            Account
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;