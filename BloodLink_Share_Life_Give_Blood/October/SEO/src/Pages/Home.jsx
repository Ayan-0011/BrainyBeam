import React from "react";
import { ArrowRight, Heart, ShieldCheck, Users } from "lucide-react";
import "./Home.css";
import SEO from "../Components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="BloodLink | Donate Blood, Save Lives" description="BloodLink makes blood donation simple and accessible. Find blood availability and connect with blood banks." />
      <div className="home-page">
        <section className="home-hero">
          <div className="hero-content">
            <span className="hero-tag">
              <Heart size={16} />
              Blood Donation Center
            </span>

            <h1>
              Every Blood Donation
              <span> Can Save a Life.</span>
            </h1>

            <p>
              Your one small contribution can become someone's second chance.
              Find a blood bank, check availability, or register as a donor.
            </p>

            <div className="hero-buttons">
              <button className="btn primary-btn">
                Donate Blood
                <ArrowRight size={18} />
              </button>

              <button className="btn secondary-btn">
                Check Blood Availability
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="blood-drop">
              <Heart size={34} fill="currentColor" />
            </div>

            <h3>Your donation matters</h3>

            <p>
              A healthy donor can help patients during emergencies, surgeries,
              and critical treatments.
            </p>

            <div className="hero-card-line"></div>

            <small>Be someone's reason to hope.</small>
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <span>Why donate?</span>
            <h2>Small effort. Real impact.</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={22} />
              </div>
              <h3>Help patients</h3>
              <p>
                Your blood can support people who need urgent treatment or
                surgery.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={22} />
              </div>
              <h3>Support your community</h3>
              <p>
                Regular donors help maintain a reliable blood supply for local
                hospitals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>Safe donation</h3>
              <p>
                Blood donation is carried out by trained healthcare
                professionals following safety procedures.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;