import { useEffect, useState } from "react";
import Modal from '../../Components/Modal/Modal';
import Swal from 'sweetalert2'
import { deleteDriver, getDriver } from "../../Service/DriverService";
import DriverForm from "../../Components/Form/DriverForm";


const Drivers = () => {

  const [driver, setDriver] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selecteDriver, setselectedDriver] = useState(null);


  const handleAdd = () => {
    setEditModal(false);
    setselectedDriver(null);
    setOpenModal(true)
  }

  const handleEdit = (driver) => {
    setEditModal(true);
    setselectedDriver(driver);
    setOpenModal(true);
  }

  const loadDriver = async () => {
    try {
      const res = await getDriver();
      //console.log(res.drivers);
      setDriver(res.drivers);
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
        await deleteDriver(id);
        loadDriver();

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Driver has been deleted successfully.",
          icon: "success",
        })

      } catch (error) {
        swalWithBootstrapButtons.fire({
          title: "Error!",
          text: "Failed to delete Driver.",
          icon: "error",
        })
      }
    }

  }

  useEffect(() => {
    loadDriver();
  }, []);

  return (

    <div className="vehicle-page">
      <div className="vehicle-card">
        <div className="vehicle-header">
          <div>
            <h2>Driver Management</h2>
            <p>Total Drivers : {driver?.length}</p>
          </div>

          <button onClick={handleAdd} className="add-btn">
            + Add Driver
          </button>
        </div>

        <div className="table-responsive">
          <table className="vehicle-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>License No</th>
                <th>License Expiry</th>
                <th>Assigned Vehicle</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {driver?.map((driver, index) => (
                <tr key={driver._id}>
                  <td>{index + 1}</td>
                  <td>{driver.user?.name}</td>
                  <td>{driver.user?.email}</td>
                  <td>{driver.user?.phone}</td>
                  <td>{driver.licenseNumber}</td>
                  <td>
                    {new Date(driver.licenseExpiry).toLocaleDateString()}
                  </td>
                  <td>
                    {driver.assignedVehicle?.registrationNumber || "Not Assigned"}
                  </td>
                  <td>
                    <span className={`status ${driver.availability}`}>
                      {driver.availability}
                    </span>
                  </td>

                  <td>
                    <button className="edit-btn"
                      onClick={() => handleEdit(driver)} >
                      Edit
                    </button>

                    <button className="delete-btn"
                      onClick={() => delet(driver._id)} >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title={editModal ? "Edit Driver" : "Add Driver"} >
            <DriverForm
              editMode={editModal}
              driver={selecteDriver}
              onSuccess={() => {
                loadDriver();
                setOpenModal(false);
              }}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Drivers;