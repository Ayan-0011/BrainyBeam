import React from 'react'
import { X } from 'lucide-react';

const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const MaintenanceDetailModal = ({ record, loading, onClose }) => {
    if (!record) return null;

    return (
        <div className="maintenance-modal-overlay" onClick={onClose}>
            <div className="maintenance-detail-modal" onClick={(e) => e.stopPropagation()}>

                <div className="maintenance-modal-header">
                    <div>
                        <h2>Maintenance Details</h2>
                        <p>Maintenance log information</p>
                    </div>

                    <button className="close-maintenance-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {loading ? (
                    <div className="maintenance-modal-loading">
                        Loading details...
                    </div>
                ) : (
                    <>
                        <div className="maintenance-detail-highlight">
                            <div>
                                <span>Vehicle</span>
                                <div className='im'>
                                    <img src={record.vehicle?.vehicleImage} alt="" className='vehicleImage' />
                                    <strong>{record.vehicle?.brand}</strong>
                                </div>
                            </div>
                            <div>
                                <span>Maintenance Cost</span>
                                <strong>
                                    ₹{Number(record.cost || 0).toLocaleString("en-IN")}
                                </strong>
                            </div>
                        </div>

                        <div className="maintenance-detail-grid">

                            <div className="maintenance-detail-item">
                                <span>Service type</span>
                                <strong>
                                    {record.serviceType?.replace("-", " ")}
                                </strong>
                            </div>

                            <div className="maintenance-detail-item">
                                <span>Service date</span>
                                <strong>
                                    {formatDate(record.serviceDate)}
                                </strong>
                            </div>

                            <div className="maintenance-detail-item">
                                <span>Logged by</span>
                                <strong>
                                    {record?.loggedBy?.name || "-"}
                                </strong>
                            </div>

                            <div className="maintenance-detail-item">
                                <span>Next service due</span>
                                <strong>
                                    {formatDate(record.nextServiceDueDate)}
                                </strong>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MaintenanceDetailModal;