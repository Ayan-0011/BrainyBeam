import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-semibold"
      : "text-gray-700 hover:text-red-600";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-red-600">
          ShopEase
        </Link>

        <div className="hidden md:flex gap-8">
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/products">Products</NavLink>
          <NavLink className={navClass} to="/cart">Cart</NavLink>
          <NavLink className={navClass} to="/booking">Booking</NavLink>
        </div>

        <div className="flex items-center gap-5">

          <ShoppingCart className="cursor-pointer" />

          <button className="md:hidden"  onClick={() => setOpen(!open)} >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-white border-t">

          <NavLink  className="px-5 py-3" to="/"  onClick={() => setOpen(false)} >
            Home
          </NavLink>

          <NavLink className="px-5 py-3"  to="/products" onClick={() => setOpen(false)} >
            Products
          </NavLink>

          <NavLink className="px-5 py-3" to="/cart" onClick={() => setOpen(false)} >
            Cart
          </NavLink>

          <NavLink className="px-5 py-3" to="/booking" onClick={() => setOpen(false)} >
            Booking
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;