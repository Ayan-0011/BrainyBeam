const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String,
    from: String,
    to: String,
    departureTime: String,
    arrivalTime: String,
    duration: String,
    coaches: [
        {
            coachName: String,
            coachType: String,
            totalSeats: Number,
            availableSeats: Number,
            price: Number
        }
    ],
    amenities: [String],
    image: [String],
    rating: Number
});


const trainModel = mongoose.model('train', trainSchema);
module.exports = trainModel