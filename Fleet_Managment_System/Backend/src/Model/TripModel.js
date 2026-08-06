const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    fromLocation: {
        type: String,
        required: true
    },

    toLocation: {
        type: String,
        required: true
    },

    cargoDescription: {
        type: String,
        required: true
    },

    cargoWeight: {
        type: Number,
        required: true
    },

    assignedDriver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
        required: true
    },

    assignedVehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },

    scheduledDeparture: {
        type: Date,
        required: true
    },

    tripStatus: {
        type: String,
        enum: ["scheduled", "in-transit", "delivered", "closed"],
        default: "scheduled"
    },

    statusHistory: [{
        status: {
            type: String,
            enum: ["scheduled", "in-transit", "delivered", "closed"],
            default:"scheduled"
        },

        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
},
    { timestamps: true }
);

const TripModel = mongoose.model("Trip", tripSchema);

module.exports = TripModel