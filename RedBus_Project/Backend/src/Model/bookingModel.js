const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    userId: Number,
    userName: String,
    userEmail: String,
    bus: {
       type:Object
    },
    passengers: [
        {
            seat: String,
            name: String,
            age: Number,
            gender: String
        }
    ],
    contact: {
        phone: String,
        email: String
    },
    seats: [String],
    
    totalAmount: Number,
    bookingStatus: {
        type: String,
        default: "Confirmed"
    }
});

const bookingModel = mongoose.model('booking', bookingSchema);

module.exports = bookingModel