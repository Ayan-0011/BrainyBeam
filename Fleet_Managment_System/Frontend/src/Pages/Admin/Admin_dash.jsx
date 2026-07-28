import Sidebar from "./Sidebar";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";
import "../../Style/Admin.css";

const Admin_dash = () => {
    return (
        <>
            <Navbar />

            <div className="admin-container">
                <Sidebar />

                <div className="admin-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Admin_dash;