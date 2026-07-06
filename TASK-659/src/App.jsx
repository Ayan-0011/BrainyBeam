import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Booking from "./Pages/Booking";
import Layout from "./Components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;