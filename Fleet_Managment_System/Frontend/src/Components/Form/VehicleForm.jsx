import { useEffect, useState } from "react";
import { createVehicle, updateVehicle } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import { ImageOff } from "lucide-react";
import "./Form.css";

const VehicleForm = ({ editMode, vehicle, onSuccess }) => {

    const initialState = {
        registrationNumber: "",
        vehicleImage: "",
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
    const [imageError, setImageError] = useState(false);

    useEffect(() => {

        if (editMode && vehicle) {

            setFormData({
                registrationNumber: vehicle.registrationNumber || "",
                vehicleImage: vehicle.vehicleImage || "",
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

        if (e.target.name === "vehicleImage") {
            setImageError(false);
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...formData };
            if (!payload.vehicleImage?.trim()) {
                delete payload.vehicleImage;
            }

            if (editMode) {
                const res = await updateVehicle(vehicle._id, payload);
                toast.success(res.message);
            } else {
                const res = await createVehicle(payload);
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

                <div className="form-group image-field-group">
                    <label>Vehicle Image URL</label>

                    <div className="image-field-row">
                        <input type="text" name="vehicleImage"
                            placeholder="https://example.com/image.jpg (optional)"
                            value={formData.vehicleImage}
                            onChange={handleChange} />

                        <div className="image-preview-box">
                            {formData.vehicleImage && !imageError ? (
                                <img
                                    src={formData.vehicleImage}
                                    alt="Vehicle preview"
                                    className="image-preview"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="image-preview-placeholder">
                                    <ImageOff size={18} />
                                </div>
                            )}
                        </div>
                    </div>
                    <span className="field-hint">Leave empty to use the default vehicle image.</span>
                </div>

                <div className="form-group">
                    <label>Registration Number</label>
                    <input  type="text"  name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Brand</label>
                    <input type="text" name="brand" value={formData.brand}
                     onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Vehicle Type</label>
                    <select name="type" value={formData.type}  onChange={handleChange} >
                        <option value="">Select</option>
                        <option>Truck</option>
                        <option>Van</option>
                        <option>Bus</option>
                        <option>Mini Truck</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Fuel Type</label>
                    <select name="fuelType"
                        value={formData.fuelType}
                        onChange={handleChange} >
                        <option value="">Select</option>
                        <option>Diesel</option>
                        <option>Petrol</option>
                        <option>CNG</option>
                        <option>Electric</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Capacity (Ton)</label>
                    <input type="number" name="capacity"
                        value={formData.capacity}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select name="status"
                        value={formData.status}
                        onChange={handleChange} >
                        <option>Available</option>
                        <option>in-use</option>
                        <option>Maintenance</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Insurance Expiry</label>
                    <input type="date" name="insuranceExpiry"
                        value={formData.insuranceExpiry}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Permit Expiry</label>
                    <input  type="date"  name="PermitExpiry"
                        value={formData.PermitExpiry}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Service Due Date</label>
                    <input  type="date"  name="serviceDueDate"
                        value={formData.serviceDueDate}
                        onChange={handleChange}  />
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn">
                    {editMode ? "Update Vehicle" : "Add Vehicle"}
                </button>
            </div>
        </form>

    );

};

export default VehicleForm;