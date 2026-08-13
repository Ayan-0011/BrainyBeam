import React, { useEffect, useState } from "react";
import "./DriverProfile.css";
import { Mail, Phone, BadgeCheck, CalendarDays, LockKeyhole, CircleCheck, CircleOff, Pencil, } from "lucide-react";
import { getProfile, UpdateAvailibilty, UpdateProfile } from "../../Service/DriverService";
import { toast } from "react-toastify";
import Modal from "../../Components/Modal/Modal";
import Updateprofile from "../../Components/Form/Updateprofile";

const DriverProfile = () => {
  const [data, setData] = useState({});
  const [availability, setAvailability] = useState("");
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await getProfile();
      const profile = res?.data;
      setData(profile || {});
      setAvailability(profile?.availability || "off-duty");
    } catch (error) {
      toast.error(error.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handledeit = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  const isOnTrip = availability === "on-trip";
  const isAvailable = availability === "available";

  const updateAvailability = async (value) => {
    if (isOnTrip || value === availability || updating) return;

    const previous = availability;
    try {
      setUpdating(true);
      setAvailability(value); // optimistic update
      await UpdateAvailibilty(value);
      toast.success("Availability updated successfully");
    } catch (error) {
      setAvailability(previous); // rollback on failure
      toast.error(error.message || "Failed to update availability");
    } finally {
      setUpdating(false);
    }
  };

  const statusMeta = {
    available: { label: "Available", className: "available" },
    "off-duty": { label: "Off Duty", className: "off-duty" },
    "on-trip": { label: "On Trip", className: "on-trip" },
  };

  const currentStatus = statusMeta[availability] || statusMeta["off-duty"];

  return (
    <div className="driver-profile-page">
      <div className="driver-profile-wrapper">
        {/* Page Heading */}
        <div className="profile-page-heading">
          <div>
            <h1>My Profile</h1>
            <p>View and manage your driver profile</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="driver-profile-card">
          {/* Profile Header */}
          <div className="profile-top">
            <button onClick={handledeit}
              type="button"
              className="edit-profile-btn">
              <Pencil size={14} />
              <span>Edit</span>
            </button>

            <div className="profile-avatar">
              <img src={data.profileImage} alt={data?.name || "Driver"} />
            </div>

            <div className="profile-heading-content">
              <h2>{loading ? "Loading..." : data?.name || "Driver Name"}</h2>
              <div className={`availability-badge ${currentStatus.className}`}>
                <span className="status-dot"></span>
                {currentStatus.label}
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="profile-content">
            <div className="section-title">
              <span>Personal Information</span>
            </div>

            <div className="info-list">
              {/* Email */}
              <div className="info-row">
                <div className="info-label">
                  <div className="info-icon">
                    <Mail size={17} />
                  </div>
                  <span>Email</span>
                </div>
                <span className="info-value">
                  {data?.email || "Not available"}
                </span>
              </div>

              {/* Phone */}
              <div className="info-row">
                <div className="info-label">
                  <div className="info-icon">
                    <Phone size={17} />
                  </div>
                  <span>Phone</span>
                </div>
                <span className="info-value">
                  {data?.phone || "Not available"}
                </span>
              </div>

              {/* License */}
              <div className="info-row">
                <div className="info-label">
                  <div className="info-icon">
                    <BadgeCheck size={17} />
                  </div>
                  <span>License No.</span>
                </div>
                <span className="info-value">
                  {data?.licenseNumber || "Not available"}
                </span>
              </div>

              {/* License Expiry */}
              <div className="info-row">
                <div className="info-label">
                  <div className="info-icon">
                    <CalendarDays size={17} />
                  </div>
                  <span>License Expiry</span>
                </div>
                <span className="info-value">
                  {data?.licenseExpiry
                    ? new Date(data.licenseExpiry).toLocaleDateString("en-GB")
                    : "Not available"}
                </span>
              </div>
            </div>

            {/* Availability control */}
            <div className="availability-section">
              <div className="availability-heading">
                <div>
                  <h3>Availability</h3>
                  <p>Let dispatch know when you're ready for rides</p>
                </div>

                {isOnTrip && (
                  <div className="locked-label">
                    <LockKeyhole size={12} />
                    Locked
                  </div>
                )}
              </div>

              <div className="availability-control">
                <button type="button"
                  className={`availability-option available-option ${isAvailable ? "active" : ""}`}
                  disabled={isOnTrip || updating}
                  onClick={() => updateAvailability("available")} >
                  <CircleCheck size={16} />
                  Available
                  {isAvailable && <span className="selected-dot"></span>}
                </button>

                <button type="button"
                  className={`availability-option off-duty-option ${availability === "off-duty" ? "active" : ""}`}
                  disabled={isOnTrip || updating}
                  onClick={() => updateAvailability("off-duty")} >
                  <CircleOff size={16} />
                  Off Duty
                  {availability === "off-duty" && (
                    <span className="selected-dot"></span>
                  )}
                </button>
              </div>

              {isOnTrip && (
                <div className="trip-lock-message">
                  <LockKeyhole size={15} />
                  <div>
                    <strong>You're currently on a trip</strong>
                    <p>
                      Availability updates automatically once the trip ends.
                      You can't change it manually right now.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Update Profile" >
              
        <Updateprofile profile={data}
          onSuccess={() => {
            fetchProfile();
            setOpenModal(false);
          }}
        />

      </Modal>



    </div>
  );
};

export default DriverProfile;