import React, { useState } from "react";
import Pagination from "./components/Pagination";

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

  const totalPages = Math.ceil(
    bloodStock.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = bloodStock.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container">

      <h2>Blood Stock List</h2>

      <div className="blood-table">

        <div className="table-header">
          <span>Blood Group</span>
          <span>Units</span>
          <span>Status</span>
        </div>

        {currentData.map((item) => (
          <div className="table-row" key={item.id}>
            <span className="blood-group">
              {item.bloodGroup}
            </span>

            <span>
              {item.units} Units
            </span>

            <span
              className={
                item.status === "Available"
                  ? "available"
                  : "low"
              }
            >
              {item.status}
            </span>
          </div>
        ))}

      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
};

export default App;