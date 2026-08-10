import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getMyTrips, updateTripStatus } from "../../Service/TripService";
import { getFuelByTrip } from "../../Service/FuelService";
import Modal from "../../Components/Modal/Modal";
import FuelForm from "../../Components/Form/FuelForm";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { ArrowLeft, ArrowRight, Package, User, CalendarClock, Truck, Fuel, PlayCircle, CheckCircle2, Lock } from "lucide-react";
import "./Trip.css";

const statusClassMap = {
    scheduled: "statusScheduled",
    "in-transit": "statusInTransit",
    delivered: "statusDelivered",
    closed: "statusClosed",
};

// what the driver's next action is, given the current status
const nextActionMap = {
    scheduled: { label: "Start Trip", next: "in-transit", icon: PlayCircle },
    "in-transit": { label: "Mark Delivered", next: "delivered", icon: CheckCircle2 },
    delivered: { label: "Close Trip", next: "closed", icon: Lock },
};

const DriverTripDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // came from MyTrips row click -> trip data already available, no extra call needed
    const [trip, setTrip] = useState(location.state?.trip || null);
    const [fuelLogs, setFuelLogs] = useState([]);
    const [loading, setLoading] = useState(!location.state?.trip);
    const [updating, setUpdating] = useState(false);
    const [fuelModalOpen, setFuelModalOpen] = useState(false);

    // fallback for direct URL open / refresh, where state isn't available.
    // driver can't call getSingleTrip (admin/dispatcher only), so we reuse
    // getMyTrips and pick the matching trip out of the driver's own list.
    const loadTripFallback = async () => {
        try {
            setLoading(true);
            const res = await getMyTrips();
            const found = (res.trips || []).find((t) => t._id === id);
            setTrip(found || null);
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
        if (!location.state?.trip) {
            loadTripFallback();
        }
        loadFuelLogs();
    }, [id]);

    const handleStatusChange = async (nextStatus) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "my-confirm-btn",
                cancelButton: "my-cancel-btn"
            },
            buttonsStyling: false
        });

        const result = await swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: `Trip status will change to "${nextStatus}".`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, confirm",
            cancelButtonText: "Cancel",
            reverseButtons: true
        });

        if (!result.isConfirmed) return;

        setUpdating(true);
        try {
            const res = await updateTripStatus(id, nextStatus);
            toast.success(res.message);
            // refresh from the driver's own trip list, same restriction as initial load
            await loadTripFallback();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return <div className="loadingState">Loading trip details...</div>;
    }

    if (!trip) {
        return <div className="loadingState">Trip not found.</div>;
    }

    const action = nextActionMap[trip.tripStatus];
    const ActionIcon = action?.icon;
    // backend requires a fuel log before a "delivered" trip can be closed
    const needsFuelBeforeClose = trip.tripStatus === "delivered" && fuelLogs.length === 0;

    return (
        <div className="wrapper">

            <div className="detailHeader">
                <button className="backBtn" onClick={() => navigate("/driver/trips")}>
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
                    <ArrowRight size={22} />
                </div>
                <div className="routePoint routePointEnd">
                    <p className="routePointLabel">To</p>
                    <p className="routePointValue">{trip.toLocation}</p>
                </div>
            </div>

            {/* Driver action area */}
            {trip.tripStatus !== "closed" && (
                <div className="detailCard">
                    <h3><Truck size={15} /> Trip Action</h3>

                    {needsFuelBeforeClose ? (
                        <>
                            <p className="fuelEmptyState" style={{ marginBottom: 12 }}>
                                Add fuel details before closing this trip.
                            </p>
                            <button
                                className="addBtn"
                                onClick={() => setFuelModalOpen(true)}
                            >
                                <Fuel size={16} />
                                Add Fuel Details
                            </button>
                        </>
                    ) : (
                        action && (
                            <button
                                className="addBtn"
                                onClick={() => handleStatusChange(action.next)}
                                disabled={updating}
                            >
                                <ActionIcon size={16} />
                                {updating ? "Updating..." : action.label}
                            </button>
                        )
                    )}
                </div>
            )}

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
                        <span className="detailLabel">Vehicle</span>
                        <span className="detailValue">
                            {trip.assignedVehicle?.registrationNumber || trip.vehicleNumber || "-"}
                        </span>
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

                {fuelLogs.length > 0 && (
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
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <Modal
                isOpen={fuelModalOpen}
                onClose={() => setFuelModalOpen(false)}
                title="Add Fuel Details"
            >
                <FuelForm
                    tripId={trip._id}
                    onSuccess={() => {
                        loadFuelLogs();
                        setFuelModalOpen(false);
                    }}
                />
            </Modal>

        </div>
    );
};

export default DriverTripDetail;