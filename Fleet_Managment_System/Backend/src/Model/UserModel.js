const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique:true,
        required: true
    },

    password: String,

    phone: String,

    role: {
        type: String,
        enum: ['admin', 'fleet_manager', 'dispatcher', 'driver'],
        default: "driver"
    },
    profileImage: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/068/208/439/small_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg",
    },
},
    {  timestamps: true }
)

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel