const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const PasswordResetModel = require('../Model/PasswordReset.model');
const sendEmail = require('../utils/sendEmil');
const UserModel = require('../Model/User.model');

//send otp 

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "user not found"
            });
        }

        //6 digit otp
        const otp = crypto.randomInt(100000, 1000000).toString();

        await PasswordResetModel.findOneAndUpdate(
            { email },
            { otp, expiresAt: Date.now() + 10 * 60 * 1000 },
            { upsert: true }
        );

        await sendEmail(email, "Password Reset OTP", `Your OTP is ${otp}. It is valid for 10 minutes.`);
        return res.status(200).json({ message: "OTP sent successfully", otp });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


const resetPassword = async (req, res) => {
    try {

        const { email, otp, newPassword } = req.body

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: "Email, OTP and new password are required" });
        }

        const record = await PasswordResetModel.findOne({ email });

        if (!record || record.otp !== String(otp) || record.expiresAt < Date.now()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        await PasswordResetModel.deleteOne({ email });
        return res.status(200).json({ message: "Password reset successful" });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { forgotPassword, resetPassword };