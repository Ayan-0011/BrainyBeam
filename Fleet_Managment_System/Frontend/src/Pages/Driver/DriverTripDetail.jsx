import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getMyTrips, updateTripStatus } from "../../Service/TripService";
import { getFuelByTrip } from "../../Service/FuelService";
import Modal from "../../Components/Modal/Modal";
import FuelForm from "../../Components/Form/FuelForm";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Circle, Fuel, Lock, Play, Truck } from "lucide-react";
import "./Trip.css";

const STEPS = [ "scheduled", "in-transit", "delivered", "closed"];

const STEP_LABELS = {
    scheduled: "Scheduled",
    "in-transit": "In Transit",
    delivered: "Delivered",
    closed: "Closed",
};

const nextActionMap = {
    scheduled: {
        label: "Start Trip",
        next: "in-transit",
        icon: Play,
        message: "Ready to start your trip?",
    },

    "in-transit": {
        label: "Mark Delivered",
        next: "delivered",
        icon: CheckCircle2,
        message: "Have you reached the destination?",
    },

    delivered: {
        label: "Close Trip",
        next: "closed",
        icon: Lock,
        message: "Fuel details are added. You can close the trip.",
    },
};

const DriverTripDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [trip, setTrip] = useState(location.state?.trip || null);
    const [fuelLogs, setFuelLogs] = useState([]);
    const [loading, setLoading] = useState(!location.state?.trip);
    const [updating, setUpdating] = useState(false);
    const [fuelModalOpen, setFuelModalOpen] = useState(false);

    // -------------------------------
    // Get trip
    // -------------------------------

    const fetchTrip = async () => {
        try {
            const res = await getMyTrips();
            const found = (res.trips || []).find( (item) => item._id === id );
            setTrip(found || null);
            return found;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    // -------------------------------
    // Get fuel logs
    // -------------------------------

    const loadFuelLogs = async () => {
        try {
            const res = await getFuelByTrip(id);
            setFuelLogs(res.fuelLogs || []);
        } catch (error) {
            setFuelLogs([]);
        }
    };

    // -------------------------------
    // Initial load
    // -------------------------------

    useEffect(() => {
        const loadData = async () => {
            if (!location.state?.trip) {
                setLoading(true);
                await fetchTrip();
                setLoading(false);
            }
            await loadFuelLogs();
        };
        loadData();
    }, [id]);

    // -------------------------------
    // Change status
    // -------------------------------

    const handleStatusChange = async (nextStatus) => {
        const result = await Swal.fire({
            title: "Change Trip Status?",
            text: `Trip will be marked as ${STEP_LABELS[nextStatus]}.`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Continue",
            cancelButtonText: "Cancel",
            reverseButtons: true,
            customClass: {
                confirmButton: "trip-confirm-btn",
                cancelButton: "trip-cancel-btn",
            },

            buttonsStyling: false,
        });

        if (!result.isConfirmed) return;
        setUpdating(true);

        try {
            const res = await updateTripStatus(id, nextStatus);
            toast.success(res.message);
            await fetchTrip();
            await loadFuelLogs();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    "Something went wrong"
            );
        } finally {
            setUpdating(false);
        }
    };

    // -------------------------------
    // Loading
    // -------------------------------

    if (loading) {
        return (
            <div className="driver-trip-page">
                <div className="trip-loading">
                    <div className="trip-spinner"></div>
                    <p>Loading trip...</p>
                </div>
            </div>
        );
    }

    // -------------------------------
    // Not found
    // -------------------------------

    if (!trip) {
        return (
            <div className="driver-trip-page">
                <div className="trip-not-found">
                    <h3>Trip Not Found</h3>
                    <button
                        onClick={() =>
                            navigate("/driver/trips")
                        }>
                        <ArrowLeft size={16} />
                        Back to My Trips
                    </button>
                </div>
            </div>
        );
    }

    // -------------------------------
    // Values
    // -------------------------------

    const currentStep = STEPS.indexOf(trip.tripStatus);
    const action = nextActionMap[trip.tripStatus];
    const ActionIcon = action?.icon;
    const needsFuel =
        trip.tripStatus === "delivered" &&
        fuelLogs.length === 0;
    const vehicleNumber =
        trip.assignedVehicle?.registrationNumber ||
        trip.vehicleNumber ||
        "-";
    const vehicleImage =
        trip.assignedVehicle?.vehicleImage;
    const scheduledDate = trip.scheduledDeparture
        ? new Date(trip.scheduledDeparture)
        : null;
    const formattedDate = scheduledDate
        ? scheduledDate.toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
          })
        : "-";

    const formattedTime = scheduledDate
        ? scheduledDate.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
          })
        : "-";

    return (
        <div className="driver-trip-page">

            {/* =====================================
                HEADER
            ===================================== */}

            <div className="trip-header">

                <button
                    className="trip-back"
                    onClick={() =>
                        navigate("/driver/trips")
                    }
                >
                    <ArrowLeft size={18} />
                </button>

                <div>
                    <h1>Trip Details</h1>
                    <p>Manage your current trip</p>
                </div>

            </div>


            {/* =====================================
                STATUS
            ===================================== */}

            <section className="trip-status-section">

            <section className="vehicle-mini-card">

                <div className="vehicle-image">

                    {vehicleImage ? (
                        <img
                            src={vehicleImage}
                            alt={vehicleNumber}
                        />
                    ) : (
                        <Truck size={25} />
                    )}

                </div>

                <div className="vehicle-details">

                    <span>ASSIGNED VEHICLE</span>

                    <strong>
                        {vehicleNumber}
                    </strong>

                </div>

            </section>
                <div
                    className={`big-status ${trip.tripStatus}`}
                >
                    <span></span>
                    {STEP_LABELS[trip.tripStatus]}
                </div>

            </section>


            {/* =====================================
                ROUTE
            ===================================== */}

            <section className="trip-route-box">

                <div className="route-location">

                    <span>FROM</span>

                    <h2>
                        {trip.fromLocation || "-"}
                    </h2>

                </div>


                <div className="route-arrow">
                    <div></div>
                    <ArrowRight size={18} />
                    <div></div>
                </div>


                <div className="route-location destination">

                    <span>TO</span>

                    <h2>
                        {trip.toLocation || "-"}
                    </h2>

                </div>

            </section>


            {/* =====================================
                SCHEDULE
            ===================================== */}

            <div className="trip-schedule">

                <div>
                    <span>DEPARTURE DATE</span>
                    <strong>{formattedDate}</strong>
                </div>

                <div>
                    <span>DEPARTURE TIME</span>
                    <strong>{formattedTime}</strong>
                </div>

            </div>


            {/* =====================================
                PROGRESS
            ===================================== */}

            <section className="trip-progress-card">

                <div className="section-heading">
                    <h3>Trip Progress</h3>
                    <span>
                        {currentStep + 1}/{STEPS.length}
                    </span>
                </div>


                <div className="progress-wrapper">

                    {STEPS.map((step, index) => {

                        const completed =
                            index < currentStep;

                        const current =
                            index === currentStep;

                        return (
                            <div
                                className="progress-item"
                                key={step}
                            >

                                {index > 0 && (
                                    <div
                                        className={`progress-line ${
                                            index <= currentStep
                                                ? "active"
                                                : ""
                                        }`}
                                    />
                                )}


                                <div
                                    className={`progress-circle ${
                                        completed
                                            ? "completed"
                                            : current
                                            ? "current"
                                            : ""
                                    }`}
                                >
                                    {completed ? (
                                        <Check size={14} />
                                    ) : current ? (
                                        <span></span>
                                    ) : (
                                        <Circle size={8} />
                                    )}
                                </div>

                                <p>
                                    {STEP_LABELS[step]}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </section>


            {/* =====================================
                NEXT ACTION
            ===================================== */}

            {trip.tripStatus !== "closed" ? (

                <section className="next-action-card">

                    <span className="action-label">
                        NEXT ACTION
                    </span>


                    {needsFuel ? (

                        <>
                            <h2>Add Fuel Details</h2>

                            <p>
                                Add fuel information before
                                closing this trip.
                            </p>

                            <button
                                className="main-action fuel-action"
                                onClick={() =>
                                    setFuelModalOpen(true)
                                }
                            >
                                <Fuel size={18} />
                                Add Fuel Details
                            </button>
                        </>

                    ) : (

                        <>
                            <h2>{action.label}</h2>

                            <p>
                                {action.message}
                            </p>

                            <button
                                className="main-action"
                                onClick={() =>
                                    handleStatusChange(
                                        action.next
                                    )
                                }
                                disabled={updating}
                            >
                                {ActionIcon && (
                                    <ActionIcon size={18} />
                                )}

                                {updating
                                    ? "Updating..."
                                    : action.label}

                                {!updating && (
                                    <ArrowRight size={17} />
                                )}
                            </button>
                        </>

                    )}

                </section>

            ) : (

                <section className="trip-completed">

                    <div className="completed-icon">
                        <CheckCircle2 size={25} />
                    </div>

                    <h2>Trip Completed</h2>

                    <p>
                        This trip has been successfully closed.
                    </p>

                </section>

            )}


            {/* =====================================
                SMALL VEHICLE INFO
            ===================================== */}




            {/* =====================================
                FUEL MODAL
            ===================================== */}

            <Modal
                isOpen={fuelModalOpen}
                onClose={() =>
                    setFuelModalOpen(false)
                }
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

