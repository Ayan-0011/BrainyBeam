import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UpdateProfile } from '../../Service/DriverService'

const Updateprofile = ({ profile, onSuccess }) => {

    const initialState = {
        name: "",
        email: "",
        phone: "",
        licenseNumber: "",
        licenseExpiry: "",
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || "",
                email: profile.email || "",
                phone: profile.phone || "",
                licenseNumber: profile.licenseNumber || "",
                licenseExpiry: profile.licenseExpiry?.split("T")[0] || "",
            });
        } else {
            setFormData(initialState);
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UpdateProfile(formData);
            toast.success("Profile updated successfully");
            onSuccess();

        } catch (err) {
            console.log(err);
            toast.error(
                err.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <form className="common-form" onSubmit={handleSubmit}>

            <div className="form-grid">
                <div className="form-group">
                    <label>Name</label>
                    <input  type="text" name="name" value={formData.name}  onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input  type="email" name="email"  value={formData.email}  onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>License Number</label>
                    <input type="text" name="licenseNumber" value={formData.licenseNumber}  onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>License Expiry</label>
                    <input type="date" name="licenseExpiry"  value={formData.licenseExpiry} onChange={handleChange} />
                </div>

            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn">
                    Update Profile
                </button>
            </div>

        </form>
    );
};

export default Updateprofile;