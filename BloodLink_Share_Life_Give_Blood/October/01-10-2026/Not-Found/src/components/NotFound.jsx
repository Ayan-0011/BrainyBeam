import React from "react";
import "./NotFound.css";
import { Droplet } from 'lucide-react'

const NotFound = () => {


  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="blood-drop">
          <Droplet size={30} />
        </div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>
        <button>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;