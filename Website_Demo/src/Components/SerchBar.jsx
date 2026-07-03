const SearchBar = () => {
  return (
    <div className="max-w-xl mx-auto py-10 px-5">
      <input
        type="text"
        placeholder="Search your favorite hero..."
        className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 outline-none focus:border-red-500"
      />
    </div>
  );
};

export default SearchBar;