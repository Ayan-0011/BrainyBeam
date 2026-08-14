import React, { useEffect, useState } from 'react'
import { createUser, editUser } from '../../Service/UserService';
import { ImageOff } from 'lucide-react';
import { toast } from 'react-toastify';

const UserForm = ({ edituser, user, onSuccess, title }) => {

    const initialState = {
        name: "",
        email: "",
        phone: "",
        password: "",
        profileImage: "",
        role:title
    }

    const [formData, setFormData] = useState(initialState);
    const [imageError, setImageError] = useState(false);


    useEffect(() => {
        if (edituser && user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                password: "",
                profileImage: user.profileImage || "",
                role: title
            })
        } else {
            setFormData(initialState);
        }
    }, [edituser, user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "profileImage") {
            setImageError(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = { ...formData };

            if (!payload.profileImage?.trim()) {
                delete payload.profileImage;
            }

            if (edituser) {
                await editUser(user._id, payload);
                toast.success(`${title} updated successfully`);
            } else {
                await createUser(payload);
                toast.success(`${title} added successfully`);
            }

            onSuccess();
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    }


    return (
        <form className="common-form" onSubmit={handleSubmit} >
            <div className="form-grid">

                <div className="form-group image-field-group">
                    <label>Fleet Image URL</label>

                    <div className="image-field-row">
                        <input
                            type="text"
                            name="profileImage"
                            placeholder="https://example.com/image.jpg (optional)"
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

                {!edituser && (
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                    </div>
                )}
            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn">
                    {edituser ? `update ${title}` : `Add ${title}`}
                </button>
            </div>
        </form>
    )
}

export default UserForm
