import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResposiveMenu from "./ResposiveMenu";

const Navbar = () => {
  const [openNav, setOpenNav] = useState();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg">
      <h1 className="text-3xl font-extrabold text-white">
        <span className="text-red-500">M</span>ARVEL
      </h1>

      <ul className="hidden md:flex gap-8 font-medium text-lg text-white ">
        <li><NavLink to="/" className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " :"text-black"}cursor-pointer`} > Home  </NavLink></li>
        <li><NavLink to="/hero" className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : "text-black"}cursor-pointer`} > Heros </NavLink> </li>
        <li> <NavLink to="/about" className={({ isActive }) => `${isActive ? " border-b-3 transition border-red-500 " : "text-black"}cursor-pointer`} > About </NavLink> </li>
      </ul>

      <button className="bg-red-600 hidden md:block px-5 py-2 rounded-md hover:bg-red-700 transition">
        Explore
      </button>

      {
        openNav ? <HiMenuAlt3 onClick={() => setOpenNav(false)} className='h-7 w-7 ms-4 md:hidden' /> : <HiMenuAlt1
          onClick={() => setOpenNav(true)} className='h-7 w-7 ms-4 md:hidden' />
      }

      <ResposiveMenu openNav={openNav} setOpenNav={setOpenNav} />

    </nav>
  );
};

export default Navbar;