const express = require('express');
const connectDB = require('./db/db');
const busModel = require('./Model/budModel');
const trainModel = require('./Model/TrainModel');
const cors = require('cors');


const app = express()
connectDB()
app.use(express.json(),cors())


app.post('/create-bus', async (req, res) => {
    const data = req.body

    const bus = await busModel.create(data)
    res.status(201).json({
        bus
    })
})

app.get("/bus", async(req, res)=>{

     const bus = await busModel.find();
     res.status(200).json({
        message:"bus data fetching successfully...",
        bus
     })
})

app.post('/create-train', async(req, res)=>{
     const data = req.body

     const train = await trainModel.create(data)
     res.status(201).json({
        messgae:"Train create successfully...",
        train
     })
})










module.exports = app