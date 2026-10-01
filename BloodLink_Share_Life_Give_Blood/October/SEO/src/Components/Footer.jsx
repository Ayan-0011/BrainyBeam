import React from "react";
import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <Heart size={17} fill="currentColor" />
            </div>

            <span>BloodLink</span>
          </Link>

          <p>
            Making blood donation information simple, accessible, and useful
            for everyone.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <Phone size={15} />
            +91 98765 43210
          </p>

          <p>
            <Mail size={15} />
            support@bloodlink.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BloodLink. All rights reserved.
        </p>

        <p>
          Give blood. Save lives.
        </p>
      </div>
    </footer>
  );
};

export default Footer;