import { Link, useNavigate } from "react-router-dom";
import "../Style/Auth.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        if (
            !user.name ||
            !user.email ||
            !user.phone ||
            !user.password
        ) {
            toast.warning("Please fill all fields");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const alreadyExist = users.find(
            (item) => item.email === user.email
        );

        if (alreadyExist) {
            toast.error("Email already registered");
            return;
        }

        users.push({
            id: Date.now(),
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        toast.success("Registration Successful");

        setUser({
            name: "",
            email: "",
            phone: "",
            password: "",
        });

        navigate("/login");
    };

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h1>Create Account</h1>
                <p>Create an account to book your journey</p>

                <form onSubmit={registerHandler}>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" name="name" onChange={handleChange} value={user.name} placeholder="Enter your name" />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleChange} value={user.email} placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label>Phone</label>
                        <input type="text" name="phone" onChange={handleChange} value={user.phone} placeholder="Enter phone number" />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={handleChange} value={user.password} placeholder="Create password" />
                    </div>

                    <button className="auth-btn">
                        Register
                    </button>

                </form>

                <p className="bottom-text">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>
    );
};
export default Register;
