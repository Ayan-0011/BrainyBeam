const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:String,
    phone:String,

    role:{
        type:String,
        enum: ['admin', 'fleet_manager', 'dispatcher', 'driver'],
        default:"driver"
    }
})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel