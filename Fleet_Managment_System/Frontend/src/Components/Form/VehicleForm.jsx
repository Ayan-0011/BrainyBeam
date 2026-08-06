import { useEffect, useState } from "react";
import { createVehicle, updateVehicle } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import "./Form.css";

const VehicleForm = ({ editMode, vehicle, onSuccess }) => {

    const initialState = {
        registrationNumber: "",
        brand: "",
        type: "",
        fuelType: "",
        capacity: "",
        status: "Available",
        insuranceExpiry: "",
        PermitExpiry: "",
        serviceDueDate: "",
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {

        if (editMode && vehicle) {

            setFormData({
                registrationNumber: vehicle.registrationNumber || "",
                brand: vehicle.brand || "",
                type: vehicle.type || "",
                fuelType: vehicle.fuelType || "",
                capacity: vehicle.capacity || "",
                status: vehicle.status || "Available",
                insuranceExpiry: vehicle.insuranceExpiry?.split("T")[0] || "",
                pollutionCertificateExpiry: vehicle.PermitExpiry?.split("T")[0] || "",
                serviceDueDate: vehicle.serviceDueDate?.split("T")[0] || "",
            });

        } else {

            setFormData(initialState);

        }

    }, [vehicle, editMode]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit")
        try {
            if (editMode) {
                const res = await updateVehicle(vehicle._id, formData);
                toast.success(res.message);
                console.log(res.message)
            } else {
                const res = await createVehicle(formData);
                toast.success(res.message);
            }
            onSuccess();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (

        <form className="common-form" onSubmit={handleSubmit}>

            <div className="form-grid">

                <div className="form-group">
                    <label>Registration Number</label>
                    <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Vehicle Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option>Truck</option>
                        <option>Van</option>
                        <option>Bus</option>
                        <option>Mini Truck</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Fuel Type</label>
                    <select
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option>Diesel</option>
                        <option>Petrol</option>
                        <option>CNG</option>
                        <option>Electric</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Capacity (Ton)</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option>Available</option>
                        <option>On Trip</option>
                        <option>Maintenance</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Insurance Expiry</label>
                    <input
                        type="date"
                        name="insuranceExpiry"
                        value={formData.insuranceExpiry}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Permit Expiry</label>
                    <input
                        type="date"
                        name="PermitExpiry"
                        value={formData.PermitExpiry}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Service Due Date</label>
                    <input
                        type="date"
                        name="serviceDueDate"
                        value={formData.serviceDueDate}
                        onChange={handleChange}
                    />
                </div>

            </div>

            <div className="form-actions">

                <button type="submit" className="save-btn" onClick={handleSubmit}>
                    {editMode ? "Update Vehicle" : "Add Vehicle"}
                </button>

            </div>

        </form>

    );

};

export default VehicleForm;