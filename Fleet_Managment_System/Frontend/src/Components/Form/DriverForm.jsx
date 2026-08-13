import { useEffect, useState } from "react";
import { createDriver, updateDriver } from "../../Service/DriverService";
import { getVehicles } from "../../Service/VehicleService";
import { toast } from "react-toastify";
import { ImageOff } from "lucide-react";

const DriverForm = ({ editMode, driver, onSuccess }) => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        password: "",
        user: "",
        profileImage:"",
        licenseNumber: "",
        licenseExpiry: "",
        assignedVehicle: "",
        availability: "available"
    };

    const [formData, setFormData] = useState(initialState);
    const [imageError, setImageError] = useState(false);

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
                profileImage: driver.user?.profileImage || "", 
                user: driver.user?._id || "",
                licenseNumber: driver.licenseNumber || "",
                licenseExpiry: driver.licenseExpiry?.split("T")[0] || "",
                assignedVehicle: driver.assignedVehicle?._id || "",
                availability: driver.availability || "available",
            });
        } else {
            setFormData(initialState);
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

        if (e.target.name === "profileImage") {
            setImageError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { ...formData };

            if (!payload.profileImage?.trim()) {
                delete payload.profileImage;
            }

            if (editMode) {
                await updateDriver(driver._id, payload);
                toast.success("Driver updated successfully");
            } else {
                await createDriver(payload);
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

                <div className="form-group image-field-group">
                    <label>Driver Image URL</label>

                    <div className="image-field-row">
                        <input
                            type="text"
                            name="profileImage"
                            placeholder="https://example.com/image.jpg (optional)"
                            value={formData.profileImage}
                            onChange={handleChange}
                        />

                        <div className="image-preview-box">
                            {formData.profileImage && !imageError ? (
                                <img
                                    src={formData.profileImage}
                                    alt="Driver preview"
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

                    <span className="field-hint">Leave empty to use the default driver image.</span>
                </div>

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