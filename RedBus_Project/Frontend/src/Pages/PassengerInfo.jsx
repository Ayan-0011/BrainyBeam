import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "../Style/PassengerInfo.css";

const PassengerInfo = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state);
    
    if (!state) {
        return <h2>No Booking Found</h2>;
    }

    const { bus, selectedSeats } = state;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        return (
            <div className="login-required">
                <h2>Login Required</h2>

                <p>Please login or create an account to continue booking.</p>

                <button onClick={() => navigate("/login")}>
                    Login
                </button>

                <button onClick={() => navigate("/register")}>
                    Register
                </button>
            </div>
        );
    }

    const [passengers, setPassengers] = useState(
        
        selectedSeats.map((seat) => ({
            seat,
            name: "",
            age: "",
            gender: "Male",
        }))
    );

    const [contact, setContact] = useState({
        phone: "",
        email: "",
    });

    const handlePassengerChange = (index, field, value) => {
        const updated = [...passengers];
        updated[index][field] = value;
        setPassengers(updated);
    };

    const handleContinue = () => {
        for (let passenger of passengers) {
            if (
                !passenger.name ||
                !passenger.age ||
                !passenger.gender
            ) {
                toast.warning("Please fill all passenger details.");
                return;
            }
        }

        if (!contact.phone || !contact.email) {
            toast.warning("Please enter contact details.");
            return;
        }

        navigate("/review-booking", {
            state: {
                bus,
                selectedSeats,
                passengers,
                contact,
            },
        });
    };

    return (
        <div className="passenger-container">

            <div className="passenger-left">

                <h2>Passenger Details</h2>

                {passengers.map((passenger, index) => (
                    <div className="passenger-card" key={passenger.seat}>

                        <h3>
                            Passenger {index + 1} ({passenger.seat})
                        </h3>

                        <input type="text" placeholder="Full Name"
                            value={passenger.name}
                            onChange={(e) =>
                                handlePassengerChange( index,"name",  e.target.value ) }
                        />

                        <input
                            type="number"
                            placeholder="Age"
                            value={passenger.age}
                            onChange={(e) =>
                                handlePassengerChange(
                                    index,
                                    "age",
                                    e.target.value
                                )
                            }
                        />

                        <select
                            value={passenger.gender}
                            onChange={(e) =>
                                handlePassengerChange(
                                    index,
                                    "gender",
                                    e.target.value
                                )
                            }
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                    </div>
                ))}

                <div className="contact-card">

                    <h2>Contact Details</h2>

                    <input
                        type="text"
                        placeholder="Mobile Number"
                        value={contact.phone}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                phone: e.target.value,
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={contact.email}
                        onChange={(e) =>
                            setContact({
                                ...contact,
                                email: e.target.value,
                            })
                        }
                    />

                </div>

            </div>

            {/* Right Section */}

            <div className="booking-summary">

                <h2>Booking Summary</h2>

                <hr />

                <p>
                    <strong>Bus:</strong> {bus.busName}
                </p>

                <p>
                    <strong>Route:</strong> {bus.from} > {bus.to}
                </p>

                <p>
                    <strong>Seats:</strong>
                </p>

                <div className="seat-list">
                    {selectedSeats.map((seat) => (
                        <span key={seat} className="seat-chip">
                            {seat}
                        </span>
                    ))}
                </div>

                <hr />

                <h3>
                    Total : ₹
                    {selectedSeats.length * bus.price}
                </h3>

                <button
                    className="continue-btn"
                    onClick={handleContinue}
                >
                    Continue
                </button>

            </div>

        </div>
    );
};

export default PassengerInfo;