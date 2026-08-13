import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UpdateProfile } from '../../Service/DriverService'
import { ImageOff } from "lucide-react";
import { useAuth } from "../../Context/AuthContext";

const Updateprofile = ({ profile, onSuccess }) => {

    const { setUser } = useAuth();

    const initialState = {
        name: "",
        profileImage: "",
        email: "",
        phone: "",
        licenseNumber: "",
        licenseExpiry: "",
    };


    const [formData, setFormData] = useState(initialState);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || "",
                profileImage: profile.profileImage || "",
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { ...formData };
            console.log(payload);


            if (!payload.profileImage?.trim()) {
                delete payload.profileImage;
            }
            await UpdateProfile(formData);
            setUser((prev) => ({
                ...prev,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                profileImage: formData.profileImage,
            }));

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
                <div className="form-group image-field-group">
                    <label>Driver Image URL</label>

                    <div className="image-field-row">
                        <input type="text" name="profileImage" placeholder="https://example.com/image.jpg (optional)"
                            value={formData.profileImage}
                            onChange={handleChange} />

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
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>License Number</label>
                    <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>License Expiry</label>
                    <input type="date" name="licenseExpiry" value={formData.licenseExpiry} onChange={handleChange} />
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