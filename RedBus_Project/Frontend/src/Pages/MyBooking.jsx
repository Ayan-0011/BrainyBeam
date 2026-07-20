import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Style/MyBookings.css";

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );


    const fetchBookings = async () => {
        const response = await axios.get("http://localhost:3000/my-booking");
        //console.log(response.data.booking);

        const userBookings = response.data.booking.filter(
            (booking) => booking.userId === currentUser.id);
       // console.log(userBookings);
        setBookings(userBookings);
    };

    useEffect(() => {
        if (!currentUser) return;
        fetchBookings();
    }, []);


    // Login  UI

    if (!currentUser) {

        return (

            <div className="login-required">
                <div className="login-box">

                    <h2>
                        Login Required
                    </h2>
                    <p>
                        Please login to view your booking history.
                    </p>

                    <Link to="/login" className="login-btn"  >
                        Login Now
                    </Link>
                </div>
            </div>

        );
    }

    return (
  <div className="booking-container">
    <h1 className="heading">My Bookings</h1>

    {bookings.length === 0 ? (
      <div className="empty-booking">
        <h2>No Bookings Found</h2>
      </div>
    ) : (
      bookings.map((booking) => (
        <div className="booking-card" key={booking._id}>

          <div className="bus-name">
            <h2>{booking.bus.busName}</h2>
            <span>{booking.bus.busType}</span>
          </div>

          <div className="route">
            <div>
              <p>From</p>
              <h3>{booking.bus.from}</h3>
            </div>

            <div className="arrow">→</div>

            <div>
              <p>To</p>
              <h3>{booking.bus.to}</h3>
            </div>
          </div>

          <div className="details">

            <div>
              <span>Journey Date</span>
              <p>{booking.bus.journeyDate}</p>
            </div>

            <div>
              <span>Booked On</span>
              <p>{booking.bus.bookingDate}</p>
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
      ))
    )}
  </div>
);






};


export default MyBookings;