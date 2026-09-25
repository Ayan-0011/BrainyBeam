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

const stats = [
    {
        title: "Total Donors",
        value: "1,248",
    },
    {
        title: "Available Blood",
        value: "486 Units",
    },
    {
        title: "Pending Requests",
        value: "32",
    },
    {
        title: "Total Donations",
        value: "2,845",
    },
];

const bloodInventory = [
    { group: "O+", units: "120 Units" },
    { group: "A+", units: "85 Units" },
    { group: "B+", units: "96 Units" },
    { group: "AB+", units: "42 Units" },
    { group: "O-", units: "38 Units" },
    { group: "A-", units: "45 Units" },
];

const recentRequests = [
    {
        patient: "ABC",
        bloodGroup: "O+",
        units: 2,
        status: "Pending",
    },
    {
        patient: "OP",
        bloodGroup: "B+",
        units: 1,
        status: "Approved",
    },
    {
        patient: "XYZ",
        bloodGroup: "A-",
        units: 2,
        status: "Pending",
    },
    {
        patient: "PR",
        bloodGroup: "AB+",
        units: 1,
        status: "Approved",
    },
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

            {/* Sidebar */}
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
                            <button
                                key={item.label}
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

                {/* Statistics */}
                <section className="stats-grid">
                    {stats.map((stat) => (
                        <div className="stat-card" key={stat.title}>
                            <p>{stat.title}</p>
                            <h2>{stat.value}</h2>
                        </div>
                    ))}

                </section>

                {/* Blood Inventory */}
                <section className="dashboard-section">

                    <div className="section-heading">
                        <h2>Blood Inventory</h2>
                        <button>View All</button>
                    </div>

                    <div className="blood-grid">
                        {bloodInventory.map((item) => (
                            <div className="blood-card" key={item.group}>
                                <span>{item.group}</span>
                                <div>
                                    <strong>{item.units}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Requests */}
                <section className="dashboard-section">
                    <div className="section-heading">
                        <h2>Recent Donation Requests</h2>
                        <button>View All</button>
                    </div>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient</th>
                                    <th>Blood Group</th>
                                    <th>Units</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentRequests.map((request) => (
                                    <tr key={request.patient}>
                                        <td>{request.patient}</td>
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

export default AdminDashboard;