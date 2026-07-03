import React from "react";
import Navbar from "../Components/Navbar";
import hero from "../assets/marvel.jpg";
import AboutMarvel from "../Components/AboutMarvel";
import FeaturedHeroes from "../Components/FeaturedHeroes";
import Footer from "../Components/Footer";
import State from "../Components/State";
import { heroes } from "../Data/Heros";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="relative h-screen">
      <Link to="/"> <img src={hero} alt="Marvel" className="w-full h-full object-cover" /> </Link>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase">Welcome To <span className="text-red-600 block mt-2"> Marvel Universe</span></h1>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl"> Discover legendary superheroes, their incredible powers,
          and explore the stories that shaped the Marvel Universe.
        </p>

      </div>

      <AboutMarvel/>

      <FeaturedHeroes heroes={heroes} />

      <State/>

      <Footer/>
    </div>
  );
};

export default Home;