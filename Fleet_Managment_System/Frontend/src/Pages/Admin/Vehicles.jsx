import { useEffect, useState } from "react";
import { deleteVehicle, getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";

const Vehicles = () => {

  const [vehicles, setVehicles] = useState([]);

  const loadVehicles = async () => {
    try {
      const res = await getVehicles();
      setVehicles(res.vehicle);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const delet = async (id) => {
    const res = await deleteVehicle(id);
    toast.success(res.message);
    loadVehicles();
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

          <button className="add-btn">
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

                    <button className="edit-btn">
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

        </div>

      </div>

    </div>
  );
};

export default Vehicles;