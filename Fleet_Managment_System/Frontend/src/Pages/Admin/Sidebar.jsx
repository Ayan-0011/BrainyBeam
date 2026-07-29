import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Truck, Users, UserCog, UserRound, Route, FileText, Settings, LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";

const Sidebar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const linkClass = ({ isActive }) => `menu-item${isActive ? " active" : ""}`;

    const handleLogout = async () => {
        await logout();
        toast.success("Logout Successfully");
        navigate("/");
    };

    return (

        <aside className="sidebar">

            <h2 className="sidebar-title">
                Admin Panel
            </h2>

            <nav className="sidebar-nav">
                <NavLink to="" end className={linkClass}>
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink to="vehicles" className={linkClass}>
                    <Truck size={20} />
                    Vehicles
                </NavLink>

                <NavLink to="/drivers" className={linkClass}>
                    <Users size={20} />
                    Drivers
                </NavLink>

                <NavLink to="/dispatcher" className={linkClass}>
                    <UserCog size={20} />
                    Dispatcher
                </NavLink>

                <NavLink to="/fleet-manager" className={linkClass}>
                    <UserRound size={20} />
                    Fleet Manager
                </NavLink>

                <NavLink to="/trips" className={linkClass}>
                    <Route size={20} />
                    Trips
                </NavLink>

                <NavLink to="/reports" className={linkClass}>
                    <FileText size={20} />
                    Reports
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    <Settings size={20} />
                    Settings
                </NavLink>
            </nav>

            <button className="sidebar-logout" onClick={handleLogout}>
                <LogOut size={19} />
                Logout
            </button>

        </aside>

    );

}

export default Sidebar;
