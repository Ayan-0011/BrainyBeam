import React, { useEffect, useState } from "react";
import "./DriverProfile.css";
import { User, BadgeCheck, Truck, CircleCheck, Pencil } from "lucide-react";
import { getProfile, UpdateAvailibilty } from "../../Service/DriverService";
import { toast } from "react-toastify";
import UpdateProfile from "../../Components/Form/Updateprofile";
import Modal from "../../Components/Modal/Modal";

const DriverProfile = () => {
  const [data, setData] = useState({});
  const [availability, setAvailability] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();

      setData(res.data);
      setAvailability(res.data.availability);
    } catch (error) {
      console.log(error);
    }
  };


  const updateAvibility = async () => {
    const res = await UpdateAvailibilty(availability);
    toast.success("availability Change");
    console.log(availability)
    fetchProfile();
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="driver-profile-container">
      <div className="profile-header">
        <div>
          <h2>Driver Profile</h2>
          <p>View and manage your profile information.</p>
        </div>

        <button onClick={()=>setOpenModal(true)} className="edit-profile-btn">
          <Pencil size={18} />
          Edit Profile
        </button>

      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <div className="card-title">
            <User size={20} />
            <h3>Personal Information</h3>
          </div>

          <div className="card-body">
            <div className="profile-row">
              <span>Name</span>
              <strong>{data.name}</strong>
            </div>

            <div className="profile-row">
              <span>Email</span>
              <strong>{data.email}</strong>
            </div>

            <div className="profile-row">
              <span>Phone</span>
              <strong>{data.phone}</strong>
            </div>

            <div className="profile-row">
              <span>Role</span>
              <strong>{data.role}</strong>
            </div>
          </div>
        </div>

        {/* License */}

        <div className="profile-card">
          <div className="card-title">
            <BadgeCheck size={20} />
            <h3>License Information</h3>
          </div>
          <div className="card-body">
            <div className="profile-row">
              <span>License Number</span>
              <strong>{data.licenseNumber}</strong>
            </div>
            <div className="profile-row">
              <span>Expiry Date</span>
              <strong>
                {data.licenseExpiry
                  ? new Date(data.licenseExpiry).toLocaleDateString()
                  : "-"}
              </strong>
            </div>
          </div>
        </div>

        {/* Vehicle */}

        <div className="profile-card">
          <div className="card-title">
            <Truck size={20} />
            <h3>Assigned Vehicle</h3>
          </div>
          <div className="card-body">
            {data.assignedVehicle ? (
              <>
                <div className="profile-row">
                  <span>Registration</span>
                  <strong>{data.assignedVehicle.registrationNumber}</strong>
                </div>

                <div className="profile-row">
                  <span>Brand</span>
                  <strong>{data.assignedVehicle.brand}</strong>
                </div>

                <div className="profile-row">
                  <span>Type</span>
                  <strong>{data.assignedVehicle.type}</strong>
                </div>

                <div className="profile-row">
                  <span>Capacity</span>
                  <strong>{data.assignedVehicle.capacity} KG</strong>
                </div>
              </>
            ) : (
              <div className="no-vehicle">
                No Vehicle Assigned
              </div>
            )}

          </div>
        </div>

        {/* Availability */}

        <div className="profile-card">
          <div className="card-title">
            <CircleCheck size={20} />
            <h3>Availability</h3>
          </div>

          <div className="availability-box">
            <label>Status</label>

            <div className="availability-control">
              <select value={availability}
                onChange={(e) => setAvailability(e.target.value)}>
                <option value="available"> Available</option>
                <option value="on-trip"> On Trip</option>
                <option value="off-duty"> Off Duty</option>
              </select>

              <button
                className="status-btn"
                onClick={updateAvibility}>
                Save
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Update Profile" >

          <UpdateProfile  profile={data}
            onSuccess={() => {
              fetchProfile();
              setOpenModal(false);
            }}
          />
          
        </Modal>
      </div>

    </div>
  );
};

export default DriverProfile;