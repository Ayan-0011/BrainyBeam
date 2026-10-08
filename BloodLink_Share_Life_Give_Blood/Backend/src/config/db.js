const mongoose = require('mongoose');

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connect successfull");
    } catch (error) {
        console.log("Mongo connection failed :", error.message);
        process.exit(1);
    }
}


module.exports = connetDB;