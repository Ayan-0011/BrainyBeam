import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-xl mx-auto mb-8">

      <div className="relative">
        <Search size={20}  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input type="text" placeholder="Search your favorite food..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>
  );
};

export default SearchBar;