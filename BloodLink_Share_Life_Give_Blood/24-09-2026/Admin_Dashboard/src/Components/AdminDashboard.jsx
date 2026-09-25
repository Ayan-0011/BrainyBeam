import React, { useState } from "react";
import { Menu, Droplet, LayoutDashboard, Users, UserRound, ClipboardList, History, Activity, FileText, Settings as SettingsIcon, LogOut,} from "lucide-react";
import "./AdminDashboard.css";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Donors", icon: Users },
    { label: "Patients", icon: UserRound },
    { label: "Blood Inventory", icon: Droplet },
    { label: "Donation Requests", icon: ClipboardList },
    { label: "Donation History", icon: History },
    { label: "Blood Availability", icon: Activity },
    { label: "Reports", icon: FileText },
    { label: "Settings", icon: SettingsIcon },
];

function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="admin-layout">

            {/* Header */}
            <header className="admin-header">
                <div className="header-left">

                    <button
                        className="menu-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle menu" >
                        <Menu size={18} strokeWidth={1.8} />
                    </button>

                    <h2>BloodLink</h2>
                </div>

                <div className="admin-profile">
                    <div className="profile-circle">A</div>
                    <span>Admin</span>
                </div>
            </header>


            <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-mark">
                        <Droplet size={16} color="#fff" fill="#fff" strokeWidth={0} />
                    </div>
                    <div>
                        <h2>BloodLink</h2>
                        <p>Admin Panel</p>
                    </div>
                </div>

                <nav>
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button key={item.label}
                                className={`sidebar-item ${index === 0 ? "active" : ""}`}
                                onClick={() => setSidebarOpen(false)}>
                                <Icon size={16} strokeWidth={1.8} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <button className="logout-btn">
                    <LogOut size={16} strokeWidth={1.8} />
                    <span>Logout</span>
                </button>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="dashboard-content">
                <div className="page-heading">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, Admin</p>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default AdminDashboard;