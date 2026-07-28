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

    <div className="container mt-4">
      <div className="vehicle_Head">
        <h2 className="mb-4">Manage Vehicles</h2>
        <button>Add vehicles</button>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Vehicle No</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="fw-lighter">
          {
            vehicles.map((vehicle, index) => (
              <tr key={vehicle._id}>
                <td>{index + 1}</td>
                <td>{vehicle.registrationNumber}</td>
                <td>{vehicle.brand}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.fuelType}</td>
                <td>{vehicle.capacity} Tan</td>
                <td>{vehicle.status}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">
                    Edit
                  </button>

                  <button onClick={() => delet(vehicle._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Vehicles;