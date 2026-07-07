import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      toast.success(data.message);
      navigate("/verify")
    } else {
      toast.error(data.message);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Enter your registered email address and we'll send you a password reset OPT.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition" />
          </div>

          <button type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition" >
            Send Reset OPT
          </button>

        </form>

        <div className="text-center mt-6">
          <Link to="/login"
            className="text-indigo-600 hover:underline font-medium">
            Back to Login
          </Link>
        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;