import { Link, useNavigate } from "react-router-dom";
import "../Style/Auth.css";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handlechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginHnadler = (e) => {
        e.preventDefault();

        if (!login.email || !login.password) {
            toast.warn("Please Fill the Filed");
            return
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];


        if (users.length === 0) {
            toast.error("No account found Please register first");
            return;
        }

        const user = users.find((item) => item.email === login.email && item.password === login.password);

        if (!user) {
            toast.error("Invalid Email or Password");
            return
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.success("Login Successful");
        navigate(-1);
    }


    return (
        <div className="auth-container">
            <div className="auth-card">

                <h1>Welcome Back</h1>
                <p>Login to continue your booking</p>

                <form onSubmit={loginHnadler}>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" name="email" value={login.email} onChange={handlechange}
                            placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" value={login.password} onChange={handlechange} placeholder="Enter your password" />
                    </div>

                    <button className="auth-btn">
                        Login
                    </button>
                </form>

                <p className="bottom-text">
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;