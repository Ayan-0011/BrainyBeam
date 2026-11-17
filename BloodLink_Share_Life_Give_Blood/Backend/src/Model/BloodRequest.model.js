const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        patientName: {
            type: String,
            required: true,
            trim: true
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true
        },
        units: {
            type: Number,
            required: true,
            min: 1,
            validate: {
                validator: Number.isInteger,
                message: "Units must be a whole number"
            }
        },
        urgency: {
            type: String,
            enum: ["Normal", "Urgent", "Critical"],
            required: true
        },
        hospital: {
            type: String,
            required: true,
            trim: true
        },
        contact: {
            type: String,
            required: true,
            match: [/^\d{10}$/, "Contact must be a 10-digit number"]
        },
        status: {
            type: String,
            enum: ["Pending", "Approved", "Completed", "Cancelled"],
            default: "Pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("BloodRequest", BloodRequestSchema);