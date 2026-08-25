import { useState } from "react";
import Header from "./Components/Header";
import ThemeToggle from "./Components/ThemToggle";


const Home = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-400 
        ${ darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900" }`}>
      <div className="max-w-6xl mx-auto px-6">

        <Header darkMode={darkMode} />

        <div className="flex flex-col items-center justify-center mt-24">

          <div className={`max-w-xl rounded-3xl shadow-xl p-10 text-center transition-all
             ${ darkMode ? "bg-gray-800" : "bg-white" }`}>

            <h2 className="text-4xl font-bold mb-5">
              {darkMode ? " Dark Theme"  : "Light Theme"}
            </h2>

            <p className="text-lg opacity-80 mb-8">
              Click the button below to switch between
              Light Mode and Dark Mode.
            </p>

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;