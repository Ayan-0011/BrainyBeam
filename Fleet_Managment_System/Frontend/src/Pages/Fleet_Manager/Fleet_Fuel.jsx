import React, { useEffect, useState } from "react";
import { Eye, Fuel as FuelIcon, IndianRupee, Droplets, X } from "lucide-react";
import { getAllFuelLogs, getFuelByTrip } from "../../Service/FuelService";
import "./Fuel.css";

const Fleet_Fuel = () => {
    const [fuelLogs, setFuelLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedFuel, setSelectedFuel] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);

    useEffect(() => {
        loadFuelLogs();
    }, []);

    const loadFuelLogs = async () => {
        try {
            setLoading(true);

            const response = await getAllFuelLogs();
            console.log(response)
            // Adjust this according to your API response
            const data = response?.data?.data || response?.Fuellog || [];

            setFuelLogs(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error loading fuel logs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewFuel = async (id) => {
        try {
            setDetailLoading(true);
            const response = await getFuelByTrip(id);
            console.log(response)
            const data = response?.data?.data || response?.Fuellog;
            setSelectedFuel(data);
        } catch (error) {
            console.error("Error loading fuel detail:", error);
        } finally {
            setDetailLoading(false);
        }
    };

    const closeModal = () => {
        setSelectedFuel(null);
    };

    const totalLiters = fuelLogs.reduce(
        (total, fuel) => total + Number(fuel.litersFilled || 0),
        0
    );

    const totalCost = fuelLogs.reduce(
        (total, fuel) => total + Number(fuel.cost || 0),
        0
    );

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="fuel-page">

            {/* Header */}
            <div className="fuel-header">
                <div>
                    <h1>Fuel Management</h1>
                    <p>Monitor fuel usage and expenses</p>
                </div>
            </div>

            {/* Summary */}
            <div className="fuel-summary">

                <div className="fuel-summary-card">
                    <div className="fuel-icon blue">
                        <FuelIcon size={22} />
                    </div>

                    <div>
                        <span>Total Fuel</span>
                        <h2>{totalLiters.toFixed(1)} L</h2>
                    </div>
                </div>

                <div className="fuel-summary-card">
                    <div className="fuel-icon green">
                        <IndianRupee size={22} />
                    </div>

                    <div>
                        <span>Total Cost</span>
                        <h2>₹{totalCost.toLocaleString("en-IN")}</h2>
                    </div>
                </div>

                <div className="fuel-summary-card">
                    <div className="fuel-icon orange">
                        <Droplets size={22} />
                    </div>

                    <div>
                        <span>Total Logs</span>
                        <h2>{fuelLogs.length}</h2>
                    </div>
                </div>

            </div>

            {/* Fuel Logs */}
            <div className="fuel-section">

                <div className="fuel-section-header">
                    <div>
                        <h2>Fuel Logs</h2>
                        <p>Recent fuel entries from drivers</p>
                    </div>
                </div>

                {loading ? (
                    <div className="fuel-message">
                        Loading fuel logs...
                    </div>
                ) : fuelLogs.length === 0 ? (
                    <div className="fuel-message">
                        No fuel logs found.
                    </div>
                ) : (
                    <div className="fuel-table-wrapper">
                        <table className="fuel-table">

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Driver</th>
                                    <th>Vehicle</th>
                                    <th>Trip</th>
                                    <th>Fuel</th>
                                    <th>Cost</th>
                                    <th>Odometer</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {fuelLogs.map((fuel) => (
                                    <tr
                                        key={fuel._id}
                                        onClick={() => handleViewFuel(fuel._id)}
                                    >
                                        <td>
                                            {formatDate(
                                                fuel.createdAt || fuel.date
                                            )}
                                        </td>

                                        <td>
                                            <div className="driver-cell">
                                                {fuel.driver?.user?.profileImage ? (
                                                    <img
                                                        src={
                                                            fuel.driver.user
                                                                .profileImage
                                                        }
                                                        alt=""
                                                    />
                                                ) : (
                                                    <div className="driver-avatar">
                                                        {fuel.driver?.user?.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase() || "D"}
                                                    </div>
                                                )}

                                                <span>
                                                    {fuel.driver?.user?.name ||
                                                        fuel.driver?.name ||
                                                        "-"}
                                                </span>
                                            </div>
                                        </td>

                                        <td><div className="driver-cell">
                                            {fuel.vehicle.vehicleImage ? (
                                                <img
                                                    src={
                                                        fuel.vehicle.vehicleImage
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <div className="driver-avatar">
                                                    {fuel.driver?.user?.name
                                                        ?.charAt(0)
                                                        ?.toUpperCase() || "D"}
                                                </div>
                                            )}

                                            <span className="vehicle-number">
                                                {fuel.vehicle
                                                    ?.registrationNumber || "-"}
                                            </span>
                                        </div>

                                        </td>

                                        <td>
                                            <span className="trip-route">
                                                {fuel.trip?.fromLocation || "-"}
                                                {" → "}
                                                {fuel.trip?.toLocation || "-"}
                                            </span>
                                        </td>

                                        <td>
                                            <strong>
                                                {fuel.litersFilled || 0} L
                                            </strong>
                                        </td>

                                        <td>
                                            ₹
                                            {Number(
                                                fuel.cost || 0
                                            ).toLocaleString("en-IN")}
                                        </td>

                                        <td>
                                            {fuel.odometer
                                                ? `${fuel.odometer} km`
                                                : "-"}
                                        </td>

                                        <td>
                                            <button
                                                className="view-fuel-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleViewFuel(fuel.trip._id);
                                                }}
                                            >
                                                <Eye size={16} />
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                )}
            </div>

            {/* Single Fuel Detail Modal */}
            {selectedFuel && (
                <div
                    className="fuel-modal-overlay"
                    onClick={closeModal}
                >
                    <div
                        className="fuel-detail-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="fuel-modal-header">
                            <div>
                                <h2>Fuel Details</h2>
                                <p>Fuel log information</p>
                            </div>

                            <button
                                className="close-fuel-btn"
                                onClick={closeModal}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {detailLoading ? (
                            <div className="fuel-modal-loading">
                                Loading details...
                            </div>
                        ) : (
                            <>
                                <div className="fuel-detail-highlight">
                                    <div>
                                        <span>Fuel Filled</span>
                                        <strong>
                                            {selectedFuel.litersFilled || 0} L
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Total Cost</span>
                                        <strong>
                                            ₹
                                            {Number(
                                                selectedFuel.cost || 0
                                            ).toLocaleString("en-IN")}
                                        </strong>
                                    </div>
                                </div>

                                <div className="fuel-detail-grid">

                                    <div className="fuel-detail-item">
                                        <span>Driver</span>
                                        <strong>
                                            {selectedFuel.driver?.user?.name ||
                                                selectedFuel.driver?.name ||
                                                "-"}
                                        </strong>
                                    </div>

                                    <div className="fuel-detail-item">
                                        <span>Vehicle</span>
                                        <strong>
                                            {selectedFuel.vehicle
                                                ?.registrationNumber || "-"}
                                        </strong>
                                    </div>

                                    <div className="fuel-detail-item">
                                        <span>From</span>
                                        <strong>
                                            {selectedFuel.trip?.fromLocation ||
                                                "-"}
                                        </strong>
                                    </div>

                                    <div className="fuel-detail-item">
                                        <span>To</span>
                                        <strong>
                                            {selectedFuel.trip?.toLocation ||
                                                "-"}
                                        </strong>
                                    </div>

                                    <div className="fuel-detail-item">
                                        <span>Odometer</span>
                                        <strong>
                                            {selectedFuel.odometer
                                                ? `${selectedFuel.odometer} km`
                                                : "-"}
                                        </strong>
                                    </div>

                                    <div className="fuel-detail-item">
                                        <span>Date</span>
                                        <strong>
                                            {formatDate(
                                                selectedFuel.createdAt ||
                                                selectedFuel.date
                                            )}
                                        </strong>
                                    </div>

                                </div>
                            </>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
};

export default Fleet_Fuel;