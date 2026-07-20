import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Style/ReviewBooking.css";
import axios from 'axios'

const ReviewBooking = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state);
    

    if (!state) {
        return <h2>No Booking Found</h2>;
    }

    const { bus, passengers, selectedSeats, contact } = state;
    const totalAmount = selectedSeats.length * bus.price;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    //console.log(bus);
    
    
    const confirmBooking = async() => {
        
    


        const booking = {

            id: Date.now(),

            userId: currentUser.id,
            userName: currentUser.name,
            userEmail: currentUser.email,

            bus:bus,

            passengers,

            seats:selectedSeats,

            contact,

            totalAmount,

            bookingStatus: "Confirmed",

            bookingDate: new Date().toLocaleString()

        };

       // console.log(booking);
        

        
        await axios.post("http://localhost:3000/booking",booking);


        toast.success("Booking Confirmed ");

        navigate("/my-booking");
    };

    return (

        <div className="review-container">

            {/* Left */}

            <div className="review-left">

                <div className="review-card">

                    <h2>Bus Details</h2>

                    <p><strong>Bus :</strong> {bus.busName}</p>

                    <p><strong>Operator :</strong> {bus.operator}</p>

                    <p>
                        <strong>Route :</strong>
                        {bus.from} → {bus.to}
                    </p>

                    <p>
                        <strong>Departure :</strong>
                        {bus.departureTime}
                    </p>

                    <p>
                        <strong>Arrival :</strong>
                        {bus.arrivalTime}
                    </p>

                    <p>
                        <strong>Seats :</strong>

                        {
                            selectedSeats.join(", ")
                        }

                    </p>

                </div>

                <div className="review-card">

                    <h2>Passenger Details</h2>

                    {

                        passengers.map((passenger, index) => (

                            <div
                                key={index}
                                className="passenger-item"
                            >

                                <h4>

                                    Passenger {index + 1}

                                </h4>

                                <p>

                                    Name :
                                    {passenger.name}

                                </p>

                                <p>

                                    Age :
                                    {passenger.age}

                                </p>

                                <p>

                                    Gender :
                                    {passenger.gender}

                                </p>

                                <p>

                                    Seat :
                                    {passenger.seat}

                                </p>

                                <hr />

                            </div>

                        ))

                    }

                </div>

                <div className="review-card">

                    <h2>Contact Details</h2>

                    <p>

                        <strong>Phone :</strong>

                        {contact.phone}

                    </p>

                    <p>

                        <strong>Email :</strong>

                        {contact.email}

                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="review-summary">

                <h2>Fare Summary</h2>

                <hr />

                <p>

                    Seat Fare

                    <span>

                        ₹{totalAmount}

                    </span>

                </p>

                <p>

                    Convenience Fee

                    <span>

                        ₹0

                    </span>

                </p>

                <hr />

                <h3>

                    Total

                    <span>

                        ₹{totalAmount}

                    </span>

                </h3>

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