const mongoose = require('mongoose');

const noteSchema = new mongoose.noteSchema({

    title:"string",
    discription:"string",
})


const notemodel = mongoose.model("notes", noteSchema)

module.exports = notemodel