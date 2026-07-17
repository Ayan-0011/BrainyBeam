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
        setSearch({...search, source: search.destination, destination: search.source });
    };

    const handleSearch = () => {

       navigate(`/bus-info?source=${search.source}&destination=${search.destination}&date=${search.date}` );
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
                        className="absolute right-231 top-9 z-50 bg-gray-200 hover:bg-gray-300 p-2 rounded-full" >
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
            <button onClick={()=>navigate('/bus-info')}
             className="bg-red-500 text-white px-4 py-1 font-medium text-lg rounded-md active:scale-95 absolute left-148 top-23">All Buses</button>
        </div>
    );
};

export default SearchInput;