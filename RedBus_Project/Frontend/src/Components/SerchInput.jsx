import { Search, SearchCheck, ServerCrash } from "lucide-react";

const SearchInput = () => {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input type="text" placeholder="From" className="border rounded-xl p-4 outline-none" />

                <input type="text" placeholder="To" className="border rounded-xl p-4 outline-none" />

                <input type="date" className="border rounded-xl p-4 outline-none" />

                <button className="bg-red-500 hover:bg-red-600 flex gap-1 justify-center itme-center pt-4 text-white rounded-xl font-semibold">
                    <Search className="w-5" />
                    <p>
                        Search Buses
                    </p>
                </button>
            </div>
        </div>
    );
};

export default SearchInput;