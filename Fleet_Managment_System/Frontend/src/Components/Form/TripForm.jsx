import { useEffect, useState } from "react";
import { createTrip } from "../../Service/TripService";
import { toast } from "react-toastify";
import "./Form.css";
import { getDriver } from "../../Service/DriverService";
import { getVehicles } from "../../Service/VehicleService";

const TripForm = ({ onSuccess }) => {

    const initialState = {
        fromLocation: "",
        toLocation: "",
        cargoDescription: "",
        cargoWeight: "",
        assignedDriver: "",
        assignedVehicle: "",
        scheduledDeparture: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const loadOptions = async () => {
        try {
            const [driverRes, vehicleRes] = await Promise.all([
                getDriver(),
                getVehicles(),
            ]);
            setDrivers(driverRes.drivers || driverRes.driver || []);
            setVehicles(vehicleRes.vehicle || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadOptions();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const payload = {
                ...formData,
                cargoWeight: Number(formData.cargoWeight),
            };
            const res = await createTrip(payload);
            toast.success(res.message);
            setFormData(initialState);
            onSuccess();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    // only vehicles that are currently available can be assigned
    const availableVehicles = vehicles.filter((v) => v.status === "Available");
    // only drivers that are currently available can be assigned
    const availableDrivers = drivers.filter((d) => d.availability === "available");

    return (
        <form className="common-form" onSubmit={handleSubmit}>

            <div className="form-grid">

                <div className="form-group">
                    <label>From Location</label>
                    <input
                        type="text"
                        name="fromLocation"
                        placeholder="Enter From Location City"
                        value={formData.fromLocation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>To Location</label>
                    <input
                        type="text"
                        name="toLocation"
                        placeholder="Enter To Location City "
                        value={formData.toLocation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cargo Description</label>
                    <input
                        type="text"
                        name="cargoDescription"
                        placeholder="e.g. Electronics"
                        value={formData.cargoDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cargo Weight (Ton)</label>
                    <input
                        type="number"
                        name="cargoWeight"
                        value={formData.cargoWeight}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Assign Driver</label>
                    <select
                        name="assignedDriver"
                        value={formData.assignedDriver}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Driver</option>
                        {availableDrivers.map((d) => (
                            <option key={d._id} value={d._id}>
                                {d.user?.name || d.name}
                            </option>
                        ))}
                    </select>
                    {availableDrivers.length === 0 && (
                        <span className="field-hint">No available drivers right now.</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Assign Vehicle</label>
                    <select
                        name="assignedVehicle"
                        value={formData.assignedVehicle}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Vehicle</option>
                        {availableVehicles.map((v) => (
                            <option key={v._id} value={v._id}>
                                {v.registrationNumber} ({v.capacity} Ton)
                            </option>
                        ))}
                    </select>
                    {availableVehicles.length === 0 && (
                        <span className="field-hint">No available vehicles right now.</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Scheduled Departure</label>
                    <input
                        type="datetime-local"
                        name="scheduledDeparture"
                        value={formData.scheduledDeparture}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn" disabled={submitting}>
                    {submitting ? "Creating..." : "Create Trip"}
                </button>
            </div>
        </form>
    );
};

export default TripForm;