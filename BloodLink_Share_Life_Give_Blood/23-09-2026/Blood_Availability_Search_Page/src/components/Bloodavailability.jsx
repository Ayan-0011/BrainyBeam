import React, { useState } from "react";
import { Search, X, MapPin, Droplet, Clock } from "lucide-react";
import "./BloodAvailability.css";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const COMPONENTS = ["Whole Blood", "RBC", "Platelets", "Plasma"];

const MOCK_DATA = [
  {
    id: 1,
    bloodGroup: "O+",
    hospital: "City Central Blood Bank",
    location: "Rajkot, Gujarat",
    component: "Whole Blood",
    units: 18,
    status: "Available",
    updatedAt: "10 min ago",
  },
  {
    id: 2,
    bloodGroup: "A+",
    hospital: "Sunrise Hospital",
    location: "Rajkot, Gujarat",
    component: "RBC",
    units: 4,
    status: "Low Stock",
    updatedAt: "32 min ago",
  },
  {
    id: 3,
    bloodGroup: "B-",
    hospital: "LifeCare Blood Center",
    location: "Ahmedabad, Gujarat",
    component: "Plasma",
    units: 0,
    status: "Unavailable",
    updatedAt: "1 hr ago",
  },
  {
    id: 4,
    bloodGroup: "AB+",
    hospital: "Metro Hospital Blood Bank",
    location: "Surat, Gujarat",
    component: "Platelets",
    units: 9,
    status: "Available",
    updatedAt: "18 min ago",
  },
  {
    id: 5,
    bloodGroup: "O-",
    hospital: "Red Cross Blood Bank",
    location: "Rajkot, Gujarat",
    component: "Whole Blood",
    units: 2,
    status: "Low Stock",
    updatedAt: "5 min ago",
  },
  {
    id: 6,
    bloodGroup: "A-",
    hospital: "Apex Trauma Center",
    location: "Vadodara, Gujarat",
    component: "RBC",
    units: 12,
    status: "Available",
    updatedAt: "45 min ago",
  },
];

export default function BloodAvailability() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [hospital, setHospital] = useState("");
  const [component, setComponent] = useState("");

  const [results, setResults] = useState(MOCK_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      try {
        const filtered = MOCK_DATA.filter((item) => {
          return (
            (!bloodGroup || item.bloodGroup === bloodGroup) &&
            (!location ||
              item.location.toLowerCase().includes(location.toLowerCase())) &&
            (!hospital ||
              item.hospital.toLowerCase().includes(hospital.toLowerCase())) &&
            (!component || item.component === component)
          );
        });
        setResults(filtered);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }, 600);
  }

  function handleClear() {
    setBloodGroup("");
    setLocation("");
    setHospital("");
    setComponent("");
    setResults(MOCK_DATA);
    setError(false);
  }

  return (
    <div className="blood-page">
      <div className="page-header">
        <h1>Find Blood Availability</h1>
        <p>
          Search for available blood by blood group, location, hospital and
          component.
        </p>
      </div>

      <form className="search-card" onSubmit={handleSearch}>
        <div className="search-grid">
          <div className="form-field">
            <label>Blood Group</label>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">All</option>
              {BLOOD_GROUPS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Location</label>
            <input
              type="text"
              placeholder="City or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Hospital / Blood Bank</label>
            <input
              type="text"
              placeholder="Search by name"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Component</label>
            <select
              value={component}
              onChange={(e) => setComponent(e.target.value)}
            >
              <option value="">All</option>
              {COMPONENTS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="search-actions">
          <button type="submit" className="btn btn-primary">
            <Search size={16} /> Search
          </button>

          <button
            type="button"
            className="btn btn-outline"
            onClick={handleClear}
          >
            <X size={16} /> Clear Filters
          </button>
        </div>
      </form>

      <div className="results-section">
        {!loading && !error && (
          <p className="results-count">{results.length} results found</p>
        )}

        {loading && <p className="state-text">Loading...</p>}

        {error && (
          <p className="state-text error-text">
            Something went wrong. Please try again.
          </p>
        )}

        {!loading && !error && results.length === 0 && (
          <p className="state-text">No blood units found for your search.</p>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="results-grid">
            {results.map((item) => (
              <div className="result-card" key={item.id}>
                <div className="card-top">
                  <span className="blood-badge">{item.bloodGroup}</span>
                  <span
                    className={`status status-${item.status.replace(" ", "").toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3>{item.hospital}</h3>

                <p className="card-line">
                  <MapPin size={14} /> {item.location}
                </p>
                <p className="card-line">
                  <Droplet size={14} /> {item.component}
                </p>

                <p className="units">{item.units} units available</p>

                <p className="card-line">
                  <Clock size={13} /> Updated {item.updatedAt}
                </p>

                <div className="card-actions">
                  <button className="btn btn-outline">View Details</button>
                  <button
                    className="btn btn-primary"
                    disabled={item.status === "Unavailable"}
                  >
                    Request Blood
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
