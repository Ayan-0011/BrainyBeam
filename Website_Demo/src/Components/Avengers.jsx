import {
  FaFilm,
  FaUserFriends,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

import avengers from "../assets/marvel2.jpeg";
import story from "../assets/ironman2.jpeg";

import ironman from "../assets/ironman.jpeg";
import thor from "../assets/thor.jpeg";
import captain from "../assets/captain.jpeg";
import hulk from "../assets/hulk.jpeg"


const Avengers = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Banner */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center" style={{  backgroundImage: `url(${avengers})`, }} >
        <div className="bg-black/70 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-red-500">
            MARVEL UNIVERSE
          </h1>

          <p className="mt-5 text-zinc-300 text-lg text-center px-5">
            Discover the heroes, stories and adventures that changed cinema.
          </p>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src={story}
              alt=""
              className="rounded-3xl shadow-2xl "
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              About The Marvel Universe
            </h2>

            <p className="text-zinc-400 leading-8">
              Marvel Studios created one of the greatest cinematic
              universes ever made. From Iron Man's first suit to
              the epic battle against Thanos, Marvel has delivered
              unforgettable heroes and stories that inspire millions
              of fans around the world.
            </p>

            <p className="text-zinc-400 leading-8 mt-5">
              The Marvel Cinematic Universe connects superheroes,
              villains, and cosmic adventures into one massive
              storyline spanning dozens of blockbuster films.
            </p>

            <button className="mt-8 bg-red-600 px-8 py-3 rounded-xl hover:bg-red-700 duration-300">
              Explore Heroes
            </button>
          </div>
        </div>
      </section>

<section className="py-20 px-5 bg-black">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-5">
      Meet The Avengers
    </h2>

    <p className="text-zinc-400 text-center mb-16">
      The legendary heroes who protect Earth from every threat.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-zinc-900 rounded-3xl overflow-hidden group">
        <img
          src={ironman}
          alt=""
          className="h-[400px] w-full object-fit group-hover:scale-110 duration-500"
        />

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Iron Man
          </h3>

          <p className="text-zinc-400 mt-2">
            Genius, Billionaire, Playboy, Philanthropist.
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl overflow-hidden group">
        <img
          src={captain}
          alt=""
          className="h-[400px] w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Captain America
          </h3>

          <p className="text-zinc-400 mt-2">
            The First Avenger and symbol of courage.
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl overflow-hidden group">
        <img
          src={thor}
          alt=""
          className="h-[400px] w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Thor
          </h3>

          <p className="text-zinc-400 mt-2">
            The God of Thunder from Asgard.
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl overflow-hidden group">
        <img
          src={hulk}
          alt=""
          className="h-[400px] w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Hulk
          </h3>

          <p className="text-zinc-400 mt-2">
            The strongest Avenger with unlimited strength.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="py-20 px-5 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <FaFilm className="text-5xl text-red-500 mx-auto mb-5" />
            <h2 className="text-4xl font-bold">35+</h2>
            <p className="text-zinc-400 mt-2">Movies</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <FaUserFriends className="text-5xl text-red-500 mx-auto mb-5" />
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-zinc-400 mt-2">Heroes</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <FaGlobe className="text-5xl text-red-500 mx-auto mb-5" />
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="text-zinc-400 mt-2">Worlds</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <FaHeart className="text-5xl text-red-500 mx-auto mb-5" />
            <h2 className="text-4xl font-bold">1B+</h2>
            <p className="text-zinc-400 mt-2">Fans</p>
          </div>

        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Marvel Journey
          </h2>

          <div className="space-y-10">

            <div className="border-l-4 border-red-500 pl-8">
              <h3 className="text-2xl font-bold">
                2008 - Iron Man
              </h3>
              <p className="text-zinc-400 mt-3">
                The Marvel Cinematic Universe officially begins.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h3 className="text-2xl font-bold">
                2012 - The Avengers
              </h3>
              <p className="text-zinc-400 mt-3">
                Earth's mightiest heroes unite.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h3 className="text-2xl font-bold">
                2018 - Infinity War
              </h3>
              <p className="text-zinc-400 mt-3">
                Thanos collects the Infinity Stones.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h3 className="text-2xl font-bold">
                2019 - Endgame
              </h3>
              <p className="text-zinc-400 mt-3">
                The greatest superhero battle in history.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center px-5">

          <h2 className="text-5xl font-bold">
            Join The Marvel Adventure
          </h2>

          <p className="text-zinc-400 mt-6">
            Explore legendary heroes and relive the greatest cinematic universe ever created.
          </p>

          <button className="mt-10 bg-red-600 px-10 py-4 rounded-xl text-lg hover:bg-red-700 duration-300">
            Explore Now
          </button>

        </div>
      </section>

    </div>
  );
};

export default Avengers;