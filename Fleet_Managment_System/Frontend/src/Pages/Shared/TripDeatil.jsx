import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleTrip } from "../../Service/TripService";
import { getFuelByTrip } from "../../Service/FuelService";
import { ArrowLeft, ArrowRight, Package, User, CalendarClock, Truck, Fuel } from "lucide-react";
import "./Trip.css";

const statusClassMap = {
    scheduled: "statusScheduled",
    "in-transit": "statusInTransit",
    delivered: "statusDelivered",
    closed: "statusClosed",
};

const TripDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [trip, setTrip] = useState(null);
    const [fuelLogs, setFuelLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadTrip = async () => {
        try {
            setLoading(true);
            const res = await getSingleTrip(id);
            console.log(res);
            
            setTrip(res.Singaletrip);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const loadFuelLogs = async () => {
        try {
            const res = await getFuelByTrip(id);
            setFuelLogs(res.fuelLogs || []);
        } catch (error) {
            setFuelLogs([]);
        }
    };

    useEffect(() => {
        loadTrip();
        loadFuelLogs();
    }, [id]);

    if (loading) {
        return <div className="loadingState">Loading trip details...</div>;
    }

    if (!trip) {
        return <div className="loadingState">Trip not found.</div>;
    }

    return (
        <div className="wrapper">

            <div className="detailHeader">
                <button className="backBtn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={18} />
                </button>
                <div>
                    <h2 className="title">Trip Details</h2>
                    <span className={`statusBadge ${statusClassMap[trip.tripStatus] || ""}`}>
                        {trip.tripStatus?.toUpperCase()}
                    </span>
                </div>
            </div>

            <div className="routeCardBig">
                <div className="routePoint">
                    <p className="routePointLabel">From</p>
                    <p className="routePointValue">{trip.fromLocation}</p>
                </div>
                <div className="routeArrow">
                    <ArrowRight size={25} />
                </div>
                <div className="routePoint routePointEnd">
                    <p className="routePointLabel">To</p>
                    <p className="routePointValue">{trip.toLocation}</p>
                </div>
            </div>

            <div className="detailGrid">

                <div className="detailCard">
                    <h3><Package size={15} /> Cargo</h3>
                    <div className="detailRow">
                        <span className="detailLabel">Description</span>
                        <span className="detailValue">{trip.cargoDescription}</span>
                    </div>
                    <div className="detailRow">
                        <span className="detailLabel">Weight</span>
                        <span className="detailValue">{trip.cargoWeight} Ton</span>
                    </div>
                </div>

                <div className="detailCard">
                    <h3><User size={15} /> Assignment</h3>
                    <div className="detailRow">
                        <span className="detailLabel">Driver</span>
                        <span className="detailValue">{trip.driverName || "-"} <img src={trip.driverImage} alt="" className="miniVehicleImage"/></span>
                    </div>
                    <div className="detailRow">
                        <span className="detailLabel">Vehicle</span>
                        <span className="detailValue">{trip.vehicleNumber || "-"} <img src={trip.vehicleImage} alt="" className="miniVehicleImage"/></span>
                    </div>
                </div>

                <div className="detailCard">
                    <h3><CalendarClock size={15} /> Schedule</h3>
                    <div className="detailRow">
                        <span className="detailLabel">Scheduled Departure</span>
                        <span className="detailValue">
                            {trip.scheduledDeparture
                                ? new Date(trip.scheduledDeparture).toLocaleString() : "-"}
                        </span>
                    </div>
                </div>

            </div>

            <div className="bottomGrid">

                {trip.statusHistory?.length > 0 && (
                    <div className="detailCard">
                        <h3><Truck size={15} /> Status Timeline</h3>
                        <div className="timeline">
                            {trip.statusHistory.map((entry, idx) => (
                                <div className="timelineItem" key={idx}>
                                    <span
                                        className={`timelineDot ${statusClassMap[entry.status] || ""}`}
                                    />
                                    <div>
                                        <p className="timelineLabel">{entry.status}</p>
                                        <p className="timelineDate">
                                            {entry.timestamp
                                                ? new Date(entry.timestamp).toLocaleString()
                                                : "-"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {fuelLogs.length > 0 ? (
                    <div className="detailCard">
                        <h3><Fuel size={15} /> Fuel Log</h3>
                        {fuelLogs.map((log) => (
                            <div key={log._id} className="fuelLogBlock">
                                <div className="detailRow">
                                    <span className="detailLabel">Liters Filled</span>
                                    <span className="detailValue">{log.litersFilled} L</span>
                                </div>
                                <div className="detailRow">
                                    <span className="detailLabel">Cost</span>
                                    <span className="detailValue">₹{log.cost}</span>
                                </div>
                                <div className="detailRow">
                                    <span className="detailLabel">Odometer Reading</span>
                                    <span className="detailValue">{log.odometerReading} km</span>
                                </div>
                                <div className="detailRow">
                                    <span className="detailLabel">Filled By</span>
                                    <span className="detailValue">{log.driver?.user?.name || "-"}</span>
                                </div>
                                <div className="detailRow">
                                    <span className="detailLabel">Logged On</span>
                                    <span className="detailValue">
                                        {log.createdAt
                                            ? new Date(log.createdAt).toLocaleString()
                                            : "-"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    (trip.tripStatus === "delivered" || trip.tripStatus === "closed") && (
                        <div className="detailCard">
                            <h3><Fuel size={15} /> Fuel Log</h3>
                            <p className="fuelEmptyState">
                                No fuel log added for this trip yet.
                            </p>
                        </div>
                    )
                )}

            </div>

        </div>
    );
};

export default TripDetail;