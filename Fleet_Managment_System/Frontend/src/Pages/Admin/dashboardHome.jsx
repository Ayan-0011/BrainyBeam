import { Truck, Users, Route, Wrench } from "lucide-react";
import { getVehicles } from "../../Service/VehicleService";
import { useEffect } from "react";
import { useState } from "react";
import { getDriver } from "../../Service/DriverService";


const DashboardHome = () => {

    const [Vehicle, setVehicle] = useState([]);
    const [driver, setDriver] = useState([]);

    const loadvehicle = async () => {
        const data = await getVehicles();
        setVehicle(data.vehicle);
    }

    const loadDriver = async () => {
        const data = await getDriver();
        setDriver(data.drivers);
    }

    useEffect(() => {
        loadvehicle();
        loadDriver()
    }, [])

    return (
        <div className="dashboard-home">

            {/* Welcome */}
            <div className="dashboard-header">
                <h1> Admin Dashbord</h1>
                <p>Manage your fleet efficiently from one place.</p>
            </div>

            {/* Summary Cards */}
            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <Truck size={35} color="#2563eb" />
                    <div>
                        <h2>{Vehicle.length}</h2>
                        <span>Total Vehicles</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <Users size={35} color="#16a34a" />
                    <div>
                        <h2>{driver.length}</h2>
                        <span>Total Drivers</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <Route size={35} color="#f97316" />
                    <div>
                        <h2>8</h2>
                        <span>Active Trips</span>
                    </div>
                </div>

                <div className="dashboard-card">
                    <Wrench size={35} color="#dc2626" />
                    <div>
                        <h2>4</h2>
                        <span>Maintenance Due</span>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="dashboard-bottom">

                {/* Recent Activity */}
                <div className="recent-card">
                    <h3>Recent Activities</h3>

                    <ul>
                        <li> New Vehicle Added</li>
                        <li> Driver Assigned to Vehicle</li>
                        <li> Trip Completed Successfully</li>
                        <li> Maintenance Scheduled</li>
                    </ul>
                </div>

                {/* Fleet Status */}
                <div className="recent-card">
                    <h3>Fleet Status</h3>

                    <p>Available Vehicles</p>
                    <div className="progress">
                        <div
                            className="progress-bar bg-success"
                            style={{ width: "70%" }}
                        >
                            70%
                        </div>
                    </div>

                    <br />

                    <p>Vehicles in Maintenance</p>
                    <div className="progress">
                        <div
                            className="progress-bar bg-danger"
                            style={{ width: "20%" }}
                        >
                            20%
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DashboardHome;