import { Truck, Users, Route, Wrench, TrendingUp, TrendingDown } from "lucide-react";
import { getVehicles } from "../../Service/VehicleService";
import './AdminDash.css'
import { useEffect, useState } from "react";
import { getDriver } from "../../Service/DriverService";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const DashboardHome = () => {
  const [vehicle, setVehicle] = useState([]);
  const [driver, setDriver] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadVehicle = async () => {
    const data = await getVehicles();
    setVehicle(data.vehicle || []);
  };

  const loadDriver = async () => {
    const data = await getDriver();
    setDriver(data.drivers || []);
  };

  useEffect(() => {
    Promise.all([loadVehicle(), loadDriver()]).finally(() => setLoading(false));
  }, []);

  const summaryCards = [
    {
      icon: <Truck size={26} />,
      value: vehicle.length,
      label: "Total Vehicles",
      trend: "+4.2%",
      up: true,
      color: "#2563eb",
      bg: "rgba(37, 99, 235, 0.1)",
    },
    {
      icon: <Users size={26} />,
      value: driver.length,
      label: "Total Drivers",
      trend: "+2.1%",
      up: true,
      color: "#16a34a",
      bg: "rgba(22, 163, 74, 0.1)",
    },
    {
      icon: <Route size={26} />,
      value: 8,
      label: "Active Trips",
      trend: "-1.3%",
      up: false,
      color: "#f97316",
      bg: "rgba(249, 115, 22, 0.1)",
    },
    {
      icon: <Wrench size={26} />,
      value: 4,
      label: "Maintenance Due",
      trend: "+0.8%",
      up: false,
      color: "#dc2626",
      bg: "rgba(220, 38, 38, 0.1)",
    },
  ];

  // Fleet status doughnut
  const fleetStatusData = {
    labels: ["Available", "In Maintenance", "On Trip"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#16a34a", "#dc2626", "#f97316"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const fleetStatusOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { padding: 16, usePointStyle: true, font: { size: 12 } },
      },
    },
  };

  // Trips over the week (bar)
  const tripsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Trips",
        data: [12, 19, 14, 22, 18, 9, 6],
        backgroundColor: "#2563eb",
        borderRadius: 6,
        maxBarThickness: 28,
      },
    ],
  };

  const tripsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
      x: { grid: { display: false } },
    },
  };

  // Vehicle usage over months (line)
  const usageData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Vehicles Used",
        data: [20, 25, 22, 30, 28, 35],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22, 163, 74, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#16a34a",
      },
    ],
  };

  const usageOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
      x: { grid: { display: false } },
    },
  };

  const recentActivities = [
    { text: "New Vehicle Added", time: "2h ago" },
    { text: "Driver Assigned to Vehicle", time: "5h ago" },
    { text: "Trip Completed Successfully", time: "Yesterday" },
    { text: "Maintenance Scheduled", time: "2 days ago" },
  ];

  return (
    <div className="dashboard-home">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your fleet efficiently from one place.</p>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        {summaryCards.map((card, i) => (
          <div className="dashboard-card" key={i}>
            <div className="card-icon" style={{ background: card.bg, color: card.color }}>
              {card.icon}
            </div>
            <div className="card-info">
              <h2>{loading ? "—" : card.value}</h2>
              <span>{card.label}</span>
              <div className={`card-trend ${card.up ? "up" : "down"}`}>
                {card.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <small>{card.trend}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="dashboard-charts">
        <div className="chart-card wide">
          <h3>Trips This Week</h3>
          <div className="chart-wrapper">
            <Bar data={tripsData} options={tripsOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Fleet Status</h3>
          <div className="chart-wrapper">
            <Doughnut data={fleetStatusData} options={fleetStatusOptions} />
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card wide">
          <h3>Vehicle Usage Trend</h3>
          <div className="chart-wrapper">
            <Line data={usageData} options={usageOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Recent Activities</h3>
          <ul className="activity-list">
            {recentActivities.map((activity, i) => (
              <li key={i}>
                <span className="dot" />
                <div>
                  <p>{activity.text}</p>
                  <small>{activity.time}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;