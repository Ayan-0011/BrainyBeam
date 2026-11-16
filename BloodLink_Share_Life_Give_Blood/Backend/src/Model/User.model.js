const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["patient", "donor", "admin"],
            default:"patient",
            require: true
        }
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;