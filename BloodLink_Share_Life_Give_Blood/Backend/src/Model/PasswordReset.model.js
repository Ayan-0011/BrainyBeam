const mongoose = require("mongoose");

const PasswordResetSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        otp: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("PasswordReset", PasswordResetSchema);