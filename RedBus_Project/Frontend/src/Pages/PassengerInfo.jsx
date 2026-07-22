import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "../Style/PassengerInfo.css";
import { ArrowRightIcon, ChevronLeft } from "lucide-react";

const PassengerInfo = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);

    if (!state) {
        return <h2>No Booking Found</h2>;
    }

    const { type, bus, train, selectedSeats, coach } = state;

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

        type === "bus"
            ? selectedSeats.map((seat) => ({
                seat,
                name: "",
                age: "",
                gender: "Male"
            }))
            : [
                {
                    seat: coach.coachName,
                    name: "",
                    age: "",
                    gender: "Male"
                }
            ]
    );

    const [contact, setContact] = useState({
        phone: "",
        email: "",
    });

    const handleContact = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const handlePassengerChange = (e) => {
        const { name, value, dataset } = e.target;
        const updated = [...passengers];
        updated[dataset.index][name] = value;
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
            state: { type:"bus", bus, selectedSeats,  passengers, contact, }
        });

        navigate("/review-booking", {
            state: { type:"train", train, coach, passengers, contact, }
        });
    };

    return (
        <div className="passenger-container">
            <button onClick={() => navigate(-1)} className="details-back-btn">
                <ChevronLeft /> Back
            </button>
            <div className="passenger-left">

                <h2>Passenger Details</h2>

                {passengers.map((passenger, index) => (
                    <div className="passenger-card" key={passenger.seat}>

                        <h3>
                            Passenger {index + 1} ({passenger.seat})
                        </h3>

                        <input type="text" placeholder="Full Name" name="name" value={passenger.name} data-index={index}
                            onChange={handlePassengerChange} />

                        <input type="number" placeholder="Age" value={passenger.age} name="age" data-index={index}
                            onChange={handlePassengerChange} />

                        <select value={passenger.gender} data-index={index} name="gender"
                            onChange={handlePassengerChange} >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                    </div>
                ))}

                <div className="contact-card">

                    <h2>Contact Details</h2>
                    <input type="text" name="phone" placeholder="Mobile Number" value={contact.phone} onChange={handleContact} />

                    <input type="email" name="email" placeholder="Email Address" value={contact.email} onChange={handleContact} />

                </div>

            </div>



            <div className="booking-summary">
                <h2>Booking Summary</h2>
                <hr />
                {type === "bus" && (
                    <>
                        <p><strong>Bus:</strong> {bus.busName}</p>

                        <p>
                            {bus.from} → {bus.to}
                        </p>

                        <p>Seats: {selectedSeats.join(", ")}</p>

                        <h3>₹ {selectedSeats.length * bus.price}</h3>
                    </>
                )}

                {type === "train" && (
                    <>
                        <p><strong>Train:</strong> {train.trainName}</p>

                        <p>
                            {train.from} → {train.to}
                        </p>

                        <p>
                            Coach : {coach.coachName}
                        </p>

                        <p>
                            Class : {coach.coachType}
                        </p>

                        <h3>₹ {coach.price}</h3>
                    </>
                )}

                <button className="continue-btn" onClick={handleContinue}>
                    Continue
                </button>

            </div>

        </div>
    );
};

export default PassengerInfo;