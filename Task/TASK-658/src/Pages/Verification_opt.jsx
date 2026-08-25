import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Verification_otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    console.log(finalOtp);

    // Backend API Call
  };

  const handleResend = () => {
    setTimer(60);

    // Resend OTP API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">
            🔐
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Verify OTP
        </h2>

        <p className="text-center text-gray-500 mt-3">
          We've sent a 6-digit verification code to your registered email.
        </p>

        <form onSubmit={handleVerify} className="mt-8">

          <div className="flex justify-between gap-3">

            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 border-2 border-gray-300 rounded-xl text-center text-2xl font-bold outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition"
              />
            ))}

          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Verify OTP
          </button>

        </form>

        <div className="mt-6 text-center">

          {timer > 0 ? (
            <p className="text-gray-500">
              Resend OTP in{" "}
              <span className="font-bold text-indigo-600">
                {timer}s
              </span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          )}

        </div>

        <div className="mt-6 text-center">
          <Link
            to="/forget"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            ← Back
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Verification_otp;