import React from "react";
import "../Style/Navbar.css";
import logo from "../assets/img/logo.jpg";
import { User } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>LOGISTICS</h2>
      </div>

      <div className="profile">

        <div className="profile-icon">
          <User size={24} />
        </div>

        <div className="profile-info">
          <h4>{user?.name}</h4>
          <span>{user?.role}</span>
        </div>

      </div>

    </header>
  );
};

export default Navbar;