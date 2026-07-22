import { ArrowBigRight } from "lucide-react";

const BusBookingCard = ({ booking }) => {
    
    return (
        
        <div className="booking-card">


            <div className="bus-name">
                <h2>{booking.bus?.busName}</h2>
                <span>{booking.bus?.busType.join(", ")}</span>
            </div>

            <div className="route">
                <div>
                    <p>From</p>
                    <h3>{booking.bus?.from}</h3>
                </div>

                <div className="arrow">
                    <ArrowBigRight />
                </div>

                <div>
                    <p>To</p>
                    <h3>{booking.bus?.to}</h3>
                </div>
            </div>

            <div className="details">
                <div>
                    <span>Journey Date</span>
                    <p>{booking.bus?.date}</p>
                </div>

                <div>
                    <span>Booked On</span>
                    <p>{new Date(booking.bookingDate).toLocaleDateString("en-IN")}</p>
                </div>

                <div>
                    <span>Seats</span>
                    <p>{booking.seats.join(", ")}</p>
                </div>

                <div>
                    <span>Total Fare</span>
                    <p>₹{booking.totalAmount}</p>
                </div>
            </div>

            <div className="passenger-box">
                <h4>Passengers</h4>

                {booking.passengers.map((passenger, index) => (
                    <div className="passenger" key={index}>
                        <span>{passenger.name}</span>
                        <span>{passenger.age}Y</span>
                        <span>{passenger.gender}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BusBookingCard;