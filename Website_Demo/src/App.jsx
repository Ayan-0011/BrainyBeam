import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Heros from "./Pages/Heros";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
        <Route path="/about" element={<><Navbar/><About /><Footer/></>} />
        <Route path="/hero" element={<><Navbar/><Heros /><Footer/></>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;