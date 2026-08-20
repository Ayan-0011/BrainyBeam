import React, { useState } from 'react'
import { X } from 'lucide-react';
import { AddMaintenancerecord } from '../../Service/Maintenance'

const emptyForm = {
    vehicle: "",
    serviceDate: "",
    serviceType: "",
    cost: "",
    nextServiceDueDate: "",
};

/**
 * Props:
 * - vehicles: array of all vehicles (this component filters to "Available" itself)
 * - me: current logged-in user object (needs _id / id)
 * - onClose: called when the modal should close (cancel, backdrop click, X button)
 * - onSaved: called after a record is successfully saved, so the parent can refresh its table
 */
const AddMaintenanceModal = ({ vehicles = [], me, onClose, onSaved }) => {
    const [formData, setFormData] = useState(emptyForm);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const availibleVehicle = vehicles.filter((item) => item.status === "Available");

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setFormData(emptyForm);
        setSubmitError("");
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        try {
            setSubmitting(true);
            const payload = {
                ...formData,
                cost: Number(formData.cost),
            };

            await AddMaintenancerecord(payload);
            setFormData(emptyForm);
            onSaved?.();
            onClose();

        } catch (error) {
            console.log("Error adding maintenance:", error.response?.data);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="maintenance-modal-overlay" onClick={handleClose}>
            <div className="add-maintenance-modal" onClick={(e) => e.stopPropagation()}>

                <div className="add-maintenance-header">
                    <div>
                        <h2>Add Maintenance Record</h2>
                        <p>Create a new service record for a vehicle</p>
                    </div>

                    <button
                        className="close-maintenance-btn"
                        onClick={handleClose}
                        type="button"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form className="add-maintenance-form" onSubmit={handleSubmit}>
                    <div className="add-maintenance-body">

                        {submitError && (
                            <div className="form-error-banner">
                                {submitError}
                            </div>
                        )}

                        {/* Vehicle */}
                        <div className="form-group full">
                            <label>Vehicle</label>

                            <select
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleFormChange}
                                required
                            >
                                <option value="">
                                    {availibleVehicle.length === 0
                                        ? "No available vehicles"
                                        : "Select vehicle"}
                                </option>

                                {availibleVehicle.map((record) => (
                                    <option key={record._id} value={record._id}>
                                        {record.registrationNumber}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row">
                            {/* Service Type */}
                            <div className="form-group">
                                <label>Service Type</label>

                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">Select type</option>
                                    <option value="oil-change">Oil Change</option>
                                    <option value="normal-service">Normal Service</option>
                                    <option value="brake-service">Brake Service</option>
                                    <option value="tyre-service">Tyre Service</option>
                                    <option value="engine-service">Engine Service</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Cost */}
                            <div className="form-group">
                                <label>Cost (₹)</label>

                                <input
                                    type="number"
                                    name="cost"
                                    placeholder="0"
                                    min="0"
                                    value={formData.cost}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            {/* Service Date */}
                            <div className="form-group">
                                <label>Service Date</label>

                                <input
                                    type="date"
                                    name="serviceDate"
                                    value={formData.serviceDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>

                            {/* Next Service Due */}
                            <div className="form-group">
                                <label>Next Service Due</label>

                                <input
                                    type="date"
                                    name="nextServiceDueDate"
                                    value={formData.nextServiceDueDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="add-maintenance-actions">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-maintenance-btn"
                            disabled={submitting}
                        >
                            {submitting ? "Saving..." : "Add Record"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddMaintenanceModal;