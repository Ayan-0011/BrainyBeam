import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Pencil, Trash2, Plus, Search } from "lucide-react";

import Modal from "../../Components/Modal/Modal";
import DriverForm from "../../Components/Form/DriverForm";
import { deleteDriver, getDriver } from "../../Service/DriverService";

const Drivers = ({readOnly = false }) => {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleAdd = () => {
    setEditModal(false);
    setSelectedDriver(null);
    setOpenModal(true);
  };

  const handleEdit = (driver) => {
    setEditModal(true);
    setSelectedDriver(driver);
    setOpenModal(true);
  };

  const loadDrivers = async () => {
    try {
      const res = await getDriver();
      setDrivers(res.drivers || []);
    } catch (error) {
      console.log(error);
    }
  };

  const delet = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "my-confirm-btn",
        cancelButton: "my-cancel-btn",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await deleteDriver(id);
        loadDrivers();

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Driver has been deleted successfully.",
          icon: "success",
        });
      } catch (error) {
        swalWithBootstrapButtons.fire({
          title: "Error!",
          text: "Failed to delete driver.",
          icon: "error",
        });
      }
    }
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  const getAvailabilityClass = (status) => {
    switch (status) {
      case "available":
        return "statusAvailable";
      case "maintenance":
      case "off-duty":
        return "statusMaintenance";
      case "on-trip":
        return "statusOnTrip";
      default:
        return "";
    }
  };

  const filteredDrivers = drivers.filter((d) =>
    d.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
    d.user?.email?.toLowerCase().includes(search.toLowerCase()) ||
    d.licenseNumber?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="header">
        <div>
          <h2 className="title">Drivers</h2>
          <p className="subtitle">Every driver registered in the fleetops.</p>
        </div>

        {!readOnly && 
        <button onClick={handleAdd} className="addBtn">
          <Plus size={16} />
          Add Driver
        </button>}
      </div>

      <div className="toolbar">
        <div className="searchWrap">
          <span className="searchIcon">
            <Search size={16} />
          </span>
          <input type="text"  className="searchInput"  placeholder="Search drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>License No.</th>
              <th>License Expiry</th>
              <th>Availability</th>
              <th>Assigned Vehicle</th>
             {!readOnly && <th className="actionsHeader">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver) => (
                <tr key={driver._id}>
                  <td>
                    <img
                      src={driver.user.profileImage}
                      alt={driver.user?.name || "Driver"}
                      className="vehicleImage"
                    />
                  </td>

                  <td className="regNo">{driver.user?.name || "-"}</td>
                  <td>{driver.user?.email || "-"}</td>
                  <td>{driver.user?.phone || "-"}</td>
                  <td>{driver.licenseNumber}</td>
                  <td>
                    {new Date(driver.licenseExpiry).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={`statusBadge ${getAvailabilityClass(
                        driver.availability
                      )}`}
                    >
                      {driver.availability?.toUpperCase()}
                    </span>
                  </td>

                  <td>
                    {driver.assignedVehicle
                      ? driver.assignedVehicle.registrationNumber
                      : "Not Assigned"}
                  </td>

                  {!readOnly && <td className="actionsCell">
                    <button className="iconBtn" onClick={() => handleEdit(driver)}>
                      <Pencil size={18} />
                    </button>

                    <button className="iconBtn iconBtnDanger" onClick={() => delet(driver._id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="emptyState">
                  No Drivers Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={editModal ? "Edit Driver" : "Add Driver"}>
        <DriverForm
          editMode={editModal}
          driver={selectedDriver}
          onSuccess={() => {
            loadDrivers();
            setOpenModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Drivers;