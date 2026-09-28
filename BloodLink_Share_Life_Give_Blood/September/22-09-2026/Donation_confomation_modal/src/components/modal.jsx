import React, { useState } from "react";
import { X, Droplet, CheckCircle } from "lucide-react";

function DonationConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  donationDetails,
}) {
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const {
    patientName,
    bloodGroup,
    component,
    unitsRequired,
    hospital,
    donationDate,
    donationTime,
    requestId,
  } = donationDetails || {};

  const handleConfirm = async () => {
    setStatus("loading");

    try {
      if (onConfirm) {
        await onConfirm(donationDetails);
      }

      setStatus("success");
    } catch (error) {
      setStatus("idle");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose?.();
  };

  return (
    <div className="bl-modal-backdrop">
      <div className="bl-modal">
        {status !== "success" ? (
          <>
            <div className="bl-modal-header">
              <div className="bl-modal-header-left">
                <span className="bl-header-icon" aria-hidden="true">
                  <Droplet size={24} />
                </span>

                <div>
                  <h2 className="bl-modal-title">Confirm Donation</h2>

                  <p className="bl-modal-subtitle">
                    Review the donation request details before confirming.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="bl-close-btn"
                onClick={handleClose}
                aria-label="Close confirmation modal"
                disabled={status === "loading"}
              >
                <X size={18} />
              </button>
            </div>

            {/* Donation Request Details */}
            <div className="bl-modal-body">
              <h3 className="bl-section-heading">Donation Request Details</h3>

              <dl className="bl-details-grid">
                <div className="bl-detail-item">
                  <dt>Patient Name</dt>
                  <dd>{patientName || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Blood Group</dt>
                  <dd>
                    <span className="bl-blood-group-badge">
                      {bloodGroup || "N/A"}
                    </span>
                  </dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Component</dt>
                  <dd>{component || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Units Required</dt>
                  <dd>{unitsRequired || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Hospital</dt>
                  <dd>{hospital || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Donation Date</dt>
                  <dd>{donationDate || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Donation Time</dt>
                  <dd>{donationTime || "N/A"}</dd>
                </div>

                <div className="bl-detail-item">
                  <dt>Request ID</dt>
                  <dd className="bl-request-id">{requestId || "N/A"}</dd>
                </div>
              </dl>
            </div>

            <div className="bl-modal-footer">
              <button
                type="button"
                className="bl-btn bl-btn-secondary"
                onClick={handleClose}
                disabled={status === "loading"}
              >
                Cancel
              </button>

              <button
                type="button"
                className="bl-btn bl-btn-primary"
                onClick={handleConfirm}
                disabled={status === "loading"}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? "Confirming..." : "Confirm Donation"}
              </button>
            </div>
          </>
        ) : (
          /* Success Modal */
          <div className="bl-success-state">
            <span className="bl-success-icon" aria-hidden="true">
              <CheckCircle size={42} />
            </span>

            <h2 className="bl-success-title">
              Donation confirmed successfully.
            </h2>

            <p className="bl-success-subtitle">
              Thank you for choosing to save a life. The hospital and recipient
              have been notified of your confirmation.
            </p>

            <button
              type="button"
              className="bl-btn bl-btn-primary bl-done-btn"
              onClick={handleClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationConfirmationModal;
