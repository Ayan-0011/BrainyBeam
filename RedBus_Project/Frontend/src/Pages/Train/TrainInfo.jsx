import '../../Style/BusInfomation.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaBackspace, FaBackward, FaStar } from "react-icons/fa";
import { Backpack, ChevronLeft } from "lucide-react";

const TrainInfo = () => {
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

            let url = "http://localhost:3000/train";

            if (source && destination) {
                url = `http://localhost:3000/search-bus?source=${source}&destination=${destination}`;
            }

            const res = await axios.get(url);
            console.log(res.data.train);

            setBuses(res.data.train || res.data.train);
        } catch (err) {
            console.log(err);
        }
    };

    if (buses.length === 0) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-700">
                        No Train Found
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Try another route.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bus-info-container">

            <div className="bus-header">

                <button
                    onClick={() => navigate(-1)}
                    className="back-btn" >
                    <ChevronLeft />
                    Back
                </button>

                <h1 className="bus-title">
                    Available Trains
                </h1>

            </div>

            <div className="bus-list">

                {buses.map((bus) => (

                    <div key={bus._id} className="bus-card">

                        <div className="bus-grid">
                            <div className="bus-left">
                                <div className="bus-name-row">
                                    <h2>{bus.trainName}</h2>
                                    <span>{bus.trainNumber}</span>
                                </div>

                                <p className="bus-type">
                                   
                                </p>

                                <div className="bus-time-row">
                                    <div>
                                        <p>{bus.from}</p>
                                        <h3>{bus.departureTime}</h3>
                                    </div>

                                    <div className="bus-duration">
                                        <p>{bus.duration}</p>
                                        <div className="bus-line">
                                            <div></div>
                                        </div>
                                    </div>

                                    <div className="bus-arrival">
                                        <p>{bus.to}</p>
                                        <h3>{bus.arrivalTime}</h3>
                                    </div>

                                </div>

                                <div className="amenities">
                                    {bus.amenities.slice(0, 4).map((item, index) => (
                                        <span key={index}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            <div className="bus-right">
                                <div className="rating">
                                    <FaStar size={14} /> {bus.rating}
                                </div>

                                <div>
                                    <h2 className="price">
                                        ₹{bus.price}
                                    </h2>
                                </div>

                                <button
                                    onClick={() => navigate(`/Train/${bus._id}`)}
                                    className="seats-btn">
                                    View Seats
                                </button>
                            </div>

                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default TrainInfo;