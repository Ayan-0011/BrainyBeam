const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
            unique: true
        },
        
        licenseNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        licenseExpiry: {
            type: Date,
            required: true
        },

        assignedVehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            default: null
        },

        availability: {
            type: String,
            enum: ["available", "on-trip", "off-duty"],
            default: "available"
        },

        isDeleted: {
            type: Boolean,
            default: false
        }
    });

const DriverModel = mongoose.model("Driver", driverSchema);

module.exports = DriverModel;