const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema(
    {
        trip: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trip",
            required: true
        },

        driver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            required: true
        },

        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true
        },

        litersFilled: {
            type: Number,
            required: true
        },

        cost: {
            type: Number,
            required: true
        },

        odometerReading: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    });

    const FuelModel = mongoose.model("Fuel", fuelSchema);

    module.exports = FuelModel;
    