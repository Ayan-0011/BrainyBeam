import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

export default function Layout() {
  const { user, role, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  //console.log("layout");
  return (
    <div className={styles.shell}>
      
      <Sidebar
        role={role}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={handleLogout}
      />
      <div className={styles.main}>
        <Navbar
          user={user}
          role={role}
          onMenuClick={() => setSidebarOpen((o) => !o)}
          onLogout={handleLogout}
        />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
