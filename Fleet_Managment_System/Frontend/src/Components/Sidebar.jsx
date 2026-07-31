import {
    LayoutDashboard,
    Truck,
    Users,
    UserCog,
    UserRound,
    Route,
    FileText,
    LogOut,
    Fuel
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Logo from "./Logo";

const Sidebar = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const linkClass = ({ isActive }) =>
        `menu-item ${isActive ? "active" : ""}`;

    const menus = {

        admin: [

            {
                title: "Dashboard",
                path: "/admin",
                icon: <LayoutDashboard size={20}/>
            },

            {
                title: "Vehicles",
                path: "/admin/vehicles",
                icon: <Truck size={20}/>
            },

            {
                title: "Drivers",
                path: "/admin/drivers",
                icon: <Users size={20}/>
            },

            {
                title: "Fleet Managers",
                path: "/admin/fleet-managers",
                icon: <UserRound size={20}/>
            },

            {
                title: "Dispatchers",
                path: "/admin/dispatchers",
                icon: <UserCog size={20}/>
            },

            {
                title: "Reports",
                path: "/admin/reports",
                icon: <FileText size={20}/>
            }

        ],

        fleet_manager: [

            {
                title: "Dashboard",
                path: "/fleet",
                icon: <LayoutDashboard size={20}/>
            },

            {
                title: "Vehicles",
                path: "/fleet-manager/vehicles",
                icon: <Truck size={20}/>
            },

            {
                title: "Drivers",
                path: "/fleet-manager/drivers",
                icon: <Users size={20}/>
            },

            {
                title: "Trips",
                path: "/fleet-manager/trips",
                icon: <Route size={20}/>
            },
            {
                title: "fule",
                path: "/fleet-manager/fule",
                icon: <Fuel size={20}/>
            },
            {
                title: "report",
                path: "/fleet-manager/report",
                icon: <FileText size={20}/>
            }

        ],

        dispatcher: [

            {
                title: "Dashboard",
                path: "/dispatcher",
                icon: <LayoutDashboard size={20}/>
            },

            {
                title: "Assign Trips",
                path: "/dispatcher/trips",
                icon: <Route size={20}/>
            }

        ],

        driver: [

            {
                title: "Dashboard",
                path: "/driver",
                icon: <LayoutDashboard size={20}/>
            },

            {
                title: "My Trips",
                path: "/driver/trips",
                icon: <Route size={20}/>
            }

        ]

    };

    const handleLogout = async () => {

        await logout();

        navigate("/");
    };

    return (

        <aside className="sidebar">

            <h2 className="sidebar-title">
            <Logo/>


            </h2>

            <nav className="sidebar-nav">

                {menus[user.role]?.map((menu) => (

                    <NavLink key={menu.path}
                        to={menu.path}
                        className={linkClass}
                        end={menu.path.split("/").length === 2} >
                        {menu.icon}
                        {menu.title}
                    </NavLink>
                ))}

            </nav>

            <button className="sidebar-logout" onClick={handleLogout} >
                <LogOut size={18}/>
                Logout

            </button>

        </aside>

    );

};

export default Sidebar;