import { useEffect, useState } from "react";
import { deleteVehicle, getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import Modal from '../../Components/Modal/Modal';
import VehicleForm from "../../Components/Form/VehicleForm";
import Swal from 'sweetalert2'


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

    <div className="vehicle-page">

      <div className="vehicle-card">

        <div className="vehicle-header">
          <div>
            <h2>Vehicle Management</h2>
            <p>Total Vehicles : {vehicles.length}</p>
          </div>

          <button onClick={handleAdd} className="add-btn">
            + Add Vehicle
          </button>
        </div>

        <div className="table-responsive">
          <table className="vehicle-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Vehicle No</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Fuel</th>
                <th>Capacity</th>
                <th>Status</th>
                <th align="center">Action</th>
              </tr>
            </thead>

            <tbody>

              {vehicles.map((vehicle, index) => (
                <tr key={vehicle._id}>
                  <td>{index + 1}</td>
                  <td>{vehicle.registrationNumber}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.capacity} Ton</td>
                  <td>
                    <span className={`status ${vehicle.status.toLowerCase()}`}>
                      {vehicle.status}
                    </span>
                  </td>

                  <td>

                    <button onClick={() => handleEdit(vehicle)} className="edit-btn">
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => delet(vehicle._id)} >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title={editModal ? "Edit vehicle" : "Add Vehicle"} >
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

      </div>

    </div>
  );
};

export default Vehicles;