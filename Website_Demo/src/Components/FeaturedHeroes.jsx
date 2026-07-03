import React from "react";


const FeaturedHeroes = ({heroes}) => {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Featured <span className="text-red-600">Heroes</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Discover the legendary superheroes of Marvel Universe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.slice(0,4).map((hero) => (
            <div key={hero.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:scale-102 duration-300 group" >
              <div className="overflow-hidden">
                <img src={hero.image} alt={hero.name}  className="w-full h-[400px] object-cover group-hover:scale-110 duration-500" />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-white text-2xl font-bold"> {hero.name} </h3>

                <button className="mt-5 bg-red-600 px-6 py-2 rounded-lg text-white hover:bg-red-700 duration-300">  View Details </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeroes;