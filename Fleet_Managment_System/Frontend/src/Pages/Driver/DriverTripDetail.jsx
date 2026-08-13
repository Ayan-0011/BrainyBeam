import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getMyTrips, updateTripStatus } from "../../Service/TripService";
import { getFuelByTrip } from "../../Service/FuelService";
import Modal from "../../Components/Modal/Modal";
import FuelForm from "../../Components/Form/FuelForm";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
    ArrowLeft,
    ArrowRight,
    Truck,
    Fuel,
    PlayCircle,
    CheckCircle2,
    Lock,
    ClipboardCheck,
    Navigation,
} from "lucide-react";
import "./Trip.css";

const STEPS = ["scheduled", "in-transit", "delivered", "closed"];

const STEP_LABELS = {
    scheduled: "Scheduled",
    "in-transit": "In Transit",
    delivered: "Delivered",
    closed: "Closed",
};

// what the driver's next action is, given the current status
const nextActionMap = {
    scheduled: {
        label: "Start Trip",
        next: "in-transit",
        icon: PlayCircle,
        note: "Once you're on the road, mark this trip as started.",
    },
    "in-transit": {
        label: "Mark Delivered",
        next: "delivered",
        icon: CheckCircle2,
        note: "Reached the destination? Confirm delivery to move ahead.",
    },
    delivered: {
        label: "Close Trip",
        next: "closed",
        icon: Lock,
        note: "Add fuel details, then close out this trip.",
    },
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

    const fetchTripFromList = async () => {
        try {
            const res = await getMyTrips();
            const found = (res.trips || []).find((t) => t._id === id);
            setTrip(found || null);
            return found;
        } catch (error) {
            console.log(error);
            return null;
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
        const init = async () => {
            if (!location.state?.trip) {
                setLoading(true);
                await fetchTripFromList();
                setLoading(false);
            }
            loadFuelLogs();
        };
        init();
        console.log(trip)
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
            // quiet refresh — only the stepper/action area re-renders, no full page reload
            await fetchTripFromList();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return <div className="dtLoadingState">Loading trip details...</div>;
    }

    if (!trip) {
        return <div className="dtLoadingState">Trip not found.</div>;
    }

    const currentStepIndex = STEPS.indexOf(trip.tripStatus);
    const action = nextActionMap[trip.tripStatus];
    const ActionIcon = action?.icon;
    // backend requires a fuel log before a "delivered" trip can be closed
    const needsFuelBeforeClose = trip.tripStatus === "delivered" && fuelLogs.length === 0;
    const vehicleNumber = trip.assignedVehicle?.registrationNumber || trip.vehicleNumber || "-";
    const vehicleImage = trip.assignedVehicle?.vehicleImage;
    const totalFuelCost = fuelLogs.reduce((sum, l) => sum + (l.cost || 0), 0);
    const totalLiters = fuelLogs.reduce((sum, l) => sum + (l.litersFilled || 0), 0);

    return (
        <div className="dtWrapper">

            <div className="dtHeader">
                <button className="dtBackBtn" onClick={() => navigate("/driver/trips")}>
                    <ArrowLeft size={18} />
                </button>
                <div className="dtHeaderText">
                    <h2>Your Trip</h2>
                    <p>Keep it updated as you go</p>
                </div>
            </div>

            {/* Hero route card */}
            <div className="dtHero">
                <span className="dtHeroStatus">
                    <span className="dtHeroStatusDot" />
                    {STEP_LABELS[trip.tripStatus]}
                </span>

                <div className="dtRoute">
                    <div className="dtRoutePoint">
                        <p className="dtRouteLabel">From</p>
                        <p className="dtRouteValue">{trip.fromLocation}</p>
                    </div>
                    <div className="dtRouteLine">
                        <ArrowRight size={18} />
                    </div>
                    <div className="dtRoutePoint end">
                        <p className="dtRouteLabel">To</p>
                        <p className="dtRouteValue">{trip.toLocation}</p>
                    </div>
                </div>
            </div>

            {/* Desktop: left = vehicle + schedule, right = progress + action (both drive the trip forward). Mobile: stacks in this order automatically. */}
            <div className="dtGrid">

                <div className="dtColLeft">

                    {/* Vehicle info — driver only needs to know what they're driving */}
                    <div className="dtCard">
                        <div className="dtCardTitle"><Truck size={13} /> Your Vehicle</div>
                        <div className="dtVehicleRow">
                            <div className="dtVehicleIcon">
                             <img src={vehicleImage} alt="vehicle img" className="" />
                            </div>
                            <div>
                                <p className="dtVehicleNumber">{vehicleNumber}</p>
                                <p className="dtVehicleSub">Assigned for this trip</p>
                            </div>
                        </div>
                    </div>

                    {/* Schedule info */}
                    <div className="dtCard">
                        <div className="dtCardTitle"><Navigation size={13} /> Schedule</div>
                        <div className="dtScheduleRow">
                            <div className="dtScheduleIcon">
                            </div>
                            <div>
                                <p className="dtScheduleValue">
                                    {trip.scheduledDeparture
                                        ? new Date(trip.scheduledDeparture).toLocaleString(undefined, {
                                            weekday: "short", day: "numeric", month: "short",
                                            hour: "2-digit", minute: "2-digit",
                                        })
                                        : "-"}
                                </p>
                                <p className="dtVehicleSub">Scheduled departure</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="dtColRight">

                    {/* Progress stepper */}
                    <div className="dtCard">
                        <div className="dtCardTitle"><ClipboardCheck size={13} /> Trip Progress</div>
                        <div className="dtStepper">
                            {STEPS.map((step, idx) => (
                                <div
                                    className={`dtStep ${idx < currentStepIndex ? "done" : ""} ${idx === currentStepIndex ? "current" : ""}`}
                                    key={step}
                                >
                                    <div className="dtStepLine" />
                                    <div className="dtStepDot">
                                        {idx + 1}
                                    </div>
                                    <span className="dtStepLabel">{STEP_LABELS[step]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Primary action */}
                    {trip.tripStatus !== "closed" ? (
                        <div className="dtActionCard">
                            <div className="dtCardTitle"><PlayCircle size={13} /> Next Step</div>

                            {needsFuelBeforeClose ? (
                                <>
                                    <p className="dtActionNote">
                                        Add fuel details before you can close this trip.
                                    </p>
                                    <button
                                        className="dtActionBtn secondary"
                                        onClick={() => setFuelModalOpen(true)}
                                    >
                                        <Fuel size={17} />
                                        Add Fuel Details
                                    </button>
                                </>
                            ) : (
                                action && (
                                    <>
                                        <p className="dtActionNote">{action.note}</p>
                                        <button
                                            className="dtActionBtn"
                                            onClick={() => handleStatusChange(action.next)}
                                            disabled={updating}
                                        >
                                            <ActionIcon size={17} />
                                            {updating ? "Updating..." : action.label}
                                        </button>
                                    </>
                                )
                            )}
                        </div>
                    ) : (
                        <div className="dtCard">
                            <div className="dtClosedNote">
                                <ClipboardCheck size={18} color="#15803d" />
                                This trip is complete. Great job!
                            </div>
                        </div>
                    )}

                </div>

            </div>

            {/* Fuel summary — full width row of stats, reads better than a squeezed column */}
            {fuelLogs.length > 0 && (
                <div className="dtCard">
                    <div className="dtCardTitle"><Fuel size={13} /> Fuel Filled</div>
                    <div className="dtFuelGrid">
                        <div className="dtFuelStat">
                            <p className="dtFuelStatValue">{totalLiters} L</p>
                            <p className="dtFuelStatLabel">Liters</p>
                        </div>
                        <div className="dtFuelStat">
                            <p className="dtFuelStatValue">₹{totalFuelCost}</p>
                            <p className="dtFuelStatLabel">Cost</p>
                        </div>
                        <div className="dtFuelStat">
                            <p className="dtFuelStatValue">{fuelLogs[fuelLogs.length - 1]?.odometerReading}</p>
                            <p className="dtFuelStatLabel">Odometer</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Activity log — full width, reads better as a single wide timeline */}
            {trip.statusHistory?.length > 0 && (
                <div className="dtCard">
                    <div className="dtCardTitle"><ClipboardCheck size={13} /> Activity</div>
                    {trip.statusHistory.map((entry, idx) => (
                        <div className="dtActivityItem" key={idx}>
                            <span className="dtActivityDot" />
                            <div>
                                <p className="dtActivityLabel">{entry.status}</p>
                                <p className="dtActivityDate">
                                    {entry.timestamp
                                        ? new Date(entry.timestamp).toLocaleString()
                                        : "-"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

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