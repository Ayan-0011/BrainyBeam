
import React, { useState } from "react";
import "./AdminDashboard.css";

const menuItems = [
  "Dashboard",
  "Donors",
  "Patients",
  "Blood Inventory",
  "Donation Requests",
  "Donation History",
  "Blood Availability",
  "Reports",
  "Settings",
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

const recentRequests = [
  {
    patient: "Rahul Sharma",
    bloodGroup: "O+",
    units: 2,
    status: "Pending",
  },
  {
    patient: "Priya Patel",
    bloodGroup: "B+",
    units: 1,
    status: "Approved",
  },
  {
    patient: "Amit Shah",
    bloodGroup: "A-",
    units: 2,
    status: "Pending",
  },
  {
    patient: "Neha Mehta",
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
          >
            ☰
          </button>

          <h2>BloodLink Blood Center</h2>
        </div>

        <div className="admin-profile">
          <div className="profile-circle">A</div>
          <span>Admin</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="sidebar-logo">
          <h2>BloodLink</h2>
          <p>Admin Panel</p>
        </div>

        <nav>
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`sidebar-item ${index === 0 ? "active" : ""}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="logout-btn">
          Logout
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

            <div className="blood-card">
              <span>O+</span>
              <strong>120 Units</strong>
            </div>

            <div className="blood-card">
              <span>A+</span>
              <strong>85 Units</strong>
            </div>

            <div className="blood-card">
              <span>B+</span>
              <strong>96 Units</strong>
            </div>

            <div className="blood-card">
              <span>AB+</span>
              <strong>42 Units</strong>
            </div>

            <div className="blood-card">
              <span>O-</span>
              <strong>38 Units</strong>
            </div>

            <div className="blood-card">
              <span>A-</span>
              <strong>45 Units</strong>
            </div>

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
                        }
                      >
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

