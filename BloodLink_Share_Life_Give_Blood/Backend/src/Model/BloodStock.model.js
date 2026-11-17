const mongoose = require("mongoose");

const BloodStockSchema = new mongoose.Schema(
    {
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
            unique: true // ek blood group ka ek hi record
        },
        units: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
            validate: {
                validator: Number.isInteger,
                message: "Units must be a whole number"
            }
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("BloodStock", BloodStockSchema);
