import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BusDetails = () => {

    const { id } = useParams();

    const [bus, setBus] = useState(null);

    useEffect(() => {
        getBus();
    }, []);

    async function getBus() {
        const res = await axios.get(`http://localhost:3000/bus/${id}`);
        setBus(res.data.bus);
    }

    if (!bus) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="max-w-7xl mx-auto p-6">

            <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">

                    <img
                        src={bus.image[0]}
                        className="rounded-xl w-full h-80 object-cover"
                    />

                    <h1 className="text-3xl font-bold mt-5">
                        {bus.busName}
                    </h1>

                    <p>{bus.busType}</p>

                    <div className="flex justify-between mt-8">

                        <div>
                            <h2 className="text-xl font-bold">
                                {bus.departureTime}
                            </h2>

                            <p>{bus.source}</p>
                        </div>

                        <div className="text-center">
                            {bus.duration}
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">
                                {bus.arrivalTime}
                            </h2>

                            <p>{bus.destination}</p>
                        </div>

                    </div>

                    {/* Seat Layout yahan aayega */}

                </div>

                {/* RIGHT */}

                <div className="bg-white rounded-xl p-6 shadow sticky top-5 h-fit">

                    <h2 className="text-2xl font-bold">
                        {bus.busName}
                    </h2>

                    <p className="text-gray-500">
                        {bus.busType}
                    </p>

                    <hr className="my-5"/>

                    <div className="space-y-3">

                        <div className="flex justify-between">
                            <span>Price</span>
                            <span>₹{bus.price}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Seats Left</span>
                            <span>{bus.availableSeats}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Duration</span>
                            <span>{bus.duration}</span>
                        </div>

                    </div>

                    <button className="w-full mt-8 bg-red-500 text-white py-3 rounded-lg">
                        Proceed
                    </button>

                </div>

            </div>

        </div>
    );
};

export default BusDetails;