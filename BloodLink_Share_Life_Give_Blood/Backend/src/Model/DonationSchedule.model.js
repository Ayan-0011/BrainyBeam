const mongoose = require("mongoose");

const DonationScheduleSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
            index: true
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true
        },
        donationDate: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        notes: {
            type: String,
            trim: true,
            default: ""
        },
        status: {
            type: String,
            enum: ["scheduled", "completed", "cancelled"],
            default: "scheduled"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("DonationSchedule", DonationScheduleSchema);