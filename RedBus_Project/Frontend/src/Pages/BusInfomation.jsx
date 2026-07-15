import { useEffect, useState } from "react";
import axios from "axios";

const BusInformation = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const res = await axios.get("http://localhost:3000/bus");
            console.log(res.data.bus);

            setBuses(res.data.bus);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-medium mb-6">
                Available Buses
            </h1>

            <div className="space-y-5">
                {buses.map((bus) => (
                    <div
                        key={bus._id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex items-center justify-between gap-5">
                        
                        <div className="w-50">
                            <img src={bus.image[0]} alt={bus.busName} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {bus.busName}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {bus.busType}
                            </p>

                            <div className="flex items-center gap-8 mt-4">
                                <div>
                                    <p className="text-lg font-semibold">{bus.departureTime}</p>
                                    <p className="text-xs text-gray-500">{bus.source}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-xs text-gray-500">{bus.duration}</p>
                                    <div className="w-20 border-t border-dashed border-gray-400 my-1"></div>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold">{bus.arrivalTime}</p>
                                    <p className="text-xs text-gray-500">{bus.destination}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                                <span> Sleeper</span>
                                <span> AC</span>
                                <span> {bus.availableSeats} Seats</span>
                            </div>
                        </div>

                        <div className="text-right flex flex-col items-end">
                            <h3 className="text-2xl font-bold text-red-500">
                                ₹{bus.price}
                            </h3>

                            <p className="text-xs text-green-600 mt-1">
                                {bus.availableSeats} Seats Left
                            </p>

                            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition">
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