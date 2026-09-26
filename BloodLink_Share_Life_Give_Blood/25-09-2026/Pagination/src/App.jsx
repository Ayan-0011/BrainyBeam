import React, { useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";

const bloodStock = [
  { id: 1, bloodGroup: "A+", units: 12, status: "Available" },
  { id: 2, bloodGroup: "A-", units: 5, status: "Available" },
  { id: 3, bloodGroup: "B+", units: 8, status: "Available" },
  { id: 4, bloodGroup: "B-", units: 3, status: "Low Stock" },
  { id: 5, bloodGroup: "AB+", units: 10, status: "Available" },
  { id: 6, bloodGroup: "AB-", units: 2, status: "Low Stock" },
  { id: 7, bloodGroup: "O+", units: 15, status: "Available" },
  { id: 8, bloodGroup: "O-", units: 4, status: "Low Stock" },
  { id: 9, bloodGroup: "A+", units: 9, status: "Available" },
  { id: 10, bloodGroup: "O+", units: 7, status: "Available" },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(bloodStock.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = bloodStock.slice(startIndex, startIndex + itemsPerPage);

  const rangeStart = bloodStock.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(startIndex + itemsPerPage, bloodStock.length);

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <div>
            <h2>Blood Stock List</h2>
            <p className="subtitle">Live inventory across all blood groups</p>
          </div>
        </header>

        <div className="table-card">
          <table className="blood-table">
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Units</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="blood-badge">{item.bloodGroup}</span>
                  </td>

                  <td className="units-cell">{item.units} units</td>

                  <td>
                    <span
                      className={
                        item.status === "Available"
                          ? "status-pill available"
                          : "status-pill low"
                      }
                    >
                      <span className="status-dot" />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span className="range-text">
              Showing {rangeStart}–{rangeEnd} of {bloodStock.length}
            </span>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;