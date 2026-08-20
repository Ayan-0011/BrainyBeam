import React, { useEffect, useState } from 'react'
import { AddMaintenancerecord, getAllmaintenance, getSinglemaintenance } from '../../Service/Maintenance'
import { Droplets, Eye, Fuel, IndianRupee, Plus, Search, X } from 'lucide-react';
import './Maintenance.css'
import { getVehicles } from '../../Service/VehicleService';
import { getMe } from '../../Service/UserService';

const Fleet_Maintenance = () => {
    const [maintenance, setMaintenance] = useState([]);
    const [loading, setloading] = useState(true);
    const [selectedMaintenance, setSelectedMaintenance] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [vehicle, setVehicle] = useState([]);
    const [me, setme] = useState([]);

    const [formData, setFormData] = useState({
        vehicleId: "",
        serviceDate: "",
        serviceType: "",
        cost: "",
        nextServiceDueDate: "",
        loggedBy: me.name
    });

    const [submitting, setSubmitting] = useState(false);

    const loaddmaintenance = async () => {
        try {
            const data = await getAllmaintenance();
            setMaintenance(data.maintenance);
            //console.log(data);
            const vehicle = await getVehicles();
            setVehicle(vehicle.vehicle);
            //console.log(vehicle.vehicle);

            const me = await getMe();
            setme(me.user);
            console.log(me.user)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }


    const handleView = async (id) => {
        const res = await getSinglemaintenance(id);
        setSelectedMaintenance(res.maintenance);
    }

    const closemodel = () => {
        setSelectedMaintenance(null);
    }

    useEffect(() => {
        loaddmaintenance();
    }, [])

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
    };

    const handleAddMaintenance = async (e) => {
        e.preventDefault();

        try {
            setSubmitting(true);
            const data = await AddMaintenancerecord(formData)
            console.log("Maintenance added:", data);
            setShowAddModal(false);
            setFormData({
                vehicleId: "",
                serviceDate: "",
                serviceType: "",
                cost: "",
                nextServiceDueDate: ""
            });
            // Refresh maintenance table
            await loaddmaintenance();

        } catch (error) {
            console.log(
                "Error adding maintenance:",
                error.response?.data || error.message
            );
        } finally {
            setSubmitting(false);
        }
    };

    const availibleVehicle = vehicle.filter((item) => item.status === "Available");
    //console.log(availibleVehicle);




    return (
        <div className="maintenance-page">

            <div className="maintenance-header">
                <div>
                    <h2 className="title">Maintenance</h2>
                    <p className="subtitle">Service records for every vehicle in the fleet.</p>
                </div>
                <div>
                    <button
                        className="addBtn"
                        onClick={() => setShowAddModal(true)}>
                        <Plus size={16} />
                        Add Record
                    </button>
                </div>
            </div>

            <div className="maintenance-summary">
                <div className="maintenance-summary-card">
                    <div className="maintenance-icon blue">
                        <Fuel size={22} />
                    </div>
                    <div>
                        <span>Total records</span>
                        <h2>{maintenance.length}</h2>
                    </div>
                </div>

                <div className="maintenance-summary-card">
                    <div className="maintenance-icon green">
                        <IndianRupee size={22} />
                    </div>
                    <div>
                        <span>Total spend</span>
                        <h2>{ }</h2>
                    </div>
                </div>

                <div className="maintenance-summary-card">
                    <div className="maintenance-icon orange">
                        <Droplets size={22} />
                    </div>
                    <div>
                        <span>Due within  days</span>
                        <h2></h2>
                    </div>
                </div>

            </div>


            <div className="toolbar">
                <div className="searchWrap">
                    <span className="searchIcon">
                        <Search size={16} />
                    </span>
                    <input type="text"
                        className="searchInput"
                        placeholder="Search by registration number..." />
                </div>

                <select className="filterSelect" >
                    <option value="">All service types</option>
                    <option value="oil-change">Oil change</option>
                    <option value="normal-service">Normal service</option>
                    <option value="brake-service">Brake service</option>
                    <option value="tyre-service">Tyre service</option>
                    <option value="engine-service">Engine service</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="maintenance-section tb">
                <div className="maintenance-section-header">
                    <div>
                        <h2>Maintenance Logs</h2>
                        <p>Recent maintenance entries from drivers</p>
                    </div>
                </div>

                {loading ? (
                    <div className="maintenance-message">
                        Loading Maintenace logs...
                    </div>
                ) : maintenance.length === 0 ? (
                    <div className="maintenance-message">
                        No Maintenance logs found.
                    </div>
                ) : (
                    <div className="maintenance-table-wrapper">
                        <table className="maintenance-table">
                            < thead >
                                <tr>
                                    <th>Image</th>
                                    <th>Registration</th>
                                    <th>Service type</th>
                                    <th>Service date</th>
                                    <th>Cost</th>
                                    <th>Next due</th>
                                    <th>Logged by</th>
                                    <th></th>
                                </tr>
                            </thead >

                            <tbody>
                                {maintenance.length > 0 ? (
                                    maintenance.map((record) => (
                                        <tr key={record._id}
                                            onClick={() => { handleView(record._id) }}>
                                            <td>
                                                <img src={record.vehicle?.vehicleImage} alt={record.registrationNumber}
                                                    className="vehicleImage" />
                                            </td>
                                            <td className="regNo">{record.vehicle?.registrationNumber}</td>

                                            <td>
                                                <span className="typePill">
                                                    {record.serviceType?.replace("-", " ")}
                                                </span>
                                            </td>
                                            <td>{new Date(record.serviceDate).toLocaleDateString("en-IN")}</td>
                                            <td>₹{record.cost?.toLocaleString("en-IN")}</td>
                                            <td>{new Date(record.nextServiceDueDate).toLocaleDateString("en-IN")}</td>
                                            <td>{record.loggedBy?.name}</td>
                                            <td>
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleView(record._id)
                                                }} className="view-maintenance-btn">
                                                    <Eye size={16} />
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="emptyState">
                                            No maintenance records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {selectedMaintenance && (
                <div className="maintenance-modal-overlay"
                    onClick={closemodel} >
                    <div className="maintenance-detail-modal"
                        onClick={(e) => e.stopPropagation()} >

                        <div className="maintenance-modal-header">
                            <div>
                                <h2>maintenance Details</h2>
                                <p>maintenance log information</p>
                            </div>

                            <button className="close-maintenance-btn"
                                onClick={closemodel} >
                                <X size={20} />
                            </button>
                        </div>

                        {detailLoading ? (
                            <div className="maintenance-modal-loading">
                                Loading details...
                            </div>
                        ) : (
                            <>
                                <div className="maintenance-detail-highlight">
                                    <div>
                                        <span>Vehicle</span>
                                        <div className='im'>
                                            <img src={selectedMaintenance.vehicle.vehicleImage} alt="" className='vehicleImage' />
                                            <strong>{selectedMaintenance.vehicle.brand}</strong>
                                        </div>
                                    </div>
                                    <div>
                                        <span>maintenance Cost</span>
                                        <strong>
                                            {selectedMaintenance.cost}
                                        </strong>
                                    </div>

                                </div>

                                <div className="maintenance-detail-grid">

                                    <div className="maintenance-detail-item">
                                        <span>serviceType</span>
                                        <strong>
                                            {selectedMaintenance.serviceType}
                                        </strong>
                                    </div>

                                    <div className="maintenance-detail-item">
                                        <span>Service date</span>
                                        <strong>
                                            {formatDate(
                                                selectedMaintenance.serviceDate
                                            )}
                                        </strong>
                                    </div>

                                    <div className="maintenance-detail-item">
                                        <span>LoggedBY</span>
                                        <strong>
                                            {selectedMaintenance?.loggedBy.name}
                                        </strong>
                                    </div>

                                    <div className="maintenance-detail-item">
                                        <span>nextServiceDueDate</span>
                                        <strong>
                                            {formatDate(selectedMaintenance.nextServiceDueDate)}
                                        </strong>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}


            {showAddModal && (
                <div
                    className="maintenance-modal-overlay"
                    onClick={() => setShowAddModal(false)}
                >
                    <div
                        className="maintenance-detail-modal add-maintenance-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="maintenance-modal-header">
                            <div>
                                <h2>Add Maintenance Record</h2>
                                <p>Create a new service record for a vehicle</p>
                            </div>

                            <button
                                className="close-maintenance-btn"
                                onClick={() => setShowAddModal(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>


                        <form
                            className="maintenance-form"
                            onSubmit={handleAddMaintenance}
                        >

                            {/* Vehicle */}
                            <div className="form-group">
                                <label>Vehicle</label>

                                <select
                                    name="vehicleId"
                                    value={formData.vehicleId}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">
                                        Select vehicle
                                    </option>

                                    {availibleVehicle.map((record) => (
                                        <option key={record.id} value={record._id}>
                                            {record.registrationNumber}
                                        </option>

                                    ))}
                                </select>
                            </div>


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


                            {/* Service Type */}
                            <div className="form-group">
                                <label>Service Type</label>

                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">
                                        Select service type
                                    </option>

                                    <option value="oil-change">
                                        Oil Change
                                    </option>

                                    <option value="normal-service">
                                        Normal Service
                                    </option>

                                    <option value="brake-service">
                                        Brake Service
                                    </option>

                                    <option value="tyre-service">
                                        Tyre Service
                                    </option>

                                    <option value="engine-service">
                                        Engine Service
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>


                            {/* Cost */}
                            <div className="form-group">
                                <label>Cost</label>

                                <input
                                    type="number"
                                    name="cost"
                                    placeholder="Enter service cost"
                                    min="0"
                                    value={formData.cost}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>


                            {/* Next Service Due */}
                            <div className="form-group">
                                <label>Next Service Due Date</label>

                                <input
                                    type="date"
                                    name="nextServiceDueDate"
                                    value={formData.nextServiceDueDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>


                            {/* Buttons */}
                            <div className="maintenance-form-actions">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => setShowAddModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-maintenance-btn"
                                    disabled={submitting}
                                >
                                    {submitting
                                        ? "Saving..."
                                        : "Add Record"
                                    }
                                </button>

                            </div>

                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};


export default Fleet_Maintenance
