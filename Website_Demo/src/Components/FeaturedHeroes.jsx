import React from "react";

const FeaturedHeroes = ({ heroes }) => {
  return (
    <section className="bg-gray-900 py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Meet the Roster
          </span>
          <h2 className="text-5xl font-bold text-white mt-3">
            Featured <span className="text-red-600">Heroes</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Discover the legendary superheroes of Marvel Universe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.slice(0, 4).map((hero, i) => (
            <div key={hero.id} className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-lg border border-white/5 hover:border-red-600/60 hover:-translate-y-2 transition-all duration-500 group"  >
        
              <div className="overflow-hidden relative">
                <img src={hero.image} alt={hero.name}  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                  {hero.name}
                </h3>

                <button className="mt-4 w-full bg-red-600/90 backdrop-blur px-6 py-2 rounded-lg text-white font-semibold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeroes;