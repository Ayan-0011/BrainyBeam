import { useEffect, useState } from "react";
import { deleteVehicle, getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import Modal from '../../Components/Modal/Modal';
import VehicleForm from "../../Components/Form/VehicleForm";
import Swal from 'sweetalert2'
import { Pencil, Plus, Trash2, Search } from "lucide-react";
import './Vehicle.css'


const Vehicles = ({ readOnly = false }) => {

  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  const delet = async (id) => {
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

  const filteredVehicles = vehicles.filter((v) =>
    v.registrationNumber?.toLowerCase().includes(search.toLowerCase()) ||
    v.brand?.toLowerCase().includes(search.toLowerCase()) ||
    v.type?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">

      <div className="header">
        <div>
          <h2 className="title">Vehicles</h2>
          <p className="subtitle">Every vehicle registered in the fleet.</p>
        </div>

        {!readOnly && <button onClick={handleAdd} className="addBtn">
          <Plus size={16} />
          Add Vehicle
        </button>}
      </div>

      <div className="toolbar">
        <div className="searchWrap">
          <span className="searchIcon">
            <Search size={16} />
          </span>
          <input type="text" className="searchInput" placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Registration #</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Fuel</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Service Due</th>
              {!readOnly && <th className="actionsHeader">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <tr key={vehicle._id}>
                  <td>
                    <img
                      src={vehicle.vehicleImage}
                      alt={vehicle.registrationNumber}
                      className="vehicleImage"
                    />
                  </td>

                  <td className="regNo">{vehicle.registrationNumber}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.capacity} Ton</td>

                  <td>
                    <span
                      className={`statusBadge ${vehicle.status === "Available"
                        ? "statusAvailable"
                        : vehicle.status === "Maintenance"
                          ? "statusMaintenance"
                          : "statusOnTrip"
                        }`}
                    >
                      {vehicle.status?.toUpperCase()}
                    </span>
                  </td>

                  <td>
                    {new Date(vehicle.serviceDueDate).toLocaleDateString()}
                  </td>

                  {!readOnly &&
                    <td>
                      <button className="iconBtn" onClick={() => handleEdit(vehicle)}>
                        <Pencil size={18} color="green" />
                      </button>

                      <button className="iconBtn iconBtnDanger" onClick={() => delet(vehicle._id)}>
                        <Trash2 size={18} color="red" />
                      </button>
                    </td>
                  }
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="emptyState">
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