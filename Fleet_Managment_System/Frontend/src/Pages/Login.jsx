import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Login.css';
import logo from '../assets/img/logo.jpg'
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';

const Login = () => {

    const { login } = useAuth();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, seterror] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

        seterror({ ...error, [e.target.value]: "" })
    }
    const handleLogin = async (e) => {
        e.preventDefault();

        let newError = {}

        if (!formData.email.trim()) {
            newError.email = "Please Enter Email";
        }

        if (!formData.password.trim()) {
            newError.password = "Please Enter Password";
        } else if (formData.password.length < 4) {
            newError.password = "Password Must be at lest 6 charcters"
        }

        seterror(newError);

        if (Object.keys(newError).length > 0) {
            return;
        }


        const result = await login(formData);
        if (result.success) {
            toast.success(result.message);
            navigate("/dashboard");
        } else {
            toast.error(result.message);
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
                        {
                            error.email && (
                                <p className='error'>{error.email}</p>
                            )
                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                        {
                            error.password && (
                                <p className='error'>{error.password}</p>
                            )
                        }
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