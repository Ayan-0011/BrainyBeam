import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "app dark" : "app"}>
      <h1>My Website</h1>

      <p>
        This is my frontend website with dark mode support.
      </p>

      <button className="theme-btn" onClick={toggleDarkMode}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default App;