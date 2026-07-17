import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Seat from "../Components/seat";

const BusDetails = () => {

    const { id } = useParams();

    const [bus, setBus] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

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

    const handleSeat = (seatNumber, status) => {

        if (status === "booked") return;

        if (selectedSeats.includes(seatNumber)) {

            setSelectedSeats(
                selectedSeats.filter(s => s !== seatNumber)
            );

        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);

        }

    };

    return (
        <div className="max-w-7xl mx-auto p-6">

            <div className="grid lg:grid-cols-3 gap-8">


                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">

                    <div className="bg-white rounded-2xl shadow p-5 flex gap-5 items-center">

                        <img src={bus.image[0]}
                            className="w-44 h-28 rounded-xl object-cover"/>

                        <div className="flex-1">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        {bus.busName}
                                    </h1>
                                    <p className="text-gray-500">
                                        {bus.operator}
                                    </p>
                                </div>

                                <div className="bg-green-500 text-white px-4 py-2 rounded-lg h-fit">
                                     {bus.rating}
                                </div>

                            </div>

                            <div className="flex justify-between mt-6">

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        {bus.departureTime}
                                    </h2>

                                    <p>{bus.from}</p>

                                </div>

                                <div className="text-center">

                                    <p>{bus.duration}</p>

                                    <div className="w-40 border-t-2 border-dashed mt-2"></div>

                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        {bus.arrivalTime}
                                    </h2>

                                    <p>{bus.to}</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Seat Layout yahan aayega */}
                    <div className="bg-white rounded-xl shadow p-6 mt-8">

                        <div className="flex justify-end mb-6">

                            <div className="w-12 h-12 rounded-full border flex justify-center items-center text-2xl">
                                🚍
                            </div>

                        </div>

                        <div className="grid grid-cols-4 gap-2">

                            {
                                bus.seatLayout.map((seat) => (

                                    <Seat key={seat.seatNumber}
                                        seat={seat}
                                        selectedSeats={selectedSeats}
                                        handleSeat={handleSeat}
                                        price={bus.price} />

                                ))
                            }

                        </div>

                    </div>
                    <div className="flex gap-8 mt-8">

                        <div className="flex items-center gap-2">

                            <div className="w-5 h-5 bg-green-200 border-2 border-green-600 rounded"></div>

                            Available

                        </div>

                        <div className="flex items-center gap-2">

                            <div className="w-5 h-5 bg-yellow-400 border-2 border-yellow-500 rounded"></div>

                            Selected

                        </div>

                        <div className="flex items-center gap-2">

                            <div className="w-5 h-5 bg-gray-300 border-2 border-gray-500 rounded"></div>

                            Booked

                        </div>

                    </div>
                </div>

                {/* RIGHT */}

                <div className="bg-white rounded-xl p-6 shadow sticky top-5 h-fit">

                    <h2 className="text-2xl font-bold">

                        Booking Summary

                    </h2>

                    <hr className="my-5" />

                    <div className="space-y-4">

                        <div className="flex justify-between">

                            <span>Bus</span>

                            <span>{bus.busName}</span>

                        </div>

                        <div className="flex justify-between">

                            <span>Route</span>

                            <span>{bus.from} → {bus.to}</span>

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                Selected Seats

                            </h3>

                            <div className="flex gap-2 mt-3 flex-wrap">

                                {
                                    selectedSeats.length === 0 ?

                                        <span>No Seat</span>

                                        :

                                        selectedSeats.map((seat) => (

                                            <span
                                                key={seat}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                            >

                                                {seat}

                                            </span>

                                        ))

                                }

                            </div>

                        </div>

                        <hr />

                        <div className="flex justify-between text-xl font-bold">

                            <span>Total</span>

                            <span>

                                ₹{selectedSeats.length * bus.price}

                            </span>

                        </div>

                        <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-xl">

                            Proceed

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BusDetails;