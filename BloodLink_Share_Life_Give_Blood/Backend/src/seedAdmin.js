// seedAdmin.js
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("./Model/User.model");

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const exists = await UserModel.findOne({ email: "admin@example.com" });
    if (!exists) {
        await UserModel.create({
            name: "Admin",
            email: "admin@example.com",
            password: await bcrypt.hash("admin@123", 10),
            role: "admin"
        });
        console.log("Admin created");
    }
    process.exit();
})();