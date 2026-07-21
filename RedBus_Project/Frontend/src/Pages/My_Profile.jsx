import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/MyProfile.css"

const My_Profile = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!currentUser) {
    return (
      <div className="login-required">
        <div className="login-box">
          <h2>Login Required</h2>
          <p>Log in to manage your bookings.</p>

          <Link to="/login" className="login-btn">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">

      <div className="profile-card">

        <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="profile"  className="profile-img"  />

        <h2>{currentUser.name}</h2>

        <div className="profile-info">
          <p><strong>Email :</strong> {currentUser.email}</p>
          <p><strong>Phone :</strong> {currentUser.phone}</p>
        </div>

        <div className="profile-buttons">



          <Link to="/my-booking">
            <button>Booking History</button>
          </Link>

          <button onClick={logout}>
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default My_Profile;