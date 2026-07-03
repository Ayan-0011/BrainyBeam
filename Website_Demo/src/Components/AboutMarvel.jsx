import React from "react";
import { Link } from "react-router-dom";

const AboutMarvel = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Explore the <span className="text-red-600">Marvel Universe</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
          Marvel is home to some of the world's most iconic superheroes,
          including Iron Man, Spider-Man, Thor, Hulk, and many more.
          Discover their powers, stories, and adventures in one place.
        </p>

        <Link to="hero"><button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-semibold transition duration-300">
          Explore Heroes
        </button></Link>
      </div>
    </section>
  );
};

export default AboutMarvel;