const mongoose = require('mongoose');

async function connectDB() {
    
    await mongoose.connect("mongodb+srv://Ayan:DgvT1Cme8WlvJ9ZV@complete-backend.kwalppq.mongodb.net/hally");
    
    console.log("connect db");
    
}

module.exports = connectDB