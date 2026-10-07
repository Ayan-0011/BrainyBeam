
import React from "react";
import { UserPlus, Stethoscope, Droplet, Coffee, Heart,} from "lucide-react";
import "./DonationTimeline.css";

const donationSteps = [
  {
    id: 1,
    title: "Registration",
    description: "Register your details at the blood donation center.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Health Check",
    description: "A quick health check ensures you are fit to donate.",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Blood Donation",
    description: "Donate blood safely with our trained medical staff.",
    icon: Droplet,
  },
  {
    id: 4,
    title: "Rest & Refresh",
    description: "Take some rest and enjoy refreshments after donation.",
    icon: Coffee,
  },
  {
    id: 5,
    title: "Make a Difference",
    description: "Your donation can help save someone's life.",
    icon: Heart,
  },
];

const DonationTimeline = () => {
  return (
    <section className="donation-timeline">
      <div className="timeline-header">
        <h2>Blood Donation Process</h2>
        <p>
          Follow these simple steps to make your blood donation.
        </p>
      </div>

      <div className="timeline">
        {donationSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div className="timeline-item" key={step.id}>
              
              <div className="timeline-marker">
                <Icon size={21} />
              </div>

              {index !== donationSteps.length - 1 && (
                <div className="timeline-line"></div>
              )}

              <div className="timeline-content">
                <span className="step-number">
                  Step {step.id}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DonationTimeline;



