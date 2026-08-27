import React, { useState } from "react";
import "./ForgetPaaword.css"
import { ArrowLeft, Heart, HeartPlus } from 'lucide-react'

const ForgotPassword = () => {

  const [email, setEmail] = useState("");


  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <div className="blood-icon">
          <HeartPlus />
        </div>

        <h2>Forgot Password?</h2>

        <p className="forgot-description">
          Enter your registered email address and we'll send you
          an OTP to reset your password.
        </p>

        <form>

          <div className="input-group">
            <label>Email Address</label>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>

          <button type="submit" className="reset-btn">
            Send OTP
          </button>

        </form>

        <div className="back-login">
          <a href="">
            <ArrowLeft size={13} className="arw" /> Back to Login
          </a>
        </div>

      </div>
    </div >
  );
};

export default ForgotPassword;