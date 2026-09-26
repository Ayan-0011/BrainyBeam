import React, { useState } from "react";

import "./components/Alert.css";
import Alert from "./components/Alert";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
  };

  return (
    <div className="container">

      <h2>Alert Component</h2>

      <div className="buttons">

        <button className="success-btn"
          onClick={() =>
            showAlert("success", "Donation request created successfully!")
          }>
          Success Alert
        </button>

        <button className="error-btn"
          onClick={() =>
            showAlert("error", "Something went wrong. Please try again!")
          }>
          Error Alert
        </button>

        <button className="warning-btn"
          onClick={() =>
            showAlert("warning", "Please complete your profile first!")
          }>
          Warning Alert
        </button>

      </div>

      {alert && (
        <Alert type={alert.type}
          message={alert.message} />
      )}

    </div>
  );
};

export default App;