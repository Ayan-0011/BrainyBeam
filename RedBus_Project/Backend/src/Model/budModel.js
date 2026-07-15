const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busName: String,
    busNumber: String,
    operator: String,
    from: String,
    to: String,
    departureTime: String,
    arrivalTime: String,
    duration: String,
    totalSeats: Number,
    availableSeats: Number,
    price: Number,
    busType:[String],
    amenities: [String],
    image:[String],
    rating: Number
});


const busModel = mongoose.model('Bus', busSchema);

module.exports = busModel