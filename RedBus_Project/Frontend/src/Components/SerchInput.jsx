import { Search, MapPin, CalendarDays, ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchInput = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState({
        source: "",
        destination: "",
        date: ""
    });

    const handleChange = (e) => {
        const formattedDate = new Date(search.date).toLocaleDateString("en-GB");
        //console.log(formattedDate);
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const swapLocation = () => {
        setSearch({ ...search, source: search.destination, destination: search.source });
    };

    const handleSearch = () => {

        if (!search.source.trim()) {
            toast.error("Please enter source city");
            return;
        }

        if (!search.destination.trim()) {
            toast.error("Please enter destination city");
            return;
        }

        if (search.source.toLowerCase() === search.destination.toLowerCase()) {
            toast.error("Source and Destination cannot be same");
            return;
        }

        if (!search.date) {
            toast.error("Please select journey date");
            return;
        }

        navigate(
            `/bus-info?source=${search.source}&destination=${search.destination}&date=${search.date}`
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

                <div className="relative">

                    <MapPin className="absolute left-4 top-4 text-red-500" />

                    <input type="text" name="source" placeholder="From" value={search.source}
                        onChange={handleChange}
                        className="w-full border rounded-xl pl-12 p-4 outline-none focus:border-red-500" />
                </div>

                <button onClick={swapLocation}
                    className="absolute right-231 top-9 z-50 bg-white border shadow-md hover:bg-red-500 hover:text-white p-2 rounded-full transition">
                    <ArrowLeftRight size={19} />
                </button>

                <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-red-500" />
                    <input type="text" name="destination" placeholder="To" value={search.destination}
                        onChange={handleChange}
                        className="w-full border rounded-xl pl-12 p-4 outline-none focus:border-red-500" />


                </div>

                <div className="relative">

                    <CalendarDays className="absolute left-4 top-4 text-red-500" />

                    <input type="date" name="date" value={search.date}
                        onChange={handleChange}
                        className="w-full border rounded-xl pl-12 p-4 outline-none focus:border-red-500" />

                </div>

                <button onClick={handleSearch}
                    className="bg-red-500 hover:bg-red-600 rounded-xl text-white flex items-center justify-center gap-2 font-semibold" >
                    <Search size={20} />
                    Search Buses
                </button>

            </div>
            <div className="flex justify-center mt-5">

                <button onClick={() => navigate("/bus-info")}
                    className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg font-medium transition active:scale-95" >
                    View All Buses
                </button>

            </div>
        </div>
    );
};

export default SearchInput;