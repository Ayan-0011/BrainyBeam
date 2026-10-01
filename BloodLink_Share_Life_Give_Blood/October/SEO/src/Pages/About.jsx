import React from "react";
import { Heart, Target, Users } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <span>About Us</span>

        <h1>
          Making blood donation
          <strong> simple and accessible.</strong>
        </h1>

        <p>
          We connect donors, patients, and blood banks through a simple
          platform designed to make finding and donating blood easier.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <span className="small-title">Who we are</span>

          <h2>Built around people, not just technology.</h2>

          <p>
            BloodLink is created with a simple purpose: to make blood donation
            information easier to access when people need it the most.
          </p>

          <p>
            Donors can learn about donation, check blood availability, and
            connect with blood banks without going through unnecessary steps.
          </p>

          <p>
            Our focus is simple communication, useful information, and making
            the donation process easier for everyone.
          </p>
        </div>

        <div className="about-box">
          <div className="about-box-item">
            <Heart size={23} />
            <div>
              <h3>Our purpose</h3>
              <p>Encourage more people to become regular blood donors.</p>
            </div>
          </div>

          <div className="about-box-item">
            <Users size={23} />
            <div>
              <h3>Our community</h3>
              <p>Bring donors and blood banks closer to the people who need them.</p>
            </div>
          </div>

          <div className="about-box-item">
            <Target size={23} />
            <div>
              <h3>Our focus</h3>
              <p>Keep blood-related information clear, useful, and accessible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;