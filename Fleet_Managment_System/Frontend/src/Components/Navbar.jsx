import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Navbar.css";
import logo from '../assets/img/logo.jpg'
import {User} from "lucide-react"
import { toast } from "react-toastify";

const Navbar = ({ user }) => {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {
           const response = await axios.post("http://localhost:3000/api/auth/logout",
                {},
                {
                    withCredentials: true
                }
            );
            navigate("/");
            toast.success(response?.data?.message)

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <h2>Fleet Management</h2>
            </div>

            <div className="right-section">
                <div className="user-info">
                    <h4>Welcome {user.name} <User /></h4>
                    <span>{user.role.replace("_", " ")}</span>
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