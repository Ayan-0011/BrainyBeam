import React from "react";
import "./RegistrationEmail.css";
import { HeartPulse } from 'lucide-react'

const RegistrationEmail = () => {

  const user = {
    name: "Ayan Ansari",
    email: "ayan@email.com",
    phone: "+91 9876543210",
    bloodGroup: "O+",
  };

  return (
    <div className="email-page">
      <div className="email-card">

        {/* Header */}
        <div className="email-header">
          <div className="icon">
            <HeartPulse />
          </div>
          <div>
            <h1>BloodLink</h1>
            <p>Share Life • Give Blood</p>
          </div>
        </div>

        {/* Content */}
        <div className="email-content">
          <h2>Registration Successful! </h2>

          <p>
            Hello <strong>{user.name}</strong>,
          </p>

          <p>
            Thank you for registering with BloodLink.
            Your registration has been successfully completed.
          </p>

          {/* Registration Details */}
          <div className="user-info">
            <h3>Registration Details</h3>

            <div className="info-row">
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>

            <div className="info-row">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>

            <div className="info-row">
              <span>Phone</span>
              <strong>{user.phone}</strong>
            </div>

            <div className="info-row">
              <span>Blood Group</span>
              <strong>{user.bloodGroup}</strong>
            </div>
          </div>

          <p>
            You are now a part of the BloodLink community.
            Your contribution can help save lives.
          </p>

          <button className="email-button">
            Go to BloodLink
          </button>
        </div>

        {/* Footer */}
        <div className="email-footer">
          <HeartPulse size={18} />
          <p>Share Life • Give Blood </p>
          <span> 2026 BloodLink. All rights reserved. </span>
        </div>

      </div>
    </div>
  );
};

export default RegistrationEmail;