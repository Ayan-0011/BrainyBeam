import React from "react";
import { Droplet, MapPin, Phone } from "lucide-react";
import "./DonorCards.css";

const donors = [
  {
    id: 1,
    name: "Ayan",
    bloodGroup: "O+",
    city: "Rajkot",
    phone: "+91 98765 43210",
    available: true,
  },
  {
    id: 2,
    name: "Shah",
    bloodGroup: "A+",
    city: "Ahmedabad",
    phone: "+91 98765 12345",
    available: true,
  },
  {
    id: 3,
    name: "Amit",
    bloodGroup: "B+",
    city: "Vadodara",
    phone: "+91 98765 67890",
    available: false,
  },
  {
    id: 4,
    name: "Mehta",
    bloodGroup: "AB+",
    city: "Surat",
    phone: "+91 98765 24680",
    available: true,
  },
];

const DonorCards = () => {
  return (
    <section className="donor-section">
      <div className="donor-header">
        <h2>Available Donors</h2>
        <p>Find blood donors near you</p>
      </div>

      <div className="donor-grid">
        {donors.map((donor) => (
          <div className="donor-card" key={donor.id}>
            
            <div className="donor-card-top">

              <div className="donor-profile">
                <div className="donor-avatar">
                  {donor.name.charAt(0)}
                </div>

                <div className="donor-name">
                  <h3>{donor.name}</h3>

                  <div className="blood-group">
                    <Droplet size={14} />
                    <span>{donor.bloodGroup}</span>
                  </div>
                </div>
              </div>


              <span className={`donor-status ${ donor.available ? "available" : "unavailable" }`} >
                <span className="status-dot"></span>
                {donor.available ? "Available" : "Unavailable"}
              </span>
            </div>

            <div className="donor-details">
              <div className="detail-item">
                <MapPin size={15} />
                <span>{donor.city}</span>
              </div>

              <div className="detail-item">
                <Phone size={15} />
                <span>{donor.phone}</span>
              </div>
            </div>

            <button className="contact-btn"
              disabled={!donor.available} >
              {donor.available ? "Contact Donor" : "Currently Unavailable"}
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default DonorCards;