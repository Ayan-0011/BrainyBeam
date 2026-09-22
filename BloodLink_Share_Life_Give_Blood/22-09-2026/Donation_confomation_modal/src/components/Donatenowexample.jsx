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
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Active Donation Request
      </h1>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "#d32f3c",
          color: "#fff",
          border: "none",
          padding: "12px 22px",
          borderRadius: "8px",
          fontSize: "14.5px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Donate Now
      </button>

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
