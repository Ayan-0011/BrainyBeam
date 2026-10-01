import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <span>Contact Us</span>

        <h1>Have a question?</h1>

        <p>
          Whether you need help with blood availability or want to know more
          about donating, feel free to reach out.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Let's talk</h2>

          <p>
            Fill out the form and our team will get back to you as soon as
            possible.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={19} />
            </div>

            <div>
              <span>Phone</span>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={19} />
            </div>

            <div>
              <span>Email</span>
              <p>support@bloodlink.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>Address</span>
              <p>Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="What is this about?" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn send-btn">
            Send Message
            <Send size={17} />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;