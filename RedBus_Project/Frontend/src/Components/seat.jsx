const Seat = ({ seat, selectedSeats, handleSeat, price }) => {

    const isBooked = seat.status === "booked";
    const isSelected = selectedSeats.includes(seat.seatNumber);

    return (
        <button disabled={isBooked}
            onClick={() => handleSeat(seat.seatNumber, seat.status)}
            className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center transition

            ${isBooked ? "bg-gray-200 border-gray-400 cursor-not-allowed"
                    : isSelected ? "bg-yellow-400 border-yellow-500"
                        : "bg-green-100 border-green-600 hover:bg-green-200"
                }
            `}
        >
            <span className="text-xs font-bold">
                {seat.seatNumber}
            </span>

            {isBooked ? (
                <span className="text-[10px] text-gray-500">
                    Sold
                </span>
            ) : (
                <span className="text-[10px]">
                    ₹{price}
                </span>
            )}
        </button>
    );
};

export default Seat;