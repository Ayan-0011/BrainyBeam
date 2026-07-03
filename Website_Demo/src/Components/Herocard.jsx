const HeroCard = ({ hero }) => {
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-300 group">
      <div className="overflow-hidden">
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-[380px] object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-white">
          {hero.name}
        </h2>

        <p className="text-red-500 mt-2">
          {hero.realName}
        </p>

        <button className="mt-5 bg-red-600 px-6 py-2 rounded-lg text-white hover:bg-red-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HeroCard;