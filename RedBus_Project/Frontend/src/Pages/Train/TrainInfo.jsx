import '../../Style/BusInfomation.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaBackspace, FaBackward, FaStar } from "react-icons/fa";
import { Backpack, ChevronLeft } from "lucide-react";

const TrainInfo = () => {
    const [trains, setTrains] = useState([]);

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

            setTrains(res.data.train || res.data.train);
        } catch (err) {
            console.log(err);
        }
    };

    if (trains.length === 0) {
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

                {trains.map((train) => (

                    <div key={train._id} className="bus-card">

                        <div className="bus-grid">
                            <div className="bus-left">
                                <div className="bus-name-row">
                                    <h2>{train.trainName}</h2>
                                    <span>{train.trainNumber}</span>
                                </div>

                                <p className="bus-type">

                                </p>

                                <div className="bus-time-row">
                                    <div>
                                        <p>{train.from}</p>
                                        <h3>{train.departureTime}</h3>
                                    </div>

                                    <div className="bus-duration">
                                        <p>{train.duration}</p>
                                        <div className="bus-line">
                                            <div></div>
                                        </div>
                                    </div>

                                    <div className="bus-arrival">
                                        <p>{train.to}</p>
                                        <h3>{train.arrivalTime}</h3>
                                    </div>

                                </div>

                                <div className="coach-list">
                                    {train.coaches.map((coach, index) => (
                                        <div  key={index}
                                            className="coach-card"
                                            onClick={() =>
                                                navigate("/passenger-info", {
                                                    state: {
                                                        type: "train",
                                                        train,
                                                        coach
                                                    }
                                                })
                                            }>
                                            <div className="coach-top">
                                                <h3>{coach.coachName}</h3>
                                                <h4>₹{coach.price}</h4>
                                            </div>

                                            <div className="coach-body">
                                                <p>{coach.coachType}</p>

                                                <h2>Available {coach.availableSeats}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>



                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default TrainInfo;