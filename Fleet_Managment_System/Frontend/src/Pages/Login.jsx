import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Login.css';
import logo from '../assets/img/logo.jpg'
import Bg from "../assets/img/bg.jpg"
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

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

        seterror({ ...error, [e.target.name]: "" })
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

        setLoading(true);
        const result = await login(formData);
        setLoading(false);

        if (result.success) {
            toast.success(result.message);
            navigate("/dashboard");
        } else {
            toast.error(result.message);
        }
    }

    return (
        <div className="login-screen">

            <div className="login-brand">
                <div className="login-brand__photo"
                    style={{ backgroundImage: `url(${Bg})` }} />
                <div className="login-brand__overlay" />

                <div className="login-brand__top">
                    <img src={logo} alt="Fleet Management logo" />
                    <span className='fm'>Fleet Management System</span>

                </div>
                <div className="login-brand__mid">
                    <h1>Every vehicle, every driver, one clear view.</h1>
                    <p>
                        Sign in to track routes, assign trips, and keep your fleet
                        moving — whichever role you manage it from.
                    </p>
                </div>

                <div className="login-brand__foot">
                    <div><strong>128</strong>vehicles tracked</div>
                    <div><strong>99.2%</strong>on-time rate</div>
                    <div><strong>24/7</strong>live dispatch</div>
                </div>
            </div>

   
            <div className="login-form-side">

                <div className="login-mobile-brand">
                    <img src={logo} alt="Fleet Management logo" />
                    <span>Fleet Management System</span>
                </div>

                <div className="login-card">
                    <form onSubmit={handleLogin} className="login-form">

                        <h2>Welcome back</h2>
                        <p>Sign in to access your dashboard.</p>

                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}
                                className={error.email ? "input-error" : ""} />
                            {error.email && <p className="error">{error.email}</p>}
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange}
                                className={error.password ? "input-error" : ""} />
                            {error.password && <p className="error">{error.password}</p>}
                        </div>

                        <button type="submit" className="login-btn">
                          Login
                        </button>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
