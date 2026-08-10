import { LayoutDashboard, Truck, Users, UserCog, UserRound, Route, FileText, LogOut, Fuel, User, AlertTriangle, X, } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import styles from "./Sidebar.module.css";
import Logo from "../Components/Logo";

export default function Sidebar({
  isOpen,
  onClose,
  onLogout,
}) {
  const { user } = useAuth();

  if (!user) return null;

  const linkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  const menus = {
    admin: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <LayoutDashboard size={18} />,
      },
      {
        title: "Vehicles",
        path: "/admin/vehicles",
        icon: <Truck size={18} />,
      },
      {
        title: "Drivers",
        path: "/admin/drivers",
        icon: <Users size={18} />,
      },
      {
        title: "Fleet Managers",
        path: "/admin/fleet-managers",
        icon: <UserRound size={18} />,
      },
      {
        title: "Dispatchers",
        path: "/admin/dispatchers",
        icon: <UserCog size={18} />,
      },
      {
        title: "Reports",
        path: "/admin/reports",
        icon: <FileText size={18} />,
      },
    ],

    fleet_manager: [
      {
        title: "Dashboard",
        path: "/fleet",
        icon: <LayoutDashboard size={18} />,
      },
      {
        title: "Vehicles",
        path: "/fleet/vehicles",
        icon: <Truck size={18} />,
      },
      {
        title: "Drivers",
        path: "/fleet/drivers",
        icon: <Users size={18} />,
      },
      {
        title: "Trips",
        path: "/fleet/trips",
        icon: <Route size={18} />,
      },
      {
        title: "Fuel",
        path: "/fleet/fuel",
        icon: <Fuel size={18} />,
      },
      {
        title: "Reports",
        path: "/fleet/reports",
        icon: <FileText size={18} />,
      },
    ],

    dispatcher: [
      {
        title: "Dashboard",
        path: "/dispatcher",
        icon: <LayoutDashboard size={18} />,
      },
      {
        title: "Trips",
        path: "/dispatcher/trip",
        icon: <Route size={18} />,
      },
      {
        title: "Vehicles",
        path: "/dispatcher/vehicles",
        icon: <Truck size={18} />,
      },
      {
        title: "Drivers",
        path: "/dispatcher/drivers",
        icon: <Users size={18} />,
      },
    ],

    driver: [
      {
        title: "Dashboard",
        path: "/driver",
        icon: <LayoutDashboard size={18} />,
      },
      {
        title: "My Trips",
        path: "/driver/trips",
        icon: <Route size={18} />,
      },
      {
        title: "Assigned Vehicle",
        path: "/driver/assigned-vehicle",
        icon: <Truck size={18} />,
      },
      {
        title: "Report Issue",
        path: "/driver/report-issue",
        icon: <AlertTriangle size={18} />,
      },
      {
        title: "Profile",
        path: "/driver/profile",
        icon: <User size={18} />,
      },
    ],
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""
          }`} >

        <div className={styles.brand}>
          <Logo />


          <button
            className={styles.closeBtn}
            onClick={onClose} >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {menus[user.role]?.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={onClose}
              className={linkClass}
              end={menu.path.split("/").length === 2} >
              {menu.icon}
              <span>{menu.title}</span>
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.logout}
          onClick={onLogout} >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}