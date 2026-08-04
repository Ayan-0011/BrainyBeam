import { useEffect, useState } from "react";
import { createDriver, updateDriver } from "../../Service/DriverService";
import { getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";

const DriverForm = ({ editMode, driver, onSuccess }) => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        password: "",
        user: "",
        licenseNumber: "",
        licenseExpiry: "",
        assignedVehicle: "",
        availability: "available",
    };

    const [formData, setFormData] = useState(initialState);

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        loadVehicles();
    }, []);

    useEffect(() => {
        if (editMode && driver) {
            setFormData({
                name: driver.user?.name || "",
                email: driver.user?.email || "",
                phone: driver.user?.phone || "",
                password: "",
                user: driver.user?._id || "",
                licenseNumber: driver.licenseNumber || "",
                licenseExpiry: driver.licenseExpiry?.split("T")[0] || "",
                assignedVehicle: driver.assignedVehicle?._id || "",
                availability: driver.availability || "available",
            });
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                user: "",
                licenseNumber: "",
                licenseExpiry: "",
                assignedVehicle: "",
                availability: "available",
            });
        }
    }, [driver, editMode]);

    const loadVehicles = async () => {
        try {
            const res = await getVehicles();
            setVehicles(res.vehicles || []);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(driver);

        try {
            if (editMode) {
                await updateDriver(driver._id, formData);
                toast.success("Driver updated successfully");
            } else {
                await createDriver(formData);
                toast.success("Driver added successfully");
            }

            onSuccess();
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <form className="common-form" onSubmit={handleSubmit}>
            <div className="form-grid">

                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {!editMode && (
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                    </div>
                )}


                <div className="form-group">
                    <label>License Number</label>
                    <input type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>License Expiry</label>
                    <input type="date"
                        name="licenseExpiry"
                        value={formData.licenseExpiry}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Assigned Vehicle</label>

                    <select name="assignedVehicle"
                        value={formData.assignedVehicle}
                        onChange={handleChange} >
                        <option value="">Select Vehicle</option>

                        {vehicles.map((vehicle) => (
                            <option key={vehicle._id} value={vehicle._id}>
                                {vehicle.registrationNumber}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn">
                    {editMode ? "Update Driver" : "Add Driver"}
                </button>
            </div>
        </form>
    );
};

export default DriverForm;