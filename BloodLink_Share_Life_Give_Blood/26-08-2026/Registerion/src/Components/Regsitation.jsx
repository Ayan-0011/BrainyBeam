import React, { useState } from "react";
import "./Register.css";

function Register() {

    const bloodgroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        bloodGroup: "",
    });

    const [erros, setErros] = useState({
        name: "",
        email: "",
        password: "",
        bloodGroup: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
        setErros({ ...erros, [e.target.name]: "" });
    };

    const Validtion = () => {
        const error = {};

        if (!formData.name.trim()) {
            error.name = "*Name is required";
        }

        if (!formData.email.trim()) {
            error.email = "*Email is required";
        }

        if (!formData.password.trim()) {
            error.password = "*Password is required";
        }

        if (!formData.bloodGroup) {
            error.bloodGroup = "*Please select the blood group";
        }


        setErros(error);

        return Object.keys(error).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = Validtion();
        if (!validate) return;

        console.log(formData);
        setFormData({ name: "", email: "", password: "", bloodGroup: "" });
        alert("Regsition Success");
    };


    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>

                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                {erros.name && (
                    <p>{erros.name}</p>
                )}

                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                {erros.email && (
                    <p>{erros.email}</p>
                )}
                <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                {erros.password && (
                    <p>{erros.password}</p>
                )}

                <select name="bloodGroup" value={formData.bloodGroup}
                    onChange={handleChange} >

                    <option value="">Select Blood Group</option>
                    {bloodgroup?.map((value, index) => {
                        return (
                            <option key={index} value={value}> {value}  </option>
                        )
                    })}
                </select>
                {erros.bloodGroup && (
                    <p>{erros.bloodGroup}</p>
                )}

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;