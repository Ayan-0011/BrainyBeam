import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

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

            // Handle both APIs
            setBuses(res.data.bus || res.data.buses);

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
        <div className="max-w-7xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">
                Available Buses
            </h1>

            <div className="space-y-6">

                {buses.map((bus) => (

                    <div
                        key={bus._id}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col lg:flex-row gap-5"
                    >

                        {/* Image */}

                        <div className="lg:w-60">

                            <img
                                src={bus.image[0]}
                                alt={bus.busName}
                                className="rounded-xl w-full h-40 object-cover"
                            />

                        </div>

                        {/* Bus Details */}

                        <div className="flex-1">

                            <h2 className="text-2xl font-bold">
                                {bus.busName}
                            </h2>

                            <p className="text-gray-500">
                                {bus.busType}
                            </p>

                            <div className="flex items-center gap-8 mt-6">

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {bus.departureTime}
                                    </h3>

                                    <p className="text-gray-500">
                                        {bus.source}
                                    </p>

                                </div>

                                <div className="text-center">

                                    <p className="text-sm text-gray-500">
                                        {bus.duration}
                                    </p>

                                    <div className="w-24 border-t-2 border-dashed mt-2"></div>

                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {bus.arrivalTime}
                                    </h3>

                                    <p className="text-gray-500">
                                        {bus.destination}
                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4 mt-6 text-sm">

                                <span className="bg-gray-100 px-3 py-1 rounded-full">
                                    AC
                                </span>

                                <span className="bg-gray-100 px-3 py-1 rounded-full">
                                    Sleeper
                                </span>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    {bus.availableSeats} Seats Left
                                </span>

                            </div>

                        </div>

                        {/* Price */}

                        <div className="flex flex-col justify-center items-end">

                            <h2 className="text-3xl font-bold text-red-500">
                                ₹{bus.price}
                            </h2>

                            <p className="text-sm text-gray-500">
                                Per Seat
                            </p>

                            <button
                                onClick={() => navigate(`/bus/${bus._id}`)}
                                className="mt-5 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
                            >
                                View Seats
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default BusInformation;