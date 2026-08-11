import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTrips, getTrips } from "../../Service/TripService";
import { Route, Users, AlertTriangle, Truck, PieChart, BarChart3, CalendarClock,} from "lucide-react";
import TripStatusChart from "../../Components/Chart/Tripstatuschart";
import Chart from "../../Components/Chart/Chart";
import { getDriver } from "../../Service/DriverService";
import { getVehicles } from "../../Service/VehicleService";
import './Dashborad.css'


// a vehicle is flagged if service/insurance/permit falls due within this window
const ATTENTION_WINDOW_DAYS = 7;

const statusClassMap = {
    scheduled: "statusScheduled",
    "in-transit": "statusInTransit",
    delivered: "statusDelivered",
    closed: "statusClosed",
};

const getAttentionReasons = (vehicle) => {
    const now = new Date();
    const soon = new Date(now.getTime() + ATTENTION_WINDOW_DAYS * 24 * 60 * 60 * 1000);
    const reasons = [];

    if (vehicle.status === "Maintenance") {
        reasons.push({ label: "In Maintenance", cls: "reasonMaintenance" });
    }
    if (vehicle.serviceDueDate && new Date(vehicle.serviceDueDate) <= soon) {
        reasons.push({ label: "Service Due", cls: "reasonService" });
    }
    if (vehicle.insuranceExpiry && new Date(vehicle.insuranceExpiry) <= soon) {
        reasons.push({ label: "Insurance Expiring", cls: "reasonInsurance" });
    }
    if (vehicle.PermitExpiry && new Date(vehicle.PermitExpiry) <= soon) {
        reasons.push({ label: "Permit Expiring", cls: "reasonPermit" });
    }
    return reasons;
};

const Dispatcher_dash = () => {

    const navigate = useNavigate();

    const [trips, setTrips] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            setLoading(true);
            const [tripRes, driverRes, vehicleRes] = await Promise.all([
                getTrips(),
                getDriver(),
                getVehicles(),
            ]);
            setTrips(tripRes.trips || []);
            console.log(tripRes);
            
            setDrivers(driverRes.drivers || driverRes.driver || []);
            setVehicles(vehicleRes.vehicle || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const todaysTrips = trips.filter((t) => {
        if (!t.scheduledDeparture) return false;
        return new Date(t.scheduledDeparture).toDateString() === new Date().toDateString();
    });

    const availableDrivers = drivers.filter((d) => d.availability === "available");

    const vehiclesNeedingAttention = vehicles
        .map((v) => ({ ...v, reasons: getAttentionReasons(v) }))
        .filter((v) => v.reasons.length > 0);

    if (loading) {
        return <div className="loadingState">Loading dashboard...</div>;
    }

    return (
        <div className="dashWrapper">

            <div className="dashHeader">
                <h2 className="title">Dispatcher Dashboard</h2>
                <p className="subtitle">Overview of today's operations.</p>
            </div>

            {/* Stat cards */}
            <div className="statGrid">
                <div className="statCard">
                    <div className="statIconBox blue">
                        <Route size={20} />
                    </div>
                    <div>
                        <p className="statValue">{todaysTrips.length}</p>
                        <p className="statLabel">Trips Today</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox green">
                        <Users size={20} />
                    </div>
                    <div>
                        <p className="statValue">{availableDrivers.length}</p>
                        <p className="statLabel">Available Drivers</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox amber">
                        <AlertTriangle size={20} />
                    </div>
                    <div>
                        <p className="statValue">{vehiclesNeedingAttention.length}</p>
                        <p className="statLabel">Vehicles Needing Attention</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox red">
                        <Truck size={20} />
                    </div>
                    <div>
                        <p className="statValue">{trips.filter(t => t.tripStatus === "in-transit").length}</p>
                        <p className="statLabel">Trips In Transit</p>
                    </div>
                </div>
            </div>

            {/* Today's trips + available drivers */}
            <div className="dashTwoCol">

                <div className="dashCard">
                    <div className="dashCardHeader">
                        <h3><CalendarClock size={16} /> Today's Trips</h3>
                        <span className="dashCardCount">{todaysTrips.length}</span>
                    </div>

                    {todaysTrips.length > 0 ? (
                        <table className="miniTable">
                            <thead>
                                <tr>
                                    <th>Route</th>
                                    <th>Driver</th>
                                    <th>Vehicle</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todaysTrips.map((trip) => (
                                    <tr
                                        key={trip._id}
                                        onClick={() => navigate(`/dispatcher/trips/${trip._id}`)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <td>{trip.fromLocation} → {trip.toLocation}</td>
                                        <td>{trip.driverName || "-"}</td>
                                        <td>{trip.vehicleNumber || "-"}</td>
                                        <td>
                                            <span className={`statusBadge ${statusClassMap[trip.tripStatus] || ""}`}>
                                                {trip.tripStatus?.toUpperCase()}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="miniEmptyState">No trips scheduled for today.</p>
                    )}
                </div>

                <div className="dashCard">
                    <div className="dashCardHeader">
                        <h3><Users size={16} /> Available Drivers</h3>
                        <span className="dashCardCount">{availableDrivers.length}</span>
                    </div>

                    {availableDrivers.length > 0 ? (
                        <div className="driverList">
                            {availableDrivers.map((driver) => {
                                const name = driver.user?.name || driver.name || "Unknown";
                                return (
                                    <div className="driverItem" key={driver._id}>
                                        <div className="driverAvatar">
                                            {name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="driverName">{name}</p>
                                            <p className="driverMeta">{driver.licenseNumber || "Available"}</p>
                                        </div>
                                        <span className="availableDot" />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="miniEmptyState">No drivers available right now.</p>
                    )}
                </div>

            </div>

            {/* Vehicles needing attention */}
            <div className="dashCard">
                <div className="dashCardHeader">
                    <h3><AlertTriangle size={16} /> Vehicles Needing Attention</h3>
                    <span className="dashCardCount">{vehiclesNeedingAttention.length}</span>
                </div>

                {vehiclesNeedingAttention.length > 0 ? (
                    <table className="miniTable">
                        <thead>
                            <tr>
                                <th>Registration #</th>
                                <th>Brand</th>
                                <th>Reasons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehiclesNeedingAttention.map((v) => (
                                <tr key={v._id}>
                                    <td>{v.registrationNumber}</td>
                                    <td>{v.brand}</td>
                                    <td>
                                        {v.reasons.map((r, idx) => (
                                            <span key={idx} className={`reasonBadge ${r.cls}`}>
                                                {r.label}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="miniEmptyState">All vehicles are in good standing.</p>
                )}
            </div>

            {/* Charts */}
            <div className="chartGrid">

                <div className="dashCard">
                    <div className="dashCardHeader">
                        <h3><PieChart size={16} /> Trip Status Overview</h3>
                    </div>
                    <div className="chartBox">
                        <TripStatusChart trips={trips} />
                    </div>
                </div>

                <div className="dashCard">
                    <div className="dashCardHeader">
                        <h3><BarChart3 size={16} /> Trips This Week</h3>
                    </div>
                    <div className="chartBox">
                        <Chart trips={trips} />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dispatcher_dash;