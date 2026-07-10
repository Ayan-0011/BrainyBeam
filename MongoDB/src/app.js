const express = require('express');
const connectDB = require('./db/db')
const notemodel = require('./model/note.model')


connectDB()
const app = express();
app.use(express.json());



app.post('/notes/', async(req, res)=>{

    const data = req.body
    await notemodel.create({
        title : data.title,
        discription :  data.discription
    });

    res.status(201).json({
        messgae:"Not create successfully..."
    })
})


app.get('/notes', async (req,res)=>{
    const notes = await notemodel.find( )  // find() => all data fetch   // findone => return single object based on condtion

    res.status(200).json({
        messgae: "note face successfully...",
        notes: notes
    })
});

app.delete("/notes/:id", async(req, res)=>{

    const id =  req.params.id
    await notemodel.findOneAndDelete({ _id: id})

    res.status(200).json({
        message:"dataa delete successfully..."
    })

})


app.patch('/notes/:id', async (req, res)=>{
    const id = req.params.id
    const discription = req.body.discription
    await notemodel.findOneAndUpdate({ _id: id }, {discription: discription});

    res.status(200).json({
        massgae:"note updated successfully..."
    })

})







module.exports = app