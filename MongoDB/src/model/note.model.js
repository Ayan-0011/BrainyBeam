const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

    title:"string",
    discription:"string",
})


const notemodel = mongoose.model("notes", noteSchema)

module.exports = notemodel