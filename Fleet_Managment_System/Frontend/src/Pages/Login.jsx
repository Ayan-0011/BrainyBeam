import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Login.css';
import logo from '../assets/img/logo.jpg'
import { toast } from 'react-toastify';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/auth/login", formData,
                {
                    withCredentials: true
                }
            );
            toast.success("Login Successfull")
            navigate("/dashboard");

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">

                <div className="login-header">
                    <img src={logo} alt="Fleet Management Logo" className="login-logo" />
                    <h1>Fleet Management System</h1>
                    <p>
                        Sign in to access your dashboard.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="login-form">

                    <div className="form-group">
                        <label>Email</label>

                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                    </div>


                    <button type="submit" className="login-btn">
                        Login
                    </button>

                </form>

            </div>
        </div>
    );
};

export default Login;