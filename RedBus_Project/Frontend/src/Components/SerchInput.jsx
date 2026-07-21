import { Search, MapPin, CalendarDays, ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchInput = (props) => {

    const navigate = useNavigate();

    const [search, setSearch] = useState({
        source: "",
        destination: "",
        date: ""
    });

    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const swapLocation = () => {
        setSearch({
            ...search,
            source: search.destination,
            destination: search.source
        });
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
            `/${props.name}-info?source=${search.source}&destination=${search.destination}&date=${search.date}`
        );
    };

    return (
        <div className="search-box">

            <div className="search-grid">

                <div className="input-box">

                    <MapPin className="input-icon" />

                    <input type="text" name="source" placeholder="From" value={search.source} onChange={handleChange} className="search-input"  />

                </div>

                <button  className="swap-btn" onClick={swapLocation} >
                    <ArrowLeftRight size={18} />
                </button>

                <div className="input-box">

                    <MapPin className="input-icon" />

                    <input type="text" name="destination" placeholder="To" value={search.destination} onChange={handleChange} className="search-input"  />

                </div>

                <div className="input-box">

                    <CalendarDays className="input-icon" />

                    <input  type="date" name="date" value={search.date} onChange={handleChange}
                        className="search-input" />

                </div>

                <button className="search-btn"  onClick={handleSearch} >
                    <Search size={20} />
                    Search {props.name}
                </button>

            </div>

            <div className="view-all">

                <button className="view-btn"
                    onClick={() => navigate(`/${props.name}-info`)} >
                    View All {props.name}
                </button>

            </div>

        </div>
    );
};

export default SearchInput;