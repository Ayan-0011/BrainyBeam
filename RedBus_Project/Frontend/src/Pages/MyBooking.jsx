import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Style/MyBookings.css";
import { ArrowBigLeft, ArrowBigRight, ChevronLeft } from "lucide-react";
import BusBookingCard from "./Train/BusBooking";
import TrainBookingCard from "./Train/TrainBooking";

const MyBookings = () => {

  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );


  const fetchBookings = async () => {
    const response = await axios.get("http://localhost:3000/my-booking");
    //console.log(response.data.booking);

    const userBookings = response.data.booking.filter(
      (booking) => booking.userId === currentUser.id);
     console.log(userBookings);
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
      <button onClick={() => navigate(-1)} className="details-back-btn">
        <ChevronLeft /> Back
      </button>


      {bookings.length === 0 ? (
        <div className="empty-booking">
          <h2>No Bookings Found</h2>
        </div>
      ) : (
        bookings.map((booking) =>
          booking.type === "bus" ? (
            <BusBookingCard key={booking._id} booking={booking} />
          ) : (
            <TrainBookingCard  key={booking._id} booking={booking} />
          )
        )
      )}
    </div>
  );






};


export default MyBookings;