import React, { useState } from "react";
import { Menu, Droplet, LayoutDashboard, Search, Calendar, History, Bell, User, Settings as SettingsIcon, LogOut, MapPin, Clock, ClipboardList, } from "lucide-react";
import StatCard from "./StateCard";
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

const stats = [
    {
        title: "Blood Type",
        value: "B+",
        icon: Droplet,
    },
    {
        title: "Active Requests",
        value: "1",
        icon: ClipboardList,
        trend: "1 pending",
        trendDirection: "down",
    },
    {
        title: "Total Requests",
        value: "6",
        icon: History,
    },
    {
        title: "Next Eligible Donation",
        value: "12 Days",
        icon: Clock,
    },
];

const requestHistory = [
    {
        hospital: "City Care Hospital",
        bloodGroup: "B+",
        units: 2,
        status: "Pending",
    },
    {
        hospital: "Sunrise Hospital",
        bloodGroup: "B+",
        units: 1,
        status: "Approved",
    },
    {
        hospital: "Apollo Clinic",
        bloodGroup: "B+",
        units: 2,
        status: "Approved",
    },
];

function PatientDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="admin-layout">

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
                    <span>user</span>
                </div>
            </header>


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
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="dashboard-content">
                <div className="page-heading">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, USer</p>
                    </div>
                </div>

                {/* Statistics */}
                <section className="stats-grid">
                    {stats.map((stat) => (
                        <StatCard key={stat.title} title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            trend={stat.trend}
                            trendDirection={stat.trendDirection} />
                    ))}

                </section>

                {/* Request History */}
                <section className="dashboard-section">
                    <div className="section-heading">
                        <h2>My Request History</h2>
                        <button>View All</button>
                    </div>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Hospital</th>
                                    <th>Blood Group</th>
                                    <th>Units</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {requestHistory.map((request, index) => (
                                    <tr key={index}>
                                        <td>{request.hospital}</td>
                                        <td>
                                            <span className="blood-group">
                                                {request.bloodGroup}
                                            </span>
                                        </td>

                                        <td>{request.units}</td>
                                        <td>
                                            <span
                                                className={
                                                    request.status === "Approved"
                                                        ? "status approved"
                                                        : "status pending"
                                                } >
                                                {request.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default PatientDashboard;