import Sidebar from "./Sidebar";
import "../../Style/Admin.css";
import DashboardHome from "./dashboardHome";

const Admin_dash = () => {

    return (

        <div className="admin-container">

            <Sidebar />

            <div className="admin-content">
                <DashboardHome/>
            </div>

        </div>

    );

}

export default Admin_dash;