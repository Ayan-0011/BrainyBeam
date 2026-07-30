import Sidebar from "./Sidebar";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";
import "../../Style/Admin.css";

const Admin_dash = () => {
    return (
        <>
            <div className="admin-container">
                <Sidebar />

                <div className="main">
                    <Navbar />

                    <div className="admin-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin_dash;