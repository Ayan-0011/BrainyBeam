import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Pencil, Trash2, Plus } from "lucide-react";

import Modal from "../../Components/Modal/Modal";
import DriverForm from "../../Components/Form/DriverForm";
import { deleteDriver, getDriver } from "../../Service/DriverService";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
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

  return (
    <div className="wrapper">
      <div className="header">
        <div>
          <h2 className="title">Driver Management</h2>
          <p className="subtitle">
            Total Drivers : {drivers.length}
          </p>
        </div>

        <button onClick={handleAdd} className="addBtn">
          <Plus size={18} />
          Add Driver
        </button>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>License No.</th>
              <th>License Expiry</th>
              <th>Availability</th>
              <th>Assigned Vehicle</th>
              <th className="actionsHeader">Action</th>
            </tr>
          </thead>

          <tbody>
            {drivers.length > 0 ? (
              drivers.map((driver, index) => (
                <tr key={driver._id}>
                  <td>{index + 1}</td>
                  <td className="regNo">
                    {driver.user?.name || "-"}
                  </td>
                  <td>{driver.user?.email || "-"}</td>
                  <td>{driver.user?.phone || "-"}</td>
                  <td>{driver.licenseNumber}</td>
                  <td>
                    {new Date(
                      driver.licenseExpiry
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={`statusBadge ${getAvailabilityClass(
                        driver.availability
                      )}`}
                    >
                      {driver.availability}
                    </span>
                  </td>

                  <td>
                    {driver.assignedVehicle
                      ? driver.assignedVehicle.registrationNumber
                      : "Not Assigned"}
                  </td>

                  <td className="actionsCell">
                    <button
                      className="iconBtn"
                      onClick={() => handleEdit(driver)} >
                      <Pencil size={18} color="green" />
                    </button>

                    <button
                      className="iconBtn iconBtnDanger"
                      onClick={() => delet(driver._id)} >
                      <Trash2 size={18}  color="red"/>
                    </button>
                  </td>
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