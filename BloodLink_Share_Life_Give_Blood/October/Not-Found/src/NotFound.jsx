import React from "react";
import "./NotFound.css";

const NotFound = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="not-found-page">
      <div className="not-found-card">

        <div className="blood-drop">
          🩸
        </div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <button onClick={goHome}>
          Go Back Home
        </button>

      </div>
    </div>
  );
};

export default NotFound;