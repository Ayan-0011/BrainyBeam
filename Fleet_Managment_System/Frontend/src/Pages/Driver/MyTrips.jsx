import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTrips } from "../../Service/TripService";
import { Search } from "lucide-react";
import "./Trip.css";

const statusClassMap = {
    scheduled: "statusScheduled",
    "in-transit": "statusInTransit",
    delivered: "statusDelivered",
    closed: "statusClosed",
};

const MyTrips = () => {

    const navigate = useNavigate();

    const [trips, setTrips] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const loadTrips = async () => {
        try {
            setLoading(true);
            const res = await getMyTrips();
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

    const filteredTrips = trips.filter((t) =>
        t.fromLocation?.toLowerCase().includes(search.toLowerCase()) ||
        t.toLocation?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="wrapper">

            <div className="header">
                <div>
                    <h2 className="title">My Trips</h2>
                    <p className="subtitle">Trips assigned to you.</p>
                </div>
            </div>

            <div className="toolbar">
                <div className="searchWrap">
                    <span className="searchIcon">
                        <Search size={16} />
                    </span>
                    <input type="text"  className="searchInput" placeholder="Search by route..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className="tableCard">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Cargo</th>
                            <th>Weight</th>
                            <th>Vehicle</th>
                            <th>Departure</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="emptyState">
                                    Loading trips...
                                </td>
                            </tr>
                        ) : filteredTrips.length > 0 ? (
                            filteredTrips.reverse().map((trip) => (
                                <tr key={trip._id}
                                    onClick={() => navigate(`/driver/trips/${trip._id}`, { state: { trip } })} >
                                    <td className="routeCell">
                                        {trip.fromLocation} → {trip.toLocation}
                                    </td>
                                    <td>{trip.cargoDescription}</td>
                                    <td>{trip.cargoWeight} Ton</td>
                                    <td>{trip.assignedVehicle?.registrationNumber || "-"}</td>
                                    <td>
                                        {trip.scheduledDeparture
                                            ? new Date(trip.scheduledDeparture).toLocaleString()
                                            : "-"}
                                    </td>
                                    <td>
                                        <span
                                            className={`statusBadge ${statusClassMap[trip.tripStatus] || ""}`}
                                        >
                                            {trip.tripStatus?.toUpperCase()}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="emptyState">
                                    No trips assigned to you.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyTrips;