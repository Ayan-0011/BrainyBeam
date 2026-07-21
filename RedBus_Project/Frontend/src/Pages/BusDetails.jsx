import "../Style/BusDetails.css"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Seat from "../Components/seat";
import { ArrowBigRight, ArrowDownRightIcon, ArrowRightIcon, ChevronLeft, Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const BusDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate()

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

    const handleProceed = () => {

        if (selectedSeats.length === 0) {
            toast.warn("please Select Seat First");
            return
        }

        navigate("/passenger-info", {
            state: { bus, selectedSeats }
        });
    };

    return (
        <div className="bus-details-container">
            <button onClick={() => navigate(-1)} className="details-back-btn">
                <ChevronLeft /> Back
            </button>

            <div className="details-grid">
                <div className="details-left">
                    <div className="details-card">

                        <img src={bus.image[0]} className="bus-image" alt={bus.busName} />

                        <div className="details-content">
                            <div className="details-header">
                                <div>
                                    <h1>{bus.busName}</h1>
                                    <p>{bus.operator}</p>
                                </div>

                                <div className="rating-box">
                                    <p>
                                        <FaStar className="star-icon" />
                                        {bus.rating}
                                    </p>
                                </div>

                            </div>

                            <div className="time-row">
                                <div>
                                    <h2>{bus.departureTime}</h2>
                                    <p>{bus.from}</p>
                                </div>

                                <div className="time-center">
                                    <p>{bus.duration}</p>
                                    <div className="time-line"></div>
                                </div>

                                <div>
                                    <h2>{bus.arrivalTime}</h2>
                                    <p>{bus.to}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="seat-section">

                        <div className="seat-grid">
                            {bus.seatLayout.map((seat) => (
                                <Seat key={seat.seatNumber} seat={seat} selectedSeats={selectedSeats} handleSeat={handleSeat} price={bus.price} />
                            ))}
                        </div>

                        <div className="seat-status">
                            <div className="status-item">
                                <div className="status-box available"></div>
                                Available
                            </div>

                            <div className="status-item">
                                <div className="status-box selected"></div>
                                Selected
                            </div>

                            <div className="status-item">
                                <div className="status-box booked"></div>
                                Booked
                            </div>
                        </div>
                    </div>

                </div>

                <div className="summary-card">
                    <h2>Booking Summary</h2>

                    <hr />
                    <div className="summary-row">
                        <span>Bus</span>
                        <span>{bus.busName}</span>
                    </div>

                    <div className="summary-row">
                        <span>Route</span>
                        <span>{bus.from} <ArrowRightIcon size={15}/> {bus.to}</span>
                    </div>
                    <div>

                        <h3>Selected Seats</h3>
                        <div className="selected-seat-list">
                            {selectedSeats.length === 0 ? (
                                <span>No Seat</span>
                            ) : (
                                selectedSeats.map((seat) => (
                                    <span key={seat} className="seat-chip">
                                        {seat}
                                    </span>
                                ))
                            )}
                        </div>

                    </div>

                    <hr />

                    <div className="total-row">
                        <span>Total</span>
                        <span>₹{selectedSeats.length * bus.price}</span>
                    </div>
                    <button onClick={handleProceed} className="proceed-btn">
                        Proceed
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BusDetails;