import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-red-600"> MARVEL </h2>
            <p className="text-gray-400 mt-4 leading-7"> Explore the Marvel Universe and discover your favorite
              superheroes, their stories, and adventures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">   Quick Links </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-red-500 cursor-pointer transition"><Link to="/">Home</Link></li>
              <li className="hover:text-red-500 cursor-pointer transition"><Link to="/hero">Heroes</Link></li>
              <li className="hover:text-red-500 cursor-pointer transition"><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">
              <FaFacebook className="hover:text-red-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
              <FaGithub className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Marvel Universe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;