import React, { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Donor Dashboard</h1>
      <p>Welcome to BloodLink.</p>
    </div>
  );
};

export default App;