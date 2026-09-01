import { Truck, Users, Route, Wrench, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { getVehicles } from "../../Service/VehicleService";
import { getTrips } from "../../Service/TripService";
import { getDriver } from "../../Service/DriverService";
import './AdminDash.css'
import { useEffect, useMemo, useState } from "react";
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

// vehicle flagged if service/insurance/permit due within this window (same rule as Dispatcher dashboard)
const ATTENTION_WINDOW_DAYS = 7;

const isDueSoon = (vehicle) => {
  const now = new Date();
  const soon = new Date(now.getTime() + ATTENTION_WINDOW_DAYS * 24 * 60 * 60 * 1000);
  return (
    vehicle.status === "Under-Maintenance" ||
    (vehicle.serviceDueDate && new Date(vehicle.serviceDueDate) <= soon) ||
    (vehicle.insuranceExpiry && new Date(vehicle.insuranceExpiry) <= soon) ||
    (vehicle.PermitExpiry && new Date(vehicle.PermitExpiry) <= soon)
  );
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DashboardHome = () => {
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [vehicleRes, driverRes, tripRes] = await Promise.all([
        getVehicles(),
        getDriver(),
        getTrips(),
      ]);
      setVehicles(vehicleRes.vehicle || []);
      setDrivers(driverRes.drivers || driverRes.driver || []);
      setTrips(tripRes.trips || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ---- derived stats ----

  const activeTrips = useMemo(
    () => trips.filter((t) => t.tripStatus === "in-transit").length,
    [trips]
  );

  const maintenanceDueVehicles = useMemo(
    () => vehicles.filter(isDueSoon),
    [vehicles]
  );

  // week-over-week trip trend (real, computed from scheduledDeparture)
  const tripsTrend = useMemo(() => {
    const now = new Date();
    const startThisWeek = new Date(now); startThisWeek.setDate(now.getDate() - 7);
    const startLastWeek = new Date(now); startLastWeek.setDate(now.getDate() - 14);

    const thisWeek = trips.filter(t => t.scheduledDeparture &&
      new Date(t.scheduledDeparture) >= startThisWeek && new Date(t.scheduledDeparture) <= now).length;
    const lastWeek = trips.filter(t => t.scheduledDeparture &&
      new Date(t.scheduledDeparture) >= startLastWeek && new Date(t.scheduledDeparture) < startThisWeek).length;

    if (lastWeek === 0) return null;
    const pct = ((thisWeek - lastWeek) / lastWeek) * 100;
    return { up: pct >= 0, label: `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%` };
  }, [trips]);

  const summaryCards = [
    {
      icon: <Truck size={26} />,
      value: vehicles.length,
      label: "Total Vehicles",
      color: "#2563eb",
      bg: "rgba(37, 99, 235, 0.1)",
    },
    {
      icon: <Users size={26} />,
      value: drivers.length,
      label: "Total Drivers",
      color: "#16a34a",
      bg: "rgba(22, 163, 74, 0.1)",
    },
    {
      icon: <Route size={26} />,
      value: activeTrips,
      label: "Active Trips",
      trend: tripsTrend?.label,
      up: tripsTrend?.up,
      color: "#f97316",
      bg: "rgba(249, 115, 22, 0.1)",
    },
    {
      icon: <Wrench size={26} />,
      value: maintenanceDueVehicles.length,
      label: "Maintenance Due",
      color: "#dc2626",
      bg: "rgba(220, 38, 38, 0.1)",
    },
  ];

  // Fleet status doughnut — from real vehicle.status values
  const fleetStatusCounts = useMemo(() => {
    const counts = {};
    vehicles.forEach((v) => {
      const key = v.status || "Unknown";
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [vehicles]);

  const fleetStatusColors = {
    "Available": "#16a34a",
    "Under-Maintenance": "#dc2626",
    "On-Trip": "#f97316",
    "Unknown": "#94a3b8",
  };

  const fleetStatusData = {
    labels: Object.keys(fleetStatusCounts),
    datasets: [
      {
        data: Object.values(fleetStatusCounts),
        backgroundColor: Object.keys(fleetStatusCounts).map(
          (k) => fleetStatusColors[k] || "#94a3b8"
        ),
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

  // Trips over the last 7 days (bar) — real, from scheduledDeparture
  const tripsThisWeek = useMemo(() => {
    const counts = new Array(7).fill(0);
    const now = new Date();
    const start = new Date(now); start.setDate(now.getDate() - 6); start.setHours(0,0,0,0);

    trips.forEach((t) => {
      if (!t.scheduledDeparture) return;
      const d = new Date(t.scheduledDeparture);
      if (d >= start && d <= now) {
        const dayIdx = Math.floor((d - start) / (1000 * 60 * 60 * 24));
        if (dayIdx >= 0 && dayIdx < 7) counts[dayIdx]++;
      }
    });

    const labels = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i);
      labels.push(DAY_LABELS[d.getDay()]);
    }
    return { labels, counts };
  }, [trips]);

  const tripsData = {
    labels: tripsThisWeek.labels,
    datasets: [
      {
        label: "Trips",
        data: tripsThisWeek.counts,
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
      y: { beginAtZero: true, grid: { color: "#f1f5f9" }, ticks: { precision: 0 } },
      x: { grid: { display: false } },
    },
  };

  // Trips per month over last 6 months (line) — used as a proxy for fleet usage trend
  const monthlyTrips = useMemo(() => {
    const now = new Date();
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: MONTH_LABELS[d.getMonth()], count: 0 });
    }
    trips.forEach((t) => {
      if (!t.scheduledDeparture) return;
      const d = new Date(t.scheduledDeparture);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const m = months.find((mo) => mo.key === key);
      if (m) m.count++;
    });
    return months;
  }, [trips]);

  const usageData = {
    labels: monthlyTrips.map((m) => m.label),
    datasets: [
      {
        label: "Trips",
        data: monthlyTrips.map((m) => m.count),
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
      y: { beginAtZero: true, grid: { color: "#f1f5f9" }, ticks: { precision: 0 } },
      x: { grid: { display: false } },
    },
  };

  // Recent activity — derived from real trips + maintenance-due vehicles (no separate activity-log API)
  const recentActivities = useMemo(() => {
    const items = [];

    trips.forEach((t) => {
      const dateVal = t.updatedAt || t.createdAt || t.scheduledDeparture;
      if (!dateVal) return;
      let text = `Trip ${t.fromLocation || "?"} → ${t.toLocation || "?"}`;
      if (t.tripStatus === "delivered") text += " completed";
      else if (t.tripStatus === "in-transit") text += " is in transit";
      else if (t.tripStatus === "scheduled") text += " scheduled";
      items.push({ text, date: new Date(dateVal) });
    });

    maintenanceDueVehicles.forEach((v) => {
      items.push({
        text: `${v.registrationNumber || "Vehicle"} needs attention`,
        date: new Date(v.serviceDueDate || v.insuranceExpiry || v.PermitExpiry || Date.now()),
      });
    });

    return items
      .sort((a, b) => b.date - a.date)
      .slice(0, 6)
      .map((item) => ({ text: item.text, time: timeAgo(item.date) }));
  }, [trips, maintenanceDueVehicles]);

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
              {card.trend && (
                <div className={`card-trend ${card.up ? "up" : "down"}`}>
                  {card.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <small>{card.trend}</small>
                </div>
              )}
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
          <h3>Vehicle Status</h3>
          <div className="chart-wrapper">
            {vehicles.length > 0 ? (
              <Doughnut data={fleetStatusData} options={fleetStatusOptions} />
            ) : (
              <p className="miniEmptyState">No vehicle data yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card wide">
          <h3>Trips Trend (Last 6 Months)</h3>
          <div className="chart-wrapper">
            <Line data={usageData} options={usageOptions} />
          </div>
        </div>

        <div className="chart-card">
          <h3>Recent Activities</h3>
          {recentActivities.length > 0 ? (
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
          ) : (
            <p className="miniEmptyState">No recent activity.</p>
          )}
        </div>
      </div>
    </div>
  );
};


function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  return date.toLocaleDateString();
}

export default DashboardHome;