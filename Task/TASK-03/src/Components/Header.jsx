const Header = ({ darkMode }) => {
  return (
    <header className="flex justify-between items-center py-5">
      <h1 className="text-3xl font-bold">
         Theme Switcher
      </h1>

      <span
        className={`px-4 py-2 rounded-full font-semibold 
            ${darkMode ? "bg-gray-700 text-white" : "bg-yellow-200 text-yellow-800"  }`} >
                
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </header>
  );
};

export default Header;