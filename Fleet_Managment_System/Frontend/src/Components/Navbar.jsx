import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Navbar.css";
import logo from '../assets/img/logo.jpg'
import { User } from "lucide-react"
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = async () => {
        await logout();
        toast.success("Logout Successfully");
        navigate("/");
    };


    return (

        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <h2>LOGISTICS</h2>
            </div>

            <div className="right-section">
                <div className="user-info">
                    <h4>Welcome {user.name} <User /></h4>
                    <span>{user.role}</span>
                </div>

                <button className="logout-btn"
                    onClick={handleLogout} >
                    Logout
                </button>

            </div>

        </header>

    );

};

export default Navbar;