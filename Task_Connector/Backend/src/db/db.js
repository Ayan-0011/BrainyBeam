const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://Ayan:KsCA8WPm4uFbSsMd@complete-backend.kwalppq.mongodb.net/post");
    console.log("connected db");
    
}

module.exports = connectDB