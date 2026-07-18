import "../Style/Seat.css";

const Seat = ({ seat, selectedSeats, handleSeat, price }) => {

    const isBooked = seat.status === "booked";
    const isSelected = selectedSeats.includes(seat.seatNumber);

    return (
        <button
            disabled={isBooked}
            onClick={() => handleSeat(seat.seatNumber, seat.status)}
            className={`seat-btn
                ${isBooked ? "seat-booked"
                : isSelected ? "seat-selected"
                : "seat-available"
            }`} >
            <span className="seat-number">
                {seat.seatNumber}
            </span>

            {isBooked ? (
                <span className="seat-text">
                    Sold
                </span>
            ) : (
                <span className="seat-text">
                    ₹{price}
                </span>
            )}

        </button>
    );
};

export default Seat;