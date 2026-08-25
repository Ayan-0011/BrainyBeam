const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button  onClick={() => setDarkMode((prev) => !prev)}
      className={`px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 active:scale-95 
        ${ darkMode
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-gray-900 text-white hover:bg-gray-700" }`} >

      {darkMode ? " Switch to Light Mode" : " Switch to Dark Mode"}
      
    </button>
  );
};

export default ThemeToggle;