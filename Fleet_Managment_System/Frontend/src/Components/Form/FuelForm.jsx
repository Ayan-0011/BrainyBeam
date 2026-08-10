import { useState } from "react";
import { createFuelLog } from "../../Service/FuelService";
import { toast } from "react-toastify";
import "./Form.css";

const FuelForm = ({ tripId, onSuccess }) => {

    const initialState = {
        litersFilled: "",
        cost: "",
        odometerReading: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [submitting, setSubmitting] = useState(false);

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
                tripId,
                litersFilled: Number(formData.litersFilled),
                cost: Number(formData.cost),
                odometerReading: Number(formData.odometerReading),
            };
            const res = await createFuelLog(payload);
            toast.success(res.message);
            setFormData(initialState);
            onSuccess();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="common-form" onSubmit={handleSubmit}>

            <div className="form-grid">

                <div className="form-group">
                    <label>Liters Filled</label>
                    <input
                        type="number"
                        step="0.01"
                        name="litersFilled"
                        value={formData.litersFilled}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cost (₹)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Odometer Reading (km)</label>
                    <input
                        type="number"
                        name="odometerReading"
                        value={formData.odometerReading}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="save-btn" disabled={submitting}>
                    {submitting ? "Saving..." : "Save Fuel Log"}
                </button>
            </div>
        </form>
    );
};

export default FuelForm;