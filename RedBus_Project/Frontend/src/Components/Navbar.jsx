import React from "react";
import logo from "../assets/img/Logo.png";
import bus from "../assets/img/bus_logo.svg";
import train from "../assets/img/train_logo.svg";
import hotel from "../assets/img/hotel_logo.svg";
import {CircleQuestionMarkIcon, CircleUser, Menu, User} from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link to ="/"> <img src={logo} alt="Logo" className="w-16" /></Link>
          <div className="flex items-center gap-2">
            <div className=" rounded-xl px-5 py-2 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition">
              <img src={bus} alt="Bus" className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">Bus Tickets</span>
            </div>

            <div className="rounded-xl px-5 py-2 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition">
              <img src={train} alt="Train" className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">Train Tickets</span>
            </div>

            <div className="rounded-xl px-5 py-2 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition">
              <img src={hotel} alt="Hotel" className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">Hotels</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex item-center gap-1 hover:text-red-600 font-medium">
            <Menu className="w-5"/>
            Booking
          </button>
          <button className="flex items-center gap-1 hover:text-red-600">
            <CircleQuestionMarkIcon className="w-5" />
            <span className="font-medium">Help</span>
          </button>
          <button className="flex items-center gap-2 hover:text-red-600">
            <CircleUser/>
            <span className="font-medium">Account</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;