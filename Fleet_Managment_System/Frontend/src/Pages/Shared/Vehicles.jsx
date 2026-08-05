import { useEffect, useState } from "react";
import { deleteVehicle, getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import Modal from '../../Components/Modal/Modal';
import VehicleForm from "../../Components/Form/VehicleForm";
import Swal from 'sweetalert2'
import { Pencil, Plus, Trash2 } from "lucide-react";
import './Vehicle.css'


const Vehicles = () => {

  const [vehicles, setVehicles] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedVehicle, setselectedVehicle] = useState(null);


  const handleAdd = () => {
    setEditModal(false);
    setselectedVehicle(null);
    setOpenModal(true)
  }

  const handleEdit = (vehicle) => {
    setEditModal(true);
    setselectedVehicle(vehicle);
    setOpenModal(true);
  }

  const loadVehicles = async () => {
    try {
      const res = await getVehicles();
      setVehicles(res.vehicle);
      //console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const delet = async (id) => {

    console.log("deleted")
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "my-confirm-btn",
        cancelButton: "my-cancel-btn"
      },
      buttonsStyling: false
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    })

    if (result.isConfirmed) {

      try {
        await deleteVehicle(id);
        loadVehicles();

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Vehicle has been deleted successfully.",
          icon: "success",
        })

      } catch (error) {
        swalWithBootstrapButtons.fire({
          title: "Error!",
          text: "Failed to delete vehicle.",
          icon: "error",
        })
      }
    }

  }

  

  useEffect(() => {
    loadVehicles();
  }, []);

  return (

    <div className="wrapper">

      <div className="header">
        <div>
          <h2 className="title">Vehicle Management</h2>
          <p className="subtitle">Total Vehicles : {vehicles.length}</p>
        </div>

        <button onClick={handleAdd} className="addBtn">
          <span className="addBtnIcon">+</span>
          Add Vehicle
        </button>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Vehicle No</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Fuel</th>
              <th>Capacity</th>
              <th>Service Due</th>
              <th>Status</th>
              <th className="actionsHeader">Action</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.length > 0 ? (
              vehicles.map((vehicle, index) => (
                <tr key={vehicle._id}>
                  <td>{index + 1}</td>
                  <td className="regNo">
                    {vehicle.registrationNumber}
                  </td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.capacity} Ton</td>
                  <td>
                    <span
                      className={`statusBadge ${vehicle.status === "available"
                        ? "statusAvailable"
                        : vehicle.status === "maintenance"
                          ? "statusMaintenance"
                          : "statusOnTrip"
                        }`} >
                      {vehicle.status}
                    </span>
                  </td>
                  <td>{new Date(vehicle.serviceDueDate).toLocaleDateString()} </td>

                  <td className="actionsCell">
                    <button
                      className="iconBtn"
                      onClick={() => handleEdit(vehicle)}>
                      <Pencil size={18} />
                    </button>

                    <button
                      className="iconBtn iconBtnDanger"
                      onClick={() => delet(vehicle._id)} >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="emptyState">
                  No vehicles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={editModal ? "Edit Vehicle" : "Add Vehicle"} >
        <VehicleForm
          editMode={editModal}
          vehicle={selectedVehicle}
          onSuccess={() => {
            loadVehicles();
            setOpenModal(false);
          }}
        />
      </Modal>

    </div>
  );
};

export default Vehicles;