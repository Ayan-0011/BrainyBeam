const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busName: String,
    busNumber: String,
    operator: String,
    from: String,
    to: String,
    date:String,
    departureTime: String,
    arrivalTime: String,
    duration: String,
    totalSeats: Number,
    availableSeats: Number,
    price: Number,
    busType: [String],
    amenities: [String],
    image: [String],
    rating: Number,

    seatLayout: [
        {
            seatNumber: String,
            status: {
                type: String,
                enum: ["available", "booked"],
            }
        }
    ]
    
});


const busModel = mongoose.model('Bus', busSchema);

module.exports = busModel