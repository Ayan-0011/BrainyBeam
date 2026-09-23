import React from "react";
import "./DonationHistory.css";

const DONATION_HISTORY = [
  {
    id: "DON-001",
    date: "18 Sep 2026",
    bloodGroup: "A+",
    component: "Whole Blood",
    hospital: "City Central Blood Bank",
    units: 1,
    status: "Completed",
  },
  {
    id: "DON-002",
    date: "10 Jul 2026",
    bloodGroup: "B-",
    component: "Platelets",
    hospital: "Sunrise Hospital",
    units: 1.5,
    status: "Completed",
  },
  {
    id: "DON-003",
    date: "22 Apr 2026",
    bloodGroup: "AB+",
    component: "Whole Blood",
    hospital: "LifeCare Blood Center",
    units: 2,
    status: "Completed",
  },
  {
    id: "DON-004",
    date: "15 Jan 2026",
    bloodGroup: "O+",
    component: "Plasma",
    hospital: "Metro Hospital Blood Bank",
    units: 1,
    status: "Cancelled",
  },
];

export default function DonationHistory() {
  return (
    <div className="donation-page">
      <div className="container-fluid p-4">

        <div className="mb-4">
          <h2 className="fw-semibold mb-1">
            Blood Donation History
          </h2>

          <p className="text-muted mb-0">
            View your previous blood donation records.
          </p>
        </div>


        <div className="row g-3 mb-4">

          <div className="col-md-4">
            <div className="summary-card">
              <p>Total Donations</p>
              <h3>{DONATION_HISTORY.length}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="summary-card">
              <p>Total Units Donated</p>
              <h3>
                {DONATION_HISTORY.reduce(
                  (total, item) => total + item.units,
                  0
                )}
              </h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="summary-card">
              <p>Last Donation</p>
              <h3>{DONATION_HISTORY[0].date}</h3>
            </div>
          </div>

        </div>


        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table table-hover">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Donation ID</th>
                    <th>Date</th>
                    <th>Blood Group</th>
                    <th>Component</th>
                    <th>Hospital / Blood Bank</th>
                    <th>Units</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {DONATION_HISTORY.map((donation) => (
                    <tr key={donation.id}>
                      <td className="fw-semibold"> {donation.id} </td>
                      <td> {donation.date} </td>
                      <td>
                        <span className="blood-badge">
                          {donation.bloodGroup}
                        </span>
                      </td>
                      <td> {donation.component} </td>
                      <td> {donation.hospital} </td>
                      <td>  {donation.units} </td>
                      <td>
                        <span
                          className={`status-badge ${
                            donation.status === "Completed"
                              ? "status-completed"
                              : "status-cancelled"
                          }`}>
                          {donation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}