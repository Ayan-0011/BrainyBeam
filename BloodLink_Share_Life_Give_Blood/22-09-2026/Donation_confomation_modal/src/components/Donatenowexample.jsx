import React, { useState } from "react";
import DonationConfirmationModal from "./modal";

function DonateNowExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const donationRequest = {
    patientName: "Ayan",
    bloodGroup: "AB+",
    component: "Whole Blood",
    unitsRequired: "2 Units",
    hospital: "civil Hospital, Surat",
    donationDate: "28 September 2026",
    donationTime: "10:30 AM - 11:00 AM",
    requestId: "BL-REQ-20894",
  };

  const handleConfirm = async (details) => {
    console.log("Confirming donation for request:", details.requestId);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="donation-page">
      <header className="donation-header">
        <div className="donation-header-content">
          <h1 className="donation-title">Active Donation Request</h1>

          <button
            type="button"
            className="donation-now-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Donate Now
          </button>
        </div>
      </header>

      <DonationConfirmationModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        donationDetails={donationRequest}
      />
    </div>
  );
}

export default DonateNowExample;
