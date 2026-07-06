import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const redirect = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });


  const changeHandel = (e) => {
    const { name, value } = e.target;

    setUser({...user,[name]: value,});

    setErrors({...errors,[name]: "",});};


  const validate = () => {
    let newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 4 ) {
      newErrors.password = "Password must be at least 4 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandel = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
  
      const checkUser = await axios.get(`http://localhost:3000/user?email=${user.email}` );

      if (checkUser.data.length > 0) {
        toast.warning("Email already exists");
        return;
      }

      await axios.post("http://localhost:3000/user", user);

      toast.success("Registration Successful");

      setUser({
        email: "",
        password: "",
      });

      redirect("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register your new account
          </p>
        </div>

        <form onSubmit={submitHandel} className="space-y-5">

  
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <input type="email" name="email" value={user.email} onChange={changeHandel} placeholder="Enter your email"
              className={`w-full border rounded-lg px-4 py-3 outline-none transition 
                ${ errors.email ? "border-red-500" : "border-gray-300 focus:border-indigo-500" }`} />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input type="password"  name="password"value={user.password}  onChange={changeHandel}  placeholder="Enter your password"
              className={`w-full border rounded-lg px-4 py-3 outline-none transition
               ${ errors.password ? "border-red-500"  : "border-gray-300 focus:border-indigo-500" }`} />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition" >
            Register
          </button>

        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account? 
            <Link to="/login"
              className="text-indigo-600 ps-2 font-semibold hover:underline" >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;