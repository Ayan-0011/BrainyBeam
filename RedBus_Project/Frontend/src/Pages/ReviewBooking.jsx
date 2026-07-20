import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Style/ReviewBooking.css";

const ReviewBooking = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state);
    

    if (!state) {
        return <h2>No Booking Found</h2>;
    }

    const { bus, passengers, selectedSeats, contact } = state;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const totalAmount = selectedSeats.length * bus.price;

    const confirmBooking = () => {

        const bookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        const booking = {

            id: Date.now(),

            userId: currentUser.id,
            userName: currentUser.name,
            userEmail: currentUser.email,

            bus,

            passengers,

            selectedSeats,

            contact,

            totalAmount,

            bookingStatus: "Confirmed",

            bookingDate: new Date().toLocaleString()

        };

        bookings.push(booking);

        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );

        toast.success("Booking Confirmed ");

        navigate("/my-bookings");
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