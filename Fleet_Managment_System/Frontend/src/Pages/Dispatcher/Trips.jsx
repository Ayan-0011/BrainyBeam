import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../Service/TripService";
import Modal from "../../Components/Modal/Modal";
import TripForm from "../../Components/Form/TripForm";
import { Plus, Search } from "lucide-react";
import "./Trip.css";

const statusClassMap = {
    scheduled: "statusScheduled",
    "in-transit": "statusInTransit",
    delivered: "statusDelivered",
    closed: "statusClosed",
};

const Trips = () => {

    const navigate = useNavigate();

    const [trips, setTrips] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadTrips = async () => {
        try {
            setLoading(true);
            const res = await getTrips();
            console.log(res);
            
            setTrips(res.trips || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTrips();
    }, []);

    const filteredTrips = trips.filter((t) => {
        const matchesSearch =
            t.fromLocation?.toLowerCase().includes(search.toLowerCase()) ||
            t.toLocation?.toLowerCase().includes(search.toLowerCase()) ||
            t.driverName?.toLowerCase().includes(search.toLowerCase()) ||
            t.vehicleNumber?.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "all" || t.tripStatus === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="wrapper">

            <div className="header">
                <div>
                    <h2 className="title">Trips</h2>
                    <p className="subtitle">Manage and track every trip in the fleet.</p>
                </div>

                <button onClick={() => setOpenModal(true)} className="addBtn">
                    <Plus size={16} />
                    Create Trip
                </button>
            </div>

            <div className="toolbar">
                <div className="searchWrap">
                    <span className="searchIcon">
                        <Search size={16} />
                    </span>
                    <input  type="text" className="searchInput" placeholder="Search by route, driver, vehicle..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <select
                    className="filterSelect"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All Status</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="in-transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                    <option value="closed">Closed</option>
                </select>
            </div>

            <div className="tableCard">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Cargo</th>
                            <th>Weight</th>
                            <th>Driver</th>
                            <th>Vehicle</th>
                            <th>Departure</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="7" className="emptyState">
                                    Loading trips...
                                </td>
                            </tr>
                        ) : filteredTrips.length > 0 ? (
                            filteredTrips.map((trip) => (
                                <tr key={trip._id}
                                    onClick={() => navigate(`/dispatcher/trips/${trip._id}`)} >
                                    <td className="routeCell">
                                        {trip.fromLocation} → {trip.toLocation}
                                    </td>
                                    <td>{trip.cargoDescription}</td>
                                    <td>{trip.cargoWeight} Ton</td>
                                    <td>
                                        <img src={trip.driverImage} alt="" className="miniVehicleImage" />
                                        {trip.driverName || "-"}
                                    </td>
                                    <td>
                                        <img src={trip.vehicleImage} alt="" className="miniVehicleImage" />
                                        {trip.vehicleNumber || "-"}</td>
                                    <td>
                                        {trip.scheduledDeparture ? new Date(trip.scheduledDeparture).toLocaleString() : "-"}
                                    </td>
                                    <td>
                                        <span
                                            className={`statusBadge ${statusClassMap[trip.tripStatus] || ""}`}>
                                            {trip.tripStatus?.toUpperCase()}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="emptyState">
                                    No trips found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Create Trip"
            >
                <TripForm
                    onSuccess={() => {
                        loadTrips();
                        setOpenModal(false);
                    }}
                />
            </Modal>

        </div>
    );
};

export default Trips;