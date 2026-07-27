import axios from "axios";
import { Truck,Users, Route, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const DashboardHome = () => {

    const [vehicle, setVehicle] = useState(null)

    const getvehicle = async()=>{
        const res = await axios.get("http://localhost:3000/api/vehicles/", { withCredentials:true})
        setVehicle(res.data.vehicle)
        //console.log(setVehicle);
    }

    useEffect(() => {
        getvehicle()
    }, []);
    
    return (

        <div className="dashboard-home">

            <h1>Welcome Admin</h1>

            <p>
                Manage your fleet efficiently from one place.
            </p>

            <div className="cards">

                <div className="card">

                    <Truck size={35} />

                    <h2>{vehicle?.length}</h2>

                    <span>Total Vehicles</span>

                </div>

                <div className="card">

                    <Users size={35} />

                    <h2></h2>

                    <span>Total Drivers</span>

                </div>

                <div className="card">

                    <Route size={35} />

                    <h2></h2>

                    <span>Active Trips</span>

                </div>

                <div className="card">

                    <Wrench size={35} />

                    <h2></h2>

                    <span>Maintenance</span>

                </div>

            </div>

            <div className="recent">

                <h2>Recent Activities</h2>

                <ul>

                    <li>✅ New Vehicle Added</li>

                    <li>✅ Driver Assigned</li>

                    <li>✅ Trip Completed</li>

                    <li>✅ Maintenance Scheduled</li>

                </ul>

            </div>

        </div>

    );

}

export default DashboardHome;