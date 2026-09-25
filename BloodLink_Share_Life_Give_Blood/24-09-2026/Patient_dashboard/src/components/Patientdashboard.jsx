import React, { useState } from "react";
import { Menu, Droplet, LayoutDashboard, Search, Calendar, History, Bell, User, Settings as SettingsIcon, LogOut, MapPin, } from "lucide-react";
import "./PatientDashboard.css";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Requests", icon: Droplet },
    { label: "Find Blood Banks", icon: Search },
    { label: "Appointments", icon: Calendar },
    { label: "Request History", icon: History },
    { label: "Notifications", icon: Bell },
    { label: "My Profile", icon: User },
    { label: "Settings", icon: SettingsIcon },
];


function PatientDashboard() {
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

                    <h2>BloodLink Patient Portal</h2>
                </div>

                <div className="admin-profile">
                    <div className="profile-circle">N</div>
                    <span>User</span>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-mark">
                        <Droplet size={16} color="#fff" fill="#fff" strokeWidth={0} />
                    </div>
                    <div>
                        <h2>BloodLink</h2>
                        <p>Patient Portal</p>
                    </div>
                </div>

                <nav>
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                className={`sidebar-item ${index === 0 ? "active" : ""}`}
                                onClick={() => setSidebarOpen(false)} >
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


            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}>

                </div>
            )}

            {/* Main Content */}
            <main className="dashboard-content">
                <div className="page-heading">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, User</p>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default PatientDashboard;