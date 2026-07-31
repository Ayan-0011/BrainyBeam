
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import "../Style/DashboardLayout.css"
import Sidebar from "../Components/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="admin-container">

            <Sidebar />

            <div className="main">

                <Navbar />

                <div className="admin-content">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;