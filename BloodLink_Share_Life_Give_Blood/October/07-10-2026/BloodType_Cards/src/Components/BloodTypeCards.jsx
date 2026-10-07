import React from "react";
import { Droplet } from "lucide-react";
import "./BloodTypeCards.css";

const bloodTypes = [
  { type: "A+", donors: 24 },
  { type: "A-", donors: 12 },
  { type: "B+", donors: 31 },
  { type: "B-", donors: 8 },
  { type: "AB+", donors: 15 },
  { type: "AB-", donors: 5 },
  { type: "O+", donors: 38 },
  { type: "O-", donors: 10 },
];

const BloodTypeCards = () => {
  return (
    <section className="blood-type-section">
      <div className="blood-type-header">
        <h2>Blood Types</h2>
        <p>Select a blood group to find available donors.</p>
      </div>

      <div className="blood-type-grid">
        {bloodTypes.map((blood,idx) => (
          <div className="blood-type-card" key={idx}>
            
            <div className="blood-icon">
              <Droplet size={24} />
            </div>

            <div className="blood-info">
              <h3>{blood.type}</h3>
              <p>{blood.donors} Donors Available</p>
            </div>

            <button className="view-btn">
              View
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BloodTypeCards;