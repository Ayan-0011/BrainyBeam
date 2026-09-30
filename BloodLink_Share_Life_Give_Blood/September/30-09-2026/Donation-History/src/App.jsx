import React from "react";
import "./App.css";
import DonationHistory from "./components/DonationHistory";

const App = () => {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Donation History</h1>
        <p>View your previous blood donation records</p>
      </header>

      <DonationHistory />
    </div>
  );
};

export default App;