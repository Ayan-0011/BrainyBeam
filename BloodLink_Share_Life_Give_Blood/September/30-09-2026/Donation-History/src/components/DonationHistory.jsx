import React, { useState } from "react";
import "./DonationHistory.css";

const DonationHistory = () => {

  const donationHistory = [
    {
      id: "DON001",
      donorName: "ABC",
      bloodGroup: "O+",
      units: 1,
      bloodBank: "ABC Blood Bank",
      city: "Ahmedabad",
      date: "25 Sep 2026",
      status: "Completed",
    },
    {
      id: "DON002",
      donorName: "XYZ",
      bloodGroup: "O+",
      units: 1,
      bloodBank: "XYZ Blood Bank",
      city: "Rajkot",
      date: "18 Aug 2026",
      status: "Completed",
    },
    {
      id: "DON003",
      donorName: "PQR",
      bloodGroup: "A+",
      units: 2,
      bloodBank: "ABC Blood Bank",
      city: "Ahmedabad",
      date: "12 Jul 2026",
      status: "Completed",
    },
    {
      id: "DON004",
      donorName: "LMN",
      bloodGroup: "B+",
      units: 1,
      bloodBank: "XYZ Blood Bank",
      city: "Vadodara",
      date: "05 Jun 2026",
      status: "Completed",
    },
    {
      id: "DON005",
      donorName: "DEF",
      bloodGroup: "AB+",
      units: 1,
      bloodBank: "ABC Blood Bank",
      city: "Surat",
      date: "20 Apr 2026",
      status: "Cancelled",
    },
    {
      id: "DON006",
      donorName: "GHI",
      bloodGroup: "O-",
      units: 2,
      bloodBank: "XYZ Blood Bank",
      city: "Ahmedabad",
      date: "15 Mar 2026",
      status: "Completed",
    },
    {
      id: "DON007",
      donorName: "JKL",
      bloodGroup: "A-",
      units: 1,
      bloodBank: "ABC Blood Bank",
      city: "Rajkot",
      date: "10 Feb 2026",
      status: "Completed",
    },
    {
      id: "DON008",
      donorName: "MNO",
      bloodGroup: "B-",
      units: 1,
      bloodBank: "XYZ Blood Bank",
      city: "Vadodara",
      date: "22 Jan 2026",
      status: "Completed",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = donationHistory.filter((item) =>
    item.donorName.toLowerCase().includes(search.toLowerCase()) ||
    item.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
    item.bloodBank.toLowerCase().includes(search.toLowerCase()) ||
    item.city.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  const totalDonations = donationHistory.length;

  const totalUnits = donationHistory.reduce(
    (total, item) => total + item.units,
    0
  );

  const completedDonations = donationHistory.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <div className="history-container">


      <div className="history-summary">
        <div className="summary-card">
          <span>Total Donations</span>
          <h2>{totalDonations}</h2>
        </div>

        <div className="summary-card">
          <span>Total Units</span>
          <h2>{totalUnits}</h2>
        </div>

        <div className="summary-card">
          <span>Completed</span>
          <h2>{completedDonations}</h2>
        </div>

      </div>


      <div className="history-header">
        <div>
          <h2>Donation Records</h2>
          <p>Your previous blood donation activities</p>
        </div>
      </div>


      <div className="history-search">
        <input type="text"  placeholder="Search donation history..." value={search}  onChange={(e) => setSearch(e.target.value)} />
      </div>


      <div className="history-table-card">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Group</th>
              <th>Units</th>
              <th>Blood Bank</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" className="not-found">
                  Donation record not found
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>
                    <span className="blood-group">
                      {item.bloodGroup}
                    </span>
                  </td>
                  <td>{item.units}</td>
                  <td>{item.bloodBank}</td>
                  <td>{item.city}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`} >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;