import { NavLink } from "react-router-dom";
import { LayoutDashboard, Truck, Users, UserCog, UserRound, Route, FileText, Settings} from "lucide-react";

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <h2 className="sidebar-title">
                Admin Panel
            </h2>

            <NavLink to="" className="menu-item">
                <LayoutDashboard size={20} />
                Dashboard
            </NavLink>

            <NavLink to="vehicles" className="menu-item">
                <Truck size={20} />
                Vehicles
            </NavLink>

            <NavLink to="/drivers" className="menu-item">
                <Users size={20} />
                Drivers
            </NavLink>

            <NavLink to="/dispatcher" className="menu-item">
                <UserCog size={20} />
                Dispatcher
            </NavLink>

            <NavLink to="/fleet-manager" className="menu-item">
                <UserRound size={20} />
                Fleet Manager
            </NavLink>

            <NavLink to="/trips" className="menu-item">
                <Route size={20} />
                Trips
            </NavLink>

            <NavLink to="/reports" className="menu-item">
                <FileText size={20} />
                Reports
            </NavLink>

            <NavLink to="/settings" className="menu-item">
                <Settings size={20} />
                Settings
            </NavLink>

        </aside>

    );

}

export default Sidebar;