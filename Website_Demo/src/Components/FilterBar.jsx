const FilterBar = () => {
  return (
    <div className="flex justify-center gap-4 flex-wrap mb-12 px-5">
      <button className="bg-red-600 px-6 py-2 rounded-lg text-white">
        All
      </button>

      <button className="bg-zinc-900 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition">
        Avengers
      </button>

      <button className="bg-zinc-900 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition">
        Guardians
      </button>

      <button className="bg-zinc-900 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition">
        X-Men
      </button>
    </div>
  );
};

export default FilterBar;