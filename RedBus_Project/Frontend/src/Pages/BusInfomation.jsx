import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaBackspace, FaBackward } from "react-icons/fa";
import { Backpack, ChevronLeft } from "lucide-react";

const BusInformation = () => {
    const [buses, setBuses] = useState([]);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const source = searchParams.get("source");
    const destination = searchParams.get("destination");

    useEffect(() => {
        fetchBuses();
    }, [source, destination]);

    const fetchBuses = async () => {
        try {

            let url = "http://localhost:3000/bus";

            if (source && destination) {
                url = `http://localhost:3000/search-bus?source=${source}&destination=${destination}`;
            }

            const res = await axios.get(url);
            console.log(res.data);

            setBuses(res.data.buses || res.data.bus);
        } catch (err) {
            console.log(err);
        }
    };

    if (buses.length === 0) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-700">
                        No Buses Found
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Try another route.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">

            <div className="flex items-center gap-3 mb-6">

                <button onClick={() => navigate(-1)}
                 className="border border-gray-900 px-3 flex py-2 rounded-lg hover:bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer transition" >
                    <ChevronLeft />Back
                </button>

                <h1 className="text-2xl font-bold text-gray-800">
                    Available Buses
                </h1>

            </div>


            <div className="space-y-4">

                {buses.map((bus) => (

                    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition" >

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

                            <div className="lg:col-span-10">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {bus.busName}
                                    </h2>
                                    <span className="text-sm text-gray-500">
                                        {bus.operator}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">
                                    {bus.busType.join(" • ")}
                                </p>

                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {bus.departureTime}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {bus.from}
                                        </p>
                                    </div>

                                    <div className="flex-1 mx-5 text-center">
                                        <p className="text-xs text-gray-500">
                                            {bus.duration}
                                        </p>
                                        <div className="relative mt-2">
                                            <div className="border-t border-dashed border-gray-400"></div>
                                        </div>

                                    </div>

                                    <div className="text-right">
                                        <h3 className="text-xl font-semibold">
                                            {bus.arrivalTime}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {bus.to}
                                        </p>
                                    </div>
                                </div>



                                <div className="flex flex-wrap gap-2 mt-5">
                                    {bus.amenities.slice(0, 4).map((item, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600" >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="flex lg:flex-col justify-between lg:items-end items-center gap-4">
                                        <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-semibold text-sm">
                                            ⭐ {bus.rating}
                                        </div>

                                    <div>

                                        <h2 className="text-2xl font-bold text-red-500">
                                            ₹{bus.price}
                                        </h2>

                                        <p className="text-green-600 text-sm font-medium">
                                            {bus.availableSeats} Seats Left
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => navigate(`/bus/${bus._id}`)}
                                         className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg cursor-pointer font-medium transition active:scale-95" >
                                        View Seats
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default BusInformation;