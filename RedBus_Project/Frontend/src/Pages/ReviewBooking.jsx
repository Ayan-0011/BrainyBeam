import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Style/ReviewBooking.css";
import axios from 'axios'
import { ChevronLeft } from "lucide-react";

const ReviewBooking = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);


    if (!state) {
        return <h2>No Booking Found</h2>;
    }

    const { bus, passengers, selectedSeats, contact, type, train, coach } = state;


    const totalAmount = type === "bus" ? selectedSeats.length * bus.price : coach.price;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    //console.log(bus);


    const confirmBooking = async () => {


        const booking = {
            id: Date.now(),

            type,

            userId: currentUser.id,
            userName: currentUser.name,
            userEmail: currentUser.email,

            bus: type === "bus" ? bus : null,

            train: type === "train" ? train : null,


            passengers,

            seats: type === "bus" ? selectedSeats : [],

            coach: type === "train" ? coach : null,


            contact,

            totalAmount,

            bookingStatus: "Confirmed",
        };

        console.log(booking);



        await axios.post("http://localhost:3000/booking", booking);


        toast.success("Booking Confirmed ");

        navigate("/my-booking");
    };

    return (

        <div className="review-container">

            <div className="review-left">

                <button
                    onClick={() => navigate(-1)}
                    className="back-btn"
                >
                    <ChevronLeft size={20} />
                    Back
                </button>

                <div className="review-card">

                    <div className="card-header">
                        <h2>
                            {type === "bus" ? " Bus Details" : " Train Details"}
                        </h2>
                    </div>

                    {type === "bus" ? (
                        <div className="details-grid">

                            <div><span>Bus</span><strong>{bus.busName}</strong></div>
                            <div><span>Operator</span><strong>{bus.operator}</strong></div>
                            <div><span>Route</span><strong>{bus.from} → {bus.to}</strong></div>
                            <div><span>Departure</span><strong>{bus.departureTime}</strong></div>
                            <div><span>Arrival</span><strong>{bus.arrivalTime}</strong></div>
                            <div><span>Seats</span><strong>{selectedSeats.join(", ")}</strong></div>

                        </div>
                    ) : (

                        <div className="details-grid">

                            <div><span>Train</span><strong>{train.trainName}</strong></div>
                            <div><span>Train No</span><strong>{train.trainNumber}</strong></div>
                            <div><span>Route</span><strong>{train.from} → {train.to}</strong></div>
                            <div><span>Departure</span><strong>{train.departureTime}</strong></div>
                            <div><span>Arrival</span><strong>{train.arrivalTime}</strong></div>
                            <div><span>Coach</span><strong>{coach.coachName}</strong></div>
                            <div><span>Class</span><strong>{coach.coachType}</strong></div>

                        </div>
                    )}

                </div>

            </div>

            <div className="review-summary">

                <h2>Fare Summary</h2>

                <div className="fare-row">
                    <span>Seat Price</span>
                    <>₹{totalAmount}</>
                </div>

                <div className="fare-row">
                    <span>Convenience Fee</span>
                    <>₹0</>
                </div>

                <hr />

                <div className="fare-total">
                    <span>Total Amount</span>
                    <>₹{totalAmount}</>
                </div>

                <button
                    className="confirm-btn"
                    onClick={confirmBooking}
                >
                    Confirm Booking
                </button>

            </div>

        </div>

    );
};

export default ReviewBooking;