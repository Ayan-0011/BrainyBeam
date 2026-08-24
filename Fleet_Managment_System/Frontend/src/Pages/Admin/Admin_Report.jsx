import { useEffect, useState } from "react";

import { Truck, IndianRupee, Users, Wrench, BarChart3 } from "lucide-react";
import "./AdminReport.css";
import { getTrips } from "../../Service/TripService";
import { getVehicles } from "../../Service/VehicleService";
import { getDriver } from "../../Service/DriverService";
import { getAllmaintenance } from "../../Service/Maintenance";
import { getAllFuelLogs } from "../../Service/FuelService";

const Admin_Report = () => {
    const [trips, setTrips] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [maintenance, setMaintenance] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            setLoading(true);
            const [tripRes, vehicleRes, driverRes, maintRes, fuelRes] = await Promise.all([
                getTrips(),
                getVehicles(),
                getDriver(),
                getAllmaintenance(),
                getAllFuelLogs(),
            ]);
            setTrips(tripRes.trips || []);
            setVehicles(vehicleRes.vehicle || []);
            setDrivers(driverRes.drivers || driverRes.driver || []);
            setMaintenance(maintRes.maintenance || []);
            setFuel(fuelRes.Fuellog || []);
            // console.log(fuelRes)
            // console.log(tripRes)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // ---------- 1. FLEET UTILIZATION (trips per vehicle) ----------
    const utilizationData = vehicles.map((v) => {
        const tripCount = trips.filter((t) => t.vehicleNumber === v.registrationNumber).length;
        return {
            vehicleId: v._id,
            registrationNumber: v.registrationNumber,
            tripCount,
        };
    }).sort((a, b) => b.tripCount - a.tripCount);

    const avgUtilization = vehicles.length > 0 ? (trips.length / vehicles.length).toFixed(2) : 0;

    // ---------- 2. COST PER TRIP (fuel + prorated maintenance) ----------
    // fuel cost per vehicle
    const fuelCostByVehicle = fuel.reduce((acc, f) => {
        const vId =  f.vehicle;
        acc[vId] = (acc[vId] || 0) + (Number(f.cost) || 0);
        return acc;
    }, {});

    //console.log(fuelCostByVehicle)

    // maintenance cost per vehicle
    const maintCostByVehicle = maintenance.reduce((acc, m) => {
        const vId = m.vehicle?._id || m.vehicle;
        acc[vId] = (acc[vId] || 0) + (Number(m.cost) || 0);
        return acc;
    }, {});

    // trip count per vehicle (reuse)
    const tripCountByVehicle = trips.reduce((acc, t) => {
        const vehicleNumber = t.vehicleNumber;
        if (vehicleNumber) {
            acc[vehicleNumber] = (acc[vehicleNumber] || 0) + 1;
        }
        return acc;
    }, {});

    const costPerTripData = vehicles.map((v) => {
        const totalFuel = fuelCostByVehicle[v.registrationNumber] || 0;
        const totalMaint = maintCostByVehicle[v._id] || 0;
        const tripCount = tripCountByVehicle[v.registrationNumber] || 0;
        const costPerTrip = tripCount > 0 ? (totalFuel + totalMaint) / tripCount : 0;

        return {
            vehicleId: v._id,
            registrationNumber: v.registrationNumber,
            totalFuel,
            totalMaint,
            tripCount,
            costPerTrip,
        };
    });

    const totalFuelSpend = fuel.reduce((sum, f) => sum + (Number(f.cost) || 0), 0);
    console.log(totalFuelSpend)
    
    const totalMaintSpend = maintenance.reduce((sum, m) => sum + (Number(m.cost) || 0), 0);
    const avgCostPerTrip = trips.length > 0
        ? ((totalFuelSpend + totalMaintSpend) / trips.length).toFixed(0) : 0;

    // ---------- 3. DRIVER PERFORMANCE (trips completed only, on-time % pending) ----------
    const driverPerformance = drivers.map((d) => {
        const driverTrips = trips.filter((t) => {
            const driverId = t.assignedDriver?._id || t.assignedDriver;
            return driverId === d._id;
        });

        const completedTrips = driverTrips.filter(
            (t) => t.tripStatus === "delivered" || t.tripStatus === "closed"
        ).length;

        return {
            driverId: d._id,
            name: d.user?.name || d.name,
            totalTrips: driverTrips.length,
            completedTrips,
        };
    }).sort((a, b) => b.completedTrips - a.completedTrips);

    // ---------- 4. MAINTENANCE COST PER VEHICLE ----------
    const maintenanceByVehicle = vehicles.map((v) => {
        const records = maintenance.filter((m) => (m.vehicle?._id || m.vehicle) === v._id);
        const totalCost = records.reduce((sum, r) => sum + (Number(r.cost) || 0), 0);

        return {
            vehicleId: v._id,
            registrationNumber: v.registrationNumber,
            serviceCount: records.length,
            totalCost,
        };
    }).sort((a, b) => b.totalCost - a.totalCost);

    if (loading) {
        return <div className="loadingState">Loading reports...</div>;
    }

    return (
        <div className="reportWrapper">

            <div className="reportHeader">
                <h2 className="title">Admin Reports</h2>
                <p className="subtitle">Fleet performance overview.</p>
            </div>

            {/* Summary stat cards */}
            <div className="statGrid">
                <div className="statCard">
                    <div className="statIconBox blue">
                        <Truck size={20} />
                    </div>
                    <div>
                        <p className="statValue">{avgUtilization}</p>
                        <p className="statLabel">Avg Trips / Vehicle</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox green">
                        <IndianRupee size={20} />
                    </div>
                    <div>
                        <p className="statValue">₹{Number(avgCostPerTrip).toLocaleString("en-IN")}</p>
                        <p className="statLabel">Avg Cost / Trip</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox amber">
                        <Wrench size={20} />
                    </div>
                    <div>
                        <p className="statValue">₹{totalMaintSpend.toLocaleString("en-IN")}</p>
                        <p className="statLabel">Total Maintenance Spend</p>
                    </div>
                </div>

                <div className="statCard">
                    <div className="statIconBox red">
                        <Users size={20} />
                    </div>
                    <div>
                        <p className="statValue">{drivers.length}</p>
                        <p className="statLabel">Total Drivers</p>
                    </div>
                </div>
            </div>

            {/* Fleet Utilization */}
            <div className="dashCard">
                <div className="dashCardHeader">
                    <h3><BarChart3 size={16} /> Fleet Utilization (Trips per Vehicle)</h3>
                </div>

                {utilizationData.length > 0 ? (
                    <table className="miniTable">
                        <thead>
                            <tr>
                                <th>Registration #</th>
                                <th>Trips</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilizationData.map((v) => (
                                <tr key={v.vehicleId}>
                                    <td>{v.registrationNumber}</td>
                                    <td>{v.tripCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="miniEmptyState">No trip data available.</p>
                )}
            </div>

            {/* Cost per Trip */}
            <div className="dashCard">
                <div className="dashCardHeader">
                    <h3><IndianRupee size={16} /> Cost per Trip (Fuel + Maintenance)</h3>
                </div>

                {costPerTripData.length > 0 ? (
                    <table className="miniTable">
                        <thead>
                            <tr>
                                <th>Registration #</th>
                                <th>Fuel Cost</th>
                                <th>Maintenance Cost</th>
                                <th>Trips</th>
                                <th>Cost / Trip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {costPerTripData.map((v) => (
                                <tr key={v.vehicleId}>
                                    <td>{v.registrationNumber}</td>
                                    <td>₹{v.totalFuel.toLocaleString("en-IN")}</td>
                                    <td>₹{v.totalMaint.toLocaleString("en-IN")}</td>
                                    <td>{v.tripCount}</td>
                                    <td>₹{Math.round(v.costPerTrip).toLocaleString("en-IN")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="miniEmptyState">No cost data available.</p>
                )}
            </div>

            {/* Driver Performance */}
            <div className="dashCard">
                <div className="dashCardHeader">
                    <h3><Users size={16} /> Driver Performance</h3>
                </div>

                {driverPerformance.length > 0 ? (
                    <table className="miniTable">
                        <thead>
                            <tr>
                                <th>Driver</th>
                                <th>Total Trips</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {driverPerformance.map((d) => (
                                <tr key={d.driverId}>
                                    <td>{d.name}</td>
                                    <td>{d.totalTrips}</td>
                                    <td>{d.completedTrips}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="miniEmptyState">No driver data available.</p>
                )}
            </div>

            {/* Maintenance Cost per Vehicle */}
            <div className="dashCard">
                <div className="dashCardHeader">
                    <h3><Wrench size={16} /> Maintenance Cost per Vehicle</h3>
                </div>

                {maintenanceByVehicle.length > 0 ? (
                    <table className="miniTable">
                        <thead>
                            <tr>
                                <th>Registration #</th>
                                <th>Services</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenanceByVehicle.map((v) => (
                                <tr key={v.vehicleId}>
                                    <td>{v.registrationNumber}</td>
                                    <td>{v.serviceCount}</td>
                                    <td>₹{v.totalCost.toLocaleString("en-IN")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="miniEmptyState">No maintenance data available.</p>
                )}
            </div>

        </div>
    );
};

export default Admin_Report;