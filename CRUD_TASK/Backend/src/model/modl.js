const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:"string",
    age:"number",
    add:"string",
})

const usermodel = mongoose.model("user", userSchema);

module.exports = usermodel