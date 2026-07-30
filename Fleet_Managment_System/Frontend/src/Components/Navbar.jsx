import React, { useState } from "react";
import "../Style/Navbar.css";
import {Bell, LogOut, Menu,ChevronDown } from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const initials = user?.name
    ? user.name.split(" ").map((word) => word[0]).join("").toUpperCase() : "U";

  const onLogout = async () => {
    const result = await logout();

    if (result.success) {
      toast.success(result.message);
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <header className="fm-navbar">
      {/* <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button className="fm-icon-btn fm-only-mobile">
          <Menu size={18} />
        </button>

        <h1>{user?.role || "User"} Dashboard</h1>
      </div> */}

      <div className="lg">
        <Logo/>
      </div>

      <div className="fm-nav-right">
        <button
          className="fm-icon-btn"
          aria-label="Notifications" >
          <Bell size={18} />
          <span className="fm-dot" />
        </button>

        <button className="fm-profile-btn"
          onClick={() => setOpen(!open)} >
          <span className="fm-avatar">{initials}</span>

          <span className="fm-profile-meta">
            <span className="n">{user?.role}</span>
          </span>

          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="fm-dropdown">
            <div className="head">
              <div className="n">{user?.name}</div>
              <div className="e">{user?.email}</div>
            </div>

            <button type="button"
              className="danger"
              onClick={onLogout} >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;