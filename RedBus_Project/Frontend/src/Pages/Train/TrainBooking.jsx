import { ArrowBigRight } from "lucide-react";

const TrainBookingCard = ({ booking }) => {

    return (
        <div className="booking-card">

            <div className="bus-name">
                <h2>{booking.train?.trainName}</h2>
                <span>{booking.coach?.coachType}</span>
            </div>

            <div className="route">
                <div>
                    <p>From</p>
                    <h3>{booking.train?.from}</h3>
                </div>

                <div className="arrow">
                    <ArrowBigRight />
                </div>

                <div>
                    <p>To</p>
                    <h3>{booking.train?.to}</h3>
                </div>
            </div>

            <div className="details">

                <div>
                    <span>Journey Date</span>
                    <p>{booking.train?.date}</p>
                </div>

                <div>
                    <span>Booked On</span>
                    <p>{new Date(booking.bookingDate)?.toLocaleDateString("en-IN")}</p>
                </div>

                <div>
                    <span>Coach</span>
                    <p>{booking.train?.coaches[0].coachName}</p>
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

export default TrainBookingCard;